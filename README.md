# Ethereum_Blockchain_PatientID
Ethereum Blockchain. Smart contract used to create a unique patient reference ID which can be used over the hospital network
For creating a smart contract and deploying locally you can use the local setup doc attached...


For creating using Azure steps given below..

Azure setup:
************
1. Create Microsoft Azure Account.

2. create a rsource group with blockchain and deploy ethereum consortium blockchain over there.

3. you can set 2 mining nodes and 1 transaction nodes.

4. After creation you access that using putty. also you will get  rpc end point link over there.


Connecting ethereum consortium from console use putty .
*****************************************************
1. In putty set the ip address link and port then connect using the password created at the Azure.

2. After connected give a command "geth attach" to work on with the geth javascript console.

3. now you can use apis over here.

4. Initially when ethereum is deployed you will have a default account that will be set as the coinbase account.

5. So from that default account you can transfer ether's to other accounts , which can be used when some transaction is to be carried out by the address.

6. Each transaction needs gas price for the transaction to be mined.

7. you create account using "personal.newAccount()" and after creating dont forget to unlock it using "personal.unlockAccount(eth.accounts[1])"


Solidity.
********
1. Solidity code you can view the code in remix solidity viewer i have described the function in comment lines.

2. After pasting in online copy the web3deploy and paste it in the geth console it returns the contract address that should be pasted in the account js at contract address.

3. then copy the interface part in remix and paste it in account js at abi.

4. Each time you use the function in javascript with prefix "contract" because the solidity contract code is deployed in the var contract at the contract address.


Html,css,javascript,bootstrap are attached.
