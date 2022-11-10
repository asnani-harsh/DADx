import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong, activeSong, user, setLoginUser }) => {
  const [str, setstr] = useState(1);
  var likedsong = JSON.parse(JSON.stringify(user?.likedarr));
  const updateindb = ({temp}) => {
      axios.post("http://localhost:9002/updatelikedsongs", temp)
      .then(res => { 
          setLoginUser(res.data.user)
        })
  }
  // let str ="";
  // setstr('add');
  const update = () => {
      
      var y = 1;
      if(likedsong != []){
      likedsong.forEach((element,i) => {
          if(element?.title === activeSong?.title){
              y = 0;
          }
      })
      }
      if(y == 1){
          // str = `add`;
          setstr(1);
      }
      else{
          setstr(0);
      }
      // const btnplaylist = document.getElementById('btn-playlist');
      // btnplaylist.innerHTML = str;
  }
  const update2 = (x) => {
      if(x==0){
          setstr(0);
      }
      else{
          setstr(1);
      }
  }
  // update();
  const handleclick = () =>{
      var x = 0;
      var index = -1;
      var p = JSON.parse(JSON.stringify(user?.likedarr));
      p.forEach((element, i) => {
          if(element?.title === activeSong?.title){
              x = 1;
              index = i
          }
      })
      if(x == 0){
          p.push(activeSong);
      }
      if(x==1){
          p.splice(index,1);
      }
      const temp = {
          email: user.email,
          likedarr: p
      }
      updateindb({temp});
      update2(x);
  }
  // var x = 0; 
  useEffect(()=>{
      update();
  },[activeSong])

  return (
  <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    <BsArrowRepeat size={20} color={repeat ? 'red' : 'white'} onClick={() => setRepeat((prev) => !prev)} className="hidden sm:block cursor-pointer" />
    {currentSongs?.length && <MdSkipPrevious size={30} color="#FFF" className="cursor-pointer" onClick={handlePrevSong} />}
    {isPlaying ? (
      <BsFillPauseFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
    ) : (
      <BsFillPlayFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
    )}
    {currentSongs?.length && <MdSkipNext size={30} color="#FFF" className="cursor-pointer" onClick={handleNextSong} />}
    <BsShuffle size={20} color={shuffle ? 'red' : 'white'} onClick={() => setShuffle((prev) => !prev)} className="hidden sm:block cursor-pointer" />
    <FaHeart color={str ? 'white': 'red'} onClick={handleclick} className="cursor-pointer" />
  </div>
  )
    };

export default Controls;
