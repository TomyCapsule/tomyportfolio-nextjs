import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AwesomeSlider from 'react-awesome-slider';
import { animated, useSpring} from 'react-spring';
import { Waypoint } from 'react-waypoint';
import {useDispatch} from 'react-redux';
import { darkNavBar} from '../../features/navbar/navbarSlice';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import Image from 'next/image';
import plantIcon from '../../public/plant2.png';
import htmlIcon from '../../public/html-5.svg';
import cssIcon from '../../public/css-3.svg';
import jsIcon from '../../public/javascript.svg';
import nodeIcon from '../../public/nodejs-icon.svg';
import nextjsIcon from '../../public/nextjs.svg';
import expressIcon from '../../public/express.svg';
import mongodbIcon from '../../public/mongodb-icon.svg';
import reactIcon from '../../public/react.svg';
import expoIcon from '../../public/expo-icon.svg';
import flexibleIcon from '../../public/flexibility-icon.png';
import openmindIcon from '../../public/open-mind-icon.png';
import timeIcon from '../../public/time-icon.png';
import problemIcon from '../../public/problem-solving-icon.png';
import codeBg from '../../public/code.png';
import clockBg from '../../public/clock.png';

function About(){

    const dispatch = useDispatch();

    const [isOnView, setIsOnView] = useState(false);

    const fadeInFromLeft = useSpring({
        config:{duration: 200},
        from: {opacity: 0, transform: "translate(-50px, 0px)"},
        to: {
            opacity: isOnView ? 1 : 0,
            transform: isOnView ? "translate(0px,0px)" : "translate(-50px, 0px)"
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

    const titleFade = useSpring({
        config:{duration:450},
        from:{opacity: 0,transform: 'translate(100px,0px)'},
        to: {
            opacity: isOnView ? 1 : 0,
            transform: isOnView ? "translate(0px,0px)" : "translate(100px,0px)"
        }
    })


    return(
        <AwesomeSlider bullets={false} organicArrows={false} animation='scaleOutAnimation'
            buttonContentRight={<p className="arrow-hover">{">"}</p>}
            buttonContentLeft={<p className="arrow-hover">{"<"}</p>}>
            {/* ABOUT ME PAGE */}
            <div className='content justify-content-evenly test-bg4' style={{height:'100vh'}}>
                
                    <animated.div className="col-lg-5 offset-1" style={fadeInFromLeft}>
                        <div className=' d-flex flex-column justify-content-center' 
                            style={{borderRadius:"4%", padding:"100px 20px", color:"#FFFFFF", zIndex:1}}>
                            

                            <span style={{marginTop:'5%',marginBottom:'20%', textAlign:'start',lineHeight:"30px"}}>
                                Je suis un développeur full-stack junior, basé en Ile-de-France et alumni du batch #50 du coding bootcamp de La Capsule.<br/><br/>
                                Je cherche souvent à comprendre le fonctionnement de ce qui m'entoure et je cherche à aller plus loin dans ce que j'entreprends.
                                J'ai commencé à m'intéresser à la création d'applications web et mobile depuis un moment mais j'ai enfin décidé d'en faire mon métier.<br/><br/>
                                Ce portfolio m'a permis de jouer un peu avec des outils que je n'utilisais pas avant mais j'ai bien l'intention de continuer à m'améliorer ! <br/><br/>
                                Je suis maintenant <span style={{textDecoration:'underline'}}>à la recherche d'un poste de développeur full-stack junior</span> pour lancer ma carrière et apprendre au sein de professionnels.
                                                   
                            </span>
                            <Waypoint onEnter={()=>{setIsOnView(true); dispatch(darkNavBar())}} onLeave={()=>setIsOnView(false)}/>

                        </div>
                    </animated.div>
                <div style={{position:'fixed', right:"10%", width:"50%",height:"100vh", opacity:0.1}}>
                    <div className="h-100 w-100 position-relative">
                        <Image layout="fill" objectFit="contain" src={plantIcon}  alt="plant"/>
                    </div>
                </div>
                <animated.div className="col-5" style={fadeInFromRight}>
                    <img layout="fill" className="box-shadow" src='/Tomy.jpg' style={{width: "62%",borderRadius:"4%",zIndex:1}} alt="profilepic"/>                 
                </animated.div>
                <animated.div style={titleFade}>
                    <h1 className="title titleFade"
                        style={{
                            width:'max-content',fontSize:'150px',
                            color:'#FFFFFF',position:'absolute',
                            top:"24vh",right:"38vw",opacity:0.4
                        }}>À propos</h1>
                </animated.div>
                    {/* <animated.div style={trainAnimationFirst}>
                        <img layout="fill" src='/electric-train.png' alt='train-pic' className="pictogram-train" />
                    </animated.div> */}
            </div>

            {/* SKILL SET PAGE */}
            <div className='content justify-content-evenly test-bg4'>
                <div className="d-flex flex-column col-2 justify-content-evenly mb-5" style={{height:"65%"}}>
                    <div style={{position:'absolute'}}>
                        <Waypoint onEnter={()=>dispatch(darkNavBar())}/>
                    </div>
                    
                    <div style={{zIndex:1}}>
                        <div className="d-flex justify-content-start">
                            <div className="position-relative" style={{width:"fit-content", height:"fit-content"}}>
                                <Image width={50} height={70} src={htmlIcon} alt="html5"/>
                            </div>
                            <div className="position-relative" style={{width:"fit-content", height:"fit-content"}}>
                                <Image width={50} height={70} src={cssIcon} alt="css3"/>
                            </div>
                            <span className="align-self-center ms-auto text-light">HTML 5 / CSS 3</span>
                        </div>
                        
                    </div>
                    <div style={{zIndex:1}}>
                        <div className="d-flex justify-content-start mb-3">
                            <div className="position-relative" style={{width:"fit-content", height:"fit-content"}}>
                                <Image width={50} height={50} src={jsIcon} alt="js"/>
                            </div>
                            <span className="align-self-center ms-auto text-light">JavaScript</span>
                        </div>
                        
                    </div>
                    <div style={{zIndex:1}}>
                        <div className="d-flex justify-content-start mb-3">
                            <div className="position-relative" style={{width:"fit-content", height:"fit-content"}}>
                                <Image width={50} height={56} src={nodeIcon} alt="nodejs"/>
                            </div>
                            <span className="align-self-center ms-auto text-light">NodeJS</span>
                        </div>
                    </div>
                    <div style={{zIndex:1}}>
                        <div className="d-flex justify-content-start mb-3">
                            <div className="position-relative filter-white" style={{width:"fit-content", height:"fit-content"}}>
                                <Image width={50} height={30} src={nextjsIcon} alt="nextjs"/>
                            </div>
                            <span className="align-self-center ms-auto text-light">Next.js (en cours)</span>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column col-2 justify-content-evenly mb-5" style={{height:"65%"}}>
                    <div className="d-flex justify-content-start mb-3" style={{zIndex:1}}>
                        <div className="position-relative filter-white" style={{width:"fit-content", height:"fit-content"}}>
                            <Image width={150} height={43} src={expressIcon} alt="express"/>
                        </div>
                        <span className="align-self-center ms-auto text-light">Express</span>
                    </div>
                    <div className="d-flex justify-content-start mb-3" style={{zIndex:1}}>
                        <div className="position-relative" style={{width:"fit-content", height:"fit-content"}}>
                            <Image width={50} height={50} src={mongodbIcon} alt="mongodb"/>
                        </div>
                        <span className="align-self-center ms-auto text-light">mongoDB</span>                        
                    </div>
                    <div className="d-flex justify-content-start mb-3" style={{zIndex:1}}>
                        <div className="position-relative" style={{width:"fit-content", height:"fit-content"}}>
                            <Image width={50} height={50} src={reactIcon} alt="react"/>
                        </div>
                        <span className="align-self-center ms-auto text-light">React / React Native</span>
                    </div>
                    <div className="d-flex justify-content-start mb-3" style={{zIndex:1}}>
                        <div className="position-relative" style={{width:"fit-content", height:"fit-content"}}>
                            <Image width={50} height={50} src={expoIcon} alt="expo"/>
                        </div>
                        <span className="align-self-center ms-auto text-light">Expo</span>
                    </div>  
                </div>
                <div className="d-flex flex-column col-2 justify-content-evenly mb-5" style={{height:"65%"}}>
                    <div className="d-flex justify-content-start mb-3" style={{zIndex:1}}>
                        <div className="position-relative filter-white" style={{width:"fit-content", height:"fit-content"}}>
                            <Image width={50} height={50} src={flexibleIcon} alt="flexible"/>
                        </div>
                        <span className="align-self-center ms-auto text-light">Flexible</span>
                    </div>
                    <div className="d-flex justify-content-start mb-3" style={{zIndex:1}}>
                        <div className="position-relative filter-white" style={{width:"fit-content", height:"fit-content"}}>
                            <Image width={50} height={50} src={openmindIcon} alt="open-mind"/>
                        </div>
                        <span className="align-self-center ms-auto text-light">Ouvert d'esprit</span>                        
                    </div>
                    <div className="d-flex justify-content-start mb-3" style={{zIndex:1}}>
                        <div className="position-relative filter-white" style={{width:"fit-content", height:"fit-content"}}>
                            <Image width={50} height={50} src={timeIcon} alt="time"/>
                        </div>
                        <span className="align-self-center ms-auto text-light">Gestion du temps</span>
                    </div>
                    <div className="d-flex justify-content-start mb-3" style={{zIndex:1}}>
                        <div className="position-relative filter-white" style={{width:"fit-content", height:"fit-content"}}>
                            <Image width={50} height={50} src={problemIcon} alt="problem-solver"/>
                        </div>
                        <span className="align-self-center ms-auto text-light">Résolution de problèmes</span>
                    </div>  
                </div>
                <div style={{position:'fixed', right:"10%", width:"50%",height:"100vh", opacity:0.1}}>
                    <div className="h-100 w-100 position-relative">
                        <Image layout="fill" objectFit="contain" src={codeBg}  alt="codelogo"/>
                    </div>
                </div>
                <h1 className="title title-reposition"
                    style={{
                        width:'60vw',fontSize:'150px',
                        color:'#FFFFFF',position:'absolute',
                        bottom:0,right:250, opacity:0.4
                    }}>Compétences</h1>
            </div>

            <div className='content justify-content-evenly test-bg4'>

                <div class="row col-12" style={{zIndex:1,color:'#FFF'}}>
                    <div class="col-lg-12">
                    <Waypoint onEnter={()=>dispatch(darkNavBar())}/>
                    <div class="horizontal-timeline">

                        <ul class="list-inline items">
                        <li class="list-inline-item items-list">
                            <div class="px-4">
                            <div class="event-date badge bg-info" style={{position:'absolute',left:0,top:"-10%"}}>Sept 2010</div>
                                <h5 class="pt-2">Uniqlo</h5>
                                <p>{'Partner -> Manager'}</p>
                            </div>
                        </li>
                        <li class="list-inline-item items-list">
                            <div class="px-4">
                            <div class="event-date badge bg-success" style={{position:'absolute',left:0,top:"-10%"}}>2018 - 2020</div>
                                <h5 class="pt-2">Voyages</h5>
                                <p>Asie de l'Est</p>
                            </div>
                        </li>
                        <li class="list-inline-item items-list">
                            <div class="px-4">
                            <div class="event-date badge bg-danger" style={{position:'absolute',left:0,top:"-10%"}}>Mars 2022</div>
                                <h5 class="pt-2">La Capsule</h5>
                                <p>Formation de Développeur Full-Stack</p>
                            </div>
                        </li>
                        <li class="list-inline-item items-list">
                            <div class="px-4">
                            <div class="event-date badge bg-warning" style={{position:'absolute',left:0,top:"-10%"}}>Juin 2022</div>
                                <h5 class="pt-2">La Capsule</h5>
                                <p>Assistant Teacher à La Capsule</p>
                            </div>
                        </li>
                        </ul>

                    </div>

                    </div>
                </div>
                <div style={{position:'fixed', right:"10%", width:"50%",height:"100vh", opacity:0.1}}>
                    <div className="h-100 w-100 position-relative">
                        <Image layout="fill" objectFit="contain" src={clockBg}  alt="clocklogo"/>
                    </div>
                </div>
                <h1 className="title title-reposition"
                    style={{
                        width:'60vw',fontSize:'150px',
                        color:'#FFF',position:'absolute',
                        bottom:0,right:250, opacity:0.4,zIndex:1
                    }}>Timeline</h1>   
                </div>
            
                
            
        </AwesomeSlider>
    )
}

export default About;