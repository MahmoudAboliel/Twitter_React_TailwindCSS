import { ButtonTwo } from './';
const Customize = () => {

  let html = document.getElementById('html'); 
  const ToggleMode = () => {
    html.classList.toggle('dark');
  }


  return (
    <div className='bg-bc py-2'>
      <div className="text-center bg-bgl dark:bg-bgd p-5 border border-bc">
          <h2 className="text-2xl xl:4xl font-semibold text-tpl dark:text-tpd">Customize your view</h2>
          <p className="text-tsl dark:text-tsd font-medium text-sm mb-5">Manage your fonts color and backgournd. These settings affect the Twitter accounts onn this browser.</p>
          <ButtonTwo func={ToggleMode}>Toggle Dark Mode</ButtonTwo>
      </div>
    </div>
  );
}

export default Customize;