"use strict";(self.webpackChunkcraco_website=self.webpackChunkcraco_website||[]).push([[7476],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),i=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=i(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(t),f=o,m=d["".concat(p,".").concat(f)]||d[f]||l[f]||c;return t?n.createElement(m,a(a({ref:r},u),{},{components:t})):n.createElement(m,a({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var i=2;i<c;i++)a[i]=t[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1929:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var n=t(7462),o=(t(7294),t(3905));const c={},a="Use PureScript",s={unversionedId:"use-purescript",id:"use-purescript",title:"Use PureScript",description:"",source:"@site/recipes/use-purescript.md",sourceDirName:".",slug:"/use-purescript",permalink:"/recipes/use-purescript",draft:!1,editUrl:"https://github.com/dilanx/craco/tree/main/website/recipes/use-purescript.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Use Preact",permalink:"/recipes/use-preact"},next:{title:"Use ts-loader",permalink:"/recipes/use-ts-loader"}},p={},i=[],u={toc:i};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-purescript"},"Use PureScript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="craco.config.js"',title:'"craco.config.js"'},"// Use PureScript in React Application\n// <https://www.purescript.org>\n\nconst { addBeforeLoader, loaderByName } = require('@craco/craco');\nconst path = require('path');\n\n// Detect watch\n// <https://github.com/purescript/spago#get-started-from-scratch-with-webpack-frontend-projects>\nconst isWatch = process.argv.some((a) => a === '--watch');\nconst isWebpackDevServer = process.argv.some(\n  (a) => path.basename(a) === 'webpack-dev-server'\n);\n\nmodule.exports = {\n  webpack: {\n    configure: (webpackConfig) => {\n      const { resolve } = webpackConfig;\n\n      // Resolve purescript extension\n      resolve.extensions.push('.purs');\n\n      // Allow imports outside of `src` folder for purescript dependencies\n      webpackConfig.resolve.plugins = resolve.plugins.filter(\n        ({ constructor: c }) => !c || c.name !== 'ModuleScopePlugin'\n      );\n\n      // PureScript loader\n      const pursLoader = {\n        loader: 'purs-loader',\n        test: /\\.purs$/,\n        exclude: /node_modules/,\n        query: {\n          src: ['src/**/*.purs'],\n          spago: true,\n          pscIde: true,\n          watch: isWebpackDevServer || isWatch,\n        },\n      };\n\n      // Append purs-loader before file-loader\n      addBeforeLoader(webpackConfig, loaderByName('file-loader'), pursLoader);\n\n      return webpackConfig;\n    },\n  },\n};\n")))}l.isMDXComponent=!0}}]);