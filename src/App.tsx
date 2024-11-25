import React from 'react';
import { Button } from './components/Button';
import { MoneyFilter } from './components/Filter';

function App() {
  return (
    <div className="App">
      <MoneyFilter />
      <div>
        <Button name={'MyChanel-1'} />
        <Button name={'MyChanel-2'} />
      </div>
    </div>
  );
}

export default App;
