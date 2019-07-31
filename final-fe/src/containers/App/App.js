import React from 'react';
import Display from '../../components/Display/Display';
import Form from '../Form/Form';
import { 
  getAnimals, 
  getDonations,
  postDonation } from '../../Utilz/apiCalls';
import { 
  loadAnimals, 
  loadDonations, 
  hasErrored, 
  doneLoading, 
  addDonation } from '../../actions';
import { connect } from 'react-redux';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.fetchAnimals()
    this.fetchDonations()
    if (this.props.animals && this.props.donations) {
      this.props.doneLoading()
    }
  }
  fetchAnimals() {
    getAnimals()
      .then(animals => this.props.loadAnimals(animals))
      .catch(error => this.props.hasErrored(error))
  }
  fetchDonations() {
    getDonations()
    .then(donations => this.props.loadDonations(donations))
    .catch(error => this.props.hasErrored(error))
  }
  addDonation(donation) {
    const donationWithId = {...donation, ID: Date.now()}
    postDonation(donationWithId);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>ANIMAL RESCUE</h1>
        </header>
        <Form donate={this.addDonation}/>
        <Display 
          animals={this.props.animals} 
          donations={this.props.donations}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  animals: state.animals,
  donations: state.donations
});

const mapDispatchToProps = (dispatch) => ({
  loadAnimals: (animals) => dispatch(loadAnimals(animals)),
  loadDonations: (donations) => dispatch(loadDonations(donations)),
  addDonation: (donation) => dispatch(addDonation(donation)),
  hasErrored: (error) => dispatch(hasErrored(error)),
  doneLoading: (bool) => dispatch(doneLoading(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
