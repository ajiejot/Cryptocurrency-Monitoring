import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import axios from 'axios';
import Coins from './components/Coins'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      data: [],
      searchQuery: '',
      id: undefined,
      name: undefined,
      symbol: undefined,
      rank: undefined,
      price: undefined,
      marketcap: undefined    
    }

    }

    componentWillMount(){
      axios.get(`https://api.coinmarketcap.com/v1/ticker/`)
      .then(res=> {
          // var wanted = ["bitcoin", "ethereum", "litecoin"];
          // var result = res.data.filter(currency => wanted.includes(currency.id));
          this.setState({ data: res.data});

      });

    }

    handleChange(e){
      this.setState({
        searchQuery: e.target.value
      })
      e.preventDefault()
    }

    searchCoin(e){
      e.preventDefault()
      const query = e.target.elements.query.value;
      axios.get(`https://api.coinmarketcap.com/v1/ticker/${query}/`)
      .then(res=>{
        if (query || query===''){
         this.setState({ data: res.data});
        }
         else {
           alert("enter please")
         }
      })
      .catch(error=>{
        alert("Invalid Coin Name!!")
      })
     
    }


    render(){

      return(
        <div>
          <Title />
          <h1>You are searching for {this.state.searchQuery}</h1>
          <Form searchQuery={this.state.searchQuery} handleChange={this.handleChange.bind(this)} searchCoin={this.searchCoin.bind(this)}/>
          <Coins data={this.state.data} />
        </div>

       );
      }
    }

  


export default App;
 