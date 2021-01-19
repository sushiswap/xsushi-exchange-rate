// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");


async function main() {
  const sushiAddress = "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2";
  const xSushiAddress = "0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272";
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const XSushiExchangeRate = await hre.ethers.getContractFactory("xSushiExchangeRate");
  const xSushiExchangeRate = await XSushiExchangeRate.deploy(xSushiAddress, sushiAddress);

  await xSushiExchangeRate.deployed();

  console.log("xSushiExchnageRate Address:", xSushiExchangeRate.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
