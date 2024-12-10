import { ButtonOne } from './';
import { FaHome, FaHashtag, FaBell,FaBookmark, FaList } from 'react-icons/fa';
import { BiMessage } from 'react-icons/bi';
import { BsPersonFill } from 'react-icons/bs';
import { RiMoreFill } from 'react-icons/ri';



const Navigation = () => {
    const links = [
        {label: 'Home',         icon: <FaHome/>       },
        {label: 'Explore',      icon: <FaHashtag/>    },
        {label: 'Notification', icon: <FaBell/>       },
        {label: 'Messages',     icon: <BiMessage/>    },
        {label: 'Bookmarks',    icon: <FaBookmark/>   },
        {label: 'Lists',        icon: <FaList/>       },
        {label: 'Profile',      icon: <BsPersonFill/> },
        {label: 'More',         icon: <RiMoreFill/>   },
    ];
    
  return (
    <nav className='mt-5 dark:text-tpd w-full'>
        <ul className='flex flex-col items-center md:items-start gap-3'>
            {links.map((link, index) => (
                <li key={link.label} className={`link ${index === 0 && 'link-active'}`}>
                    <span  className='text-xl md:mr-4'>{link.icon}</span>
                    <span className='link-text'>{link.label}</span>
                </li>
            ))}
            
        </ul>
        <ButtonOne>Tweet</ButtonOne>
    </nav>
  );
}

export default Navigation;