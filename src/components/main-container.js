import React, { Component } from 'react';
import _ from 'lodash';
import Card from './card';

export default class MainContainer extends Component {
  constructor(){
    super();
    this.state = {
      coins:[],
    }
  }
  currencies = {};
  timer() {
    fetch('https://api.coinone.co.kr/ticker?currency=all')
    .then(results => {
      return results.json();
    }).then(data => {
      let coins = [];
      Object.keys(data).map((k,i) => {
        if(data[k].last){
          coins.push(data[k]);
        }
      });
      this.setState({coins:coins});
    });
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1500);
    fetch('https://api.coinone.co.kr/ticker?currency=all')
    .then(results => {
      return results.json();
    }).then(data => {
      var coins = []
      Object.keys(data).map((k,i) => {
        if(data[k].last){
          coins.push(data[k]);
        }
      });
      this.setState({coins:coins});
    });
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }
  // componentDidUpdate(prevProps, prevState, snapshot){
  //   if (!prevState.coins.length){
  //     return;
  //   }
  //   for(var i = 0; i<this.state.coins.length; i++ ) {
  //       if (this.state.coins[i].last !== prevState.coins[i].last){
  //         console.log("different");
  //       }
  //     }
  // }

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
