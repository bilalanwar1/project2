// app/about/page.tsx
import React from 'react';
import Header from '../components/header/header'; // Make sure this path is correct

const About = () => {
  return (
    <>
      <Header /> {/* Correctly render the Header component */}
      <div>About us</div>
    </>
  );
}

export default About;
