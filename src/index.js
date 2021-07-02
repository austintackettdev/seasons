import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './spinner';


class App extends React.Component {


    state = {
        lat:null,
        errorMessage: ''
    }

    componentDidMount () {
        navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        ); 
    }

    renderContent() {
        if (!this.state.lat && !this.state.errorMessage) {
            return <Spinner
                message="Please Allow Location to Continue"
            />
        } else if (this.state.lat) {
            return <SeasonDisplay 
                        lat={this.state.lat}
                    />
        } else {
            return <div>ERROR: {this.state.errorMessage}</div>
        }
    }
  
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )                  
    }
    
}

ReactDOM.render(<App />, document.querySelector('#root'))

