/* eslint-disable react/prop-types */

const ButtonTwo = ({children, func}) => {
  return (
    <button onClick={func} className='button px-5 py-1'>
        <span className=''>{children}</span>    
    </button>
  );
}

export default ButtonTwo;