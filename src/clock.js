import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);   
    this.state = {
      time: this.getCurrentTime()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  getCurrentTime()
  {
    let today = new Date();
    today.setMinutes(today.getMinutes() + today.getTimezoneOffset() + parseInt(this.props.Offset));
    return today.toLocaleString();
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: this.getCurrentTime()
    });
  }  

  render() {
    return (
      <div className="w3-quarter w3-padding-small">       
      <div class="w3-card-2">            
      <div class="w3-blue w3-container">                    
        <header>
        <div onClick={this.props.removeClick} class="w3-button w3-red w3-small w3-right">×</div>
        <h5>
        {this.props.Country}        
        </h5>        
        </header>                           
      </div>                  
      <div class="w3-container w3-light-gray">
          <p>{this.state.time}</p>
          <img src={'https://www.countryflags.io/' + this.props.ISO + '/flat/64.png' }  />
      </div>
      <footer class="w3-container w3-blue">
          <h5>{this.props.Timezone}</h5>                            
        </footer>
      </div>
      </div>
    );
  }
}

export default Clock;