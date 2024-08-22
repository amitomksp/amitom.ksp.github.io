import React, { useEffect, useState } from 'react';
import "./css/Home.css"
import profile from "../images/about.png";

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
  const shoot = () => {
    const imageUrl = 'https://drive.google.com/file/d/1RYGmr-KTs9VmUCje25PzHe9eVESHhpwN/view?usp=sharing';
    
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = 'image_name.jpg'; // You can set the downloaded image's filename here
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  return (
    <div className="homecontainer background-image">
      <div className="homeleft">
        <div className="profile-circle">
          <img src={profile} alt="" />
        </div>
      </div>
      <div className="homeright">
        <h1 className='name'>" Hello!, i'm " <strong className='green'>Amit Kumar"</strong>
          <span className='animate'><AnimatedText /></span>
          
          
        </h1>
        <div className="btn-con"  >
  <button href="" className="main-btn"  onClick={shoot}>
   VIEW RESUME
  </button>
</div>

        
      </div>
    </div>
  )
}

export default Home;
