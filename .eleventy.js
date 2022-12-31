module.exports = function 
(eleventyConfig) { 
    eleventyConfig.addPassthroughCopy("./src/res/style.css");
    
    eleventyConfig.addPassthroughCopy("./src/res/prism.css");
    eleventyConfig.addPassthroughCopy("./src/res/prism.js");

    eleventyConfig.addPassthroughCopy("./src/index.html");

    eleventyConfig.addPassthroughCopy("./src/res/svg/close-buttons-dark.svg");

    return { 
        dir: { 
            input: "src", 
            output: "docs"
            // I WOULD MAKE THIS _public BUT GITHUB PAGES DONT LIKE THAT
        }
    }
}