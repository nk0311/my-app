import React from 'react';
import './App.css';
import Clock from "./Clock";
// import { render } from '@testing-library/react';


function App() {
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Navait',
  lastName: 'Kumar'
};

const element = (
<h1>Hello, {formatName(user)}!</h1>
);

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(element);
//root.render(<Clock />);

return (
  <div>
  <h1>{element}</h1>
    <Clock/>
  </div>
);
}

export default App;
