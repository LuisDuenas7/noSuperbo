import React,{Component} from 'react'
import {BsYoutube,BsSpotify,BsFacebook,BsInstagram } from "react-icons/bs";
import { SiApplemusic } from "react-icons/si";
import '../Header.css'
import img from '../img/NO LOGO - blanco.png'




class Header extends Component{

   constructor(props){
    super(props);
    this.state={
        isActive:''
    };
   } 
    

    render(){

    
        const handleClickHome=()=>{
            document.getElementById('homeSection').scrollIntoView({behavior: 'smooth'})
            this.setState({isActive:'home'})
        }
        const handleClickMedia=()=>{
            document.getElementById('mediaSection').scrollIntoView({behavior: 'smooth'})
            this.setState({isActive:'media'})
        }
        const handleClickUs=()=>{
            document.getElementById('usSection').scrollIntoView({behavior: 'smooth'})
            this.setState({isActive:'us'})
        }
        const handleClickContact=()=>{
            document.getElementById('contactSection').scrollIntoView({behavior: 'smooth'})
            this.setState({isActive:'contact'})
     
        }
    
        return(
          
            <div className='header-box'>
                <div className='social-box'>
                  <a className='social-icons' href='https://www.facebook.com/NoSuperbo' target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
                  <a className='social-icons' href='https://www.instagram.com/nosuperbo/' target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
                  <a className='social-icons' href='https://www.youtube.com/@NoSuperboOficial/videos' target="_blank" rel="noopener noreferrer"><BsYoutube/></a>
                  <a className='social-icons' href='https://open.spotify.com/artist/2wrF9NQ9WzTGkMd7YtWLB8' target="_blank" rel="noopener noreferrer"><BsSpotify/></a>
                  <a className='social-icons' href='https://music.apple.com/mx/artist/no-superbo/1638551126' target="_blank" rel="noopener noreferrer"><SiApplemusic/></a>
                </div>
               

                <div className='logo-box'> 
                    <img className='logo' src={img} alt='img'/>
                </div>   
                
                <div className='links-box'>
                    <button className={this.state.isActive==='home'? 'icon-active':'buttons' } onClick={handleClickHome}> INICIO</button> 
                    <button className={this.state.isActive==='media'? 'icon-active':'buttons' } onClick={handleClickMedia}>  Media</button>
                    <button className={this.state.isActive==='us'? 'icon-active':'buttons' } onClick={handleClickUs}> Banda</button>
                    <button className={this.state.isActive==='contact'? 'icon-active':'buttons' } onClick={handleClickContact}>   Contacto</button>
                </div>
             </div>

        );

    }
}

export default Header;