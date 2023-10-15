
import { useState } from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Page from './components/Page/Page';



function App() {

  const [burger, setBurger] = useState(false);

  return (
    <div className="App">
      <Header value={burger} set={setBurger} />
      <Page value={burger} />
      <Footer value={burger} />
      
    </div>
  );
}

export default App;
