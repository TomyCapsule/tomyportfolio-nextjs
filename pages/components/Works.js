import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { animated, easings, useSpring } from 'react-spring';
import { Badge, Modal } from 'reactstrap';
import { Waypoint } from 'react-waypoint';
import AwesomeSlider from 'react-awesome-slider';
import {useDispatch, useSelector} from 'react-redux';
import { switchMode, lightNavBar, darkNavBar } from '../../features/navbar/navbarSlice';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import Image from 'next/image';
import worksSmall from '../../public/works-small.jpg';
import paintIcon from '../../public/paint-palette.png';
import nectaarHome from '../../public/Nectaar-home.png';
import nectaarMap from '../../public/Nectaar-map.png';
import weatherIcon from '../../public/rainy-day.png';
import weatherAppOg from '../../public/weatherapp-og.png';
import weatherAppNew from '../../public/weather-app1.png';
import beforeAfter from '../../public/before-after.png';
import journalIcon from '../../public/journal.png';
import morningNewsOg from '../../public/morningnews-og.png';
import morningNewsNew from '../../public/morningnews-new.png';

function Works(){

    const [modalVisible, setModalVisible] = useState(false);
    const [modalImage, setModalImage] = useState(null);
    const toggleModal = (imgSrc) =>{
        setModalVisible(!modalVisible);
    }

    const dispatch = useDispatch();
    const navbarState = useSelector((state)=>state.navbarState.value);

    const [isOnView, setIsOnView] = useState(false);

    const [isSubAnimOver, setIsSubAnimOver] = useState(false);
    const submarineAnimationUp = useSpring({
        config:{duration:2000, easing: easings.easeOutCirc},
        from:{
            transform:'translate(-100px,50px)'
        },
        to:{
            transform: isOnView ? 'translate(0px,0px)':'translate(-100px,50px)'
        },
        onRest:()=>setIsSubAnimOver(true)
    })

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

    return(
        <AwesomeSlider bullets={false} organicArrows={false} animation='scaleOutAnimation'
            buttonContentRight={navbarState ? <p className="arrow-hover-dark" >{">"}</p> : <p className="arrow-hover" >{">"}</p>}
            buttonContentLeft={navbarState ? <p className="arrow-hover-dark" >{"<"}</p> : <p className="arrow-hover"  >{"<"}</p>}
            onTransitionRequest={()=>dispatch(switchMode())}
        >
            <div className='content justify-content-evenly test-bg4'>
                <Waypoint onEnter={()=>{setIsOnView(true);dispatch(darkNavBar())}} onLeave={()=>{setIsOnView(false);setIsSubAnimOver(false)}}/> 
                <animated.div className="col-5 d-flex justify-content-center" style={fadeInFromLeft}>
                    <img className="box-shadow" src='./works-small.jpg' style={{width: "65%",borderRadius:"4%"}} alt="contactpic"/>                 
                </animated.div>
                <animated.div className="col-lg-5 " style={fadeInFromRight}>
                        <div className='d-flex flex-column justify-content-center align-items-start' 
                            style={{borderRadius:"4%", padding:"100px 20px", color:'white'}}>
                                <span>Vous trouverez ici les projets auxquels j'ai participé:</span>
                                <ul className="mt-2 d-flex flex-column align-items-start w-100">
                                    <li style={{textAlign:'start'}}>Nectaar, une application mobile développée en moins de 2 semaines qui permet de réserver des places pour des événements culturels</li>
                                    <li style={{textAlign:'start'}}>My Weather App, une simple web-app météo</li>
                                    <li style={{textAlign:'start'}}>Morning News, une web-app qui donne les dernières nouvelles</li>
                                    <li style={{textAlign:'start'}}>Ce portfolio, développé à l'origine en React mais désormais sous <span className="fw-bold">Next.JS</span><br/>
                                        <span className="fw-bold">Je compte remplacer reactstrap par tailwind.</span> J'ai juste besoin d'un peu de temps pour apprendre ces technos et faire quelques tests sur des mini-projets !
                                    </li>
                                </ul>
                        </div>
                </animated.div>
                
                <animated.div style={titleFade}>
                    <h1 className="title titleFade"
                        style={{
                            width:'min-content',fontSize:'150px',
                            color:'white',position:'absolute',
                            top:"24vh",right:"20vw",opacity:0.4
                        }}>Projets</h1>
                </animated.div>
                <animated.div style={submarineAnimationUp}>
                    <img layout="fill" src='/submarine2.png' alt='submarine-pic' className="pictogram-submarine" 
                    style={isSubAnimOver ? {transform:'rotate(0deg)',transition:'0.3s ease-in-out'} : undefined }/>
                </animated.div>
            </div>

            <div className='content justify-content-evenly nectaar-background'>
                
                    <animated.div className="col-lg-5 offset-1 h-75" style={{zIndex:1,...fadeInFromLeft}}>
                        <Waypoint onEnter={()=>{dispatch(lightNavBar())}}/>
                        <div className="d-flex flex-column justify-content-start align-items-start h-100" >
                            <div style={{position:"relative",width:"80%", height:"50%"}}>
                                <Image layout="fill" objectFit="contain" src="https://nectaar.io/wp-content/uploads/2022/01/NECTAAR.svg" alt="nectaar-logo" />
                            </div>
                            <div>
                                <Badge className="badge-tech fs-6">React Native</Badge>
                                <Badge className="badge-tech fs-6">Expo</Badge>
                                <Badge className="badge-tech fs-6">Node.js</Badge>
                                <Badge className="badge-tech fs-6">Express</Badge>
                                <Badge className="badge-tech fs-6">mongoDB</Badge>
                            </div>
                            <div className="h-100 mt-5">
                                <p>Une application mobile qui proposera des accès à des événements culturels, testés et approuvés, à des prix attractifs.</p>
                                <p>Dans le cadre d'un projet de fin de formation, j'étais en charge la création de la map et de ses interactions, de la gestion du back-end, de l'environnement de développement et du déploiement (Git / Heroku).</p>
                            </div>
                            <div className="d-flex justify-content-end w-100 mb-5">
                                <a href="https://nectaar.io" target="_blank" rel="noreferrer" 
                                    style={{color:'white'}}
                                    className="p-3 link-button box-shadow">Voir le site</a>
                            </div>
                        </div>
                    </animated.div>
                    <div style={{position:'fixed', right:"10%", opacity:0.1, height:"100vh", width:"50vw"}}>
                        <div className="h-100 w-100" style={{position:'relative'}}>
                            <Image layout="fill" objectFit="contain" alt="paint-icon" src={paintIcon}/>
                        </div>
                    </div>
                <animated.div className="col-5 d-flex" style={{height:"80%",...fadeInFromRight}}>
                    <div style={{position:'relative',width:"40%",minHeight:"100%",borderRadius:"4%", marginRight:"20px",zIndex:1}}>
                        <Image layout="fill" className="box-shadow" src={nectaarHome}  alt="nectaar-home"/>
                    </div>
                    <div style={{position:'relative',width:"40%",minHeight:"100%",borderRadius:"4%",zIndex:1}}> 
                        <Image layout="fill" className="box-shadow" src={nectaarMap} alt="nectaar-map"/>
                    </div>            
                </animated.div>  
                 
            </div>

            <div className='content justify-content-evenly weatherapp-bg' style={{color:'white'}}>
                <Waypoint onEnter={()=>dispatch(darkNavBar())}>
                    <animated.div className="col-lg-5 offset-1 mt-5 h-75" style={{zIndex:1,...fadeInFromLeft}}>
                        <div className="d-flex flex-column justify-content-start align-items-start h-100">
                            <h1 style={{textShadow: "2px 4px 3px rgba(0,0,0,0.3)"}}>My Weather App</h1>
                            <div>
                                <Badge className="badge-tech fs-6">HTML / CSS</Badge>
                                <Badge className="badge-tech fs-6">EJS</Badge>
                                <Badge className="badge-tech fs-6">Node.js</Badge>
                                <Badge className="badge-tech fs-6">Express</Badge>
                                <Badge className="badge-tech fs-6">mongoDB</Badge>
                                <Badge className="badge-tech fs-6">Webservice</Badge>
                            </div>
                            <div className="h-100 mt-5">
                                <p style={{textAlign:'start'}}>Une web-app qui donne la météo de la ville demandée grâce à l'API d'OpenWeatherMap.</p>
                                <p style={{textAlign:'start'}}>A l'origine un court projet de la Capsule, j'ai peu après décidé de retravailler le site pour un meilleur rendu visuel en m'inspirant d'un template disponible sur Dribbble.</p>
                            </div>
                        </div>
                    </animated.div>
                </Waypoint>  
                <div style={{position:'fixed', right:"10%", width:"50vw",height:"100vh", opacity:0.1}}>
                    <div className="h-100 w-100" style={{position:'relative'}}>
                        <Image layout="fill" objectFit="contain" src={weatherIcon}  alt="rain-icon"/>
                    </div>
                </div>
                
                <animated.div className="d-flex flex-column col-5" style={{height:"80%",...fadeInFromRight}}>
                    <div className="nextjs-image" style={{position:"relative",width:"90%",height:"100%", marginBottom:"20px", zIndex:1}}>
                        <Image style={{borderRadius:'4%'}} layout="fill" objectFit="fill" className="works-img" src={weatherAppOg} onClick={()=>{setModalImage(weatherAppOg);toggleModal()}}  alt="weather-app"/> 
                    </div>
                    <div className="nextjs-image" style={{position:"relative",width:"90%",height:"100%", zIndex:1}}>
                        <Image style={{borderRadius:'4%'}} layout="fill" objectFit="fill" className="works-img" src={weatherAppNew} onClick={()=>{setModalImage(weatherAppNew);toggleModal()}} alt="weather-app"/>             
                    </div>
                    <div style={{width:'50px',height:"50px", position:'absolute', top:'50%',right:'3%', transform:'rotate(40deg)'}}>
                        <div className="h-100 w-100" style={{position:'relative'}}>
                            <Image layout="fill" objectFit="fill" src={beforeAfter} alt="before-after-arrow" />                        
                        </div>
                    </div>    
                </animated.div>  
                <Modal isOpen={modalVisible} toggle={toggleModal} centered>
                    <div style={{position:"relative",width:'80vw', height:'80vh', borderRadius:'25px'}}>
                        <Image layout="fill" objectFit="fill" alt="zoom-img" src={modalImage} />
                    </div>
                </Modal>
            </div>

            <div className='content justify-content-evenly morningnews-bg'>
                
                    <animated.div className="col-lg-5 offset-1 mt-5 h-75" style={{zIndex:1,...fadeInFromLeft}}>
                        <Waypoint onEnter={()=>dispatch(lightNavBar())}/>
                        <div className="d-flex flex-column justify-content-start align-items-start h-100">
                            <h1 style={{textShadow: "2px 4px 3px rgba(0,0,0,0.3)"}}>Morning News</h1>
                            <div>
                                <Badge className="badge-tech fs-6">React</Badge>
                                <Badge className="badge-tech fs-6">Bootstrap</Badge>
                                <Badge className="badge-tech fs-6">Webservice</Badge>
                            </div>
                            <div className="h-100 mt-5">
                                <p style={{textAlign:'start'}}>Une web-app qui donne les dernières news du jour par source grâce à News API.</p>
                                <p style={{textAlign:'start'}}>Toujours un projet de la Capsule, le principal challenge de la refonte visuelle était la transition vers Bootstrap/Reactstrap mais cela m'a permis d'aujourd'hui d'apprendre son utilisation. 
                                Par ailleurs, j'ai commencé à travailler sur des mini-projets avec Tailwind.</p>
                            </div>
                        </div>
                    </animated.div>
                <div style={{position:'fixed', right:"10%", width:"50%",height:"100vh", opacity:0.1}}>
                    <div className="h-100 w-100" style={{position:'relative'}}>
                        <Image layout="fill" objectFit="contain" alt="journal-icon" src={journalIcon} />
                    </div>
                </div>
                <animated.div className="d-flex flex-column col-5" style={{height:"80%",...fadeInFromRight}}>
                    <div className="nextjs-image" style={{position:'relative',width: "90%",height:"100%", marginBottom:"20px", zIndex:1}}>
                        <Image style={{borderRadius:'4%'}} layout="fill" objectFit="fill" className="works-img" src={morningNewsOg} onClick={()=>{setModalImage(morningNewsOg);toggleModal()}}  alt="weather-app"/> 
                    </div>
                    <div className="nextjs-image" style={{position:'relative',width: "90%",height:"100%",borderRadius:"20px", zIndex:1}}>
                        <Image style={{borderRadius:'4%'}} layout="fill" ojbectFit='fill' className="works-img" src={morningNewsNew} onClick={()=>{setModalImage(morningNewsNew);toggleModal()}} alt="weather-app"/>
                    </div>
                    <div style={{width:'50px',height:"50px", position:'absolute', top:'50%',right:'3%', transform:'rotate(40deg)'}}>
                        <div className="h-100 w-100" style={{position:'relative'}}>
                            <Image layout="fill" objectFit="fill" src={beforeAfter} alt="before-after-arrow" />                        
                        </div>
                    </div>                   
                </animated.div>
                <Modal isOpen={modalVisible} toggle={toggleModal} centered>
                    <div style={{position:"relative",width:'80vw', height:'80vh', borderRadius:'25px'}}>
                        <Image layout="fill" objectFit="fill" alt="zoom-img" src={modalImage} />
                    </div>                
                </Modal>
            </div>
        </AwesomeSlider>
    )
}

export default Works;