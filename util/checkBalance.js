import { contractAddress } from "../const/yourDetails";

export default async function checkBalance(sdk, address) {
  const editionDrop = await sdk.getEditionDrop(
    contractAddress, // replace this with your contract address
    "0x67cDd4Ba6ea9e196668c32CB3Cf4123B58d7d869"
  );

  const balance = await editionDrop.balanceOf(address, 0);

  // gt = greater than
  return balance.gt(0);
}
