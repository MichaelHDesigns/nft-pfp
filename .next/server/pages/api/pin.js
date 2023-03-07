"use strict";
(() => {
var exports = {};
exports.id = 385;
exports.ids = [385];
exports.modules = {

/***/ 3058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "@pinata/sdk"
const sdk_namespaceObject = require("@pinata/sdk");
var sdk_default = /*#__PURE__*/__webpack_require__.n(sdk_namespaceObject);
;// CONCATENATED MODULE: ./src/pinata.ts

const PINATA_API_KEY = process.env.PINATA_API_KEY;
const PINATA_API_SECRET = process.env.PINATA_API_SECRET;

if (!PINATA_API_KEY || !PINATA_API_SECRET) {
  throw new Error('PINATA_API_KEY and PINATA_API_SECRET must be provided');
}

const pinata = new (sdk_default())(PINATA_API_KEY, PINATA_API_SECRET);
;// CONCATENATED MODULE: ./src/pages/api/pin.ts


async function handler(req, res) {
  const data = JSON.parse(req.body);
  const {
    image,
    filename,
    name
  } = data; // Create the file structure

  const timestamp = Date.now().toString();
  const dirPath = `public/gen/${timestamp}`;
  const imgPath = `${dirPath}/${filename}`;
  const metadataPath = `${dirPath}/metadata.json`;
  external_fs_default().mkdirSync(dirPath, {
    recursive: true
  }); // Save the image to disk

  const imageBuffer = Buffer.from(image, 'base64');
  external_fs_default().writeFileSync(imgPath, imageBuffer); // Create the Pinata metadata

  const options = {
    pinataMetadata: {
      name: name
    }
  }; // Pin the image to IPFS

  const imgHash = await pinata.pinFromFS(imgPath, options).then(res => res.IpfsHash); // Create the metadata JSON file

  const nftMetadata = {
    name: name,
    description: 'NFT avatar',
    image: `ipfs://${imgHash}`
  }; // Save the metadata to disk

  external_fs_default().writeFileSync(metadataPath, JSON.stringify(nftMetadata)); // Pin the metadata to IPFS

  const response = await pinata.pinFromFS(metadataPath, options);
  res.status(200).json(response); // Delete the directory from disk

  external_fs_default().rmdirSync(dirPath, {
    recursive: true
  });
} // Override default Next.js API limits

const config = {
  api: {
    bodyParser: {
      sizeLimit: '4mb'
    }
  }
};

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3058));
module.exports = __webpack_exports__;

})();