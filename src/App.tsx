// src/App.tsx
import React , { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import SecondPage from './components/pages/SecondPage';
import HomePage from './components/pages/HomePage';
import ThirdPage from './components/pages/ThirdPage';
import FourthPage from './components/pages/FourthPage';
import LastPage from './components/pages/LastPage';
import useOnlineStatus from './OnlineStatus';
import './App.css';
import { analytics } from './firebaseConfig';
import { getAnalytics, setUserId, logEvent } from 'firebase/analytics';



const App: React.FC = () => {
  //const [userId, setUserId] = useState<string>('');
  const isOnline: boolean = useOnlineStatus();

    const [userId, setUserIdState] = useState<string>('');

  useEffect(() => {
      if (userId) {
        setUserId(analytics, userId);
      }
    }, [userId]);

  return(
    <Router basename="/FireBaseAnalyticsWebAppTest">
       {!isOnline && <div className="offline-indicator">Sie sind offline</div>}
      <Routes>
        <Route path = '/' element = {<HomePage setUserId={setUserIdState}/>}/>      
        <Route path = '/secondpage' element = {<SecondPage userId={userId} isOnline = {isOnline}/>}/>'
        <Route path = '/thirdpage' element = {<ThirdPage userId={userId} isOnline = {isOnline}/>}/>'
        <Route path = '/fourthpage' element = {<FourthPage userId={userId} isOnline = {isOnline}/>}/>'
        <Route path = '/lastpage' element = {<LastPage userId={userId} isOnline = {isOnline}/>}/>'
      </Routes>
    </Router>
   

  );
}

export default App;
