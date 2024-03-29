import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Login from "./components/login/login"
import Register from "./components/register/register"
import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts } from './pages';
import {useState} from 'react';
import { playPause,setActiveSong,setActiveSongtozero } from './redux/features/playerSlice';  
import { useDispatch } from 'react-redux';
import MyLikedsongs from './pages/MyLikedsongs';
import MyPlaylist from './pages/MyPlaylist';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  const [user, setLoginUser] = useState({
    // name:"",
    // email:"",
    // password:"",
  })
  const dispatch = useDispatch();
  // function resetState() {
    
  //    activeSong = {}
    
  // };
  if(!user && !user._id){
    dispatch(dispatch(setActiveSongtozero({})));
  }
  // console.log('hello')
  // console.log(activeSong?.title);
  // console.log('hello2')
  // console.log(user);
  return (
    
    <div className="relative flex">
      {
        user && user._id && (
          
      <Sidebar setLoginUser={setLoginUser} user={user} />
      
            )
      }
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#6d1c5c]">
      {
            user && user._id && (
        <Searchbar />
            )
      }

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={
              user && user._id ? <Discover /> : <Login setLoginUser={setLoginUser} /> 
            }/>
            {
              user && user._id && (
              <>
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/my-playlist" element={<MyPlaylist user={user} setLoginUser={setLoginUser}/>} />
              <Route path="/my-likes" element={<MyLikedsongs user={user} setLoginUser={setLoginUser}/>} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
             </>
               )
              }
            </Routes>
          
          </div>
          {
            user && user._id && (
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
            )
          }
        </div>
      </div>
      {/* {dispatch(setActiveSong({}))} */}
      {/* dispatch(resettodefault()) */}
      {!user && user._id && activeSong?.title===undefined && (
          dispatch(setActiveSongtozero({}))
      )}
      {user && user._id && activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer user={user} setLoginUser={setLoginUser} />
        </div>
      )}
     
    </div>
  );
};

export default App;
