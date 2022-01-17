(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{177:function(t,e){t.exports=[{text:"Introduction",url:"introduction"},{text:"Basics",url:"basics",expand:!0,children:[{text:"Installation",url:"installation"},{text:"How it works",url:"how-it-works"}]},{text:"Plasma",url:"plasma",expand:!0,children:[{text:"Initialize Plasma client",url:"initialize"},{text:"ERC20",url:"erc20",expand:!0,children:[{text:"Balance of erc20",url:"balanceOfERC20"},{text:"Approve ERC20",url:"approveERC20TokensForDeposit"},{text:"Deposit ERC20",url:"depositERC20ForUser"},{text:"Transfer ERC20",url:"transferERC20Tokens"},{text:"Start Withdraw",url:"startWithdraw"},{text:"Withdraw ERC20",url:"withdraw"}]},{text:"ERC721",url:"erc721",expand:!0,children:[{text:"Balance Of ERC721",url:"balanceOfERC721"},{text:"Safe Deposit ERC721",url:"safeDepositERC721Tokens"},{text:"Token Of Owner By Index ERC721",url:"tokenOfOwnerByIndexERC721"},{text:"Start Withdraw For NFT",url:"startWithdrawForNFT"},{text:"Withdraw ERC721",url:"withdrawNFT"},{text:"Transfer ERC721",url:"transferERC721Tokens"}]},{text:"Deposit Ethers",url:"depositEthers"},{text:"Deposit Status From TxHash",url:"depositStatusFromTxHash"},{text:"Get Transfer Signature",url:"getTransferSignature"},{text:"Transfer with Signature",url:"transferWithSignature"},{text:"Process Exit",url:"processExits"},{text:"Withdraw Manager",url:"WithdrawManager",expand:!0,children:[{text:"Exit Mintable Burnt Tokens",url:"startExitForMintableBurntToken"},{text:"Exit Metadata Mintable Burnt Tokens",url:"startExitForMetadataMintableBurntToken"}]}]},{text:"POS API",url:"pos",expand:!0,children:[{text:"Initialize POS client",url:"initialize"},{text:"ERC20",url:"ERC20",expand:!0,children:[{text:"Approve ERC20 Deposit",url:"approveERC20ForDeposit"},{text:"Deposit ERC20",url:"depositERC20ForUser"},{text:"Burn ERC20",url:"burnERC20"},{text:"Exit ERC20",url:"exitERC20"}]},{text:"ERC721",url:"ERC721",expand:!0,children:[{text:"Approve ERC721 Deposit",url:"approveERC721ForDeposit"},{text:"Deposit ERC721",url:"depositERC721ForUser"},{text:"Burn ERC721",url:"burnERC721"},{text:"Exit ERC721",url:"exitERC721"}]},{text:"ERC1155",url:"ERC1155",expand:!0,children:[{text:"Approve ERC1155 Deposit",url:"approveERC1155ForDeposit"},{text:"Deposit ERC1155",url:"depositERC1155ForUser"},{text:"Burn ERC1155",url:"burnERC1155"},{text:"Exit ERC1155",url:"exitERC1155"},{text:"Transfer ERC1155",url:"transferERC1155"}]},{text:"Deposit Ethers",url:"depositEtherForUser"}]}]},178:function(t,e,r){"use strict";var o={components:{Docs:r(176).a},props:{title:String,description:String,keywords:String},data:function(){return{savedLinks:[]}},fetch:function(){var t=r(177);this.savedLinks=t}},n=r(14),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Docs",{attrs:{propLinks:t.savedLinks,relativeUrl:"/v2/docs/",title:t.title,description:t.description,keywords:t.keywords}},[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},324:function(t,e,r){"use strict";r.r(e);var o={components:{Layout:r(178).a}},n=r(14),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",{attrs:{title:"undefined",description:"undefined",keywords:"undefined",contentSrc:"/home/runner/work/matic.js/matic.js/content/v2/docs/pos/ERC1155/depositERC1155ForUser.md"}},[r("h1",{attrs:{id:"depositerc1155"}},[t._v("Deposit ERC1155")]),t._v(" "),r("pre",[r("code",{staticClass:"js language-js"},[t._v("await maticPOSClient.depositSingleERC1155ForUser(\n  rootToken, // RootToken address\n  user, // User address (in most cases, this will be sender's address),\n  tokenId, // tokenId for deposit\n  amount, // amount of tokenId for deposit\n  data, // optional bytes data field\n  options // transaction fields, can be skipped if default options are set\n)\n")])]),t._v(" "),r("p",[t._v("Deposit tokens into Matic chain using POS Portal.\nRemember to call "),r("code",[t._v("approveERC1155ForDeposit")]),t._v(" before this")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("rootToken")]),t._v(" must be valid ERC1155 token address")]),t._v(" "),r("li",[r("code",[t._v("user")]),t._v(" User address (in most cases, this will be sender's address)")]),t._v(" "),r("li",[r("code",[t._v("tokenId")]),t._v(" tokenId for approval (string, not in Number)")]),t._v(" "),r("li",[r("code",[t._v("amount")]),t._v(" amount of tokenId for deposit")]),t._v(" "),r("li",[r("code",[t._v("data")]),t._v(" optional bytes data field")]),t._v(" "),r("li",[r("code",[t._v("options")]),t._v(" transaction fields, can be skipped if default options are set")]),t._v(" "),r("li",[r("code",[t._v("from")]),t._v(" must be boolean value. For Byte code of transaction, use "),r("code",[t._v("from: true")])]),t._v(" "),r("li",[r("code",[t._v("encodeAbi")]),t._v(" must be boolean value. For Byte code of transaction, use "),r("code",[t._v("encodeAbi: true")])])]),t._v(" "),r("p",[t._v("This returns "),r("code",[t._v("Promise")]),t._v(" object, which will be fulfilled when transaction gets confirmed (when receipt is generated).")]),t._v(" "),r("hr")])}),[],!1,null,null,null);e.default=component.exports}}]);