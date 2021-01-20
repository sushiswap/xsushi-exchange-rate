//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface IERC20 {
  function totalSupply() external view returns (uint256);
  function balanceOf(address account) external view returns (uint256);
}

contract xSushiExchangeRate {
  IERC20 private immutable xSushi;
  IERC20 private immutable sushi;

  constructor(address _xSushi, address _sushi) {
    xSushi = IERC20(_xSushi);
    sushi = IERC20(_sushi);
  }

  function getExchangeRate() public view returns( uint256 ) {
    return sushi.balanceOf(address(xSushi))*(1e18) / xSushi.totalSupply();
  }
  
  function toSUSHI(uint256 xSushiAmount) public view returns (uint256 sushiAmount) {
    sushiAmount = xSushiAmount * sushi.balanceOf(address(xSushi)) / xSushi.totalSupply();
  }
  
  function toXSUSHI(uint256 sushiAmount) public view returns (uint256 xSushiAmount) {
    xSushiAmount = sushiAmount * xSushi.totalSupply() / sushi.balanceOf(address(xSushi));
  }
}
