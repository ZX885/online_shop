import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './style/main.scss';

import Navbar from './components/nav/Navbar';
import Footer from './components/Footer/Footer';
import BtnScrollTop from './utils/Scroll_to_top';
import ScrollToTop from './utils/ScrollToTop';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contact';
import Project from './pages/Project';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 300,
            once: true,
            offset: 50,
            easing: 'ease-out',
            disable: 'mobile',
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
