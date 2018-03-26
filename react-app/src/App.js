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
      hdbBooks: JSON.parse(localStorage.getItem('hdbBlocks'))
    };
  }
  componentWillMount() {
  }
  componentDidMount() {
    // fetch('/api')
    //   .then(res => res.json())
    //   .then(j => this.setState({
    //     message: j.message
    //   }));
  }

  render() {
    return (
      <div className="App">
        <h1>Swee Home Locator</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <SearchPanel></SearchPanel>
            </div>
            <div className="col-md-8">
              {
                this.state.hdbBooks.map(b => {
                  return (
                    <HdbBlock key={b.postalCode}
                      block={b.block}
                      streetName={b.streetName}
                      town={b.town}
                      postalCode={b.postalCode}
                      rank={b.rank}
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
