# ERC20 Tampa Bay Token Contract

## ERC20 token contract from meetup 09/17/2017

Basic template for an ERC20 token. Based off EIP20 - https://github.com/ethereum/eips/issues/20.


Some of the setup for this will be skipped, please see the Hello World contract steps https://github.com/TBBD/hello-world and https://github.com/TBBD/crowdsale to catch up.


Please see the EIP github link above for explanation of the methods. The conversation in that thread is invaluable. Not going to go step by step here, because I would just be repeating what is in EIP20.

There are new backwards compatible upgrades to ERC20. Some examples include ERC23 (https://github.com/ethereum/EIPs/issues/223)and the MiniMe (https://github.com/Giveth/minime) token. I encourage you to take a look at the code to see how they are different.

## Deploying your token

Set `name`, `symbol`, `decimals` and `totalSupply`. 

Deploy contract using `geth migrate --reset --network rinkeby`.

## Verifying your contract on etherscan

This is how you are able to set the token up for a search on etherscan. Need to manually set it up through their UI.

Once you get the address of the contract, search for it on https://rinkeby.etherscan.io/. Click on the tab that says Contract Code and click on the blue link that says `Verify And Publish your Contract Source Code Today!`.

At the top, there is a Tip. Click on `new Beta Source Code Contract Verifier`. This is necessary to verify our contract because of some issues with truffle. You can see why on this thread https://github.com/trufflesuite/truffle/issues/456.

Put in your contract address and contract name.

To find your compiler version, type `truffle version` in your terminal. Verifying your contract using truffle will only work if you're running `Solidity v0.4.11 (solc-js)` or later.

To upgrade run:
```
brew update
brew upgrade
brew tap ethereum/ethereum
brew install solidity
brew linkapps solidity
```

Once you're running an updated version, select the corresponding compiler. For example, if you're running `v.0.4.11` select `0.4.11+commit.68ef5810`. Ignore the `nightly` builds, just select the corresponding `+commit` build.

Copy paste your contract code where it says `Enter the Solidity Contract Code below`.

Set Runs (Optimizer) to `0`.

Click the blue `Verify and Publish` button at the bottom of the page.

## Sending your tokens

Need to make a transaction with the contract to finish the process. Go back to your geth console.

Get contract abi from  https://ethereum.github.io/browser-solidity/.

```
abi = <interface JSON>
contract = eth.contract(abi)
instance = contract.at("address")
sender = <address that deployed contract>
receiver = <address you want to send your token to>
personal.unlockAccount(sender)
instance.transfer(receiver,{from: sender})
```

## Checking your token on etherscan

Go back to https://rinkeby.etherscan.io/ and hover your mouse over the Token tab at the top. Click on `ERC20 Token Search` and paste your contract address. Your ERC20 token information should be displayed.

These steps would work exactly the same on the mainnet.
