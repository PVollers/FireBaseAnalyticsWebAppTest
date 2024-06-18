import React from 'react';
import { analytics } from '../../firebaseConfig';
import { logEvent } from 'firebase/analytics';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import routes from '../pages/Routes';
import './ButtonNavigate.css';

interface ButtonCheckProp {
    name: string;
    bildsymb: string; // Prop für das Bildsymbol
    formData: string; // Prop für Formulardaten
    clearform: () => void;
    setHasError: (hasError: boolean) => void;
    setPlaceHold: (placeHold:string) => void;
    setIsCorrect: (iscorrect:boolean) => void;
    userId: string;
    page: string;
};


const ButtonCheck: React.FC<ButtonCheckProp> = ({name, bildsymb, clearform,setHasError,setPlaceHold,setIsCorrect,formData,page, userId}) =>{
    // dadurch das die analyse bei dem Button ist wird es Immer analysiert bei jeder Seite da es immer der gleiche Button ist
   // const navigate = useNavigate();
    //const location = useLocation();

    const handleClick = () => {
        logEvent(analytics, 'button_check_click', {page, userId});
        //alert('ButtonNext was clicked!')

            if (formData === bildsymb){
                //anzeige das eingabe Korrekt war
                //alert('Eingabe ist korrekt');
                setHasError(false); //hat kein fehler deswegen false
                setIsCorrect(false)
            }
            else {
              //inputtbox rot umrahmen und in box schrieben falsch 
              setHasError(true); //hat fehler deswegen true
              setIsCorrect(true)
              setPlaceHold('Eingabe ist falsch!');

            };

            clearform();
          
    }
    return(
    //     <Link to="/second">
    //     <button>
    //       Next
    //     </button>
    //   </Link>
        <button className = 'button-navigate' onClick={handleClick} >{name}</button>
    );
}

export default ButtonCheck;

