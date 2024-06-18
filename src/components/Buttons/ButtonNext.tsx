import React from 'react';
import { analytics } from '../../firebaseConfig';
import { logEvent } from 'firebase/analytics';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import routes from '../pages/Routes';
import './ButtonNavigate.css';

interface ButtonNextProp {
    name: string;
    disabled?:boolean // das ? macht die eigenschaft optional
    page: string;
    userId: string;
};


const ButtonNext: React.FC<ButtonNextProp> = ({name, disabled,page, userId}) =>{
    // dadurch das die analyse bei dem Button ist wird es Immer analysiert bei jeder Seite da es immer der gleiche Button ist
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        console.log('ButtonNext clicked');
        logEvent(analytics, 'button_next_click', { page, userId}); 
        //alert('ButtonNext was clicked!');
        const currentIndex = routes.findIndex(route => route.path === location.pathname);
        const nextIndex = currentIndex + 1 <routes.length ? currentIndex +1 : 0; //Wenn es noch einen PAth gibt dann ist true wenn nicht dann gib 0 zurück
        const nextRoute = routes[nextIndex];
        navigate(nextRoute.path); // Gibt den path der nächsten Seite an
    }
    return(
    //     <Link to="/second">
    //     <button>
    //       Next
    //     </button>
    //   </Link>
        <button className ={!disabled ? 'button-navigate' : 'button-navigate-false'}
        onClick={handleClick} 
        disabled = {disabled}
        >
        {name}
        </button>
    );
}

export default ButtonNext;

