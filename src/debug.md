---
title: debug info
layout: "specs.njk"
---

- Built: [`@11ty/eleventy`](https://www.npmjs.com/package/@11ty/eleventy) local
- Build Command: [`npx @11ty/eleventy --serve`](https://www.npmjs.com/package/@11ty/eleventy) local
- Running_On: `pages.github.com:ubuntu-latest`
- Build: 0.22.1 (`0:22:1::beta`)

## Tests

### Browser Support
- **Firefox** <span class="green-2">Passing!</span>
    - **layout.css.has-selector-enabled** <span class="yellow-2">Required for some features</span>
    - **HTML5 Support** <span class="green-2">Required</span>
    - **CSS3 Support** <span class="green-2">Required</span>
    - **Custom Property Support** <span class="green-2">Required</span>
    - **Misc.** <span class="green-2">Required</span>
- **Chromium** <span class="red-2">Untested</span>
    - **Google Chrome** <span class="red-2">Untested</span>
    - **Opra** <span class="red-2">Untested</span>
    - **Brave** <span class="red-2">Untested</span>
- **Safari** <span class="red-2">Untested</span>

### Validator
- **HTML** <span class="green-2">Valid</span>
- **CSS** <span class="green-2">Valid</span>
- **JavaScript** (JS) <span class="green-2">Valid</span>
- **WebAssembely** (WASM) <span class="green-2">Valid</span>

### Build With Eleventy
`npx @11ty/eleventy`

- **Build For Release** <span class="red-2">False</span>
    - Build up to date. Not bundled for release. This makes no diffrence to the final product on our current deployment.
- **Build With 11ty** <span class="green-2">Passing!</span>
    - No Errors

## Vulnerabilites <span class="red-2"></span>

- [**ReDoS Vulnerability in ua-parser-js version** #1](https://github.com/tryoxiss/tryoxiss.github.io/security/dependabot/1)
    - Severity: <span class="red-2">High</span>
    - Affected?: <span class="green-2">No, this is a static site</span>
    - Please help I don't know what this means but its 11ty's thing. 