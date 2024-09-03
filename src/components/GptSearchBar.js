import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'


const GptSearchBar = () => {

  const langKey = useSelector((store) => store.languageselect.langString);
  // console.log(lang);
  

  return (
    <div className='bg-slate-900 p-5 rounded-xl'>
        <input className='p-2 rounded-lg w-96 mr-4' placeholder={lang[langKey].gptSearchPlacholder} />
        <button className='py-2 px-8 bg-red-800 text-white rounded-lg'>
            {lang[langKey].search}
        </button>
    </div>
  )
}

export default GptSearchBar