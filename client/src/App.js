import React from 'react';
import './App.css';
import Jobs from './Jobs';

const mockJobs = [
{title:'SWE 1', company:'Google'},
{title:'SWE 2', company:'facebook'},
{title:'SWE 3', company:'Amazon'}
]
function App() {
  return (
    <div className="App">
       <Jobs jobs= {mockJobs}/>
    </div>
  );
}

export default App;
