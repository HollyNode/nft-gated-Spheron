1 | Login to Thirdweb, create an edition drop contract, under the 'explore tab' under either 'Popular' or 'Drops' categories.

NOTE Thirdweb is one of the best web3 dev hubs that provide robustly audited ERC1155, 721, varied permissions, and newer premiere features such account abstraction and gas relay. The hub's interface to manage EVM, Solana, Brave Wallets; RPC management both live and testnet, IPFS storage protocal access and the documentation is top-notch, in consort with their SDK to automate best practice smart contracts
that reduce security and risk management across common functions.  
If you require more oversight on metadata, Pinata is a pinning service that provided persistance to IPFS.

2 | When creating the edition drop, add Contract Metadata accordingly, Payout/Royalty expressions & Network and Chain data. Deploy

NOTE:For testing, a best practice is to use Polygon's Mumbai testnet. You can receive Mumbai tokens for free from either
[https://faucet.polygon.technology/](https://faucet.polygon.technology/) || [https://mumbaifaucet.com/](https://mumbaifaucet.com/)
// for the mumbaifaucet provided by Alchemy, if you have an account, you can get double the amount every 24 hours //

3 | As you deploy your contract, you will go through 2 trigger events to mint the contract. Upon successful tx events, you will have a new
contract in your dashboard. NOTE:this contract address will be incorporated into a couple files later in the project.

4 | After you've successfully created an edition drop contract, you will need to load it with an NFT. Go to the dashboard, click on contracts,
and then click on your EditionDrop contract. Next, go to the left-hand column, clicking on NFTs extension. From there, click on + Single Upload, input necessary data points and proceed with lazy mint. Next, input conditionals , including whitelisted wallets, soulbound ability, amount of NFTs a single wallet can mint, etc. Another small transactional cost will verify the conditions. You now have a editionContract + NFT + conditions. You are ready to build your DAPP!

---

Using Microsoft Visual Studio Code, you can install the extension RUNME, which will allow you to execute code directly from the README file.

```sh
npx thirdweb create --template Spheron NFT-gated-site

```

```sh
npm install @thirdweb-dev/auth

```

For this tutorial, we've chosen Next.js over raw React as this frameworks expedites further processes such as SSR,
built-in API Routing, support for CSS and Typescript. For this specific example, we're using JS but feel free to use
TS if you so wish to do so.

_app.jsx file: you will be importing standard components such ChainId and ThirdwebProvider (which is a Thirdweb SDK Component, via
@thirdweb-dev/react). Import a Head, domain, and styles. Footer isn't necessary.

Your first variable will be your ChainId. For this tutorial, we are utilizing Polygon Mumbai Testnet. If you want to use another, check out
these here: [https://thirdweb.com/dashboard/rpc](https://thirdweb.com/dashboard/rpc) || [https://chainlist.org/?testnets=true](https://chainlist.org/?testnets=true)

Create an auth.config.js file in the root directory. Next import @thirdweb-dev auth
export ThirdwebAuthHandler and getUser
Here, you will be adding a domain and private key from a wallet (we use metamask).
**IMPORTANT**
Follow these best practices to maximize protecting your wallet private key

```sh
npm dotenv

```

- Use a new account that worst-case, if compromised, has minimal testnet tokens in it.
- Create env file
- Review config files
- Review gitignore file, making sure env file(s), config file(s) are enclosed

<b>Create a auth.config.js file.</b> In this file you will import your ThirdwebAuth, PrivateKeyWallet, and domainName Components.
<br>Note that any production build you engage in <b>defaults to private</b></br>

```sh
import { ThirdwebAuth } from "@thirdweb-dev/auth/next";
import { PrivateKeyWallet } from "@thirdweb-dev/auth/evm";
import { domainName } from "./const/yourDetails";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  domain: domainName,
  wallet: new PrivateKeyWallet(process.env.THIRDWEB_AUTH_PRIVATE_KEY || ""),
});
```

back to the _app.jsx. The app function will be wrapped in the ThirdwebProvider and the authConfig, requiring an authUrl.

In pages, create a new folder called api, then a folder called auth, followed by a js file called [...thirdweb].
A simple import and export of the ThirdwebAuthHandler will make up the file. From this location, all API requests will be managed by this
catch all.

```sh
import { ThirdwebAuthHandler } from "../../../auth.config";

export default ThirdwebAuthHandler();


```

Returning to the _app.jsx, build out whatever additional navigation you may wish.

Create index.jsx page.Import all components from React, ThirdwebSDK, useLogout, getUser, styles. Export you components to Home.
const variables should have login, logout & routing. Export async functions should be called at every request. Ensure that auth token is generated using private key. Instantiate the SDK with Mumbai chain (or chain of your choosing) A checksum to see if user has the necessary
NFT. If not, redirect to login page. Lastly, return to props.

Create login.jsx file. Import ConnectWallet, useAddress, and thirdweb Web3Button components.
Next, your first const will be to bring your contract address from Thirdweb that your NFTs now exist on. Export your function login. Build out your messaging/instructions and buttons to mint an NFT, as well as login. They serve two different functions.  Using the Web3 button is optional and default, however, to provide a little more UX and user-engagement, you can incorporate a minting widget here which provides the NFT image, the total amount and amount already minted. This of course saves the user from needing to check something like console log, etherscan, or OpenSea as a primary CTA to validate the transaction, becoming a secondary means to verify mint.
<br>This widget can be found in your Thirdweb dashboard, Contracts, Extensions, Embed. From here, you can change Token ID, RPC source, and incorporate the likes of Biconomy's Relayer, which if API set up properly, you could actually off-set the gas cost entirely for the user // that is for another tutorial//. In addition, you can change some styling from the dashboard here, if you do not want to do it in your IDE.
Lastly, include Link and Connect Wallet components.</br>

Create a checkBalance file. This is a utility, so in the root directory, create a new folder called 'util', followed by a file called checkBalance.js. This file will require an import to a file yet created //which is what we'll create next// called yourDetails.js.
Next, you will export an async function for check balance that includes the sdk and address. Afterwards, you'll declare a variable editionDrop, and you will add again the contract address from Thirdweb Dashboard. Next, a const balance will require to look up the address, as well as the token number parameter itself. Last, return the balance.

In the root directory, create a folder called const, along with a file called yourDetails.js. This file will simply export your contract address and export your domain name. Note, this domain name must be the same throughout the Dapp. Anything you want but must be the same.

```sh
yarn dev

```

or

```sh
npm run dev
```
