import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {

    render() {
        return(            
                <div className="dashboard">
                    <p><Link to="/sale/new">Make Sale</Link></p>
                </div>
        )
    }
}

export default Dashboard;