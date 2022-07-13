import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { animated, useSpring, useChain, useSpringRef, easings } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import {useDispatch} from 'react-redux';
import { darkNavBar, lightNavBar } from '../../features/navbar/navbarSlice';
import { Button } from 'reactstrap';
import Image from 'next/image';


function Home(props){

    const dispatch = useDispatch();

    const [homeOnView, setHomeOnView] = useState(false);

    const moveScrollMessageBottom = useSpring({
        config:{duration:300},
        from:{
            transform: 'translate(0px,300px)'
        },
        to:{
            transform: homeOnView ? 'translate(0px,300px)' : 'translate(0px,100px)'
        },
    })

    const fadeMessage = useSpring({
        config:{duration:1000, easing: easings.easeOutBounce},
        from:{ 
            // transform:'translateX(100vw)',
            opacity:0
        },
        to:{
            // transform:'translateX(0vw)',
            opacity:1
        },
        delay:5000
    })

    const openLoaderLeftRef = useSpringRef();
    const openLoaderLeft = useSpring({
        ref:openLoaderLeftRef,
        config:{duration:3000,easing:easings.easeOutExpo},
        from:{
            height:'100vh',
        },
        to:{
            height:'0vh'
        },
        delay:1500
    })

    const opacityLoaderRef = useSpringRef();
    const opacityLoader = useSpring({
        ref:opacityLoaderRef,
        config:{duration:3000, easing: easings.easeInBack},
        from:{
            opacity:1
        },
        to:{
            opacity:0
        }
    })

    useChain([opacityLoaderRef,openLoaderLeftRef],[0,1.5])

    return(
        <>
            <animated.div className="loader-wrapper d-flex flex-column justify-content-center align-items-center" style={{...openLoaderLeft,backgroundColor:'#2c2c54'}}>
                <animated.div style={opacityLoader}><p style={{color:'white', fontSize:'1.25rem'}}>Tomy Visouthiphongs</p>
                    <div className="loading-bar">
                        <div className="progress-bar-loader"></div>
                    </div>
                </animated.div>
            </animated.div>
            
            <div className='content test-bg0'>
                <animated.div className="container-fluid h-100 d-flex flex-column justify-content-center align-items-center" style={{position:'absolute', top:0, left:0,...fadeMessage,zIndex:1}}>
                    <div className="d-flex flex-column align-items-start justify-content-center " style={{color:'#b2bec3',fontSize:'30px', lineHeight:"50px"}}>
                        <p>Bonjour ! Je m'appelle <span style={{fontWeight:'bold', color:'#FFFFFF',fontSize:'35px'}}>Tomy,</span></p>
                        <p>et je suis développeur full-stack junior.</p>
                    </div>
                    <Button onClick={()=>props.handlePageChange(1)} size='lg' style={{boxShadow:'none'}}>Voir mes projets</Button>
                </animated.div>
                <div className="area" >
                        <ul className="circles">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                        </ul>
                </div >
                <Waypoint onEnter={()=>{dispatch(darkNavBar());}}  />
                <animated.div style={fadeMessage}>
                    <div style={{position:"fixed",top:0,right:"10%",opacity:0.1, width:"45%",height:"100%"}}> 
                        <Image layout="fill" objectFit="contain" alt="hello-icon" src='/speech-bubble.png'/>
                    </div>
                </animated.div>
            </div>
            <Waypoint onEnter={()=>setHomeOnView(true)} onLeave={()=>setHomeOnView(false)} />
            
            <animated.div style={moveScrollMessageBottom}>
                <div className="scrollmarkerdiv">
                    <p className="scrollmarker" style={{margin:'10px',color:'white', display:homeOnView ? 'none' : undefined}}>Scrolldown</p>
                </div>
            </animated.div>
        </>
    )
}

export default Home;