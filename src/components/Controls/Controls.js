import React, { Component } from 'react';
import T from 'prop-types';
import styles from './Controls.module.css';

class Controls extends Component {
  static propTypes = {
    depositTransaction: T.func.isRequired,
    withdrawTransaction: T.func.isRequired,
  };

  state = {
    inputValue: '',
  };

  reset() {
    this.setState({
      inputValue: '',
    });
  }

  handleChangeInputValue = e => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    const { depositTransaction, withdrawTransaction } = this.props;
    const { inputValue } = this.state;

    return (
      <section className={styles.controls}>
        <input
          className={styles.input}
          type="number"
          name="amount"
          value={inputValue}
          onChange={this.handleChangeInputValue}
        />
        <button
          className={styles.button}
          type="button"
          onClick={() => {
            depositTransaction(Number(inputValue));
            this.reset();
          }}
        >
          Deposit
        </button>
        <button
          className={styles.button}
          type="button"
          onClick={() => {
            withdrawTransaction(Number(inputValue));
            this.reset();
          }}
        >
          Withdraw
        </button>
      </section>
    );
  }
}

export default Controls;
