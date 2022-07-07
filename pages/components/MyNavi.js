import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
} from 'reactstrap';
import { useSelector } from 'react-redux';
import Menu from './Menu';
import { animated, useSpring } from 'react-spring';
import Image from 'next/image';
import cvIcon from '../../public/cv-icon.png';
import linkedInIcon from '../../public/linkedin.svg';
import barsIcon from '../../public/bars.svg';



function MyNavi(props){

    const moveFromTop = useSpring({
      config:{duration: 500},
      delay:5000,
      from: {
        transform: 'translate(0px,-100px)'
      },
      to:{
        transform: 'translate(0px,0px)'
      }
    })

    const [menuRotate, setMenuRotate] = useState(false);

    const navbarState = useSelector((state)=>state.navbarState.value);
    const worksState = useSelector((state)=>state.navigationState.works);

    let [modalVisible, setModalVisible] = useState(false);
    let handleModal = () => {
      setMenuRotate(!menuRotate);
      setModalVisible(!modalVisible);
    }

    let handlePageChange = (page) =>{
      props.handlePageChange(page);
    }

    if(navbarState){
      return(
        <>
          <Menu fadeVisible={modalVisible} handleModal={handleModal} handlePageChange={handlePageChange} />
            <Navbar
              color="faded"
              light
              style={{height:'10vh',position:'fixed',width:'100%'}}
              className="sticky-top"
            >
              <animated.div className="d-flex justify-content-between" style={{width:'100%',...moveFromTop}}>
                <NavbarBrand
                  className="me-auto ms-4 filter-gray icon-hover"
                  href="/"
                  id="coucou"
                >
                  Tomy Visouthiphongs
                </NavbarBrand>
                  <a 
                    className="d-flex justify-content-center align-items-center me-4" 
                    href="https://drive.google.com/file/d/1mMVtNOZQyiDa3bYsiv8Jq69J-cd3yX25/view?usp=sharing" target="_blank" rel="noreferrer">
                    <Image width={30} height={30} src={cvIcon} className="filter-gray icon-hover" alt="cv"/>
                  </a>
                  {/* <a className="d-flex justify-content-center align-items-center" href="https://github.com/TomyCapsule" target="_blank" rel="noreferrer"><img layout="fill" src="/github.svg" className="filter-gray icon-hover" style={{width:30, height:30, marginRight:30}} alt="linkedin"/></a> */}
                  <a 
                    
                    className="d-flex justify-content-center align-items-center me-4" 
                    href="https://www.linkedin.com/in/tvisouthiphong" target="_blank" rel="noreferrer">
                    <Image src={linkedInIcon} width={30} height={30} className='filter-gray icon-hover' alt="linkedin"/>
                  </a>
                <NavbarToggler
                  className="me-4 icon-hover"
                  onClick={handleModal}
                  style={{borderColor:'transparent', boxShadow:'none'}}
                >
                  <Image width={30} height={30} src={barsIcon} className='filter-gray'  alt="bartoggler"/>
                </NavbarToggler>
              </animated.div>
            </Navbar>
        </>
    )
    }else if(worksState !== 2){
      return(
          <>
            <Menu fadeVisible={modalVisible} handleModal={handleModal} handlePageChange={handlePageChange} />
            
            <Navbar
              color="faded"
              light
              style={{height:'10vh',position:'fixed',width:'100%'}}
              className="sticky-top"
            >
              <animated.div className="d-flex justify-content-between" style={{width:'100%',...moveFromTop}}>
                <NavbarBrand
                  className="me-auto ms-4 icon-hover filter-white"
                  href="/"
                >
                  Tomy Visouthiphongs
                </NavbarBrand>
                  <a 
                    className="d-flex justify-content-center align-items-center me-4" 
                    href="https://drive.google.com/file/d/1mMVtNOZQyiDa3bYsiv8Jq69J-cd3yX25/view?usp=sharing" target="_blank" rel="noreferrer">
                      <Image width={30} height={30} src="/cv-icon.png" className="filter-white icon-hover" alt="cv"/>
                  </a>
                  {/* <a className="d-flex justify-content-center align-items-center" href="https://github.com/TomyCapsule" target="_blank" rel="noreferrer"><img layout="fill" src="/github.svg" className="filter-white icon-hover" style={{width:30, height:30, marginRight:30}} alt="linkedin"/></a> */}
                  <a 
                    
                    className="d-flex justify-content-center align-items-center me-4" 
                    href="https://www.linkedin.com/in/tvisouthiphong" target="_blank" rel="noreferrer">
                    <Image width={30} height={30} src="/linkedin.svg" className='filter-white icon-hover' alt="linkedin"/>
                  </a>
                  <NavbarToggler
                    className="me-4 icon-hover"
                    onClick={handleModal}
                    style={{borderColor:'transparent', boxShadow:'none'}}
                  >
                    <Image width={30} height={30} src="/bars.svg" className='filter-white' alt="bartoggler"/>
                  </NavbarToggler>
              </animated.div>
            </Navbar>
            
          </>
      )
    }
}

export default MyNavi;