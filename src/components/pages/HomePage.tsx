import React, { useEffect, useState } from 'react';
import { analytics } from '../../firebaseConfig';
import { logEvent, setUserId as setAnalyticsUserId } from 'firebase/analytics';
import ButtonNext from '../Buttons/ButtonNext';
import HomePic from '../../pictures/FireBaseHomePic';
import './HomePage.css';


//Anmelde-Konten
interface User {
  userId: string;
  userPassword: string;
}

const users: User[] = [
  { userId: 'user1', userPassword: 'password1' },
  { userId: 'user2', userPassword: 'password2' },
  { userId: 'user3', userPassword: 'password3' },
  // Füge hier weitere Benutzer hinzu
];

interface HomePageProps {
   setUserId: (userId: string) => void;
}



//HomePage Komponente
const HomePage: React.FC<HomePageProps> = ({ setUserId }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputUserId, setInputUserId] = useState('');
  const [inputPassword, setInputPassword] = useState('');


  useEffect(() => {
    console.log('Startseite offen');
   // logEvent(analytics,'HomePage_view', { page_title: 'Home_Page'});
   logEvent(analytics, 'HomePage_view', { page_title: 'Home_Page' });
    //logEvent(analytics,'page_view', { page_title: 'Home_Page'})
  }, []);

  



  //Login Prüfung nach betätigung des Button "Anmelden"
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    

    // Authentifizierung basierend auf der userId
    const user = users.find(u => u.userId === inputUserId && u.userPassword === inputPassword);
    if (user) { 
      setIsAuthenticated(true);
      setUserId(inputUserId); //übergibt den anmeldenamen global sodass es an alle weiteren sediten weitergeben werden kann
      setAnalyticsUserId(analytics, inputUserId);//wurde zusätzlich hinzugefügt
    } else {
      alert('Ungültige Anmelde-ID oder Passwort');
    }
  };

  

  return(
    <div className="home-page">
    <h1>Test Firebase Analytics</h1>
    {isAuthenticated ?(
    <>
    <h2>Willkommen {inputUserId}</h2>
    <HomePic />
    <p>Diese Seite dient zu Testzwecken für die Analyse der Nutzer-Interaktionen durch Firebase Analytics.
    <br /> Um fortzufahren und den Test zu starten, drücken Sie auf <span className="large-text">"Next"</span>. </p>
    {/* <img 
      src="https://firebase.google.com/products/analytics" 
      alt="Firebase" 
      className="firebase-image"
    /> */}
      <ButtonNext name='Next' page = 'Home_Page' userId={inputUserId} />
      </>
    ):(
      <form onSubmit={handleLogin} className="login-form" >
      <div  className="form-group">
        <label>User ID:</label>
        <input
          type="text"
          value={inputUserId}
          onChange={(e) => setInputUserId(e.target.value)}
          className="form-control"
        />
      </div>
      <div  className="form-group">
            <label>Passwort:</label>
            <input
              type="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <button type="submit"  className="btn btn-primary" >Anmelden</button>
        </form>
  )}
    
    </div>
  );
}

export default HomePage;



















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

