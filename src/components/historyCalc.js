import React, { Component } from 'react'
import { setState } from 'react'
import ReactDOM from 'react-dom'
import App from '../App.js'


export default class HistoryCalc extends React.Component {
    constructor(props) {
       super(props);
       this.state = { historyDisplay : false }
       this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.state.historyDisplay === true ? this.setState({ historyDisplay : false}) : this.setState({historyDisplay : true})
    }


        render() {
            return(
            <div>
                <div className="history"> 
                    { this.state.historyDisplay === true ?

                    this.props.history : <h3></h3>

                    }
                </div>
                <label for="img">
                    <input onClick={this.handleClick} type="submit" name="submit" id="img" value="img-btn"/>
                    <img src="https://cdn.onlinewebfonts.com/svg/img_530089.png" width="5%" height="35%"  id="img"/>
                </label>
            </div>)
        }
     }


