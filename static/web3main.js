var deployedContract;
contract_addr = "0x..";
abi = [];

if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try { 
       window.ethereum.enable().then(function() {
           // User has allowed account access to DApp...
           console.log("connected");
           deployedContract = web3.eth.contract(abi).at(contract_addr);
           console.log(deployedContract);
       });
    } catch(e) {
       // User has denied account access to DApp...
       console.log(e);
    }
 }
 // Legacy DApp Browsers
 else if (window.web3) {
     web3 = new Web3(web3.currentProvider);
 }
 // Non-DApp Browsers
 else {
     alert('You have to install MetaMask !');
 }