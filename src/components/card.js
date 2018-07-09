import React, { Component } from 'react';

export default class Card extends Component {

  constructor(){
    super()
    this.state = {blink:false}
  }
  shouldComponentUpdate(nextProps, nextState) {


      if (this.props.coin.last !== nextProps.coin.last ||
        this.props.coin.yesterday_last !== nextProps.coin.yesterday_last ||
        this.props.coin.volume !== nextProps.coin.volume
      ){
       this.setState({blink: true});
       this.timeoutId= setTimeout(function () {
        this.setState({blink: false});
      }.bind(this), 1000);
      }


      return true;
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
  }
  render() {
    return (
      <div key={this.props.coin.currency} className="col m3">
          <div className={"card blue-grey darken-1 " + (this.state.blink ? 'blink' : null)}>

          <div className="card-content white-text">
            <span className="card-title">{this.props.coin.currency}</span>

            <ul className="card-content-list">
              <li><label>NOW</label> : ₩{String(this.props.coin.last).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</li>
              <li><label>-24H</label> : ₩{String(this.props.coin.yesterday_last).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</li>
            </ul>
          </div>
          <div className="card-action">
            <label>Volume <br/> {parseFloat(this.props.coin.volume).toLocaleString()}</label>
          </div>
        </div>
      </div>
    );
  }
}
