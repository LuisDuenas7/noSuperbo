import React from 'react'
import '../Home.css'
import img1 from '../img/portada.jpeg'


const Home=()=>{
        return (
            <section id='homeSection' className='main-boxHome'>
                <div className='main-home'>
                    <div className='img-box'>
                          
                           <img className='img-home' src={img1} alt='img'/>
                    </div>
                    
                    <div className='text-box'>

                       <h1 className='tittle'>  <span className='no-text'>No</span> somos una banda.      <span className='no-text'>No</span> te vamos a gustar.</h1>
                      
                    </div>
                </div>
            </section>
        );

    }



export default Home;