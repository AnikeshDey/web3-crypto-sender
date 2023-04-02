const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Transactions deployed to:", transactions.address);
}

const runMain = async () => {
  try{
    await main();
    process.exit(0);
  } catch(err){
    console.error(err);
    process.exit(1);
  }
}

runMain();

//0x0a41cBE6fb9522440d52Cab37Cd168E3FF62d504
