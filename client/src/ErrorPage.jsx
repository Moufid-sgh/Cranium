import logo from '/white_logo.png';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
  return (
    <div className='relative bg-[#090909] w-full h-screen flex flex-col items-center justify-center'>
        <img src={logo} alt='logo' className='absolute top-3 left-3 w-28 md:w-32 hover:opacity-80 duration-300' />

        <div className='text-slate-200 text-center mx-4'>
            <h1 className='text-3xl font-bolder'>OOPS PAGE NOT FOUND !</h1>
            <p className='text-lg mt-4'>The page you are looking for doesn't exist or an other error occured</p>
            <Link to='/'>
                <button className='bg-sky-600 text-slate-200 rounded-md py-2 px-6 mt-4'>Back to home</button>
            </Link>
        </div>

    </div>
  )
}

export default ErrorPage