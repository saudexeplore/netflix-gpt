import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/zoom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constant';
import {toggleGptSearchView} from "../utils/gptSlice"
import { changeLanguage } from '../utils/configSlice';



const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGptSearchClick = () =>{
      dispatch(toggleGptSearchView())
  }
  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {     
        const {uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
        navigate('/Browse');
      } else {
       dispatch(removeUser());
       navigate('/')
      }
    });

    // unsubscribe h=when components unmount
    return () => unsubscribe();
  }, [])

  const handleLanguageChange = (e) =>{
    // console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))
    
  }


  
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  

  const logoutHandle = () => {
      signOut(auth).then(() => {
        
      }).catch((error) => {
      // An error happened.
      });
  }


  return (
    <div className='flex justify-between px-8 absolute w-full bg-gradient-to-b from-black z-10 text-white'>
      <a href='/'>
        <img className='max-w-60' src={LOGO} alt='logo' />
        </a>
         {/* showing only when user is sigIn  */}
        {
          user &&  
          <div>
            { showGptSearch && (<select className='bg-transparent' onChange={handleLanguageChange}>
              {
                SUPPORTED_LANGUAGES.map(lang => <option className='bg-slate-500' key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
              }
            </select>)}

            <button className='p-2 m-3 bg-red-600 text-white rounded-lg' onClick={handleGptSearchClick}>
              {showGptSearch ? "Back to Home" : "GPT Search"}
            </button> 
            <Menu menuButton={<button>Menu {<FontAwesomeIcon icon={faChevronDown} />}</button>} transition>
            <MenuItem onClick={logoutHandle}>Logout</MenuItem>
            <MenuItem>Profile</MenuItem>
            </Menu>
        </div>
        }

      

    </div>
  )
}

export default Header