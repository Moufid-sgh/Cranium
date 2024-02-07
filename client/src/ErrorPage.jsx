import logo from '/white_logo.png';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
  return (
    <div className='bg-[#090909] w-full h-screen flex flex-col items-center justify-center'>
        <img src={logo} alt='logo' className='w-28 md:w-32 hover:opacity-80 duration-300' />

        <div className='text-slate-200 text-center mt-10'>
            <h3 className='text-2xl font-bolder'>OOPS PAGE NOT FOUND</h3>
            <p className='text-lg mt-2'>The page you are looking for doesn't exist or an other error occured</p>
            <Link to='/'>
                <button className='bg-sky-600 text-slate-200 rounded-md py-2 px-6 mt-4'>Back to home</button>
            </Link>
        </div>

    </div>
  )
}

export default ErrorPage