import React, { Component } from 'react';

class HdbBlock extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { block, streetName, town, postalCode,
            rank, score, mrtDistance, superMarketDistance,
            foodDistance, clinicDistance } = this.props;
        return (
            <div className="hdb_block border mb-3 row">
                <div className="border-right col-md-2">
                    <span className="text-big">#{rank}</span>
                </div>
                <div className="text-success col-md-8">
                    <div className="mt-2 mb-1 text-medium">Block {block}, {streetName}, {postalCode}</div>
                    <div className="text-small mb-1">
                        <span>MRT: {mrtDistance}m</span>
                        <span className="ml-2">Supermarket: {superMarketDistance}m</span>
                        <span className="ml-2">Food court: {foodDistance}m</span>
                        <span className="ml-2">Clinic: {clinicDistance}m</span>
                    </div>
                </div>
                <div className="border-left col-md-2">
                    <span className="text-big">{score}</span>
                </div>
            </div>

        );
    }
}

export default HdbBlock;
