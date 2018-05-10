import React from 'react';
import ReactDOM from 'react-dom';
import Web3 from 'web3';

import './../public/css/main.css';

import User from './components/User.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recipient: '',
			amount: 0,
			setTransactionAddress: ''
		}

		this.changeRecipient = this.changeRecipient.bind(this)
		this.changeAmount = this.changeAmount.bind(this)

		if (typeof(web3) != 'undefined') {
            console.log("Using web3 detected from external source like Metamask")
            this.web3 = new Web3(web3.currentProvider)
        } 
        else {
            console.log("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask")
            this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
        }

        console.log('Connected: ' + web3.isConnected())
	}

	changeRecipient(address) {
		this.setState({ recipient: address.target.value })
	}

	changeAmount(val) {
		this.setState({ amount: val.target.value })
	}

	setTransactionAddress() {

	}

	// send(address, amount) {
	send(address, amount) {
		web3.eth.sendTransaction({
			gas: 300000,
            from: this.web3.eth.accounts[0],
            to: address,
            value: web3.toWei(amount, 'ether')
		}, (err, result) => {
            if (err) {
                console.log('Error: ' + err)
            }
            this.setState({ transactionAddress: result })
            console.log(result)
         })
	}

	render () {
		return (
			<div className="home">
				<div className="main-container">
					<div className="block">
						<label>
							<input onChange={ this.changeRecipient } value={ this.state.recipient } type="text" placeholder="Recivier address"/>
						</label>
						<label>
							<input onChange={ this.changeAmount } value={ this.state.amount } type="text" placeholder="Amount to send"/>
						</label>
						<button onClick={ ()  => { this.send(this.state.recipient, this.state.amount) } }>Send</button>
					</div>
					<div className="block">
						<a href=""></a>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));
