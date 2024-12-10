import { FaHeart, FaShare } from "react-icons/fa";
import { userImg, tweetImg } from "../assets/images";
import { BiChat, BiRepost } from "react-icons/bi";

const Tweet = () => {
  return (
    <div className="border border-bc p-3">
        <div className="flex items-center">
        <img src={userImg} alt="user Img" className="rounded-full w-8 h-8 mr-2" />
        <h2 className="font-bold text-tpl dark:text-tpd">Mahmoud <span className="font-medium text-tsl dark:text-tsd">md@gmail.com .Nov 2</span></h2>
        </div>
        <div className="pl-3 xl:pl-10 mt-2">
        <p className="font-medium text-tpl dark:text-tpd">
            Any tool can write code that a computer can understand. Good programmers write code that humans can understand.
        </p>
        <p className="font-medium text-tpl dark:text-tpd leading-10">         
            Experience is the name everyone gives to their 
            <span className="text-primary font-bold">
            {' '}#mistakes{' '}
            </span><br />
            Simplicity is the soul of efficiency.
        </p>
        <img src={tweetImg} alt="tweet" className="rounded-3xl w-full h-[300px]" />
        <div className="flex justify-between items-center text-tpl dark:text-tpd mt-4">
            <span className="hover:text-primary tweet-btn"><BiChat /> 1234</span>
            <span className="hover:text-green-500 tweet-btn"><BiRepost /> 14k</span>
            <span className="hover:text-red-500 tweet-btn"><FaHeart />14k</span>
            <span className="hover:text-primary tweet-btn"><FaShare /></span>
        </div>
        </div>
    </div>
  );
}

export default Tweet;