import './App.css';
import {IoIosArrowBack} from 'react-icons/io';
import {BiBell} from 'react-icons/bi';
import {BsCreditCard} from 'react-icons/bs';
import profilePicture from './dp.png';
import {AiOutlineHeart} from 'react-icons/ai';
import {FiSettings} from 'react-icons/fi';

function App() {
  return (
    <div className="main w-screen h-screen flex flex-row justify-center items-center bg-black">
      <div className="app-container shadow-md w-[320px] h-[620px] flex flex-col py-5 items-center gap-5 bg-[#f5f5f5]">
        <div className="nav-bar flex flex-row justify-between w-[90%]">
          <IoIosArrowBack />
          <BiBell />
        </div>
        <div className="user-badge-container w-[90%] h-[80px] rounded-lg shadow tbold flex flex-row px-3 py-2 justify-between bg-[#FFF]">
          <div className="text-section flex flex-col gap-[2px]">
            <div className="username tbold">kumarsambhav</div>
            <div className="email text-[11px]">zomato@kumarsambhav.me</div>
            <div className="activity-btn text-red-500 text-[11px]">View activity</div>
          </div>
          <div className="profile-pic-container w-[55px]">
            <img className='rounded-full' src={profilePicture} alt="Kumar Sambhav" />
          </div>
        </div>
        <div className="likes-section bg flex flex-row gap-3">
          <div className="like-box w-[80px] h-[50px] rounded-md bg-white flex flex-col items-center justify-center gap-2">
            <AiOutlineHeart className='m-0' />
            <p>Likes</p>
          </div>
          <div className="like-box w-[80px] h-[50px] rounded-md bg-white flex flex-col items-center justify-center gap-2">
            <BsCreditCard className='m-0' />
            <p>Likes</p>
          </div>
          <div className="like-box w-[80px] h-[50px] rounded-md bg-white flex flex-col items-center justify-center gap-2">
            <FiSettings className='m-0' />
            <p>Likes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
