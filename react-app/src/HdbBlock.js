import React, { Component } from 'react';

class HdbBlock extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { block, streetName, town, postalCode,
            rank, score, mrtDistance, superMarketDistance,
            foodDistance, clinicDistance, dengueDistance } = this.props;
        const mapLink = `http://www.google.com/maps/search/?api=1&query=${postalCode}`
        return (
            <div className="hdb_block border mb-3 row">
                <div className="border-right col-md-2">
                    <div className="text-small text-left">#{rank}</div>
                    <div className="score text-big">{score}</div>
                </div>
                <div className="text-success col-md-10">
                    <div className="mt-2 mb-1 text-medium">
                        <a target="_blank" href={mapLink}>
                            Block {block}, {streetName}, {postalCode}
                        </a>
                    </div>
                    <div className="text-small mb-1">
                        <span>MRT: {mrtDistance === -1 ? "--" : Math.ceil(mrtDistance) + "m"}</span>
                        <span className="ml-2">Supermarket: {superMarketDistance === -1 ? "--" : Math.ceil(superMarketDistance) + "m"}</span>
                        <span className="ml-2">Food court: {foodDistance === -1 ? "--" : Math.ceil(foodDistance) + "m"}</span>
                        <span className="ml-2">Clinic: {clinicDistance === -1 ? "--" : Math.ceil(clinicDistance) + "m"}</span>
                        <span className="ml-2">Dengue: {dengueDistance === -1 ? "--" : Math.ceil(dengueDistance) + "m"}</span>
                    </div>
                </div>
                {/* <div className="border-left col-md-2">
                </div> */}
            </div>

        );
    }
}

export default HdbBlock;
