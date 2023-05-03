import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './styles/root.css'
import HeaderBars from './container/headerBar';
import Home from './container/homes'
import Abouts from './container/about';
import Habilidades from './container/habilidades';
//import Waves from './components/wave';
import Projets from './container/projets';
import Contacts from './container/contact';
import NavItems from './components/navItems';


function App() {



  useEffect(() => {
    AOS.init({})
    AOS.refresh()
  }, [])

  return (
    <>
      <HeaderBars />
      <section id='home'>
        <Home />
      </section>
      <div style={{ position: "relative", zIndex: 1 }}>
        <NavItems id={"abouts"}>
          <Abouts />
        </NavItems>
        <NavItems id={"habilidades"}>
          <Habilidades />
        </NavItems>
        <NavItems id={"projets"}>
          <Projets />
        </NavItems>
        <section id='contacts'>
          <Contacts />
        </section>

      </div>

    </>
  );
}

export default App;
