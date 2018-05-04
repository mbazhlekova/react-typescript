import * as React from 'react';
import './App.css';

import Hello from './Hello/Hello';

class App extends React.Component {
  public render() {
    return <Hello name="Typescript" enthusiasmLevel={10} />;
  }
}

export default App;
