import React, { Component } from 'react'
import { addDonation } from '../../actions';
import { connect } from 'react-redux';

export class Form extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      donation: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addDonation(this.state)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({
      name: '',
      donation: ''
    })
  }

  render() {
    return (
      <form>
        <input  
          type='text'
          placeholder='name...'
          name='name'
          onChange={(e) => this.handleChange(e)}
          value={this.state.name}
        />
        <input  
          type='text'
          placeholder='donation...'
          name='donation'
          onChange={(e) => this.handleChange(e)}
          value={this.state.donation}
        />
        <button
          onClick={(e) => this.handleSubmit(e)}
        >
          Make a Donation!
        </button>        
      </form>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  addDonation: (donation) => dispatch(addDonation(donation))
}); 

export default connect(null, mapDispatchToProps)(Form);
