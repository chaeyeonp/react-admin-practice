// in src/App.js
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import adminPage from './adminPage';


class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/" component={adminPage}/>
            </Router>
        )
    }
}

export default App;
