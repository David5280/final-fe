import React from 'react';
import { getAnimals } from '../Utilz/apiCalls';
import { loadAnimals, hasErrored } from '../actions';
import { connect } from 'react-redux';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    getAnimals()
    .then(data => this.props.loadAnimals(data))
    .catch(error => this.props.hasErrored(error))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>ANIMAL RESCUE</h1>
        </header>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// });

const mapDispatchToProps = (dispatch) => ({
  loadAnimals: (animals) => dispatch(loadAnimals(animals)),
  hasErrored: (error) => dispatch(hasErrored(error))
})

export default connect(null, mapDispatchToProps)(App);
