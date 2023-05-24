import React, { Component } from 'react';
import QueryContainer from './QueryContainer';
// import RecallResults from './RecallResults';
import '../stylesheets/styles.scss'

class App extends Component {
    render(){
        return(
            <div className='page'>
                <div className ='head'>
                <h1 id='title'>Grocery Store Recalls</h1>
                </div>
                <QueryContainer/>
            </div>
        )
    }
}

export default App;