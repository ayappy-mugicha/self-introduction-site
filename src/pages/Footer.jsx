// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // 後でCSSを作成します

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} My Awesome Homepage. All rights reserved.</p>
    </footer>
  );
}

export default Footer;