/* eslint-disable react/prop-types */
import { FaTwitter } from 'react-icons/fa';

const ButtonOne = ({children}) => {
  return (
    <button className='button w-8 h-8 mt-2 md:w-full'>
        <span className='hidden md:block'>{children}</span>
        <FaTwitter className='md:hidden mx-auto' />
    </button>

  );
}

export default ButtonOne;