import {ethers} from "hardhat";

const main = async () => {
    const XRPLCommonsTokenFactory = await ethers.getContractFactory("XRPLCommonsToken");
    const token = await XRPLCommonsTokenFactory.deploy();
    const tokenAddress = await token.getAddress();

    console.log("XRPLCommonsToken address: ", tokenAddress);
}

main();