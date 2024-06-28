import React from 'react';
import { analytics } from '../../firebaseConfig';
import { logEvent } from 'firebase/analytics';
import { useNavigate, useLocation } from 'react-router-dom';
import routes from '../pages/Routes';
import './ButtonNavigate.css';

interface ButtonBackProps {
    name: string;
    userId:string;
    page: string;
  }


  const ButtonBack: React.FC<ButtonBackProps> = ({page, userId, name}) => {
    
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        logEvent(analytics, 'button_back_click', {page_title: page, user_Id: userId});
        //alert('ButtonBack was clicked!');
        const currentIndex = routes.findIndex(route => route.path === location.pathname);
        const prevIndex = currentIndex - 1 >= 0  ? currentIndex -1 : routes.length -1; //Wenn es noch einen Path gibt dann ist true wenn nicht dann gib 0 zurück
        const prevRoute = routes[prevIndex];
        navigate(prevRoute.path); // Gibt den path der vorherigen Seite an
    }
    return(

        <button className = 'button-navigate' onClick={handleClick}>{name}</button>
    );
}

export default ButtonBack;