var deployedContract;
if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try { 
       window.ethereum.enable().then(function() {
           // User has allowed account access to DApp...
           console.log("connected");
           deployedContract = web3.eth.contract(ting.abi).at("0xF86947E80c11d889b88FD1eF108A39Ef27946ed2");
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
 function callSet(){
    //  console.log(web3.eth.accounts[0]);
    // console.log(deployedContract);
    var num = document.getElementById("num").value;
      deployedContract.set.sendTransaction(num,{from : web3.eth.accounts[0], gas : 3000000, value : '0x00'},function (error, result) {
        if (error) {
          console.log(error);
        } else {
          console.log(result);
        }
      });
 }
 function callGet(){
    deployedContract.get.call(function (error, result) {
        if (error) {
          console.log(error);
        } else {
          console.log(result.toString());
        }
      });
 }

 var ting = {
    "contractName": "SimpleStorage",
    "abi": [
      {
        "constant": true,
        "inputs": [],
        "name": "storedData",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "x",
            "type": "uint256"
          }
        ],
        "name": "set",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "get",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.0+commit.1d4f565a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"storedData\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"x\",\"type\":\"uint256\"}],\"name\":\"set\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"get\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/home/alok/work/vyper-box/contracts/SimpleStorage.sol\":\"SimpleStorage\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/home/alok/work/vyper-box/contracts/SimpleStorage.sol\":{\"keccak256\":\"0x10f6d12ce05fdd61aae397cf4893da422e7c4a243be8906b091e3108d13ff634\",\"urls\":[\"bzzr://e603b6d3129f2d97d370eafcafc7c20bdff219c57a377f26e3ae883ed9790702\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b50610124806100206000396000f3fe6080604052600436106053576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632a1afcd914605857806360fe47b11460805780636d4ce63c1460b7575b600080fd5b348015606357600080fd5b50606a60df565b6040518082815260200191505060405180910390f35b348015608b57600080fd5b5060b56004803603602081101560a057600080fd5b810190808035906020019092919050505060e5565b005b34801560c257600080fd5b5060c960ef565b6040518082815260200191505060405180910390f35b60005481565b8060008190555050565b6000805490509056fea165627a7a7230582030427ee2dbaf2e4ce40ff2601554ae6c56f22328342dd852ef08047e8332cb940029",
    "deployedBytecode": "0x6080604052600436106053576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632a1afcd914605857806360fe47b11460805780636d4ce63c1460b7575b600080fd5b348015606357600080fd5b50606a60df565b6040518082815260200191505060405180910390f35b348015608b57600080fd5b5060b56004803603602081101560a057600080fd5b810190808035906020019092919050505060e5565b005b34801560c257600080fd5b5060c960ef565b6040518082815260200191505060405180910390f35b60005481565b8060008190555050565b6000805490509056fea165627a7a7230582030427ee2dbaf2e4ce40ff2601554ae6c56f22328342dd852ef08047e8332cb940029",
    "sourceMap": "24:201:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;24:201:1;;;;;;;",
    "deployedSourceMap": "24:201:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;53:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;53:22:1;;;;;;;;;;;;;;;;;;;;;;;82:59;;8:9:-1;5:2;;;30:1;27;20:12;5:2;82:59:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;82:59:1;;;;;;;;;;;;;;;;;;;;147:76;;8:9:-1;5:2;;;30:1;27;20:12;5:2;147:76:1;;;;;;;;;;;;;;;;;;;;;;;53:22;;;;:::o;82:59::-;133:1;120:10;:14;;;;82:59;:::o;147:76::-;183:4;206:10;;199:17;;147:76;:::o",
    "source": "pragma solidity 0.5.0;\n\ncontract SimpleStorage {\n    uint public storedData;\n\n    function set(uint x) public {\n        storedData = x;\n    }\n\n    function get() public view returns (uint) {\n        return storedData;\n    }\n}\n",
    "sourcePath": "/home/alok/work/vyper-box/contracts/SimpleStorage.sol",
    "ast": {
      "absolutePath": "/home/alok/work/vyper-box/contracts/SimpleStorage.sol",
      "exportedSymbols": {
        "SimpleStorage": [
          79
        ]
      },
      "id": 80,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 58,
          "literals": [
            "solidity",
            "0.5",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:22:1"
        },
        {
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 79,
          "linearizedBaseContracts": [
            79
          ],
          "name": "SimpleStorage",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 60,
              "name": "storedData",
              "nodeType": "VariableDeclaration",
              "scope": 79,
              "src": "53:22:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 59,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "53:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 69,
                "nodeType": "Block",
                "src": "110:31:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 67,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 65,
                        "name": "storedData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60,
                        "src": "120:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 66,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62,
                        "src": "133:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "120:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 68,
                    "nodeType": "ExpressionStatement",
                    "src": "120:14:1"
                  }
                ]
              },
              "documentation": null,
              "id": 70,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "set",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 63,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 62,
                    "name": "x",
                    "nodeType": "VariableDeclaration",
                    "scope": 70,
                    "src": "95:6:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 61,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "95:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "94:8:1"
              },
              "returnParameters": {
                "id": 64,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "110:0:1"
              },
              "scope": 79,
              "src": "82:59:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 77,
                "nodeType": "Block",
                "src": "189:34:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 75,
                      "name": "storedData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60,
                      "src": "206:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 74,
                    "id": 76,
                    "nodeType": "Return",
                    "src": "199:17:1"
                  }
                ]
              },
              "documentation": null,
              "id": 78,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "get",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 71,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "159:2:1"
              },
              "returnParameters": {
                "id": 74,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 73,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 78,
                    "src": "183:4:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 72,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "183:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "182:6:1"
              },
              "scope": 79,
              "src": "147:76:1",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 80,
          "src": "24:201:1"
        }
      ],
      "src": "0:226:1"
    },
    "legacyAST": {
      "absolutePath": "/home/alok/work/vyper-box/contracts/SimpleStorage.sol",
      "exportedSymbols": {
        "SimpleStorage": [
          79
        ]
      },
      "id": 80,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 58,
          "literals": [
            "solidity",
            "0.5",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:22:1"
        },
        {
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 79,
          "linearizedBaseContracts": [
            79
          ],
          "name": "SimpleStorage",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 60,
              "name": "storedData",
              "nodeType": "VariableDeclaration",
              "scope": 79,
              "src": "53:22:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 59,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "53:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 69,
                "nodeType": "Block",
                "src": "110:31:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 67,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 65,
                        "name": "storedData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60,
                        "src": "120:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 66,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62,
                        "src": "133:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "120:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 68,
                    "nodeType": "ExpressionStatement",
                    "src": "120:14:1"
                  }
                ]
              },
              "documentation": null,
              "id": 70,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "set",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 63,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 62,
                    "name": "x",
                    "nodeType": "VariableDeclaration",
                    "scope": 70,
                    "src": "95:6:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 61,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "95:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "94:8:1"
              },
              "returnParameters": {
                "id": 64,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "110:0:1"
              },
              "scope": 79,
              "src": "82:59:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 77,
                "nodeType": "Block",
                "src": "189:34:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 75,
                      "name": "storedData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60,
                      "src": "206:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 74,
                    "id": 76,
                    "nodeType": "Return",
                    "src": "199:17:1"
                  }
                ]
              },
              "documentation": null,
              "id": 78,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "get",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 71,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "159:2:1"
              },
              "returnParameters": {
                "id": 74,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 73,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 78,
                    "src": "183:4:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 72,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "183:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "182:6:1"
              },
              "scope": 79,
              "src": "147:76:1",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 80,
          "src": "24:201:1"
        }
      ],
      "src": "0:226:1"
    },
    "compiler": {
      "name": "solc",
      "version": "0.5.0+commit.1d4f565a.Emscripten.clang"
    },
    "networks": {
      "5777": {
        "events": {},
        "links": {},
        "address": "0xF86947E80c11d889b88FD1eF108A39Ef27946ed2",
        "transactionHash": "0x4f369f78f9ba3b032a265a0fbb932839ab64244f73a5cd9f17e017693556a482"
      }
    },
    "schemaVersion": "3.0.11",
    "updatedAt": "2019-08-20T15:05:38.398Z",
    "devdoc": {
      "methods": {}
    },
    "userdoc": {
      "methods": {}
    }
  };