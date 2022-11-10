import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
function Addtolikedsongs({activeSong, user, setLoginUser, currentSongs}) {
    
    const [str, setstr] = useState('add');
    var likedsong = JSON.parse(JSON.stringify(user.likedarr));
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
            setstr('add');
        }
        else{
            setstr('remove');
        }
        // const btnplaylist = document.getElementById('btn-playlist');
        // btnplaylist.innerHTML = str;
    }
    const update2 = (x) => {
        if(x==0){
            setstr('remove');
        }
        else{
            setstr('add');
        }
    }
    // update();
    const handleclick = () =>{
        var x = 0;
        var index = -1;
        var p = JSON.parse(JSON.stringify(user.likedarr));
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
    // update();
  return (
    <div>
        
        <div className='flex-row items-center text-white cursor-pointer' onClick={handleclick} id="btn-playlist">{str}</div>
        
        
    </div>
  )
  
}

export default Addtolikedsongs