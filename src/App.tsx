// src/App.tsx
import React , { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import SecondPage from './components/pages/SecondPage';
import HomePage from './components/pages/HomePage';
import ThirdPage from './components/pages/ThirdPage';
import FourthPage from './components/pages/FourthPage';
import LastPage from './components/pages/LastPage';
import useOnlineStatus from './OnlineStatus';
import './App.css';



const App: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const isOnline: boolean = useOnlineStatus();

  return(
    <Router basename="/FireBaseAnalyticsWebAppTest">
       {!isOnline && <div className="offline-indicator">Sie sind offline</div>}
      <Routes>
        <Route path = '/' element = {<HomePage setUserId={setUserId}/>}/>      
        <Route path = '/secondpage' element = {<SecondPage userId={userId}/>}/>'
        <Route path = '/thirdpage' element = {<ThirdPage userId={userId}/>}/>'
        <Route path = '/fourthpage' element = {<FourthPage userId={userId}/>}/>'
        <Route path = '/lastpage' element = {<LastPage userId={userId}/>}/>'
      </Routes>
    </Router>
   

  );
}

export default App;
