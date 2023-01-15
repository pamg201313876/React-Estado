import {UseState} from  './Components/UseState'
import {ClassState} from  './Components/ClassState'

import './App.css';
import { UseReducer } from './Components/UseReducer';

function App() {
  return (
    <div className="App">
      {/* <UseState nombre={"UseState"}/> */}
      <UseReducer nombre={"UseReducer"}/>
    </div>
  );
}

export default App;
