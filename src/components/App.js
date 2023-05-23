import React, { Component } from 'react';
import QueryBar from './QueryBar';
import RecallResults from './RecallResults';
import './../stylesheets/styles.scss'

class App extends Component {
    render(){
        return(
            <div>
                <h1>Hello Recall Project!</h1>
                <QueryBar/>
                <RecallResults/>
            </div>
        )
    }
}

export default App;