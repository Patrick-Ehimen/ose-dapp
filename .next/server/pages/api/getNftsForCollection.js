"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getNftsForCollection";
exports.ids = ["pages/api/getNftsForCollection"];
exports.modules = {

/***/ "alchemy-sdk":
/*!******************************!*\
  !*** external "alchemy-sdk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("alchemy-sdk");

/***/ }),

/***/ "(api)/./pages/api/getNftsForCollection.js":
/*!*******************************************!*\
  !*** ./pages/api/getNftsForCollection.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var alchemy_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alchemy-sdk */ \"alchemy-sdk\");\n/* harmony import */ var alchemy_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alchemy_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const { address , pageKey , pageSize , chain  } = JSON.parse(req.body);\n    if (req.method !== \"POST\") {\n        res.status(405).send({\n            message: \"Only POST requests allowed\"\n        });\n        return;\n    }\n    console.log(chain);\n    const settings = {\n        apiKey: process.env.ALCHEMY_API_KEY,\n        network: alchemy_sdk__WEBPACK_IMPORTED_MODULE_0__.Network[chain]\n    };\n    const alchemy = new alchemy_sdk__WEBPACK_IMPORTED_MODULE_0__.Alchemy(settings);\n    try {\n        const nfts = await alchemy.nft.getNftsForContract(address, {\n            pageKey: pageKey ? pageKey : null,\n            pageSize: pageSize ? pageSize : null\n        });\n        const formattedNfts = nfts.nfts.map((nft)=>{\n            const { contract , title , tokenType , tokenId , description , media  } = nft;\n            return {\n                contract: contract.address,\n                symbol: contract.symbol,\n                media: media[0]?.gateway ? media[0]?.gateway : \"https://via.placeholder.com/500\",\n                collectionName: contract.openSea?.collectionName,\n                verified: contract.openSea?.safelistRequestStatus,\n                tokenType,\n                tokenId,\n                title,\n                description,\n                format: media[0]?.format ? media[0]?.format : \"png\"\n            };\n        });\n        const filteredNfts = formattedNfts.filter((nft)=>nft.title.length && nft.description.length && nft.media);\n        res.status(200).json({\n            nfts: filteredNfts.length ? filteredNfts : null,\n            pageKey: nfts.pageKey\n        });\n    // the rest of your code\n    } catch (e) {\n        console.warn(e);\n        res.status(500).send({\n            message: \"something went wrong, check the log in your terminal\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0TmZ0c0ZvckNvbGxlY3Rpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStDO0FBRWhDLGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU0sRUFBRUMsUUFBTyxFQUFFQyxRQUFPLEVBQUVDLFNBQVEsRUFBRUMsTUFBSyxFQUFFLEdBQUdDLEtBQUtDLEtBQUssQ0FBQ1AsSUFBSVEsSUFBSTtJQUNqRSxJQUFJUixJQUFJUyxNQUFNLEtBQUssUUFBUTtRQUN6QlIsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQTZCO1FBQzdEO0lBQ0YsQ0FBQztJQUNEQyxRQUFRQyxHQUFHLENBQUNUO0lBQ1osTUFBTVUsV0FBVztRQUNmQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7UUFDbkNDLFNBQVN2QixnREFBTyxDQUFDUSxNQUFNO0lBQ3pCO0lBQ0EsTUFBTWdCLFVBQVUsSUFBSXZCLGdEQUFPQSxDQUFDaUI7SUFFNUIsSUFBSTtRQUNGLE1BQU1PLE9BQU8sTUFBTUQsUUFBUUUsR0FBRyxDQUFDQyxrQkFBa0IsQ0FBQ3RCLFNBQVM7WUFDekRDLFNBQVNBLFVBQVVBLFVBQVUsSUFBSTtZQUNqQ0MsVUFBVUEsV0FBV0EsV0FBVyxJQUFJO1FBQ3RDO1FBQ0EsTUFBTXFCLGdCQUFnQkgsS0FBS0EsSUFBSSxDQUFDSSxHQUFHLENBQUMsQ0FBQ0gsTUFBUTtZQUMzQyxNQUFNLEVBQUVJLFNBQVEsRUFBRUMsTUFBSyxFQUFFQyxVQUFTLEVBQUVDLFFBQU8sRUFBRUMsWUFBVyxFQUFFQyxNQUFLLEVBQUUsR0FBR1Q7WUFFcEUsT0FBTztnQkFDTEksVUFBVUEsU0FBU3pCLE9BQU87Z0JBQzFCK0IsUUFBUU4sU0FBU00sTUFBTTtnQkFDdkJELE9BQU9BLEtBQUssQ0FBQyxFQUFFLEVBQUVFLFVBQ2JGLEtBQUssQ0FBQyxFQUFFLEVBQUVFLFVBQ1YsaUNBQWlDO2dCQUNyQ0MsZ0JBQWdCUixTQUFTUyxPQUFPLEVBQUVEO2dCQUNsQ0UsVUFBVVYsU0FBU1MsT0FBTyxFQUFFRTtnQkFDNUJUO2dCQUNBQztnQkFDQUY7Z0JBQ0FHO2dCQUNBUSxRQUFRUCxLQUFLLENBQUMsRUFBRSxFQUFFTyxTQUFTUCxLQUFLLENBQUMsRUFBRSxFQUFFTyxTQUFTLEtBQUs7WUFDckQ7UUFDRjtRQUdBLE1BQU1DLGVBQWVmLGNBQWNnQixNQUFNLENBQ3ZDLENBQUNsQixNQUFRQSxJQUFJSyxLQUFLLENBQUNjLE1BQU0sSUFBSW5CLElBQUlRLFdBQVcsQ0FBQ1csTUFBTSxJQUFJbkIsSUFBSVMsS0FBSztRQUdsRS9CLElBQUlTLE1BQU0sQ0FBQyxLQUFLaUMsSUFBSSxDQUFDO1lBQ25CckIsTUFBTWtCLGFBQWFFLE1BQU0sR0FBR0YsZUFBZSxJQUFJO1lBQy9DckMsU0FBU21CLEtBQUtuQixPQUFPO1FBQ3ZCO0lBQ0Esd0JBQXdCO0lBQzFCLEVBQUUsT0FBT3lDLEdBQUc7UUFDVi9CLFFBQVFnQyxJQUFJLENBQUNEO1FBQ2IzQyxJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ25CQyxTQUFTO1FBQ1g7SUFDRjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vc2UtZGFwcC8uL3BhZ2VzL2FwaS9nZXROZnRzRm9yQ29sbGVjdGlvbi5qcz9iYWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5ldHdvcmssIEFsY2hlbXkgfSBmcm9tIFwiYWxjaGVteS1zZGtcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCB7IGFkZHJlc3MsIHBhZ2VLZXksIHBhZ2VTaXplLCBjaGFpbiB9ID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XG4gIGlmIChyZXEubWV0aG9kICE9PSBcIlBPU1RcIikge1xuICAgIHJlcy5zdGF0dXMoNDA1KS5zZW5kKHsgbWVzc2FnZTogXCJPbmx5IFBPU1QgcmVxdWVzdHMgYWxsb3dlZFwiIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zb2xlLmxvZyhjaGFpbik7XG4gIGNvbnN0IHNldHRpbmdzID0ge1xuICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuQUxDSEVNWV9BUElfS0VZLFxuICAgIG5ldHdvcms6IE5ldHdvcmtbY2hhaW5dLFxuICB9O1xuICBjb25zdCBhbGNoZW15ID0gbmV3IEFsY2hlbXkoc2V0dGluZ3MpO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgbmZ0cyA9IGF3YWl0IGFsY2hlbXkubmZ0LmdldE5mdHNGb3JDb250cmFjdChhZGRyZXNzLCB7XG4gICAgICBwYWdlS2V5OiBwYWdlS2V5ID8gcGFnZUtleSA6IG51bGwsXG4gICAgICBwYWdlU2l6ZTogcGFnZVNpemUgPyBwYWdlU2l6ZSA6IG51bGwsXG4gICAgfSk7XG4gICAgY29uc3QgZm9ybWF0dGVkTmZ0cyA9IG5mdHMubmZ0cy5tYXAoKG5mdCkgPT4ge1xuICAgICAgY29uc3QgeyBjb250cmFjdCwgdGl0bGUsIHRva2VuVHlwZSwgdG9rZW5JZCwgZGVzY3JpcHRpb24sIG1lZGlhIH0gPSBuZnQ7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRyYWN0OiBjb250cmFjdC5hZGRyZXNzLFxuICAgICAgICBzeW1ib2w6IGNvbnRyYWN0LnN5bWJvbCxcbiAgICAgICAgbWVkaWE6IG1lZGlhWzBdPy5nYXRld2F5XG4gICAgICAgICAgPyBtZWRpYVswXT8uZ2F0ZXdheVxuICAgICAgICAgIDogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNTAwXCIsXG4gICAgICAgIGNvbGxlY3Rpb25OYW1lOiBjb250cmFjdC5vcGVuU2VhPy5jb2xsZWN0aW9uTmFtZSxcbiAgICAgICAgdmVyaWZpZWQ6IGNvbnRyYWN0Lm9wZW5TZWE/LnNhZmVsaXN0UmVxdWVzdFN0YXR1cyxcbiAgICAgICAgdG9rZW5UeXBlLFxuICAgICAgICB0b2tlbklkLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGZvcm1hdDogbWVkaWFbMF0/LmZvcm1hdCA/IG1lZGlhWzBdPy5mb3JtYXQgOiBcInBuZ1wiLFxuICAgICAgfTtcbiAgICB9KTtcblxuICBcbiAgICBjb25zdCBmaWx0ZXJlZE5mdHMgPSBmb3JtYXR0ZWROZnRzLmZpbHRlcihcbiAgICAgIChuZnQpID0+IG5mdC50aXRsZS5sZW5ndGggJiYgbmZ0LmRlc2NyaXB0aW9uLmxlbmd0aCAmJiBuZnQubWVkaWFcbiAgICApO1xuICAgICAgXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgbmZ0czogZmlsdGVyZWROZnRzLmxlbmd0aCA/IGZpbHRlcmVkTmZ0cyA6IG51bGwsXG4gICAgICBwYWdlS2V5OiBuZnRzLnBhZ2VLZXksXG4gICAgfSk7XG4gICAgLy8gdGhlIHJlc3Qgb2YgeW91ciBjb2RlXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLndhcm4oZSk7XG4gICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoe1xuICAgICAgbWVzc2FnZTogXCJzb21ldGhpbmcgd2VudCB3cm9uZywgY2hlY2sgdGhlIGxvZyBpbiB5b3VyIHRlcm1pbmFsXCIsXG4gICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXR3b3JrIiwiQWxjaGVteSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJhZGRyZXNzIiwicGFnZUtleSIsInBhZ2VTaXplIiwiY2hhaW4iLCJKU09OIiwicGFyc2UiLCJib2R5IiwibWV0aG9kIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwic2V0dGluZ3MiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiQUxDSEVNWV9BUElfS0VZIiwibmV0d29yayIsImFsY2hlbXkiLCJuZnRzIiwibmZ0IiwiZ2V0TmZ0c0ZvckNvbnRyYWN0IiwiZm9ybWF0dGVkTmZ0cyIsIm1hcCIsImNvbnRyYWN0IiwidGl0bGUiLCJ0b2tlblR5cGUiLCJ0b2tlbklkIiwiZGVzY3JpcHRpb24iLCJtZWRpYSIsInN5bWJvbCIsImdhdGV3YXkiLCJjb2xsZWN0aW9uTmFtZSIsIm9wZW5TZWEiLCJ2ZXJpZmllZCIsInNhZmVsaXN0UmVxdWVzdFN0YXR1cyIsImZvcm1hdCIsImZpbHRlcmVkTmZ0cyIsImZpbHRlciIsImxlbmd0aCIsImpzb24iLCJlIiwid2FybiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getNftsForCollection.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getNftsForCollection.js"));
module.exports = __webpack_exports__;

})();