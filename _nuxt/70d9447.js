(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{294:function(t,e,r){"use strict";r.r(e);var o={components:{Layout:r(176).a}},n=r(14),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",{attrs:{title:"withdrawExitFaster erc721 POS  ",description:"Get started with maticjs",keywords:"pos client, erc721, withdrawExitFaster, polygon, sdk",contentSrc:"/home/runner/work/matic.js/matic.js/content/docs/pos/erc721/withdraw-exit-faster.md"}},[r("h1",{attrs:{id:"withdrawexitfaster"}},[t._v("withdrawExitFaster")]),t._v(" "),r("p",[r("code",[t._v("withdrawExitFaster")]),t._v(" method can be used to exit the withdraw process by using the txHash from "),r("code",[t._v("withdrawStart")]),t._v(" method.")]),t._v(" "),r("div",{staticClass:"highlight mb-20px mt-20px"},[t._v("\nIt is fast because it generates proof in backend. You need to configure "),r("a",{attrs:{href:"docs/set-proof-api"}},[t._v("setProofAPI")])]),t._v(" "),r("p",[r("strong",[t._v("Note")]),t._v("- withdrawStart transaction must be checkpointed in order to exit the withdraw.")]),t._v(" "),r("pre",[r("code",[t._v("const erc721RootToken = posClient.erc721(<root token address>, true);\n\nconst result = await erc721RootToken.withdrawExitFaster(<burn tx hash>);\n\nconst txHash = await result.getTransactionHash();\n\nconst txReceipt = await result.getReceipt();\n")])])])}),[],!1,null,null,null);e.default=component.exports}}]);