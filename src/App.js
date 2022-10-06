import './App.css';
import {IoIosArrowBack} from 'react-icons/io';
import {BiBell} from 'react-icons/bi';

function App() {
  return (
    <div className="main w-screen h-screen flex flex-row justify-center items-center">
      <div className="app-container shadow-md w-[330px] h-[600px] flex flex-col py-5 items-center gap-5">
        <div className="nav-bar flex flex-row justify-between w-[90%]">
          <IoIosArrowBack />
          <BiBell />
        </div>
        <div className="user-badge-container w-[90%] h-[80px] rounded-lg shadow">
 
        </div>
      </div>
    </div>
  );
}

export default App;
