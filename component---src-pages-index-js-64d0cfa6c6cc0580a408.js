webpackJsonp([35783957827783],{23:function(e,t){"use strict";e.exports={site:{url:"",path:"/minimal-portfolio",shortTitle:"Minimal Porfolio",fullTitle:"Minimal Porfolio - Simplistic Gatsby porfolio template",description:"Minimalistic, black on white porfolio page for creative professionals.",language:"en"},information:{mail:"mailto:mail@example.com",linkedIn:"https://example.link",twitter:"https://example.link",facebook:null,github:null},appearance:{backgroundColor:"#fcfcfc",font:{headerFontFamily:"Avenir Next",bodyFontFamily:"Georgia",baseSize:"16px",baseLineHeight:1.5,headerWeight:700,bodyWeight:400,boldBodyWeight:700,headerColor:"#303030",bodyColor:"#4f4f4f"}}}},107:function(e,t){"use strict";function n(e,t,d){if("string"!=typeof t){if(s){var f=c(t);f&&f!==s&&n(e,f,d)}var m=o(t);i&&(m=m.concat(i(t)));for(var p=0;p<m.length;++p){var v=m[p];if(!(r[v]||a[v]||d&&d[v])){var b=u(t,v);try{l(e,v,b)}catch(e){}}}return e}return e}var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l=Object.defineProperty,o=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,s=c&&c(Object);e.exports=n},31:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function r(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach(function(e){a[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}var a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=r()?Object.assign:function(e,t){for(var r,i,u=n(e),c=1;c<arguments.length;c++){r=Object(arguments[c]);for(var s in r)l.call(r,s)&&(u[s]=r[s]);if(a){i=a(r);for(var d=0;d<i.length;d++)o.call(r,i[d])&&(u[i[d]]=r[i[d]])}}return u}},123:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),l=r(a),o=n(219),i=r(o);t.default=function(e){var t=e.children;return l.default.createElement("div",{className:i.default.index},l.default.createElement("div",{className:i.default.content},t))},e.exports=t.default},219:function(e,t){e.exports={index:"src-components----Container-module---index---351Op",content:"src-components----Container-module---content---3qT0q"}},124:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),l=r(a),o=n(220),i=r(o),u=n(23),c=u.site,s=function(e){var t=e.about.node.html;return l.default.createElement("div",{className:i.default.index},l.default.createElement("h1",null,c.shortTitle),l.default.createElement("div",{dangerouslySetInnerHTML:{__html:t}}))};t.default=s,e.exports=t.default},220:function(e,t){e.exports={index:"src-components----Header-module---index---2js6U"}},125:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),l=r(a),o=n(221),i=r(o),u=function(e){var t=e.project.node,n=t.html,r=t.frontmatter,a=function(e){if(e)return l.default.createElement("img",{src:e.childImageSharp.sizes.src,alt:"Project cover"})};return l.default.createElement("div",{className:i.default.project},a(r.cover),l.default.createElement("h3",{className:i.default.title},r.title),l.default.createElement("div",{dangerouslySetInnerHTML:{__html:n}}))},c=function(e){var t=e.projects;return l.default.createElement("div",{className:i.default.index},l.default.createElement("h5",{className:i.default.heading},"Projects"),l.default.createElement("div",{className:i.default.container},t.map(function(e,t){return l.default.createElement(u,{project:e,key:t})})))};t.default=c,e.exports=t.default},221:function(e,t){e.exports={index:"src-components----List-module---index---1KAWd",heading:"src-components----List-module---heading---1vH3l",project:"src-components----List-module---project---28ORS",title:"src-components----List-module---title---1Vwgs"}},126:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(e.value)return o.default.createElement("a",{href:e.value,className:u.default.link,key:t},e.label)}t.__esModule=!0;var l=n(1),o=r(l),i=n(222),u=r(i),c=function(e){var t=e.links,n=[{label:"Mail",value:"mailto:"+t.mail},{label:"Twitter",value:t.twitter},{label:"Facebook",value:t.facebook},{label:"LinkedIn",value:t.linkedIn},{label:"GitHub",value:t.github}];return o.default.createElement("div",{className:u.default.index},n.map(function(e,t){return a(e,t)}))};t.default=c,e.exports=t.default},222:function(e,t){e.exports={index:"src-components----Navigation-module---index---1P7HW",link:"src-components----Navigation-module---link---1HdjG"}},129:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var a=n(1),l=r(a),o=n(223),i=(r(o),n(123)),u=r(i),c=n(126),s=r(c),d=n(124),f=r(d),m=n(125),p=r(m),v=n(23),b=function(e){var t=e.data.about.edges[0],n=e.data.projects.edges;return l.default.createElement(u.default,null,l.default.createElement(s.default,{links:v.information}),l.default.createElement("div",{style:{maxWidth:"500px"}},l.default.createElement(f.default,{about:t}),l.default.createElement(p.default,{projects:n})))};t.pageQuery="** extracted graphql fragment **";t.default=b}});
//# sourceMappingURL=component---src-pages-index-js-64d0cfa6c6cc0580a408.js.map