import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signin from './components/Signin';
import { Route, Routes } from 'react-router-dom';
import Statebasics from './components/Statebasics';
import Counter from './components/Counter';
import Statebasicseg from './components/Statebasicseg';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Statebasics/>
     <Counter/>
      {/* <Routes>
      <Route path='/login' element={<Login/>}/>
        
      <Route path='/signin' element={<Signin/>}/>
      
     </Routes>  */}
     <Statebasicseg/>
    </div>
  );
}

export default App;
