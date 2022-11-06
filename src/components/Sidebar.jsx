import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { HiMenuAlt3 } from "react-icons/hi";
import { logo } from '../assets';
import { links } from '../assets/constants';

// const NavLinks = ({ handleClick }) => (
//   <div className="mt-10">
//     {links.map((item) => (
//       <NavLink 
//       key = {item.name}
//       to = {item.to}
//       className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
//       onClick={() => handleClick && handleClick()}
//       >
//         <item.icon className="w-6 h-6 mr-2" />
//         {item.name}
//       </NavLink>
//     ))}
//   </div>
// );
const Sidebar = ({setLoginUser,user}) => {
  console.log({user});
  const [open, setOpen] = useState(false);

  return (
    <>
    <section className="flex gap-6"> 
      <div 
        className={`bg-[#0e0e0e] min-h-screen ${ 
          open ? "w-72" : "w-16" 
        } duration-500 text-gray-100 px-4`} 
      > 
        <div className="py-3 flex justify-end"> 
          <HiMenuAlt3 
            size={26} 
            className="cursor-pointer" 
            onClick={() => setOpen(!open)} 
          /> 
        </div> 
      
        <div>
        <h2 
                style={{ 
                  transitionDelay: `200ms`, 
                }} 
                className={`whitespace-pre duration-500 ${ 
                  !open && "opacity-0 translate-x-28 overflow-hidden" 
                }`} 
              > {user?.name}
              </h2>
              </div>
        <div className="logout">
            <div className="button" onClick ={() => setLoginUser({})}>
            <h2 
                style={{ 
                  transitionDelay: `200ms`, 
                }} 
                className={`whitespace-pre duration-500 ${ 
                  !open && "opacity-0 translate-x-28 overflow-hidden" 
                }`} 
              > Logout
              </h2></div>
          </div>
        <div className="mt-4 flex flex-col gap-4 relative"> 
          {links?.map((item,i) => ( 
            <Link 
              to={item.to} 
              key={i} 
              className="
               group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md" 
            > 

              <div>{React.createElement(item?.icon, { size: "20" })}</div> 
              <h2 
                style={{ 
                  transitionDelay: `${i + 2}00ms`, 
                }} 
                className={`whitespace-pre duration-500 ${ 
                  !open && "opacity-0 translate-x-28 overflow-hidden" 
                }`} 
              > 
                {item?.name} 
              </h2> 
              <h2 
                className={`${ 
                  open && "hidden" 
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit group-hover:z-10 `} 
              > 
                {item?.name} 
              </h2> 
            </Link> 
            
          ))} 
        </div> 
      </div> 
      {/* <div className="m-3 text-xl text-gray-900 font-semibold"> 
        REACT TAILWIND 
      </div>  */}
    </section>
    {/* <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
      <img src={logo} alt="logo" className="w-full h-14 object-contain" />
      <div className="logout">
        <div className="button" onClick ={() => setLoginUser({})}>Logout</div>
      </div>
      <NavLinks />  
    </div> */}
    
    {/* <div className="absolute block top-6 right-3">
      {mobileMenuOpen ? (
        <RiCloseLine className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenuOpen(false)} />
      ) : <HiOutlineMenu className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenuOpen(true)} />}
    </div>
    <div className={`absolute top-0 h-screen w-2/3 md:w-1/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
      <img src={logo} alt="logo" className="w-full h-14 object-contain" />
      <div className="logout">
        <div className="button" onClick ={() => setLoginUser({})}>Logout</div>
      </div>
      <NavLinks handleClick={() => setMobileMenuOpen(false)} />
    </div> */}
    </>
  );
};
/// devyanshu 2nd 
export default Sidebar;
