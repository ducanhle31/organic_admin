import "./style.css"
import React, { useState, useEffect } from 'react';
import ShowAlertSuccess from "./components/Alert/component/ShowAlert";
import ShowAlertError from "./components/Alert/component/ShowAlertError";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Router from "./components/Router";
function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Add an event listener to check if the user has scrolled
    const handleScroll = () => {
      if (window.pageYOffset > 300) { // Change this value to adjust when the button appears
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Header />
      <Router />
      <ShowAlertSuccess />
      <ShowAlertError />
      <Footer />
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="back-to-top-button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z" />
          </svg>
        </button>
      )}
    </>
  );
}
export default App;
