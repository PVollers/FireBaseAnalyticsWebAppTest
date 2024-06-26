import React, { useEffect, useState } from 'react';
import { analytics } from '../../firebaseConfig';
import { logEvent,setUserId } from 'firebase/analytics';
import ButtonNext from '../Buttons/ButtonNext';
import ButtonBack from '../Buttons/ButtonBack';
import './HomePage.css';
import PinguinPic from '../../pictures/pinguin_p.png';
import ButtonCheck from '../Buttons/ButtonCheck';

interface ThirdPageProps{
  userId: string;
}


const ThirdPage: React.FC<ThirdPageProps> = ({userId}) => {
  useEffect(() => {
    console.log('ThirdPage rendered');
    //setUserId(analytics, userId);
    logEvent(analytics, 'ThirdPage_view', { page_title: 'Third_Page', user_Id: userId, });
  }, [userId]);

  const bildsymbol = 'pinguin';

  const[formData, setFormData] = useState('');
  const[hasError, setHasError] = useState(false);
  const[placehold, setPlaceHold] = useState('');
  const[isCorrect, setIsCorrect] = useState(true);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{

    setFormData(e.target.value);
    setHasError(false); // Fehlerzustand zurücksetzen, wenn der Benutzer tippt

  };
  const handleFocus = () => {
    setPlaceHold('');
  };

  const handleBlur = () => {
    if (formData === '') {
      setPlaceHold(placehold);
    }
  };

    // Callback-Funktion zum Leeren des Formulars
    const clearFormData = () => {
      setFormData('');
    };



  return(
    <div className = 'home-page'>
      <h1>Test-Seite "3"</h1>
      <h2>Was sehen Sie?</h2>
      <img src= {PinguinPic} alt = 'pinguin' /> 
      {isCorrect ? (
        <>
      <label htmlFor="name" className="label" >ich sehe einen...</label>
      <div className='input-container'>
        <input
          type="text"
          id="name"
          name="name"
          value={formData}
          onChange = {handleChange}
          className={hasError ? 'error' : ''}
          placeholder={placehold}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      <ButtonCheck 
      name = 'Check'  
      bildsymb = {bildsymbol} 
      formData={formData} 
      clearform = {clearFormData} 
      setHasError={setHasError}
      setPlaceHold = {setPlaceHold}
      setIsCorrect = {setIsCorrect}
      userId = {userId}
      page = 'SecondPage'
      />
      </div>
      </>
      ):(
        <p className="correct-text">Richtig!</p>
      )}
      <div className='button-container'>
      <ButtonBack name = 'Back' page = 'Third_Page' userId={userId}/>
      <ButtonNext name='Next' disabled={isCorrect} page = 'Third_Page' userId={userId}/>
     
      </div>
    </div>
  );
}

export default ThirdPage;














