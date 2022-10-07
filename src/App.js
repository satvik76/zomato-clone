import "./App.css";
import {
  IoIosArrowBack,
  IoIosArrowDropright,
  IoIosArrowForward,
  IoMdArrowForward,
} from "react-icons/io";
import { BiArrowToRight, BiBell } from "react-icons/bi";
import { BsChatRightText, BsCreditCard, BsFillChatRightTextFill } from "react-icons/bs";
import profilePicture from "./dp.png";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { HiOutlineTicket, HiOutlineChatAlt } from "react-icons/hi";

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
            <div className="activity-btn text-red-500 text-[11px]">
              View activity
            </div>
          </div>
          <div className="profile-pic-container w-[55px]">
            <img
              className="rounded-full"
              src={profilePicture}
              alt="Kumar Sambhav"
            />
          </div>
        </div>
        <div className="likes-section bg flex flex-row gap-3">
          <div className="like-box w-[87px] h-[50px] rounded-md bg-white flex flex-col items-center justify-center gap-2">
            <AiOutlineHeart className="m-0" />
            <p>Likes</p>
          </div>
          <div className="like-box w-[87px] h-[50px] rounded-md bg-white flex flex-col items-center justify-center gap-2">
            <BsCreditCard className="m-0" />
            <p>Likes</p>
          </div>
          <div className="like-box w-[87px] h-[50px] rounded-md bg-white flex flex-col items-center justify-center gap-2">
            <FiSettings className="m-0" />
            <p>Likes</p>
          </div>
        </div>
        <div className="rating-container w-[90%] h-[40px] rounded-lg flex flex-row px-3 py-2 gap-3 items-center bg-[#FFF]">
          <AiOutlineStar className="text-[20px] bg-gray-100 p-[5px] rounded-full" />
          <p className="text-[9px] pt-[1px]">Your rating</p>
          <p className="bg-gray-100 flex flex-row px-2 py-1 ml-24 text-[7px] rounded-md font-bold">
            4.77 &nbsp;⭐️
          </p>
          <IoIosArrowForward className="text-xs" />
        </div>
        <div className="zomaland-container w-[90%] min-h-[40px] rounded-lg flex flex-col bg-white py-2 gap-2">
          <div className="title flex flex-row gap-2">
            <div className="bar w-[2px] h-[14px] bg-red-500 rounded-r-full"></div>
            <div className="text text-[10px] tbold">Zomaland</div>
          </div>
          <div className="options px-2 flex flex-col gap-3">
            <div className="option flex flex-row items-center gap-2">
              <div className="icon">
                <HiOutlineTicket className="text-[20px] bg-gray-100 p-[5px] rounded-full" />
              </div>
              <div className="text text-[10px]">Your tickets</div>
            </div>
            <div className="option flex flex-row items-center gap-2">
              <div className="icon">
                <HiOutlineChatAlt className="text-[20px] bg-gray-100 p-[5px] rounded-full" />
              </div>
              <div className="text text-[10px]">Zomaland help</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
