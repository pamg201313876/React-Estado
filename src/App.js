import {UseState} from  './Components/UseState'
import {ClassState} from  './Components/ClassState'

import './App.css';

function App() {
  return (
    <div className="App">
      <UseState nombre={"UseState"}/>
      <ClassState nombre={"ClassState"}/>
    </div>
  );
}

export default App;
