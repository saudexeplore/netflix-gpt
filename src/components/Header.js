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
import { LOGO } from '../utils/constant';



const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
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


  
  const user = useSelector((store) => store.user);
  const logoutHandle = () => {
      signOut(auth).then(() => {
        
      }).catch((error) => {
      // An error happened.
      });
  }


  return (
    <div className='flex justify-between px-8 absolute w-full bg-gradient-to-b from-black z-10'>
      <a href='/'>
        <img className='max-w-60' src={LOGO} alt='logo' />
        </a>
        {/* showing only when user is sigIn */}
        {
          user && <Menu menuButton={<button>Menu {<FontAwesomeIcon icon={faChevronDown} />}</button>} transition>
          <MenuItem onClick={logoutHandle}>Logout</MenuItem>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Dalla</MenuItem>
        </Menu>
        }

      

    </div>
  )
}

export default Header