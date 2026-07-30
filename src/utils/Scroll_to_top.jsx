import { useState, useEffect } from 'react';
import './btnScrollTop.scss';

const BtnScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Показываем кнопку, если отскроллили больше 300px
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Плавный скролл наверх
        });
    };

    return (
        <button
            type="button"
            className={`scroll-top-btn ${isVisible ? 'scroll-top-btn--visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 15l-6-6-6 6"/>
            </svg>
        </button>
    );
};

export default BtnScrollTop;