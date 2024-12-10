import { FaTwitter } from 'react-icons/fa';
import userImg from '../assets/images/avatar-01.jpg';
import { Navigation, User } from '../Components';

const Left = () => {    
  return (
    <section className="left-section">
        <a href="/#">
            <FaTwitter className='text-primary text-4xl'/>
        </a>
        <Navigation />
        <User 
          userImg={userImg}
          userName={'Mahmoud'}
          userMail={'md@gmail.com'}
        />
    </section>

  );

}

export default Left;