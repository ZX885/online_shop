// import './style/main.scss'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Navbar from './components/nav/Navbar'
// import Footer from './components/Footer/Footer'
// import Home from './pages/Home';
// import Projects from './pages/Projects';
// import Contacts from './pages/Contact';
// import Project from './pages/Project';

// import ScrollToTop from './utils/Scroll_to_top';

// function App() {
//   return (
//     <div className='App'>
//       <Router>
//         < ScrollToTop />
//         <Navbar />

//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/projects' element={<Projects />} />
//           <Route path='/project/:id' element={<Project />} />
//           <Route path='/contacts' element={<Contacts />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Импорт стилей анимаций AOS

import './style/main.scss';

import Navbar from './components/nav/Navbar';
import Footer from './components/Footer/Footer';
import BtnScrollTop from './utils/Scroll_to_top';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contact';
import Project from './pages/Project';

import ScrollToTop from './utils/Scroll_to_top';

function App() {
  // Инициализация анимаций AOS при запуске
  useEffect(() => {
    AOS.init({
      duration: 350, // Уменьши длительность с 800мс до 400мс (будет откликаться в 2 раза быстрее)
      once: true,    // Не проигрывать анимацию повторно при скролле вверх-вниз
      offset: 50,    // Запускать анимацию чуть раньше, когда элемент показался на 50px
      easing: 'ease-out',
    });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 300,
      once: true,
      disable: 'mobile' // 🚀 Отключает тяжелые JS-анимации на телефонах, плавно и быстро!
    });
  }, []);

  return (
    <div className='App'>
      <Router>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:id' element={<Project />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>

        <Footer />

        <BtnScrollTop />
      </Router>
    </div>
  );
}

export default App;