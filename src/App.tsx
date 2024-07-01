import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SecondPage from './components/pages/SecondPage';
import HomePage from './components/pages/HomePage';
import ThirdPage from './components/pages/ThirdPage';
import FourthPage from './components/pages/FourthPage';
import LastPage from './components/pages/LastPage';
import useOnlineStatus from './OnlineStatus';
import './App.css';
import { analytics } from './firebaseConfig';
import { setUserId } from 'firebase/analytics';
import usePersistDebugParam from './usePersistDebugParam';

const AppRoutes: React.FC<{ userId: string, setUserIdState: (id: string) => void, isOnline: boolean }> = ({ userId, setUserIdState, isOnline }) => {
  usePersistDebugParam();

  return (
    <Routes>
      <Route path='/' element={<HomePage setUserId={setUserIdState} />} />
      <Route path='/secondpage' element={<SecondPage userId={userId} isOnline={isOnline} />} />
      <Route path='/thirdpage' element={<ThirdPage userId={userId} isOnline={isOnline} />} />
      <Route path='/fourthpage' element={<FourthPage userId={userId} isOnline={isOnline} />} />
      <Route path='/lastpage' element={<LastPage userId={userId} isOnline={isOnline} />} />
    </Routes>
  );
};

const App: React.FC = () => {
  const isOnline: boolean = useOnlineStatus();
  const [userId, setUserIdState] = useState<string>('');

  useEffect(() => {
    if (userId) {
      setUserId(analytics, userId);
    }
  }, [userId]);

  return (
    <Router basename="/FireBaseAnalyticsWebAppTest">
      {!isOnline && <div className="offline-indicator">Sie sind offline</div>}
      <AppRoutes userId={userId} setUserIdState={setUserIdState} isOnline={isOnline} />
    </Router>
  );
}

export default App;
