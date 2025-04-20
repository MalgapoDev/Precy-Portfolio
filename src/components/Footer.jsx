import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Precy Ibarra Elebado</h4>
                    <p className="copyright">&copy; 2025 All rights reserved.</p>
                    <div className="quote-container">
                    </div>
                </div>
                
                <div className="footer-section">
                    <h4>Contact</h4>
                    <ul className="contact-list">
                        <li>
                            <i className="footer-icon email-icon"></i>
                            <a href="malgapomichaelmarc@gmail.com">precyelebado@gmail.com</a>
                        </li>
                        <li>
                            <i className="footer-icon phone-icon"></i>
                            <a href="tel:+639100000000">+63 910 000 0000</a>
                        </li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h4>Address</h4>
                    <address className="footer-address">
                        123 Karuhatan Valenzuela City
                        <br />Metro Manila Philippines 1200 <br />
                    </address>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>Civil Technology Student | Designed with <span className="heart">❤️</span> by Precy Ibarra Elebado</p>
            </div>
        </footer>
    );
}

export default Footer;