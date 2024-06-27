import React, { useEffect, useState } from 'react';
import { analytics } from '../../firebaseConfig';
import { logEvent} from 'firebase/analytics';
import ButtonNext from '../Buttons/ButtonNext';
import ButtonBack from '../Buttons/ButtonBack';
import './HomePage.css';
import TigerPic from '../../pictures/Tiger_Pic';
import ButtonCheck from '../Buttons/ButtonCheck';


interface SecondPageProps {
  userId: string;
}

const SecondPage: React.FC<SecondPageProps> = ({ userId }) => {
  useEffect(() => {
    console.log('SecondPage rendered');
    //setUserId(analytics, userId);
    //setUserId(analytics, userId);
    logEvent(analytics, 'SecondPage_view', { page_title: 'Second_Page', user_Id: userId });
    //logEvent(analytics, 'page_view', { page_title: 'Second_Page',  userId });
  }, [userId]);

 const bildsymbol = 'tiger';

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
      <h1>Test-Seite "2"</h1>
      <h2>Was sehen Sie?</h2>
      <TigerPic />   
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
      )
      : (
       <p className="correct-text">Richtig!</p>
      )}

      <div className='button-container'>
      <ButtonBack name = 'Back' page = 'Second_Page' userId={userId} />
      <ButtonNext name='Next' disabled={isCorrect} page = 'Second_Page' userId={userId}/>
     
      </div>
    </div>
  );
}

export default SecondPage;















//   return (
//     <div>
//       <h1>Page 1</h1>
//       <button onClick={() => {
//         logEvent(analytics, 'button_click', { button_name: 'second Button' });
//         alert('Button in Second Page clicked');
//       }}>Click Me</button>
//     </div>
//   );
// };

// export default Second;
