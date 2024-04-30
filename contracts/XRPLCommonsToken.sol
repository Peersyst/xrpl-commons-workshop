// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract XRPLCommonsToken is ERC20 {
    constructor() ERC20("Token", "XRPLCommonsToken") {}

    function buy() public payable {
        require(msg.value > 0, "You must send some XRP to get tokens");
        _mint(msg.sender, msg.value);
    }
}
