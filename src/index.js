const exchange_proxy = ('0x190480908c11Efca37EDEA4405f4cE1703b68b23')
const exchange = ('0xc58eF32b48F8242D0fe9506BD7249c2e19B4A108')
const cusd = ('0x62492A644A588FD904270BeD06ad52B9abfEA1aE')
const cgld = ('0xdDc9bE57f553fe75752D61606B94CBD7e0264eF8')



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
[{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool","name":""}],"name":"initialized","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"minimumReports","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"stable","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"stableBucket","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"exchange","inputs":[{"type":"uint256","name":"sellAmount"},{"type":"uint256","name":"minBuyAmount"},{"type":"bool","name":"sellGold"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"setUpdateFrequency","inputs":[{"type":"uint256","name":"newUpdateFrequency"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getSellTokenAmount","inputs":[{"type":"uint256","name":"buyAmount"},{"type":"bool","name":"sellGold"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":"value"}],"name":"spread","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"goldBucket","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"updateFrequency","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"setReserveFraction","inputs":[{"type":"uint256","name":"newReserveFraction"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"renounceOwnership","inputs":[],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""},{"type":"uint256","name":""}],"name":"getBuyAndSellBuckets","inputs":[{"type":"bool","name":"sellGold"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"registry","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"initialize","inputs":[{"type":"address","name":"registryAddress"},{"type":"address","name":"stableToken"},{"type":"uint256","name":"_spread"},{"type":"uint256","name":"_reserveFraction"},{"type":"uint256","name":"_updateFrequency"},{"type":"uint256","name":"_minimumReports"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"owner","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool","name":""}],"name":"isOwner","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getBuyTokenAmount","inputs":[{"type":"uint256","name":"sellAmount"},{"type":"bool","name":"sellGold"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"setRegistry","inputs":[{"type":"address","name":"registryAddress"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"setSpread","inputs":[{"type":"uint256","name":"newSpread"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"setMinimumReports","inputs":[{"type":"uint256","name":"newMininumReports"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"setStableToken","inputs":[{"type":"address","name":"newStableToken"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":"value"}],"name":"reserveFraction","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"lastBucketUpdate","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner"}],"constant":false},{"type":"event","name":"Exchanged","inputs":[{"type":"address","name":"exchanger","indexed":true},{"type":"uint256","name":"sellAmount","indexed":false},{"type":"uint256","name":"buyAmount","indexed":false},{"type":"bool","name":"soldGold","indexed":false}],"anonymous":false},{"type":"event","name":"UpdateFrequencySet","inputs":[{"type":"uint256","name":"updateFrequency","indexed":false}],"anonymous":false},{"type":"event","name":"MinimumReportsSet","inputs":[{"type":"uint256","name":"minimumReports","indexed":false}],"anonymous":false},{"type":"event","name":"StableTokenSet","inputs":[{"type":"address","name":"stable","indexed":true}],"anonymous":false},{"type":"event","name":"SpreadSet","inputs":[{"type":"uint256","name":"spread","indexed":false}],"anonymous":false},{"type":"event","name":"ReserveFractionSet","inputs":[{"type":"uint256","name":"reserveFraction","indexed":false}],"anonymous":false},{"type":"event","name":"BucketsUpdated","inputs":[{"type":"uint256","name":"goldBucket","indexed":false},{"type":"uint256","name":"stableBucket","indexed":false}],"anonymous":false},{"type":"event","name":"RegistrySet","inputs":[{"type":"address","name":"registryAddress","indexed":true}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","indexed":true},{"type":"address","name":"newOwner","indexed":true}],"anonymous":false}];


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
						const exchangeDiv = document.getElementById('exchange')
						const exchange_func = document.getElementById('exchange_func')

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

						var balance = await web3.eth.getBalance( accounts[0] ); 
						console.log(web3.utils.fromWei(balance, "ether") + " CELO")
						balance1Div.innerHTML = web3.utils.fromWei(balance, "ether") + " CELO"


						var tokenInst1 = new web3.eth.Contract(tokenABI,cusd);
/*
						var ret = await tokenInst1.methods.approve(exchange_proxy,0xFFFFFFFF).send(
						{
							from: accounts[0]
						})
       					console.log(ret);
*/
						var bal = await tokenInst1.methods.balanceOf(accounts[0]).call()
						balance2Div.innerHTML = web3.utils.fromWei(bal, "ether") + "cUSD"
       					console.log(bal);

						var tokenInst2 = new web3.eth.Contract(tokenABI,cgld);
/*
						var ret = await tokenInst2.methods.approve(exchange_proxy,0xFFFFFFFF).send(
						{
							from: accounts[0]
						})
       					console.log(ret);
*/
						var bal1 = await tokenInst2.methods.balanceOf(accounts[0]).call()
						balance3Div.innerHTML = web3.utils.fromWei(bal1, "ether") + "cGLD"
       					console.log(bal1);

						var exchangeInst = new web3.eth.Contract(exchangeABI,exchange_proxy);
						var ret = await exchangeInst.methods.getBuyAndSellBuckets(true).call()
						exchangeDiv.innerHTML = "</br>"+ "cUSD:"+web3.utils.fromWei(ret[0],"ether") + ", cGLD:" + web3.utils.fromWei(ret[1],"ether") 
       					console.log(ret);

						exchange_func.onclick = async () => {
						try {
/*
						await web3.eth.sendTransaction({ 
							from: accounts[0],
							to: "0x2bB348a915861f1A284fc3CD5587e7b7750F1e8B", 
							value: web3.utils.toWei('1','ether'), 
							gas: 100000, 
							gasPrice: web3.utils.toWei('100','gwei')
							})
*/
						var exchangeInst = new web3.eth.Contract(exchangeABI,exchange_proxy);
						ret = await exchangeInst.methods.exchange(web3.utils.toWei('0.000000001','ether'), 0, true).send(
						{
							from: accounts[0],
							to: exchange_proxy,
							gas: 400000, 
							gasPrice: web3.utils.toWei('0.1','gwei')
						})
						console.log(ret);
						} catch (err) {
						console.error("error")
						}
}

        } catch (error) {
                    console.log(error);
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
          console.log(legacy);
        // Acccounts always exposed
  //      web3.eth.sendTransaction({/* ... */});
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
}

window.addEventListener('load', initialize)
//window.addEventListener('DOMContentLoaded', initialize)
