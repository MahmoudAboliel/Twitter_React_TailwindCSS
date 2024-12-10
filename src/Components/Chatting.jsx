import { FaGit, FaListAlt, FaSmile, FaShoppingBag } from "react-icons/fa";
import { userImg } from "../assets/images";
import { BiImage } from "react-icons/bi";
import { ButtonTwo } from './';


const Chatting = () => {
  return (
    <div className="p-4 border border-bc">
        <div className="h-20 flex  gap-2">
            <img className="rounded-full w-12 h-12" src={userImg} alt="user Img" />
            <textarea className="bg-transparent text-tpl font-medium dark:text-tpd w-full h-full outline-none resize-none scroll-hidden" placeholder="What's happening?" />
        </div>
        <div className="flex justify-between items-center gap-2 flex-wrap">
            <div className="flex gap-3 text-lg text-primary cursor-pointer">
                <BiImage />
                <FaGit />
                <FaListAlt />
                <FaSmile />
                <FaShoppingBag />
            </div>
            <ButtonTwo>Tweet</ButtonTwo>
        </div>
    </div>
  );
}

export default Chatting;