import React, {Component} from 'react';
import './App.css';
import Modal from './Components/Common/Modal/Modal';

export default class App extends Component {
  state = {
    showModal: false
  }
  render() {
    return (
      <div className="App">
        <button className="btn btn-primary" onClick={() => this.setState({showModal: true})}>
          Оплатить картой
        </button>
          <Modal
            showModal={this.state.showModal}
            handleCloseModal={() => this.setState({ showModal: false })}
          />
      </div>
    );
  }
}
