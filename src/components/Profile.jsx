import React from "react";
import {DiYeoman} from "react-icons/di"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActiveSongtozero } from "../redux/features/playerSlice";
function Profile({user,setLoginUser, open}) {
  const [showModal, setShowModal] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutfunc = () => {
    setLoginUser({});
    dispatch(setActiveSongtozero({}));
    navigate('/');
  }
  return (
    <>
      <button
        className=""
        type="button"
        onClick={() => setShowModal(true)}
      >
        <DiYeoman
        size={32} 
        className="mt-3 p-1 cursor-pointer hover:bg-gray-800 rounded-md"
        />
        <p style={{ 
          transitionDelay: `100ms`, 
        }} 
        className={`cursor-pointer whitespace-pre duration-500 ${ 
          !open && "opacity-0 translate-x-28 overflow-hidden" 
        }`} 
        >Profile</p>
        <p className={`${ 
                  open && "hidden" 
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit group-hover:z-10 `} >
                  Profile
                </p>
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#905586] outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl  text-white font bold">
                    Your Profile
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-white opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-white opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-white font-bold text-lg leading-relaxed">
                    {user?.name}
                  </p>
                  <p className="my-4 text-white text-lg leading-relaxed">
                    {user?.email}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-white hover:text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-blue-900 text-white hover:text-black active:bg-fuchsia-900 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={logoutfunc}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
export default Profile;