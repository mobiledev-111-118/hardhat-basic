
require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "UoMpkv14SqLdS_O1OK_L9WkBngmMpSQ7";

// Replace this private key with your Rinkeby account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const RINKEBY_PRIVATE_KEY = "af2430978e0a943c0d5af4e2e6c4ba367ec104da4c922bb0aaa62cdf96cac78d";
module.exports = {
    solidity: "0.7.3",
    networks: {
        rinkeby: {
            url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
            accounts: [`0x${RINKEBY_PRIVATE_KEY}`],
        }
    }
};
