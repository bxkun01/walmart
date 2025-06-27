import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import walmart from '/src/assets/icons/spark-icon.svg';
import RegistrationFooter from '../Components/RegistrationFooter';
import { Helmet } from 'react-helmet';

const Registration = () => {
  const [number, setNumber] = useState('');

  return (
    <>
    <Helmet><title>Login</title></Helmet>
      <div className="flex flex-col items-center my-5 gap-5 px-4 border-b border-b-gray-300 pb-40">
        <Link to="/">
          <img src={walmart} alt="walmart logo" className="h-16" />
        </Link>

        <p className="text-lg font-bold">Sign in or create your account</p>

        <div className="flex flex-col items-center text-sm text-gray-900">
          <p>Not sure if you have an account?</p>
          <p>Enter your email and we'll check for you.</p>
        </div>

        <form className="flex flex-col w-full sm:w-96">
          <label htmlFor="masked-number" className="font-bold text-sm mb-1">
            Email Address
          </label>

          <InputMask
            mask="999-999-999"
            maskChar={null}  
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          >
            {(inputProps) => (
              <input
                {...inputProps}
                id="masked-number"
                type="text"
                className="border border-gray-700 hover:border-black h-14 mb-4 rounded-md p-2 sm:flex-grow"
              />
            )}
          </InputMask>

          <button className="w-full h-10 text-white bg-blue-700 hover:bg-blue-800 rounded-full">
            Continue
          </button>
        </form>

        <div className="w-full sm:text-center">
          <p className="font-light text-sm">Securing your personal information is our priority.</p>
          <p className="underline font-light text-sm">See our privacy measures.</p>
        </div>
      </div>

      <RegistrationFooter />
    </>
  );
};

export default Registration;
