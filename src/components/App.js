import React, { Component } from 'react';
import QueryBar from './QueryBar';
// import RecallResults from './RecallResults';
import './../stylesheets/styles.scss'

class App extends Component {
    render(){
        return(
            <div className='title'>
                <h1 id='title'>Recallinator 2000</h1>
                <QueryBar/>
            </div>
        )
    }
}

export default App;