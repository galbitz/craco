"use strict";(self.webpackChunkcraco_website=self.webpackChunkcraco_website||[]).push([[350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=l(n),d=o,f=g["".concat(c,".").concat(d)]||g[d]||s[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={description:"Get started with CRACO plugin development"},a="Getting Started",p={unversionedId:"plugin-api/getting-started",id:"plugin-api/getting-started",title:"Getting Started",description:"Get started with CRACO plugin development",source:"@site/docs/plugin-api/getting-started.md",sourceDirName:"plugin-api",slug:"/plugin-api/getting-started",permalink:"/docs/plugin-api/getting-started",draft:!1,editUrl:"https://github.com/dilanx/craco/tree/main/website/docs/plugin-api/getting-started.md",tags:[],version:"current",frontMatter:{description:"Get started with CRACO plugin development"},sidebar:"docs",previous:{title:"Plugin API",permalink:"/docs/category/plugin-api"},next:{title:"Hooks",permalink:"/docs/plugin-api/hooks"}},c={},l=[{value:"Develop a plugin",id:"develop-a-plugin",level:2}],u={toc:l};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"CRACO has a nice plugin API. You can view a list of ",(0,o.kt)("a",{parentName:"p",href:"/plugins"},"community maintained plugins")," or develop your own."),(0,o.kt)("h2",{id:"develop-a-plugin"},"Develop a plugin"),(0,o.kt)("p",null,"CRACO provides a bunch of ",(0,o.kt)("a",{parentName:"p",href:"/docs/plugin-api/hooks"},"hooks")," and ",(0,o.kt)("a",{parentName:"p",href:"../../category/utility-functions"},"utility functions")," to make plugin development easy. A plugin is structured using the four hooks (all are optional):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="craco-example-plugin.js"',title:'"craco-example-plugin.js"'},"module.exports = {\n  overrideCracoConfig: ({ cracoConfig, pluginOptions, context }) => {\n    /* ... */\n    return cracoConfig;\n  },\n\n  overrideWebpackConfig: ({\n    webpackConfig,\n    cracoConfig,\n    pluginOptions,\n    context,\n  }) => {\n    /* ... */\n    return webpackConfig;\n  },\n\n  overrideDevServerConfig: ({\n    devServerConfig,\n    cracoConfig,\n    pluginOptions,\n    context,\n  }) => {\n    /* ... */\n    return devServerConfig;\n  },\n\n  overrideJestConfig: ({ jestConfig, cracoConfig, pluginOptions, context }) => {\n    /* ... */\n    return jestConfig;\n  },\n};\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Notice how all hooks only accept a single object as an argument. The outline above destructures each object.")),(0,o.kt)("admonition",{title:"important",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"All functions must return the updated configuration object.")),(0,o.kt)("p",null,"Get started by checking out the documentation for ",(0,o.kt)("a",{parentName:"p",href:"/docs/plugin-api/hooks"},"hooks"),"."))}s.isMDXComponent=!0}}]);