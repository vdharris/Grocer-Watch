import React, { Component } from 'react';
import QueryContainer from './QueryContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import RecallResults from './RecallResults';
import '../stylesheets/styles.scss'


class App extends Component {
    render() {
        return (
            <div className='page'>
                <BrowserRouter>
                    <div>
                        <Routes>
                            <Route path='/' element={<QueryContainer />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;