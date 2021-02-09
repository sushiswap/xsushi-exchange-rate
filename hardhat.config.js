require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const key = require("./key.js");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const MAINNET_PRIVATE_KEY = "KEY_GOES_HERE";
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.6.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 9999
      }
    }
  },
  networks: {
    hardhat: {
      forking: {
        url: key,
        blockNumber: 11687740
      }
    },
    mainnet: {
      url: key,
      accounts: [`0x${MAINNET_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: "KEY_GOES_HERE"
  }
};

