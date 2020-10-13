import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Layout from './src/components/Layout';

class App extends React.Component {
    render() {
        return (
            <Layout />
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));