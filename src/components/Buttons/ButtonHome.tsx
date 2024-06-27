import React from 'react';
import { analytics } from '../../firebaseConfig';
import { logEvent } from 'firebase/analytics';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import routes from '../pages/Routes';
import './ButtonNavigate.css';

interface ButtonHomeProp {
    name: string;
};


const ButtonHome: React.FC<ButtonHomeProp> = (props) =>{
    // dadurch das die analyse bei dem Button ist wird es Immer analysiert bei jeder Seite da es immer der gleiche Button ist
    const navigate = useNavigate();
    //const location = useLocation();

    const handleClick = () => {
        logEvent(analytics, 'button_home_click');
        //alert('ButtonNext was clicked!');
        //const currentIndex = routes.findIndex(route => route.path === location.pathname);
        //const nextIndex = currentIndex + 1 <routes.length ? currentIndex +1 : 0; //Wenn es noch einen PAth gibt dann ist true wenn nicht dann gib 0 zurück
        //const nextRoute = routes[nextIndex];
        //navigate(nextRoute.path); // Gibt den path der nächsten Seite an

        navigate('/');
    }
    return(
    //     <Link to="/second">
    //     <button>
    //       Next
    //     </button>
    //   </Link>
        <button className = 'button-navigate' onClick={handleClick}>{props.name}</button>
    );
}

export default ButtonHome;

