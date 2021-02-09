//SPDX-License-Identifier: Unlicense
pragma solidity 0.6.12;
import "@boringcrypto/boring-solidity/contracts/interfaces/IERC20.sol";

contract xSushiExchangeRate {
    IERC20 private immutable xSushi;
    IERC20 private immutable sushi;

    constructor(IERC20 _xSushi, IERC20 _sushi) public {
        xSushi = _xSushi;
        sushi = _sushi;
    }

    function getExchangeRate() public view returns (uint256) {
        return (sushi.balanceOf(address(xSushi)) * 1e18) / xSushi.totalSupply();
    }

    function toSUSHI(uint256 xSushiAmount) public view returns (uint256 sushiAmount) {
        sushiAmount = (xSushiAmount * sushi.balanceOf(address(xSushi))) / xSushi.totalSupply();
    }

    function toXSUSHI(uint256 sushiAmount) public view returns (uint256 xSushiAmount) {
        xSushiAmount = (sushiAmount * xSushi.totalSupply()) / sushi.balanceOf(address(xSushi));
    }
}
