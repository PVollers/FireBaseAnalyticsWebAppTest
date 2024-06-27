import { useState, useEffect } from 'react';

const useOnlineStatus = (): boolean => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
        console.log('Went online');
        setIsOnline(true);
    }
    const handleOffline = () => {
        setIsOnline(false);
        console.log('Went offline');
    }
    console.log('Adding event listeners');
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
        console.log('Removing event listeners');
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  console.log('Current online status:', isOnline);
  return isOnline;
};

export default useOnlineStatus;
