import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import our components
import SaleScreenDropdown from './saleScreenDropdowns';
import MapComponent from '../map/mapComponent';

const saleTypeValues = [
    {
        value: 'made-sale',
        label: 'Made a sale!'
    },
    {
        value: 'no-sale',
        label: 'No Sale'
    },
    {
        value: 'no-answer',
        label: 'No Answer'
    }
];

const paidTypeValues = [
    {
        value: 'paid-yes',
        label: 'Yes'
    },
    {
        value: 'paid-no',
        label: 'No'
    }
];

const deliveredTypeValues = [
    {
        value: 'delivered-yes',
        label: 'Delivered'
    },
    {
        value: 'delivered-no',
        label: 'Not Delivered Yet/Take Order'
    }
];



class SaleScreen extends Component {

    render() {
        return(
            <div className="saleScreen">
                <h1>Here is the sale screen</h1>
                <div>
                    <MapComponent
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}                    
                    ></MapComponent>
                </div>
                <div>
                    <SaleScreenDropdown id="saleType" selectedValue="no-sale" name="saleType" label="Response" typeValues={saleTypeValues}></SaleScreenDropdown>
                </div>
                <div>item grid here only shows when you make a sale</div>
                <div>
                    <SaleScreenDropdown id="paidType" selectedValue="paid-yes" name="paidType" label="Paid?" typeValues={paidTypeValues}></SaleScreenDropdown>
                </div>
                <div>
                    <SaleScreenDropdown id="deliverType" selectedValue="delivered-yes" name="deliverType" label="Delivered?" typeValues={deliveredTypeValues}></SaleScreenDropdown>
                </div>                                
                <p><Link to="/">back to dashboard</Link></p>
            </div>
        )
    }
}

export default SaleScreen;