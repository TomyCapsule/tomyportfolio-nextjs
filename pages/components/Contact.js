import React, {useState, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { animated,a, useSpring, easings } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import { useDispatch } from 'react-redux';
import { darkNavBar } from '../../features/navbar/navbarSlice';
import { Button } from 'reactstrap';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import gmailIcon from '../../public/gmail.png';
import linkedinIcon from '../../public/linkedin.png';


function Contact(){

    let contactFormRef = useRef();
    const [mailSent, setMailSent] = useState(null);
    const [fadeOnClick, api] = useSpring(()=>({opacity:1}));

    let handleContactForm = (e) =>{
        e.preventDefault();
        api.start({opacity: 0});  
        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID , contactFormRef.current, process.env.NEXT_PUBLIC_USER_ID)
            .then((result)=>{
                setMailSent(true);
                
            }, (error) => {
                console.log('error:',error.text)
                setMailSent(false);
            });
    } 

    if(mailSent !== null){
        api.start({opacity:1})
    }

    

    const [flipped, setFlipped] = useState(false);
    const {transform, opacity} = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80},
    })


    const dispatch = useDispatch()
    const [isOnView, setIsOnView] = useState(false);
    const titleFade = useSpring({
        config:{duration:450},
        from:{opacity: 0,transform: 'translate(-100px,0px)'},
        to: {
            opacity: isOnView ? 1 : 0,
            transform: isOnView ? "translate(0px,0px)" : "translate(-100px,0px)"
        }
    })

    const fadeInFromRight = useSpring({
        config:{duration: 200},
        from: {opacity: 0, transform: "translate(50px, 0px)"},
        to: {
            opacity: isOnView ? 1 : 0,
            transform: isOnView ? "translate(0px,0px)" : "translate(50px, 0px)"
        }
    })

    const fadeInFromLeft = useSpring({
        config:{duration: 200},
        from: {opacity: 0, transform: "translate(-50px, 0px)"},
        to: {
            opacity: isOnView ? 1 : 0,
            transform: isOnView ? "translate(0px,0px)" : "translate(-50px, 0px)"
        }
    })

    const fadeInFromBottom = useSpring({
        config:{duration: 800,easing:easings.easeOutBounce},
        from: {opacity: 0, transform:"translate(0px,-150px)"},
        to:{
            opacity: isOnView ? 0.3 : 0,
            transform: isOnView ? "translate(0px, 0px)" : "translate(0px,-150px)"
        }
    })

    return(
            <div className='content justify-content-evenly test-bg3'>
                <Waypoint onEnter={()=>{setIsOnView(true);dispatch(darkNavBar())}} onLeave={()=>setIsOnView(false)}/>
                <animated.div className="flex justify-center col-5" style={fadeInFromLeft}>
                    <img layout="fill" className="box-shadow" src='/contact.jpg' style={{width: "65%",borderRadius:"4%"}} alt="contactpic"/>            
                </animated.div>
                <a.div className="col-lg-5 offset-1 d-flex contact-link-reposition" style={{position:'inherit',top:'-30vh',...fadeInFromRight}}>
                    <animated.div className="contact-flip" 
                        style={{opacity: opacity.to(o => 1 - o),transform}}>
                            <div className=' d-flex flex-column justify-content-center' 
                                style={{padding:"100px 20px", color:'white'}}>

                                <span className="d-flex align-items-center" style={{marginTop:'5%', textAlign:'start', fontSize:"200%"}}>
                                    <Image width={50} height={50} src={gmailIcon} alt='gmail-icon' /> 
                                    <a href="mailto:tvisouthiphong@gmail.com" target="_blank" rel="noreferrer" className="icon-hover ms-3" style={{textDecoration:'none', color:'white'}}>  tvisouthiphong@gmail.com</a>
                                </span>

                                <span className="d-flex align-items-center" style={{marginTop:'5%', textAlign:'start', fontSize:"200%"}}>
                                    <Image width={50} height={50} src={linkedinIcon} className='contact-logo' alt="linkedin-icon" />
                                    <a href="https://www.linkedin.com/in/tvisouthiphong" target="_blank" rel="noreferrer" className="icon-hover ms-3" style={{textDecoration:'none', color:'white'}}> /tvisouthiphong</a>
                                </span>

                                {/* <span style={{marginTop:'5%', textAlign:'start', fontSize:"200%"}}>
                                    <img layout="fill" src='/github-light.png' className='contact-logo' alt='github-icon' />
                                    <a href="https://github.com/TomyCapsule" target="_blank" rel="noreferrer" className='icon-hover' style={{textDecoration:'none', color:'white'}}> /TomyCapsule</a>
                                </span> */}

                                
                            </div>
                    </animated.div>
                
                    <animated.div className="contact-flip mt-5 " 
                        style={{opacity,transform,rotateX:'180deg',
                                minWidth:'100%',...fadeOnClick}}>
                            {mailSent === true 
                            ?   <div id='contactForm' className={flipped ? 'd-flex flex-column justify-content-center mt-5' : ''} 
                                    style={{width:'550px',borderRadius:"4%", color:'white',display: opacity === 0 ? 'flex' : 'none'}}>
                            
                                    <p>Votre message a bien été envoyé, je vous répondrai dans les plus brefs délais. A bientôt !</p>
                                </div> 
                            
                            : <div id='contactForm' className={flipped ? 'd-flex flex-column justify-content-center mt-5' : ''} 
                                    style={{width:'550px',borderRadius:"4%", color:'white',display: opacity === 0 ? 'flex' : 'none'}}>
                                        
                                    <form ref={contactFormRef} onSubmit={handleContactForm}>
                                        <input name="user_name" className='mb-3 input-contact' type="text" placeholder='Nom' required />
                                        <input name="user_email" className='mb-3 input-contact' type="text" placeholder='Email' required />   
                                        <textarea name="message" className="mb-5 input-contact" rows="5" placeholder='Message' required />
                                        <input style={{position:'absolute',bottom:"-30px",right:"85px",backgroundColor:"#636e72", borderRadius:"10px",padding:"10px",width:"100px",color:'#FFF',border:'none'}} 
                                            type="submit" value="Envoyer" />  
                                    </form>                                    
                                </div>}
                    </animated.div>
                </a.div>
                <animated.div style={titleFade}>
                    <h1 className="title titleFade"
                        style={{
                            width:'min-content',fontSize:'150px',
                            color:'white',position:'absolute',
                            top:"25vh",right:"20vw",opacity:0.4
                        }}>Contact</h1>
                </animated.div>
                <animated.div className="w-full" style={fadeInFromBottom}>
                    <img src='/hotspot.png' className="pictogram-coffee ms-4" alt="coffeepic"/>
                </animated.div>
                <div style={{position:'absolute',top:'20vh', right: '5vw', width:'250px', color:'#FFF',zIndex:2}}>
                    <span className="flex">
                        {flipped ? 'Plutôt des liens en fait' : 'Plutôt un formulaire ?'}
                        <img layout="fill" onClick={()=>setFlipped(!flipped)} src="/flip.png" alt="flip" className="filter-white ms-3" 
                            style={{width:'30px', cursor:'pointer'}} />
                    </span>
                </div>
            </div>
    )
}

export default Contact;