import React, { Component, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import ReactLoading from 'react-loading';
import 'normalize.css';
import './App.scss';
import VisibleCampaignList from './containers/VisibleCampaignList.jsx';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
          isLoading: true
        }
    }

    render() {
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 2000);

        return (
            <div className="App">
                <h1> Campaignify </h1>
                {this.state.isLoading ? (
                    <ReactLoading className="app-loader" type={"spinningBubbles"} color={"#e63946"} />
                ) : (
                    <VisibleCampaignList />
                )}
            </div>
        );
    }
}

export default hot(App);
