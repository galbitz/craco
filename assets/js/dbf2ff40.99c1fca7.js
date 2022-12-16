"use strict";(self.webpackChunkcraco_website=self.webpackChunkcraco_website||[]).push([[9120],{3905:(e,r,a)=>{a.d(r,{Zo:()=>p,kt:()=>f});var t=a(7294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function d(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=t.createContext({}),c=function(e){var r=t.useContext(i),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},p=function(e){var r=c(e.components);return t.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},s=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=c(a),f=n,k=s["".concat(i,".").concat(f)]||s[f]||u[f]||o;return a?t.createElement(k,l(l({ref:r},p),{},{components:a})):t.createElement(k,l({ref:r},p))}));function f(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=s;var d={};for(var i in r)hasOwnProperty.call(r,i)&&(d[i]=r[i]);d.originalType=e,d.mdxType="string"==typeof e?e:n,l[1]=d;for(var c=2;c<o;c++)l[c]=a[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}s.displayName="MDXCreateElement"},8333:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var t=a(7462),n=(a(7294),a(3905));const o={},l="Webpack Loaders",d={unversionedId:"plugin-api/utility-functions/webpack-loaders",id:"plugin-api/utility-functions/webpack-loaders",title:"Webpack Loaders",description:"Utility functions for Webpack loaders",source:"@site/docs/plugin-api/utility-functions/webpack-loaders.md",sourceDirName:"plugin-api/utility-functions",slug:"/plugin-api/utility-functions/webpack-loaders",permalink:"/docs/plugin-api/utility-functions/webpack-loaders",draft:!1,editUrl:"https://github.com/dilanx/craco/tree/main/website/docs/plugin-api/utility-functions/webpack-loaders.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Utility Functions",permalink:"/docs/category/utility-functions"},next:{title:"Webpack Asset Modules",permalink:"/docs/plugin-api/utility-functions/webpack-asset-modules"}},i={},c=[{value:"Functions",id:"functions",level:2},{value:"loaderByName",id:"loaderbyname",level:3},{value:"getLoader",id:"getloader",level:3},{value:"Return Type",id:"return-type",level:4},{value:"Usage",id:"usage",level:4},{value:"getLoaders",id:"getloaders",level:3},{value:"Return Type",id:"return-type-1",level:4},{value:"Usage",id:"usage-1",level:4},{value:"addBeforeLoader",id:"addbeforeloader",level:3},{value:"Return Type",id:"return-type-2",level:4},{value:"Usage",id:"usage-2",level:4},{value:"addBeforeLoaders",id:"addbeforeloaders",level:3},{value:"Return Type",id:"return-type-3",level:4},{value:"Usage",id:"usage-3",level:4},{value:"addAfterLoader",id:"addafterloader",level:3},{value:"Return Type",id:"return-type-4",level:4},{value:"Usage",id:"usage-4",level:4},{value:"addAfterLoaders",id:"addafterloaders",level:3},{value:"Return Type",id:"return-type-5",level:4},{value:"Usage",id:"usage-5",level:4},{value:"removeLoaders",id:"removeloaders",level:3},{value:"Return Type",id:"return-type-6",level:4},{value:"Usage",id:"usage-6",level:4},{value:"Reference",id:"reference",level:2},{value:"WebpackConfig",id:"webpackconfig",level:3},{value:"LoaderMatcher",id:"loadermatcher",level:3},{value:"Rule",id:"rule",level:3}],p={toc:c};function u(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,t.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"webpack-loaders"},"Webpack Loaders"),(0,n.kt)("p",null,"Utility functions for ",(0,n.kt)("a",{parentName:"p",href:"https://webpack.js.org/loaders/"},"Webpack loaders")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const {\n  loaderByName,\n  getLoader,\n  getLoaders,\n  addBeforeLoader,\n  addBeforeLoaders,\n  addAfterLoader,\n  addAfterLoaders,\n  removeLoaders,\n} = require('@craco/craco');\n")),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"loaderbyname"},"loaderByName"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"loaderByName(targetLoaderName: string): LoaderMatcher")),(0,n.kt)("p",null,"Returns a ",(0,n.kt)("a",{parentName:"p",href:"#loadermatcher"},"loader matcher")," function to be used with other loader utility functions to match a name to an existing loader."),(0,n.kt)("h3",{id:"getloader"},"getLoader"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"getLoader(webpackConfig: WebpackConfig, matcher: LoaderMatcher)")),(0,n.kt)("p",null,"Retrieve the ",(0,n.kt)("strong",{parentName:"p"},"first")," loader for which the matcher returns true from the Webpack config."),(0,n.kt)("h4",{id:"return-type"},"Return Type"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"{\n  isFound: boolean;\n  match: {\n    loader: Rule;\n    parent: Rule[];\n    index: number;\n  }\n}\n")),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { getLoader, loaderByName } = require('@craco/craco');\n\nconst { isFound, match } = getLoader(\n  webpackConfig,\n  loaderByName('eslint-loader')\n);\n\nif (isFound) {\n  // do stuff...\n}\n")),(0,n.kt)("h3",{id:"getloaders"},"getLoaders"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"getLoaders(webpackConfig: WebpackConfig, matcher: LoaderMatcher)")),(0,n.kt)("p",null,"Retrieve ",(0,n.kt)("strong",{parentName:"p"},"all")," of the loaders for which the matcher returns true from the Webpack config."),(0,n.kt)("h4",{id:"return-type-1"},"Return Type"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"{\n  hasFoundAny: boolean;\n  matches: [\n    {\n      loader: Rule;\n      parent: Rule[];\n      index: number;\n    }\n  ]\n}\n")),(0,n.kt)("h4",{id:"usage-1"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { getLoaders, loaderByName } = require('@craco/craco');\n\nconst { hasFoundAny, matches } = getLoaders(\n  webpackConfig,\n  loaderByName('babel-loader')\n);\n\nif (hasFoundAny) {\n  matches.forEach((x) => {\n    // do stuff...\n  });\n}\n")),(0,n.kt)("h3",{id:"addbeforeloader"},"addBeforeLoader"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"addBeforeLoader(webpackConfig: WebpackConfig, matcher: LoaderMatcher, newLoader: Rule)")),(0,n.kt)("p",null,"Add a new loader ",(0,n.kt)("strong",{parentName:"p"},"before")," the loader for which the matcher returns true in the Webpack config."),(0,n.kt)("h4",{id:"return-type-2"},"Return Type"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"{\n  isAdded: boolean;\n}\n")),(0,n.kt)("h4",{id:"usage-2"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { addBeforeLoader, loaderByName } = require('@craco/craco');\n\nconst myNewWebpackLoader = {\n  loader: require.resolve('tslint-loader'),\n};\n\naddBeforeLoader(\n  webpackConfig,\n  loaderByName('eslint-loader'),\n  myNewWebpackLoader\n);\n")),(0,n.kt)("h3",{id:"addbeforeloaders"},"addBeforeLoaders"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"addBeforeLoaders(webpackConfig: WebpackConfig, matcher: LoaderMatcher, newLoader: Rule)")),(0,n.kt)("p",null,"Add a new loader ",(0,n.kt)("strong",{parentName:"p"},"before all")," of the loaders for which the matcher returns true in the Webpack config."),(0,n.kt)("h4",{id:"return-type-3"},"Return Type"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"{\n  isAdded: boolean;\n  addedCount: number;\n}\n")),(0,n.kt)("h4",{id:"usage-3"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { addBeforeLoaders, loaderByName } = require('@craco/craco');\n\nconst myNewWebpackLoader = {\n  loader: require.resolve('tslint-loader'),\n};\n\naddBeforeLoaders(\n  webpackConfig,\n  loaderByName('eslint-loader'),\n  myNewWebpackLoader\n);\n")),(0,n.kt)("h3",{id:"addafterloader"},"addAfterLoader"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"addAfterLoader(webpackConfig: WebpackConfig, matcher: LoaderMatcher, newLoader: Rule)")),(0,n.kt)("p",null,"Add a new loader ",(0,n.kt)("strong",{parentName:"p"},"after")," the loader for which the matcher returns true in the Webpack config."),(0,n.kt)("h4",{id:"return-type-4"},"Return Type"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"{\n  isAdded: boolean;\n}\n")),(0,n.kt)("h4",{id:"usage-4"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { addAfterLoader, loaderByName } = require('@craco/craco');\n\nconst myNewWebpackLoader = {\n  loader: require.resolve('tslint-loader'),\n};\n\naddAfterLoader(\n  webpackConfig,\n  loaderByName('eslint-loader'),\n  myNewWebpackLoader\n);\n")),(0,n.kt)("h3",{id:"addafterloaders"},"addAfterLoaders"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"addAfterLoaders(webpackConfig: WebpackConfig, matcher: LoaderMatcher, newLoader: Rule)")),(0,n.kt)("p",null,"Add a new loader ",(0,n.kt)("strong",{parentName:"p"},"after all")," of the loaders for which the matcher returns true in the Webpack config."),(0,n.kt)("h4",{id:"return-type-5"},"Return Type"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"{\n  isAdded: boolean;\n  addedCount: number;\n}\n")),(0,n.kt)("h4",{id:"usage-5"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { addAfterLoaders, loaderByName } = require('@craco/craco');\n\nconst myNewWebpackLoader = {\n  loader: require.resolve('tslint-loader'),\n};\n\naddAfterLoaders(\n  webpackConfig,\n  loaderByName('eslint-loader'),\n  myNewWebpackLoader\n);\n")),(0,n.kt)("h3",{id:"removeloaders"},"removeLoaders"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"removeLoaders(webpackConfig: WebpackConfig, matcher: LoaderMatcher)")),(0,n.kt)("p",null,"Remove ",(0,n.kt)("strong",{parentName:"p"},"all")," of the loaders for which the matcher returns true from the Webpack config."),(0,n.kt)("h4",{id:"return-type-6"},"Return Type"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"{\n  hasRemovedAny: boolean;\n  removedCount: number;\n}\n")),(0,n.kt)("h4",{id:"usage-6"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { removeLoaders, loaderByName } = require('@craco/craco');\n\nremoveLoaders(webpackConfig, loaderByName('eslint-loader'));\n")),(0,n.kt)("h2",{id:"reference"},"Reference"),(0,n.kt)("h3",{id:"webpackconfig"},"WebpackConfig"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/"},"https://webpack.js.org/configuration/"),"."),(0,n.kt)("h3",{id:"loadermatcher"},"LoaderMatcher"),(0,n.kt)("p",null,"A loader matcher should return true if the provided loader (within a rule) matches the specified criteria. The function is of the following type:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"(rule: Rule) => boolean;\n")),(0,n.kt)("h3",{id:"rule"},"Rule"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/module/#rule"},"https://webpack.js.org/configuration/module/#rule"),"."),(0,n.kt)("h3",{id:""}))}u.isMDXComponent=!0}}]);