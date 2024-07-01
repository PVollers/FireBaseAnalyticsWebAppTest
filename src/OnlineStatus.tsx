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

// Fehlerbehandlung für fehlgeschlagene Anfragen:
// Implementieren Sie eine Methode, um fehlgeschlagene Anfragen manuell erneut zu senden, wenn die Verbindung wiederhergestellt ist. Dies kann durch Überwachung des Netzwerkstatus erfolgen.

// javascript
// Code kopieren
// window.addEventListener('online', () => {
//   // Code zum erneuten Senden der fehlgeschlagenen Anfragen
//   resendFailedRequests();
// });

// function resendFailedRequests() {
//   // Ihre Logik zum erneuten Senden der Anfragen
//}

export default useOnlineStatus;
