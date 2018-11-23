var yamljs = require("yamljs");
var S = require("string");

var CONTENT_PATH_PREFIX = "site/content";

module.exports = function(grunt) {

    grunt.registerTask("default", function() {

        grunt.log.writeln("Build pages index");

        var indexPages = function() {
            var pagesIndex = [];
            grunt.file.recurse(CONTENT_PATH_PREFIX, function(abspath, rootdir, subdir, filename) {
                grunt.verbose.writeln("Parse file:",abspath);
                pagesIndex.push(processFile(abspath, filename));
            });

            return pagesIndex;
        };

        var processFile = function(abspath, filename) {
            var pageIndex;

            if (S(filename).endsWith(".html")) {
                pageIndex = processHTMLFile(abspath, filename);
            } else {
                pageIndex = processMDFile(abspath, filename);
            }

            return pageIndex;
        };

        var processHTMLFile = function(abspath, filename) {
            var content = grunt.file.read(abspath);
            var pageName = S(filename).chompRight(".html").s;
            var href = S(abspath)
                .chompLeft(CONTENT_PATH_PREFIX).s;
            return {
                title: pageName,
                href: href,
                content: S(content).trim().stripTags().stripPunctuation().s
            };
        };

        var processMDFile = function(abspath, filename) {
            var content = grunt.file.read(abspath);
            var pageIndex;
            var frontMatter;

            // First separate the Front Matter from the content and parse it
            content = content.split("---");

            try {
                if(content[1]) {
                    frontMatter = yamljs.parse(content[1].trim());
                }
            } catch (e) {
                grunt.log.error(e.message);
                grunt.log.error(abspath);
                grunt.log.error(content[1]);
            }

            var href = S(abspath).chompLeft(CONTENT_PATH_PREFIX).chompRight(".md").s;

            // href for index.md files stops at the folder name
            if (filename === "index.md") {
                href = S(abspath).chompLeft(CONTENT_PATH_PREFIX).chompRight(filename).s;
            }

            let slug = href.split('/');
            let excludes = ['om-oss', 'contact', 'kontakt'];

            // Build Lunr index for this page
            if(frontMatter && excludes.indexOf(slug[1]) == -1) {

                // grunt.log.error(slug[1]);

                pageIndex = {
                    title: frontMatter.title || '',
                    image: frontMatter.image || '',
                    tags: frontMatter.tags || '' ,
                    href: href || '',
                    content: S(content[2]).trim().stripTags().stripPunctuation().s || ''
                };

                return pageIndex;
            }
        };

        grunt.file.write("site/static/js/lunr/PagesIndex.json", JSON.stringify(indexPages()));
        grunt.log.ok("Index built");
    });
};
