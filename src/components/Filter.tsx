import { useState } from 'react';
import { Button } from './Button';
type FilterBtnNameType = 'all' | 'ruble' | 'dollar' | 'euro';

const money = [
  { banknote: 'dollar', nominal: 100, serialNumber: '12345a' },
  { banknote: 'dollar', nominal: 120, serialNumber: '12345b' },
  { banknote: 'dollar', nominal: 130, serialNumber: '12345c' },
  { banknote: 'ruble', nominal: 140, serialNumber: '12345d' },
  { banknote: 'ruble', nominal: 150, serialNumber: '12345e' },
  { banknote: 'ruble', nominal: 160, serialNumber: '12345f' },
  { banknote: 'euro', nominal: 170, serialNumber: '12345g' },
  { banknote: 'euro', nominal: 180, serialNumber: '12345h' },
];

export const MoneyFilter = () => {
  let [currentMoney, setCurrentMoney] = useState(money);
  let [nameFilterButton, setNameFilterButton] = useState('all');

  let filteredCurrentMoney = currentMoney;

  if (nameFilterButton === 'dollar') {
    filteredCurrentMoney = currentMoney.filter(
      (account) => account.banknote === 'dollar'
    );
  }

  if (nameFilterButton === 'ruble') {
    filteredCurrentMoney = currentMoney.filter(
      (account) => account.banknote === 'ruble'
    );
  }

  if (nameFilterButton === 'euro') {
    filteredCurrentMoney = currentMoney.filter(
      (account) => account.banknote === 'euro'
    );
  }

  const onClickFilterHander = (nameBtn: FilterBtnNameType) => {
    setNameFilterButton(nameBtn);
  };

  return (
    <>
      <ul>
        {filteredCurrentMoney.map((account) => {
          return (
            <li key={account.serialNumber}>
              <span>{account.banknote} </span>
              <span>{account.nominal} </span>
              <span>{account.serialNumber} </span>
            </li>
          );
        })}
      </ul>

      <button
        onClick={() => {
          onClickFilterHander('all');
        }}
      >
        all
      </button>
      <button
        onClick={() => {
          onClickFilterHander('dollar');
        }}
      >
        dollar
      </button>
      <button
        onClick={() => {
          onClickFilterHander('ruble');
        }}
      >
        ruble
      </button>
      <button
        onClick={() => {
          onClickFilterHander('euro');
        }}
      >
        euro
      </button>
    </>
  );
};
