// components/Header.tsx
import React from 'react';
import Image from 'next/image'; // Import the Image component
import Link from 'next/link'; // Import the Link component
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Use the Image component to display the logo */}
        <Image
          src="/images/logo.png" // Path to your image in the public folder
          alt="Logo" // Alt text for accessibility
          width={150} // Specify the width of the image
          height={50} // Specify the height of the image
        />
        <nav>
          <ul className={styles.navLinks}>
            <li><Link href="/" className={styles.link}>Home</Link></li>
            <li><Link href="/services" className={styles.link}>Services</Link></li>
            <li><Link href="/about" className={styles.link}>About Us</Link></li>
            <li><Link href="/contact" className={styles.link}>Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
