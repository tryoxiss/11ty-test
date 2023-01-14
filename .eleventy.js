

module.exports = function 
(eleventyConfig) { 
    // eleventyConfig.addPassthroughCopy("./src/res/style.css");
    
    // eleventyConfig.addPassthroughCopy("./src/res/prism.css");
    // eleventyConfig.addPassthroughCopy("./src/res/prism.js");

    // eleventyConfig.addPassthroughCopy("./src/index.html");

    // eleventyConfig.addPassthroughCopy("./src/res/svg/close-buttons-dark.svg");
    // eleventyConfig.addPassthroughCopy("./src/res/svg/close-buttons-light.svg");

    // eleventyConfig.addPassthroughCopy("./src/res/ico/favicon.ico");

    eleventyConfig.addPassthroughCopy("./src/res/");

    // eleventyConfig.addPassthroughCopy("./src/404.md");

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