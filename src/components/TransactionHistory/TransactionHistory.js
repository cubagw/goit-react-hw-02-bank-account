import React from 'react';
import T from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) =>
  items.map(item => {
    return (
      <table key={item.id} className={styles.history}>
        <thead>
          <tr>
            <th>Transaction</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody className={styles.historyTd}>
          <tr>
            <td className={styles.historyTd}>{item.type}</td>
            <td className={styles.historyTd}>{item.inputValue}$</td>
            <td className={styles.historyTd}> {item.date}</td>
          </tr>
        </tbody>
      </table>
    );
  });

TransactionHistory.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      type: T.string.isRequired,
      amount: T.string.isRequired,
      date: T.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
