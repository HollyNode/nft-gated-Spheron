import { ConnectWallet, useAddress, Web3Button } from "@thirdweb-dev/react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import React from "react";

// replace this with your contract address
const contractAddress = "0x67cDd4Ba6ea9e196668c32CB3Cf4123B58d7d869";

export default function Login() {
  const address = useAddress(); // Get the user's address

  return (
    <div className={`${styles.container} animated-gradient`}>
      <img
  src="/logo.png"
  alt="Description of the image"
  style={{
    position: 'absolute',
    top: '5px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: '1',
    width: '200px', // add width property to resize the image
    height: 'auto', // add height property to maintain aspect ratio
  }}
/>
      {/*<h1 className={styles.h1}>Spheron TG - DEMO</h1>*/}
      {/*<p className={styles.explain}>
        Mint an NFT to gain access to site{" "}
        <b>
          <a
            href="https://portal.thirdweb.com/building-web3-apps/authenticating-users"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.purple}
          >
            Auth
  </a>
        </b>
        !
      </p>*/}

      <p className={styles.explain}>
        You cannot access the{" "}
        <Link className={styles.purple} href="/">
          main page
        </Link>{" "}
        unless you own an NFT from our collection!
      </p>

      <hr className={styles.divider} />

      <>
        {address ? (
          <p>
          <b>Welcome</b>, <span className="gradient-text">{address?.slice(0, 6)}...{address?.slice(-4)}</span>
        </p>
        ) : (
          <p>Please connect your wallet to continue.</p>
        )}

        <ConnectWallet accentColor="#096bec" />

        <p>
          For demo purposes, you can claim an NFT from our collection below:
        </p>

        {/*<Web3Button
  contractAddress={contractAddress}
  action={(contract) => contract.erc1155.claim(0, 1)}
  accentColor="#096bec"
  className={`${styles.animatedButton} ${styles.glassmorphism}`}
>
  Claim NFT
        </Web3Button>*/}

<iframe
  src="https://gateway.ipfscdn.io/ipfs/QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/erc1155.html?contract=0x67cDd4Ba6ea9e196668c32CB3Cf4123B58d7d869&chain=%7B%22name%22%3A%22Mumbai%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fmumbai.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22maticmum%22%2C%22chainId%22%3A80001%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22mumbai%22%7D&tokenId=0&theme=dark&primaryColor=blue"
  width="auto"
  height="550px"
  style={{
    borderRadius: "20px",
    border: "3px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.2)",
    
  }}
  frameBorder="0"
/>
  </>
    </div>
  );
}
