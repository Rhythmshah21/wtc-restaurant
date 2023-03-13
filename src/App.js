
import './App.css';
import Cards from './components/Cards';
import { Food } from './components/Food';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Cards/>
      <Food/>
    </div>
 
  );
}

export default App;
