import { FollowsCard, FollowsCardEmpty } from './';
import { userImg2, userImg3 } from "../assets/images";


const Follows = () => {
  return (
    <div className="happens-section">
        <p className="happen-title">Who to follow</p>
        <FollowsCard
          userName='Ahmad'
          userMail='ahmad@gmail.com'
          userImg={userImg2} 
        />
        <FollowsCard
          userName='Nour'
          userMail='nour@gmail.com'
          userImg={userImg3} 
        />
        <FollowsCardEmpty />
        <button className='more-btn'>Show More</button>
    </div>
  );
}

export default Follows;