const { expect } = require("chai");
const { concat } = require("ethers/lib/utils");

describe("xSushExchangeRate", function() {
  it("Should return a non-zero value, matching the expected value", async function() {
    const sushiAddress = "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2";
    const xSushiAddress = "0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272";
    const expected = "1108336349744405149"

    const XSushiExchangeRate = await hre.ethers.getContractFactory("xSushiExchangeRate");
    const xSushiExchangeRate = await XSushiExchangeRate.deploy(xSushiAddress, sushiAddress);
  
    await xSushiExchangeRate.deployed();

    let exchangeRate = await xSushiExchangeRate.getExchangeRate();
    expect(exchangeRate.toString()).to.equal(expected);

  });
});
