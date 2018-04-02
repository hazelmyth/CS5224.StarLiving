import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';

const items = [];
for (let i = 0; i <= 10; i++) {
    items.push(<MenuItem value={i} key={i} primaryText={`${i}`} />);
}


class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mrtWeight: 10,
            marketWeight: 10,
            foodWeight: 10,
            clinicWeight: 10,
            dengueWeight: 10
        };
    }
    handleMrtChange = (event, index, value) => this.setState({ mrtWeight: Number(value) });
    handleMarketChange = (event, index, value) => this.setState({ marketWeight: Number(value) });
    handleFoodChange = (event, index, value) => this.setState({ foodWeight: Number(value) });
    handleClinicChange = (event, index, value) => this.setState({ clinicWeight: Number(value) });
    handleDengueChange = (event, index, value) => this.setState({ dengueWeight: Number(value) });
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSearch(this.state.mrtWeight, this.state.marketWeight, this.state.foodWeight,
            this.state.clinicWeight, this.state.dengueWeight);
        console.log('check state', this.state);
    }
    render() {
        return (

            <form className="border" onSubmit={this.onSubmit}>
                <p>Degree of Importance</p>
                <div className="col-md-6">MRT Station:</div>
                <div className="col-md-6">
                    <MuiThemeProvider>
                        <DropDownMenu className="weight-dropdown" maxHeight={300} autoWidth={false}
                            value={this.state.mrtWeight} onChange={this.handleMrtChange}>
                            {items}
                        </DropDownMenu>
                    </MuiThemeProvider>
                </div>
                <div className="col-md-6">Supermarket:</div>
                <div className="col-md-6">
                    <MuiThemeProvider>
                        <DropDownMenu className="weight-dropdown" maxHeight={300} autoWidth={false}
                            value={this.state.marketWeight} onChange={this.handleMarketChange}>
                            {items}
                        </DropDownMenu>
                    </MuiThemeProvider>
                </div>
                <div className="col-md-6">Food Court:</div>
                <div className="col-md-6">
                    <MuiThemeProvider>
                        <DropDownMenu className="weight-dropdown" maxHeight={300} autoWidth={false}
                            value={this.state.foodWeight} onChange={this.handleFoodChange}>
                            {items}
                        </DropDownMenu>
                    </MuiThemeProvider>
                </div>
                <div className="col-md-6">Polyclinic:</div>
                <div className="col-md-6">
                    <MuiThemeProvider>
                        <DropDownMenu className="weight-dropdown" maxHeight={300} autoWidth={false}
                            value={this.state.clinicWeight} onChange={this.handleClinicChange}>
                            {items}
                        </DropDownMenu>
                    </MuiThemeProvider>
                </div>
                <div className="col-md-6">Dengue:</div>
                <div className="col-md-6">
                    <MuiThemeProvider>
                        <DropDownMenu className="weight-dropdown" maxHeight={300} autoWidth={false}
                            value={this.state.dengueWeight} onChange={this.handleDengueChange}>
                            {items}
                        </DropDownMenu>
                    </MuiThemeProvider>
                </div>
                <button className="btn btn-outline-info btn-width mb-2">Search HDB</button>
            </form>
        );
    }
}

export default SearchPanel;