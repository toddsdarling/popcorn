import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SaleScreenDropdown extends Component {
    
    renderOption(item) {

        // var selected = item.value === this.props.selectedValue ? ' selected' : '';
        return(            
            <option value={item.value}>{item.label}</option>
        )
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <select value={this.props.selectedValue} name={this.props.name} id={this.props.id}>
                    <option value="">select...</option>
                    {this.props.typeValues.map(this.renderOption, this)}
                </select>                            
            </div>
        );
    }
}

SaleScreenDropdown.propTypes = {
    selectedValue: PropTypes.string
}

SaleScreenDropdown.defaultProps = {
    selectedValue: ''
}

export default SaleScreenDropdown;