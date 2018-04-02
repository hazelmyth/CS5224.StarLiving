import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HdbBlock from './HdbBlock.js';
import SearchPanel from './SearchPanel.js';

import hdbBlocksData from './data';

localStorage.setItem('hdbBlocks', JSON.stringify(hdbBlocksData));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hdbBlocks: [],// JSON.parse(localStorage.getItem('hdbBlocks')),
      filteredHdbs: []
    };
    this.onSearch = this.onSearch.bind(this);
  }
  componentDidMount() {
    fetch(`/database`)
      .then(res => res.json())
      .then(resJson => {
        //console.log('get hdb blocks succeeds', resJson);
        this.setState({
          hdbBlocks: resJson
        });
        this.onSearch(10, 10, 10, 10, 10);
      });

  }
  onSearch(mrtIndex, marketIndex, foodIndex, clinicIndex, dengueIndex) {
    console.log('log to check hdb blocks', this.state.hdbBlocks.length);
    this.setState({
      filteredHdbs: this.state.hdbBlocks.map(b => {
        var s = (b.Mrt_Score * mrtIndex + b.Supermarket_Score * marketIndex + b.Foodcourt_Score * foodIndex
          + b.Clinic_Score * clinicIndex + b.Dengue_Score * dengueIndex) / 5;
        b.score = Math.round(s * 10) / 10;
        return b;
      })
        .sort((a, b) => -a.score + b.score)
        .slice(0, 50)
        .map(b => {
          var mrtArray = JSON.parse(b.Near_Mrts);
          b.mrtDistance = mrtArray.length > 0 ? mrtArray[0][1] : -1;

          var foodArray = JSON.parse(b.Near_Foodcourts);
          b.foodDistance = foodArray.length > 0 ? mrtArray[0][1] : -1;

          var clinicArray = JSON.parse(b.Near_Clinics);
          b.clinicDistance = clinicArray.length > 0 ? clinicArray[0][1] : -1;

          var marketArray = JSON.parse(b.Near_Supermarkets);
          b.superMarketDistance = marketArray.length > 0 ? marketArray[0][1] : -1;

          var dengueArray = JSON.parse(b.Near_Dengues);
          b.dengueDistance = dengueArray.length > 0 ? dengueArray[0][1] : -1;
          return b;
        })

    });
  }

  render() {
    return (
      <div className="App">
        <div className="banner text-left" >
          <span className="text-medium ml-2 mt-4"> Sweet Home Locator</span>
        </div>
        <div className="container mt-2">
          <div className="row">
            <div className="col-md-4">
              <SearchPanel
                onSearch={this.onSearch}
              >
              </SearchPanel>
            </div>
            <div className="col-md-8 block-list">
              {
                this.state.filteredHdbs.map((b, i) => {
                  return (
                    <HdbBlock key={i}
                      block={b.Block}
                      streetName={b.Street_Name}
                      town={b.town}
                      postalCode={b.Postal_Code}
                      rank={i + 1}
                      score={b.score}
                      mrtDistance={b.mrtDistance}
                      foodDistance={b.foodDistance}
                      clinicDistance={b.clinicDistance}
                      superMarketDistance={b.superMarketDistance}
                      dengueDistance={b.dengueDistance}
                    >
                    </HdbBlock>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
