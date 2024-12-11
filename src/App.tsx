import React from 'react';
import { Button } from './components/Button';
import { MoneyFilter } from './components/Filter';
import { Tasks } from './components/Tasks/Tasks';
import { dataTasks1, dataTasks2 } from './components/Tasks/tasksData';
import { Messages } from './components/Input/Messages';
import App1 from './add__tasks/01__03/src/AddTask__01__03';

function App() {
  return (
    <div className="App">
      {/* <MoneyFilter /> */}
      <div>
        {/* <Button name={'MyChanel-1'} />
        <Button name={'MyChanel-2'} /> */}
      </div>
      {/* <Tasks data={dataTasks1} /> */}
      {/* <Tasks data={dataTasks2} /> */}
      {/* <Messages /> */}
      <App1/>
    </div>
  );
}

export default App;
