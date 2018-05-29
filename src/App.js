import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import axios from 'axios';
import Coins from './components/Coins';
import Search from './components/Search';


const limit = 99999999   //NO LIMIT

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
      marketcap: undefined,
      error: undefined 
    }

    }

    componentWillMount(){
      axios.get(`https://api.coinmarketcap.com/v1/ticker/?limit=${limit}`)
      .then(res=> {
          // for particular coin only
          // var wanted = ["bitcoin", "ethereum", "litecoin"];
          // var result = res.data.filter(currency => wanted.includes(currency.id));
          this.setState({ data: res.data});

      });

    }

    handleChange(e){      
      this.setState({
        searchQuery: e.target.value
      }, () => {
        if (this.state.searchQuery && this.state.searchQuery.length > 1 ){
            this.getInfo()          
        } else if (!this.state.searchQuery){
          this.getInfo() 
        }
      } )
    } 



    getInfo = () =>{
      axios.get(`https://api.coinmarketcap.com/v1/ticker/${this.state.searchQuery}/`)
      .then(res=>{
        this.setState({
          data:res.data,
          error: ''
        })
      })
      .catch(error=>{
        this.setState({
          data : [],
          error : "Coin not found!"
        })
      })
    }



    render(){

      return(
        <div>
          
          <Title />
          <h1>You are searching for {this.state.searchQuery}</h1>

          <Form searchQuery={this.state.searchQuery} 
          handleChange={this.handleChange.bind(this)} 
          error={this.state.error}
          /*searchCoin={this.searchCoin.bind(this)}*/ 
          />
          <Coins data={this.state.data} />
        
        </div>

       );
      }
    }

  


export default App;
 