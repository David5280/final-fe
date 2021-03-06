import React, { Component } from 'react'
import { addDonation } from '../../actions';
import { connect } from 'react-redux';
import './Form.css';

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
    this.props.donate(this.state)
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
          className='form-input'
        />
        <input  
          type='text'
          placeholder='donation...'
          name='donation'
          onChange={(e) => this.handleChange(e)}
          value={this.state.donation}
          className='form-input'
        />
        <button
          onClick={(e) => this.handleSubmit(e)}
          className='form-input'
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
