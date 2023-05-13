import React from "react";
import '../Media.css'
import { useState } from "react";
import ReactPlayer from 'react-player/youtube'
import Iframe from 'react-iframe'
import { BiSkipNextCircle,BiSkipPreviousCircle } from "react-icons/bi";

/* eslint-disable */ 
const Media=()=>{

const [onView, setonView] = useState(true)


     const handlerNextVideo=()=>{
      setonView(!onView)

     }
    


        return(
        <section id='mediaSection' className='main-boxMedia'>
           <div className="main-media"> 
              <div className="videos-box">
                { onView=== true ?
            <div className="video-box"> 
              
                 <div className="sub-video-box">
                  <div className="video">
                   <ReactPlayer url='https://www.youtube.com/watch?v=Visd9kLthWY' width='100%' height='100%' controls loop />
                   </div>
                 </div>
                 
                 <div className="button-option-box">
                  <button className="button-option-prev" onClick={handlerNextVideo}><BiSkipPreviousCircle/></button>
                  <button className="button-option-next" onClick={handlerNextVideo}><BiSkipNextCircle/></button>
                </div>
            </div> 
                 :
                 <div className="video-box"> 
              
                 <div className="sub-video-box">
                  <div className="video">
                   <ReactPlayer url='https://www.youtube.com/watch?v=hprSDL4KL8k' width='100%' height='100%' controls loop />
                   </div>
                 </div>
                 
                 <div className="button-option-box">
                  <button className="button-option-prev" onClick={handlerNextVideo}><BiSkipPreviousCircle/></button>
                  <button className="button-option-next" onClick={handlerNextVideo}><BiSkipNextCircle/></button>
                </div>
            </div> 
               }
              </div>

              <div className="music-box">
                 
                 <Iframe style="border-radius:8px" src="https://open.spotify.com/embed/track/2G7L66X13OlEkMahElk4PX?utm_source=generator&theme=0"
                  width="45%" height="100%" frameBorder="0" allowfullscreen="" as="style"
                  rel="stylesheet preload prefetch"  allow="autoplay; 
                  clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></Iframe>      

                  <Iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1DAYymPc56ZiMIB1vaaybV?utm_source=generator" 
                  width="45%" height="100%" frameBorder="0" allowfullscreen="" as="style"
                  rel="stylesheet preload prefetch" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></Iframe>  
              </div>
            </div> 
        </section>
        )
    }


export default Media;