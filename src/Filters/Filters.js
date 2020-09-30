import React, { Component } from 'react';
import './Filters.css'

class Filters extends Component {

    changePrintTypeSelection(value) {
        if (value === "None") {
            this.props.handlePrintTypeChange(null);
        } else {
            // find the country selected
            const printTypeUpdate = this.props.printTypeData.find(printType => printType === value);
            this.props.handlePrintTypeChange(printTypeUpdate);
        }
    }

    changeFilterSelection(value) {
        if (value === "None") {
            this.props.handleFilterChange(null);
        } else {
            // find the country selected
            const filterUpdate = this.props.FilterData.find(filter => filter === value);
            this.props.handleFilterChange(filterUpdate);
        }
    }

    render() {
        const filters = this
            .props
            .FilterData
            .map(
                (filter, idx) => <option value={filter} key={idx}>{filter}</option>
            );
        const printType = this
            .props
            .printTypeData
            .map(
                (type, idx) => <option value={type} key={idx}>{type}</option>
            );
        return (
            <div className="filter_selector">
                <form>
                    <label htmlFor="print type">Print Type:</label>
                    <select
                        id="print type"
                        name="print type"
                        onChange={e => this.changePrintTypeSelection(e.target.value)}>
                        <option value="None">Select one...</option>
                        {printType}
                    </select>
                    <label htmlFor="book type">Book Type:</label>
                    <select
                        id="book type"
                        name="book type"
                        onChange={e => this.changeFilterSelection(e.target.value)}>
                        <option value="None">Select one...</option>
                        {filters}
                    </select>
                </form>
            </div>
        );
    }
}

export default Filters;