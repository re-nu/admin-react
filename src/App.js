import AppBar from '@mui/material/AppBar';
import './App.css';
import Toolbar from '@mui/material/Toolbar';
import { TopBar } from './TopBar';
import { TopCard } from './TopCard';
import { Graph } from './Graph';
import { Projects } from './Projects';
import { RightCards } from './RightCards';

function App() {
  return (
    <div className="App">
      <div className='side-bar-left'>
        <h2>😉 SB Admin 2</h2>
      </div>
      <div className='side-right'>
           <TopBar/>
           <TopCard/>
           <Graph/>
           <div className='right-left'>
             <div className='right-part'><Projects/></div>
             <div className='left-part'><RightCards/></div>
           </div>
      </div>
    </div>
  );
}

export default App;


