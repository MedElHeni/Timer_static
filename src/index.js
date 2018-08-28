import React from 'react';
import ReactDOM from 'react-dom';
import Time from './Time'

const App = () => {
  return <div>
    <Time ms={20010000} />
  </div>
}

ReactDOM.render(<App />, document.getElementById('root'));