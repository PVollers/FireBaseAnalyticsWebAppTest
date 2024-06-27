import React, { useEffect,useState } from 'react';
import { analytics } from '../../firebaseConfig';
import { logEvent } from 'firebase/analytics';
import ButtonNext from '../Buttons/ButtonNext';
import ButtonBack from '../Buttons/ButtonBack';
//import './FourthPage.css';
import './HomePage.css';
import AffePic from '../../pictures/affe_p.png';
import ButtonCheck from '../Buttons/ButtonCheck';


interface FourthPageProps {
  userId: string;
  isOnline: boolean;
}

const FourthPage: React.FC<FourthPageProps> = ({ userId, isOnline }) => {

  useEffect(() => {
    console.log('FourthPage rendered with userId:', userId, 'and network status:', isOnline ? 'online' : 'offline');
    const network = isOnline ? "online" : "offline";
    logEvent(analytics,'FourthPage_view', { page_title: 'Fourth_Page',  user_Id: userId, onlinestatus: network })
  }, [userId, isOnline]);

  const bildsymbol = 'affe';

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
    <h1>Test-Seite vier</h1>
    <h2>Was sehen Sie?</h2>
    <img src= {AffePic} alt = 'affe' /> 
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
    ) : (
      <p className="correct-text">Richtig!</p>
    )
    }
      <div className='button-container'>
      <ButtonBack name = 'Back' page = 'Fourth_Page' userId={userId}/>
      <ButtonNext name='Next' disabled={isCorrect} page = 'Fourth_Page' userId={userId} /> 
      </div>
    </div>
);
}

export default FourthPage;



















// const Home: React.FC = () => {
//   useEffect(() => {
//     logEvent(analytics, 'page_view', { page_title: 'Home' });
//   }, []);

//   return (
//     <div>
//       <h1>Page 1</h1>
//       <button onClick={() => {
//         logEvent(analytics, 'button_click', { button_name: 'Home Button' });
//         alert('Button in Home clicked');
//       }}>Click Me</button>
//     </div>
//   );
// };

// export default Home;

