

module.exports = function 
(eleventyConfig) { 
    eleventyConfig.addPassthroughCopy("./src/res/");
    eleventyConfig.addPassthroughCopy("./src/res/**/*");

    // https://dev.to/giulia_chiola/add-html-classes-to-11ty-markdown-content-18ic {
    // const markdownIt = require('markdown-it')
    // const markdownItAttrs = require('markdown-it-attrs')

    // const markdownItOptions = {
    // html: true,
    // breaks: true,
    // linkify: true
    // }

    // const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)
    // eleventyConfig.setLibrary('md', markdownLib)
    // esc };

    return { 
        dir: { 
            input: "src", 
            output: "docs"
            // I WOULD MAKE THIS _public BUT GITHUB PAGES DONT LIKE THAT
        }
    }
}