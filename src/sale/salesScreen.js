import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SaleScreen extends Component {

    render() {
        return(
            <div className="saleScreen">
                <h1>Here is the sale screen</h1>
                <p><Link to="/">back to dashboard</Link></p>
            </div>
        )
    }
}

export default SaleScreen;