import React from 'react';

const Footer: React.FC = () => {
  const footerStyles: React.CSSProperties = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 0',
    textAlign: 'center' as React.CSSProperties['textAlign'], // Type assertion
  };

  return (
    <footer style={footerStyles}>
      <p>© {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
};

export default Footer;
