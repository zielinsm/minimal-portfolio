# Minimal Portfolio

![Project screenshot](https://raw.githubusercontent.com/zielinsm/minimal-portfolio/master/cover.png)

Easily configurable, simplistic protfolio starter using [Gatsby](https://www.gatsbyjs.org/) and Markdown.

**[Live demo](https://minimal-portfolio.zielinsk.im/)** hosted on Netlify.

---

#### Features and details
- Simplistic, content-first design
- Lightweight and responsive
- Single configuration file - `./configuration/settings`
- Easy way to add content as the *about* section and projects are stored in Markdown files - just `git clone`, modify settings, add content and `npm run build`.

#### Usage
*Minimal Portfolio* was bootstraped using [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli).

##### Creating a personal portfolio page
To build the project you'll need [Node.js](https://nodejs.org/en/) installed on your machine.
Steps to create your very own portfolio page using this project:
1. Download or clone this project.
2. Run `npm install`
3. Modify `./configuration/settings` file to suit your requirements
4. Add content in the `./content` directory. The *about* section is modifiable through the `./content/about.md` file. Projects should be placed in the `./content/projects` directory with each subdirectory representing an individual project. Any additional files like project covers are preferably stored in project subdirectories. Example project files are provided with the project.
5. Use `npm run build` to create a deployable bundle (that later can be found in `./public` directory) to use with GitHub Pages, [Surge](https://surge.sh/), [Netlify](https://www.netlify.com/) or any other static deployment tool.

---

### Notes

This template is mostly meant to showcase projects you created or participated in. Any other sections could be created in a smiliar way the *about* one is.