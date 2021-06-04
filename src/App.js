
import './App.css';

import Form from '../src/components/form/Form'
import Data from '../src/components/data/Data'

function App() {
  return (
    <div className="container">
      <div className="container-bingkai">
        <div className="container1">
          <Form />
        </div>
        <div className="container2">
          <Data />
        </div>
      </div>
       
    </div>
  );
}

export default App;
