import { BiSearch } from "react-icons/bi";

const SearchInput = () => {
  return (
    <form className="relative">
        <input type="search" placeholder="Search Twitter" className="search-input" />
        <BiSearch className="absolute top-1.5 left-2 text-2xl dark:text-tpd" />
    </form>
  );
}

export default SearchInput;