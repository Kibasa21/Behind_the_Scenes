import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';
import { log } from './log.js';

function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter setChosenCount={setChosenCount} />
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
