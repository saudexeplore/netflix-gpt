import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store) => store.user);
  const logoutHandle = () => {
      signOut(auth).then(() => {
        navigate('/')
      }).catch((error) => {
      // An error happened.
      });
  }


  return (
    <div className='flex justify-between px-8'>
      <a href='/'>
        <img className='max-w-60' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />
        </a>
        {/* showing only when user is sigIn */}
        {
          user && <button onClick={logoutHandle}>Logout</button>
        }

        

    </div>
  )
}

export default Header