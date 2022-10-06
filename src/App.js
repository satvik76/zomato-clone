import './App.css';
import {IoIosArrowBack} from 'react-icons/io';
import {BiBell} from 'react-icons/bi';

function App() {
  return (
    <div className="main w-screen h-screen flex flex-row justify-center items-center">
      <div className="app-container shadow-md w-[330px] h-[600px] flex flex-col py-5">
        <div className="nav-bar flex flex-row justify-between px-5">
          <IoIosArrowBack />
          <BiBell />
        </div>
      </div>
    </div>
  );
}

export default App;
