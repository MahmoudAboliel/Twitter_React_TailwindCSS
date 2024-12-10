import { FaTwitter } from "react-icons/fa";


const Header = () => {
  return (
    <div className="header">
        <h2 className="text-tpl dark:text-tpd font-bold text-lg">Home</h2>
        <FaTwitter className="text-primary text-xl" />
    </div>
  );
}

export default Header;