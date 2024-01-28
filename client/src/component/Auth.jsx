import { useState } from 'react'
import axios from 'axios'


const Auth = ({setAccess}) => {

  const [userName, setUserName] = useState(null)
  const [password, setPassword] = useState(null)

  const login = async (e) => {

    e.preventDefault()

    try {
      await axios.post(`${import.meta.env.VITE_URL}/login`, { user_name: userName, user_pwd: password })
        .then((result) => {
          if(result.status == 200){setAccess(true)}
        })
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='bg-[#090909] w-full h-screen flex items-center justify-center'>

      <form className='space-y-6 text-center' onSubmit={login}>
        <h2 className='text-slate-200 font-bold text-2xl tracking-wide'>Authentification</h2>

        <input type="text" placeholder="username" className="p-2 w-72 block rounded-md focus:outline-none border-2 focus:border-2 focus:border-sky-600"
          onChange={e => setUserName(e.target.value)}
        />
        <input type="password" placeholder="password" className="p-2 w-72 block rounded-md focus:outline-none border-2 focus:border-2 focus:border-sky-600"
          onChange={e => setPassword(e.target.value)}
        />

        <input type='submit' value='submit' className='bg-slate-200 py-2 px-5 text-sky-600 hover:text-[#090909] rounded-sm duration-300 cursor-pointer'
        />
      </form>
    </div>
  )
}

export default Auth