const { getContractAddress } = require("ethers/lib/utils");
const { ethers } = require("hardhat");
const hre = require("hardhat");
require("@nomiclabs/hardhat-ethers");
const { default: BigNumber } = require("bignumber.js");

const DECIMALS_NATIVE = 18;
const SC_DEPLOYED = "0x05A100890DdBe49F1b2eDBc90a02cFFe2512e344";


(async () => {
  try {
    const users = [
      "0x49765F8565F4CcD9C9ab938A68F282eb38E5d4c7",
      "0x3BCC6B0754B5B79C6B0f363cf10936dbB9E16294"
    ];
    const amount = 0.0001;
    const amountFormated = users.map(() =>
      new BigNumber(amount).times(new BigNumber(10).pow(DECIMALS_NATIVE)).toFixed(0)
    );
    // Using a for loop
    let sum = new BigNumber(amount).times(users.length);

    // 2 Send Native
    const value = sum.times(new BigNumber(10).pow(DECIMALS_NATIVE)).toString();
    const AutoContractFactory = await ethers.getContractFactory("Auto");
    const autoAddress = await AutoContractFactory.attach(SC_DEPLOYED);
    const gasLimit = await autoAddress.estimateGas.sendNative(users, amountFormated, {
      value: value,
    });
    await autoAddress.sendNative(users, amountFormated,
      {
        value: value,
        gasLimit: gasLimit.toString(),
      }
    );

    console.log("done multisend");
  } catch (e) {
    console.log(e);
  }
})();


