import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const usePersistDebugParam = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.search.includes('firebase_debug=true')) {
      const newSearch = location.search ? `${location.search}&firebase_debug=true` : '?firebase_debug=true';
      navigate({
        ...location,
        search: newSearch,
      }, { replace: true });
    }
  }, [location, navigate]);
};

export default usePersistDebugParam;
