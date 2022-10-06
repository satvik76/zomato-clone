import './App.css';
import {IoIosArrowBack} from 'react-icons/io';
import {BiBell} from 'react-icons/bi';
import profilePicture from './dp.png';

function App() {
  return (
    <div className="main w-screen h-screen flex flex-row justify-center items-center bg-black">
      <div className="app-container shadow-md w-[320px] h-[620px] flex flex-col py-5 items-center gap-5 bg-white">
        <div className="nav-bar flex flex-row justify-between w-[90%]">
          <IoIosArrowBack />
          <BiBell />
        </div>
        <div className="user-badge-container w-[90%] h-[80px] rounded-lg shadow tbold flex flex-row px-3 py-2 justify-between">
          <div className="text-section flex flex-col gap-[2px]">
            <div className="username tbold">kumarsambhav</div>
            <div className="email text-[11px]">zomato@kumarsambhav.me</div>
            <div className="activity-btn text-red-500 text-[11px]">View activity</div>
          </div>
          <div className="profile-pic-container w-[55px]">
            <img className='rounded-full' src={profilePicture} alt="Kumar Sambhav" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
