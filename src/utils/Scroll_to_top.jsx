import { useState, useEffect } from 'react';
import './btnScrollTop.scss';

const BtnScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            try {
                setIsVisible(window.scrollY > 300);
            } catch {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        try {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch {
            window.scrollTo(0, 0);
        }
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
