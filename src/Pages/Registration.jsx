import { list } from 'postcss'
import walmart from '/src/assets/icons/spark-icon.svg'
import RegistrationFooter from '../Components/RegistrationFooter'

const Registration = () => {
  return (
    <>
       <div className='flex flex-col items-center my-5 gap-5 px-4 border-b border-b-gray-300 pb-40 '>
      <img src={walmart} alt="walmart logo" className='h-16 cursor-pointer' />
      <p className='text-lg font-bold'>Sign in or create your account</p>

      <div className='flex flex-col items-center text-sm text-gray-900 '>
        <p>Not sure if you have an account?</p>
        <p>Enter your email and we'll check for you.</p>
      </div>


      <form className='flex flex-col w-full sm:w-96'>
        <span className='font-bold text-sm'>Email Address</span>
        <input type="text" className='border border-gray-700 hover:border-black h-14 mb-4 rounded-md p-2 sm:flex-grow'/>
        <button className='w-full h-10 text-white bg-blue-700 hover:bg-blue-800 rounded-full'>Continue</button>
      </form>

      <div className='w-full sm:text-center'>
        <p className='font-light text-sm'>Securing your personal information is our priority.</p>
        <p className='underline font-light text-sm'>See our privacy measures.</p>
      </div>
    </div>

    <RegistrationFooter />
    </>
 
    

  )
}

export default Registration