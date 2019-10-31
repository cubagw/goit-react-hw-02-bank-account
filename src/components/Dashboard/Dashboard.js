import React, { Component } from 'react';
import shortid from 'short-id';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Controls from '../Controls/Controls';

// import Balance from '../Balance/Balance';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import styles from './Dashboard.module.css';

toast.configure({
  autoClose: 5000,
  draggable: false,
});

export default class Dashboard extends Component {
  state = {
    balance: 0,
    transactions: [],
  };

  depositTransaction = inputValue => {
    if (inputValue <= 0) {
      toast.info('Введите сумму для проведения операции!');
      return;
    }

    console.log(inputValue);
    const transaction = {
      id: shortid.generate(),
      type: 'Deposit',
      inputValue,
      date: new Date(),
    };
    this.setState(prevState => {
      prevState.transactions.push(transaction);
    });
    console.dir(this.state.transactions);
  };

  render() {
    const { balance, transactions } = this.state;
    return (
      <div className={styles.dashboard}>
        {/* <!-- Разметка компонента <Controls> --> */}
        <Controls
          depositTransaction={this.depositTransaction}
          withdrawTransaction={this.withdrawTransaction}
        />

        {/* <!-- Разметка компонента <Balance> --> */}
        <section className={styles.balance}>
          <span>⬆2000$</span>
          <span>⬇1000$</span>
          <span>Balance: 5000$</span>
        </section>

        {/* <!-- Разметка компонента <TransactionHistory> --> */}
        <TransactionHistory items={transactions} />
      </div>
    );
  }
}
