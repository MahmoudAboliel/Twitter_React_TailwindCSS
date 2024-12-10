/* eslint-disable react/prop-types */
import { FaAngleDown } from 'react-icons/fa';

const User = ({userImg, userName, userMail}) => {
  return (
    <div className='user-info'>
        <img src={userImg} alt='user' className='rounded-full w-8 h-8' />
        <div className='hidden md:block'>
            <h3 className='text-sm text-tpl dark:text-tpd font-bold'>{userName}</h3>
            <p className='text-sm text-tsl dark:text-tsd'>{userMail}</p>
        </div>
        <FaAngleDown className='hidden md:block dark:text-tpd cursor-pointer' />
    </div>
  );
}

export default User;