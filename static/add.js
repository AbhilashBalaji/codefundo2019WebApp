function addVote(){
    var details = {
        from : web3.eth.accounts[0],
        gas : 3000000,
        value : '0x00'
    };
    
    deployedContract.set.sendTransaction(num, details, function (error, result) {
        if (error) {
          console.log(error);
        } else {
          console.log(result);
        }
      });
}