import React, { useEffect } from 'react';
import { analytics } from '../../firebaseConfig';
import { logEvent } from 'firebase/analytics';
//import ButtonNext from '../Buttons/ButtonNext';
import './HomePage.css';
import BestandenPic from '../../pictures/bestanden.jpg'
import ButtonHome from '../Buttons/ButtonHome';

interface LastPageProps {
  userId: string;
}

const LastPage: React.FC<LastPageProps> = ({ userId }) => {

  useEffect(() => {
    console.log('LastPage rendered');
    logEvent(analytics,'LastPage_view', { page_title: 'Last_Page', user_Id: userId })
  }, [userId]);

  return(
    <div className="home-page">
    <h1>Herzlichen Glückwunsch {userId}!!!</h1>
    <img src={BestandenPic} alt='bestanden' />
    <p>Sie haben den Test erfolgreich bestanden !!!.
    <br /> Drücken Sie auf "Home" um zurück auf die Startseite zu gelangen   </p>
    <div>
    <ButtonHome name = 'Home'/>
    </div>
    </div>
  );
}

export default LastPage;





















