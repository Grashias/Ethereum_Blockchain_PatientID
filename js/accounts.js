var Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider("http://etherunvw.southindia.cloudapp.azure.com:8545"));

var ContractAddress = "0xad4ac696944e78a35968bc2d59ab31aa0f15f682";

var abi = [{"constant":true,"inputs":[{"name":"Patient_ref","type":"uint256"}],"name":"getHosp_Hub_Details","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"bytes"},{"name":"","type":"address"},{"name":"","type":"address"},{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"Patient_ID","type":"string"}],"name":"getHospDetails","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"bytes"},{"name":"","type":"address"},{"name":"","type":"address"},{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"hash","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"},{"name":"Patient_ref","type":"uint256"}],"name":"verify","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"Patient_ref","type":"uint256"}],"name":"getownpatientsDetails","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"bytes"},{"name":"","type":"address"},{"name":"","type":"address"},{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"Patient_ID","type":"string"},{"name":"PatientSignature","type":"bytes"},{"name":"PatientAddress","type":"address"},{"name":"HospAddress","type":"address"},{"name":"PatientDetails","type":"string"}],"name":"newPatientDetails","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"gethosphubcount","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"getHospCount","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getPatientsCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"getpatientid","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}];

var contract = web3.eth.contract(abi).at(ContractAddress);


// Accounts =
//Laptop
// 0 -> 0x3893ab3eccfeca517191dc710888d13f5101599b CAMS
// 1 -> 0x026525685fa37b3b6e6621de811fd77bdee813c7 Investor 1
// 2 -> 0xe17563dac1b10b48c34326a6999bb0593c6cdeb0 Investor 2
//Desktop
// 0 -> 0x1f76cfb2db7316806e02e9c19b190f3fd3a86396 CAMS
// 1 -> 0xf8337addf85fb4e84334c3138c4958d571950ea8 Investor 1
// 2 -> 0x222ea4b07a44fbf30f24105e9025206170cdf7c9 Investor 2
// 3 -> 0xfad9f349570e2352d9d88a2122ec1aaeeee49be0 CAMS
// 4 -> 0xc3f0c19d7bc630aaaf538e0760da67af42181c16 Bank
// 5 -> 0x89614e5644364b0e67590fe956dbf17492e0101f Investor 3
// 6 -> 0x53ae699863c96c6956719d6cfb8b6b25e1cab812 Investor 4

//eth.sendTransaction({from:eth.coinbase, to:eth.accounts[1], value: web3.toWei(0.05, "ether")})
//eth.sendTransaction({from:eth.coinbase, to:eth.accounts[2], value: web3.toWei(0.05, "ether")})
//eth.sendTransaction({from:eth.coinbase, to:eth.accounts[3], value: web3.toWei(0.05, "ether")})
//eth.sendTransaction({from:eth.coinbase, to:eth.accounts[4], value: web3.toWei(0.05, "ether")})
//eth.sendTransaction({from:eth.coinbase, to:eth.accounts[5], value: web3.toWei(0.05, "ether")})
//eth.sendTransaction({from:eth.coinbase, to:eth.accounts[6], value: web3.toWei(0.05, "ether")})
//personal.unlockAccount(eth.accounts[0],"pass",0)
//personal.unlockAccount(eth.accounts[1],"pass",0)
//personal.unlockAccount(eth.accounts[2],"pass",0)
//personal.unlockAccount(eth.accounts[3],"pass",0)
//personal.unlockAccount(eth.accounts[4],"pass",0)
//personal.unlockAccount(eth.accounts[5],"pass",0)
//personal.unlockAccount(eth.accounts[6],"pass",0)
