# Ethereum payment form based on Express and React

## Install Metamask
Get Chrome extenstion from [metamask.io](https://metamask.io/)  
and create an account. Afterward our metamask account will connect  
with web3 module to generate and submit transactions.

## Generate Express React project
Create ethereumpayment directory. Run commands:  
$ npm install -g reactjs-express-generator  
$ regen  
[React Express generator](https://www.npmjs.com/package/reactjs-express-generator)  
  
This will create skeletor of our front-end and back-end logic. 

Our app will listen on port 3000. Run:  
$ npm start  

#### Styles
I will use plain css to create simple action button. 
In webpack.config.js:  
module: loaders: change **test: /\.scss$/** to **test: /\.css$/**  
Then in src/app/index.js:  
import './../public/css/main.css';

## Front view
In src/app/index.js  
import ReactDOM from 'react'; // to render view  
import Web3 from 'web3'; // web3 module to connect with metamask

#### App component
constructor:  
Set recipient and amount states  

Check for web3 connection  
If it's alright in console we get output:  
"Using web3 detected from external source like Metamask" and  
"Connected: true"  

Create changeRecipient() and changeAmount() functions to change  
states of recipient and amount

Create send() function. That function will handle the sending process  
To send ethers we will use web3's tools. So inside send() type  
web3.eth.sendTransaction(). This function accepts transaction object  
and callback as parameters. In transaction object we have to indicate  
gas amount to spend, 'from', 'to', and 'value' we send. Gas amount  
will get default value of 300000 wei, 'from' will get value of current  
Metamask account address, 'to' will get value from address input and  
'value' will be the amount input's value. Callback function will  
return us transaction's hash.

Afterward in render() create two input fields and one button. Fields  
for recipient address, transaction sum and action button  

Create one more **a** tag after form block. It will listen for  
result after send() and will output link to etherscan.io



