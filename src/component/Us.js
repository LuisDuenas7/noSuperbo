import React,{ useRef} from "react";
import '../Us.css'
import luisImg from'./../img/luis.jpg'
import ferImg from'../img/Fer Arreola 3.jpg'
import cesarImg from'../img/Cesar Aguilar 1.jpg'
import aldoImg from'../img/aldo.jpg'
import harryImg from'../img/Jorge Salinas 1.jpg'
import styled from 'styled-components'
import {MdOutlineNavigateNext,MdOutlineNavigateBefore } from "react-icons/md";


const Us=()=>{
    
   const slideshow= useRef(null); 
      
    
    const next=()=>{
      if(slideshow.current.children.length >= 0){
        //select child
         const firstElement= slideshow.current.children[0];
         slideshow.current.style.transition = `1000ms ease-out all`
        // add animation
         const slideSize= slideshow.current.children[0].offsetWidth;
         slideshow.current.style.transform =`translateX(-${slideSize}px)`;
         //return to last position the first child
         const transition =()=>{  
            slideshow.current.style.transition=`none`;
            slideshow.current.style.transform=`translateX(0)`;
            //tomamos primer elemento y lo enviamos al final
            slideshow.current.appendChild(firstElement); 
             // dismunting event listener to solve conflict with events create in previus function
            slideshow.current.removeEventListener('transitionend', transition)
         }

         //Event listener
         slideshow.current.addEventListener('transitionend', transition);
      }
    }

    const previus=()=>{
      
      if(slideshow.current.children.length >0){
          const lastIndex=slideshow.current.children.length -1;
         const lastElement= slideshow.current.children[lastIndex]

         slideshow.current.insertBefore(lastElement, slideshow.current.firstChild)

         slideshow.current.style.transition=`none`;
         
         const slideSize= slideshow.current.children[0].offsetWidth;
         slideshow.current.style.transform=`translateX(-${slideSize}px)`;
 
         setTimeout(()=>{
            slideshow.current.style.transition=`1000ms`;
            slideshow.current.style.transform=`translateX(0)`;
         },30)

      }


    }
     
     
     return(
        <section id='usSection' className='main-boxUs'>
            <div className="us-box">
                <div className="left-us-box">
                  
                    <h2 className="tittle-us"><span className="no-text1">No</span> Superbo</h2>
                <article className="first-section">    
                    <h3>Nosotros:</h3>
                    
                    <p>
                        Fernanda Arreola - Vocal<br/>
                        César Aguilar - Guitarrista<br/>
                        Luis Dueñas - Guitarrista<br/>
                        Jorge Salinas - Tecladista<br/>
                        Aldo Tapia - Baterista<br/>

                    </p>
                </article>

                <article className="second-section">    
                   
                     <h3>Biografía:</h3> 
                    <p>
                     Somos una banda de rock fusión, formada en el 2018 en Guadalajara, Jalisco.
                     Conformada por dos guitarristas, un tecladista, bajista, baterista y una vocal.
                     Como significado del nombre del proyecto, “No Superbo” es no saber exactamente lo que eres, pero sí tener certeza de lo que buscas ser.
                     De la misma manera, el sonido se basa en compartir un mensaje positivo y de emprender un viaje inmersivo para el público.
                     </p>
                  
                </article>                    
        </div>

              
      <div className="right-us-box">
        
       <SlideShowContainer ref={slideshow}> 
         
       
             <Slide>
               <img  src={ferImg} alt='img'/>
               <SlideText><p className="name" >Fernanda Arreola</p></SlideText>
            </Slide>   
             
            <Slide>
               <img src={cesarImg} alt='img'/>
               <SlideText><p className="name">César Aguilar</p></SlideText>
            </Slide>
     
            <Slide>
               <img  src={luisImg} alt='img'/>
               <SlideText><p className="name" >Luis Dueñas</p></SlideText>
            </Slide>

            <Slide>
               <img src={harryImg} alt='img'/>
               <SlideText><p className="name">Jorge Salinas</p></SlideText>
            </Slide>

            <Slide>
               <img src={aldoImg} alt='img'/>
               <SlideText><p className="name" >Aldo Tapia</p></SlideText>
            </Slide>

        
        
       </SlideShowContainer>   
            <Controls>
               <Boton  onClick={previus}> <MdOutlineNavigateBefore className="arrows"/> </Boton>
               <Boton  onClick={next} derecho> <MdOutlineNavigateNext className="arrows"/> </Boton>
            </Controls>
     
      </div>
               
    
       </div>
    </section>
     )
    }


const SlideShowContainer= styled.div`
display:flex;
flex-wrap:nowrap;
height:100%;
width:100%;
align-items:center;
justify-content: center;

`;

const Slide= styled.div`
min-width:100%;
height:100%;
display:flex;
position:relative;
flex-direction:column;
transition: .3s ease all;
z-index: 1;
img { 
   widht:100%;
   
};
`;

const SlideText= styled.div`
background:rgba(0,0,0,.5);
color:#fff;
padding: 10px 60px;
text-align:center;
display:flex;
width:100%;
position:absolute;
z-index:5;
top:91%;
justify-content:center;

@media screen and (max-width:700px){
   position:relative;
}
`;

const Controls= styled.div`
position:absolute;
margin-top:50%;
z-index:15;
widht:100%;
height:100%;
pointer-events:none;

`;

const Boton= styled.button`
pointer-events:all;
color:white;
cursor:pointer;
background:none;
border:none;
outline:none;
width:100px;
bottom:45%;
height:100%;
text-align:center;
position:absolute;
transition:.3s ease all;
color:white;


${props => props.derecho ? 'right:-320px': 'left:-320px' }
`;


export default Us;