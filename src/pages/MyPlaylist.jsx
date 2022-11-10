import { useDispatch, useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';


const  MyPlaylist = ({user,setLoginUser}) => 
{
    const { activeSong, isPlaying }=useSelector((state) => state.player);
    let songarray = user.playlistarr;
    // if (localStorage.getItem('songJson') == null) {
    //     songarray = [];
    // }
    // else {
    //     let songarraystr = localStorage.getItem('songJson');
    //     songarray = JSON.parse(songarraystr);
    // }
    console.log(songarray);
return (
<div className="flex flex-col">
  <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
      <h2 className="font-bold text-3xl text-white text-left">
          My Playlist 
      </h2>
    
  </div>
  <div className="flex flex-wrap sm:justify-start justify-center gap-8">
  {songarray?.map((song,i)=>(
      <SongCard
      key={song.key}
      song={song}
      isPlaying={isPlaying}
      activeSong={activeSong}
      data={songarray}
      i={i}
      />
            ))}
  </div>
</div>
); 
};
export default MyPlaylist;
