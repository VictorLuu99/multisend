const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Auto", async function () {
  let owner;
  let addr1;
  let addr2;
  let addr3;
  let addr4;
  let addr5;
  let signer;
  let token;
  let autoContract;
  before(async () => {
    // assign address
    [owner, addr1, addr2, addr3, addr4, addr5] = await ethers.getSigners();

    // Deploy mock token
    const MockTokenFactory = await ethers.getContractFactory("MockToken");
    token = await MockTokenFactory.deploy();

    // Deploy autp

    const AutoFactory = await ethers.getContractFactory("Auto");
    autoContract = await AutoFactory.deploy();
  });

  describe("HEHEHEHE", function () {
    it("Balance work", async function () {
      const users = [
        addr1.address,
        addr2.address,
        addr3.address,
        addr4.address,
        addr5.address,
      ];
      const amounts = [
        ethers.utils.parseUnits('100').toString(),
        ethers.utils.parseUnits('200').toString(),
        ethers.utils.parseUnits('300').toString(),
        ethers.utils.parseUnits('400').toString(),
        ethers.utils.parseUnits('500').toString(),
      ];

      await expect(
        autoContract.sendToken(token.address, users, amounts)
      ).to.be.revertedWith('ERC20: insufficient allowance');

      await token.approve(autoContract.address, ethers.utils.parseUnits(('1500')));
      await autoContract.sendToken(token.address, users, amounts);

      const balance4 = await token.balanceOf(users[4]);
      console.log(balance4.toString())
    });
  });
});
