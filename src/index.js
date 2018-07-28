import React from "react";
import ReactDOM from "react-dom";
import Clock from './clock'
import timezone from './timezone.json'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.addTimeZone = this.addTimeZone.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            clocks: [],
            selectedClock: 'Asia/Kabul'
        };
    }

    handleChange(e) {
        this.setState({ selectedClock: e.target.value });
    }

    addTimeZone() {
        if (this.state.clocks.findIndex(c => c.Timezone == this.state.selectedClock) < 0) {
            let zone = timezone.find(k => k.Timezone == this.state.selectedClock);
            this.setState(prevState => ({
                clocks: [...prevState.clocks, zone]
              }));
        }
    }

    removeClick(zone)
    {
        let updateClocks = this.state.clocks;
        let index = updateClocks.findIndex(t => t.Timezone === zone);
        updateClocks.splice(index,1)
        this.setState({
            clocks: updateClocks
        });
    }


    render() {
        let optionItems = timezone.map((zone) =>
            <option value={zone.Timezone} key={zone.Timezone} onChange={this.handleChange}>{zone.Country}-{zone.Timezone}</option>
        );

        let clocks = this.state.clocks.map((zone) =>
            <Clock {...zone} key={zone.Timezone} removeClick={()=>this.removeClick(zone.Timezone)} />
        )

        return (
            <div className="w3-container">
                <div>
                    <p> 
                        <select value={this.state.selectedClock} onChange={this.handleChange} >
                            {optionItems}
                        </select>
                    </p>
                    <p>
                        <button onClick={this.addTimeZone} className="w3-btn w3-blue">ADD CLOCK </button>
                    </p>
                </div>
                {clocks}
            </div>
        );
    }
}



ReactDOM.render(<App />, document.getElementById("index"));
