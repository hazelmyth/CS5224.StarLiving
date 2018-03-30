import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HdbBlock from './HdbBlock.js';
import SearchPanel from './SearchPanel.js';
//import home from './home.png';

import hdbBlocksData from './data';

localStorage.setItem('hdbBlocks', JSON.stringify(hdbBlocksData));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hdbBlocks: JSON.parse(localStorage.getItem('hdbBlocks'))
    };
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch(mrtIndex, marketIndex, foodIndex, clinicIndex) {
    console.log('log this.state', this.state);
    this.setState({
      hdbBlocks: this.state.hdbBlocks.map(b => {
        var s = (b.mrtScore * mrtIndex + b.marketScore * marketIndex + b.foodScore * foodIndex + b.clinicScore * clinicIndex) / 4;
        b.score = Math.round(s * 10) / 10;
        return b;
      })
        .sort((a, b) => -a.score + b.score)

    })
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
            <div className="col-md-8">
              {
                this.state.hdbBlocks.map((b, i) => {
                  return (
                    <HdbBlock key={b.postalCode}
                      block={b.block}
                      streetName={b.streetName}
                      town={b.town}
                      postalCode={b.postalCode}
                      rank={i + 1}
                      score={b.score}
                      mrtDistance={b.mrtDistance}
                      foodDistance={b.foodDistance}
                      clinicDistance={b.clinicDistance}
                      superMarketDistance={b.superMarketDistance}
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
