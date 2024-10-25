import React from 'react';
import Header from './components/header/header'; // Adjust the path as necessary
import Image from 'next/image';
import Footer from './components/header/footer';

const Home = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold text-center">This is Home Page</h1>
        <Image 
  src="/images/webimg.jpg" 
  alt="Description of the image"
  width={500} // Set a default width in pixels
  height={300} // Set a default height in pixels
  style={{ width: '100%', height: '10%' }} // Use CSS for dynamic scaling
/>      {/* Add other content here */}
      </div>
      <Footer/>
    </>
  );
}

export default Home;