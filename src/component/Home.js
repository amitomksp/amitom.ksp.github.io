import React, { useEffect, useState } from 'react';
import "./css/Home.css"
import homeimg from "../images/about.png";

const AnimatedText = () => {
  const [words, setWords] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const text = "A web Developer and DevOps engineer";
    const wordArray = text.split(" ");

    const interval = setInterval(() => {
      if (index < wordArray.length) {
        setWords(prevWords => [...prevWords, wordArray[index]]);
        setIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 600);

    return () => clearInterval(interval);
  }, [index]);


  return (
    <div>
      {words.map((word, index) => (
        <span key={index}>
          {word}{' '}
        </span>
      ))}
    </div>
  );
};

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  // for resume showing
  const shoot = () => {
    const imageUrl = 'https://drive.google.com/file/d/1RYGmr-KTs9VmUCje25PzHe9eVESHhpwN/view?usp=sharing';
    
    // Open the image in a new tab for viewing
    window.open(imageUrl, '_blank');
  }
  // for detecting window is mobile or desktop
  useEffect(() => {
    const handleResize = () => {
      // Check if the window width is less than or equal to 640px (mobile size)
      setIsMobile(window.innerWidth <= 640);
    };
  
    // Initialize on mount
    handleResize();
  
    // Attach the resize event listener
    window.addEventListener('resize', handleResize);
  
    // Clean up event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (<>
    {isMobile ? (
      // Render this block for mobile window
    <div className="homecontainer background-image">
      <div className="homeright">
        <h1 className='name'>"Hello!, i'm " <strong className='green'>Amit Kumar"</strong>
          <span className='animate'><AnimatedText /></span>
          
          
        </h1>
      </div>
    </div>
    ) : (
         // Render this block for desktop or tablet window
    
    <div className="homecontainer background-image">
      <div className="homeleft">
        <div className="profile-circle">
          <img src={homeimg} alt="" />
        </div>
      </div>
      <div className="homeright">
        <h1 className='name'>" Hello!, i'm " <strong className='green'>Amit Kumar"</strong>
          <span className='animate'><AnimatedText /></span>
          
          
        </h1>
        <div className="btn-con"  >
  <button href="" className="main-btn hover:bg-gray-800"  onClick={shoot}>
   VIEW RESUME
  </button>
</div>
      </div>
    </div>
    )}
    </>
  )
}

export default Home;
