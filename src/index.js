const TK0 = ('0xCfEB869F69431e42cdB54A4F4f105C19C080A601')
const TK1 = ('0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B')
const EXCHANGE = ('0xC89Ce4735882C9F0f0FE26686c53074E09B0D550')

let tokenABI = 
[
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
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
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
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
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
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
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
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
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    }
];

let exchangeABI = 
[
    {
      "inputs": [],
      "name": "MINIMUM_LIQUIDITY",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "initialized",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "reserve0",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "reserve1",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "token0",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "token1",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_token0",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_token1",
          "type": "address"
        }
      ],
      "name": "setPool",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getReserves",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "_reserve0",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_reserve1",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "a",
          "type": "address"
        }
      ],
      "name": "getBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "_liqudity",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount0",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_amount1",
          "type": "uint256"
        }
      ],
      "name": "addLiquidity",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "removeLiquidity",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountA",
          "type": "uint256"
        }
      ],
      "name": "swapAtoB",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountB",
          "type": "uint256"
        }
      ],
      "name": "swapBtoA",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
];


const initialize = async () => {
    // Modern dapp browsers...
		if (window.ethereum) {
            window.web3 = new Web3(ethereum);
            try {
                    await ethereum.enable();

                    const networkDiv = document.getElementById('network')
                    const chainIdDiv = document.getElementById('chainId')
                    const accountsDiv = document.getElementById('accounts')
                    const balance1Div = document.getElementById('balance1')
                    const balance2Div = document.getElementById('balance2')
                    const balance3Div = document.getElementById('balance3')
                    const pool_balance0Div = document.getElementById('pool_balance0')
                    const pool_balance1Div = document.getElementById('pool_balance1')

                    const chainId = await ethereum.request({
                    method: 'eth_chainId',
                    })
                    chainIdDiv.innerHTML = chainId

                    const networkId = await ethereum.request({
                    method: 'net_version',
                    })
                    networkDiv.innerHTML = networkId

                    const accounts= await web3.eth.getAccounts();
                    console.log(accounts);
                    accountsDiv.innerHTML = accounts[0]

                    var balance = await window.web3.eth.getBalance( accounts[0] ); 
                    console.log(web3.utils.fromWei(balance, "ether") + " ETH")
                    balance1Div.innerHTML = window.web3.utils.fromWei(balance, "ether") + " ETH"

                    var tokenInst1 = new web3.eth.Contract(tokenABI,TK0);
                    var bal = await tokenInst1.methods.balanceOf(accounts[0]).call()
                    balance2Div.innerHTML = web3.utils.fromWei(bal, "ether") + "TK0"
                    console.log(bal);

                    var tokenInst2 = new web3.eth.Contract(tokenABI,TK1);
                    var bal1 = await tokenInst2.methods.balanceOf(accounts[0]).call()
                    balance3Div.innerHTML = web3.utils.fromWei(bal1, "ether") + "TK1"
                    console.log(bal1);

                    var exchangeInst = new web3.eth.Contract(exchangeABI,EXCHANGE);
                    //pool status
                    var pool_balance = await exchangeInst.methods.getReserves().call() 
                    console.log(web3.utils.fromWei(pool_balance._reserve0, "ether") + " ETH")
                    console.log(web3.utils.fromWei(pool_balance._reserve1, "ether") + " ETH")
                    pool_balance0Div.innerHTML = window.web3.utils.fromWei(pool_balance._reserve0, "ether") + " TK0"
                    pool_balance1Div.innerHTML = window.web3.utils.fromWei(pool_balance._reserve1, "ether") + " TK1"


                    var lp = await exchangeInst.methods.getBalance(accounts[0]).call() 
                    console.log(web3.utils.fromWei(lp, "ether") + " LP")

                    create_pair_func.onclick = async () => {
                    try {
                        var exchangeInst = new web3.eth.Contract(exchangeABI,EXCHANGE);
                        ret = await exchangeInst.methods.setPool(TK0,TK1).send(
                        {
                            from: accounts[0],
                            to: EXCHANGE,
                            gas: 400000, 
                            gasPrice: web3.utils.toWei('500','gwei')
                        })
                        console.log(ret);
                        } catch (err) {
                        console.error(err)
                        }
                    }

                    add_liquidity_func.onclick = async () => {
                    try {
                        var ret = await tokenInst1.methods.approve(EXCHANGE,web3.utils.toWei('100','ether')).send(
                        {
                            from: accounts[0]
                        })
                        console.log(ret);
                        var ret = await tokenInst2.methods.approve(EXCHANGE,web3.utils.toWei('100','ether')).send(
                        {
                            from: accounts[0]
                        })
                        console.log(ret);

                        var exchangeInst = new web3.eth.Contract(exchangeABI,EXCHANGE);
                        ret = await exchangeInst.methods.addLiquidity(
                            web3.utils.toWei('10','ether'),
                            web3.utils.toWei('10','ether'),
                            ).send(
                        {
                            from: accounts[0],
                            to: EXCHANGE,
                            gas: 400000, 
                            gasPrice: web3.utils.toWei('500','gwei')
                        })
                        console.log(ret);
                        } catch (err) {
                        console.error(err)
                        }
                    } //add liqudity

                    remove_liquidity_func.onclick = async () => {
                        try {
                            var exchangeInst = new web3.eth.Contract(exchangeABI,EXCHANGE);
                            ret = await exchangeInst.methods.removeLiquidity(
                                ).send(
                            {
                                from: accounts[0],
                                to: EXCHANGE,
                                gas: 400000, 
                                gasPrice: web3.utils.toWei('500','gwei')
                            })
                            console.log(ret);
                        } catch (err) {
                            console.error(err)
                        }
                    }//remove liquidity 

                    swap_a2b_func.onclick = async () => {
                    try {
                        var exchangeInst = new web3.eth.Contract(exchangeABI,EXCHANGE);
                        ret = await exchangeInst.methods.swapAtoB(
                            web3.utils.toWei('5','ether'),
                            ).send(
                        {
                            from: accounts[0],
                            to: EXCHANGE,
                            gas: 400000, 
                            gasPrice: web3.utils.toWei('500','gwei')
                        })
                        console.log(ret);
                        } catch (err) {
                        console.error(err)
                        }
                    }

                    swap_b2a_func.onclick = async () => {
                    try {
                        var exchangeInst = new web3.eth.Contract(exchangeABI,EXCHANGE);
                        ret = await exchangeInst.methods.swapBtoA(
                            web3.utils.toWei('5','ether'),
                            ).send(
                        {
                            from: accounts[0],
                            to: EXCHANGE,
                            gas: 400000, 
                            gasPrice: web3.utils.toWei('500','gwei')
                        })
                        console.log(ret);
                        } catch (err) {
                        console.error(err)
                        }
                    }
        }
        catch (error) {
            console.log(error);
        }//try
    } //if
    else if (window.web3) {
        // Legacy dapp browsers...
        window.web3 = new Web3(web3.currentProvider);
          console.log(legacy);
    } //else if
    else {
        // Non-dapp browsers...
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
}

window.addEventListener('load', initialize)