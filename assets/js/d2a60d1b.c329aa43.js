(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[446],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2685:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],p={sidebar_position:5},s=void 0,c={unversionedId:"api/depositEthers",id:"api/depositEthers",isDocsHomePage:!1,title:"depositEthers",description:"matic.depositEthers(amount, options)",source:"@site/docs/api/depositEthers.md",sourceDirName:"api",slug:"/api/depositEthers",permalink:"/docs/api/depositEthers",editUrl:"https://github.com/maticnetwork/matic.js/edit/master/docs/docs/api/depositEthers.md",version:"current",lastUpdatedBy:"ujjwalgupta94",lastUpdatedAt:1625227160,formattedLastUpdatedAt:"7/2/2021",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"tokenOfOwnerByIndexERC721",permalink:"/docs/api/tokenOfOwnerByIndexERC721"},next:{title:"approveERC20TokensForDeposit",permalink:"/docs/api/approveERC20TokensForDeposit"}},l=[{value:"matic.depositEthers(amount, options)",id:"maticdepositethersamount-options",children:[]}],u={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"maticdepositethersamount-options"},"matic.depositEthers(amount, options)"),(0,i.kt)("p",null,"Deposit ",(0,i.kt)("inlineCode",{parentName:"p"},"options.value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amount")," must be token amount in wei (string, not in Number)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," see ",(0,i.kt)("a",{parentName:"li",href:"#approveERC20TokensForDeposit"},"more infomation here"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"from")," must be valid account address(required)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"encodeAbi")," must be boolean value. For Byte code of transaction, use ",(0,i.kt)("inlineCode",{parentName:"li"},"encodeAbi: true"))))),(0,i.kt)("p",null,"This returns ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," object, which will be fulfilled when transaction gets confirmed (when receipt is generated)."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'matic.depositEthers(amount, {\n  from: "0xABc578455...",\n});\n')),(0,i.kt)("hr",null))}m.isMDXComponent=!0}}]);