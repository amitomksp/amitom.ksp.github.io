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
    const imageUrl = 'https://plus.unsplash.com/premium_photo-1669324357471-e33e71e3f3d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    
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
