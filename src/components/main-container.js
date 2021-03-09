import React, { Component } from 'react';
import _ from 'lodash';
import Card from './card';
import axios from 'axios';



export default class MainContainer extends Component {
  constructor(){
    super();
    this.state = {
      coins:[],
    }
    this.url = 'https://thingproxy.freeboard.io/fetch/https://api.coinone.co.kr/ticker?currency=all'
    this.headers = {
      'content-type': 'application/json',
      'accept': 'application/json',
    };

    this.options = {
      headers: this.headers,
      timeout: 5000,
    };
  }
  currencies = {};

  getData(){
    axios.get(this.url,this.options)
    .then(result => {
      
      let data = result.data;
      let coins = [];
      Object.keys(data).map((k,i) => {
        if(data[k].last){
          coins.push(data[k]);
        }
      });
      this.setState({coins:coins});
    });
  }
  timer() {
    this.getData();
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 2000);
    this.getData();
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  renderCoinCard(){

    return _.map(this.state.coins, coin => {

      return(
        <Card key={coin.currency} coin={coin} />
      )
    });

  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="section">
              <h3 className="header">Cryptocurrency Monitor</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {this.state.coins.length > 0 && this.renderCoinCard()}
        </div>
      </div>
    );
  }
}
