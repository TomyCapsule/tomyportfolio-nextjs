import React from 'react';
import { Fade,Button } from 'reactstrap';

function Menu(props){

    let handleFade = (page) => {
        props.handleModal();
        props.handlePageChange(page);
    }

    // let handlePageChange = (page) => {
    //     props.handlePageChange(page);
    // }

    return(
        <Fade in={props.fadeVisible} className='sticky-top' style={{position:'fixed'}} mountOnEnter={false} unmountOnExit={true}>
            <div 
                style={
                    {
                        backgroundColor:'#8c9497',
                        minWidth:'100vw',
                        minHeight:'100vh' 
                    }} 
                className='d-flex flex-column justify-content-center align-items-center'
            >
                <Button className='icon-hover' onClick={()=>handleFade(0)} style={{backgroundColor:'transparent', borderColor:'transparent', boxShadow:'none'}}>
                    <p className='fadeMenu' style={{color:'white'}}>HOME</p>
                </Button>
                <Button className='icon-hover' onClick={()=>handleFade(1)} style={{backgroundColor:'transparent', borderColor:'transparent', boxShadow:'none'}}>
                    <p className='fadeMenu' style={{color:'white'}}>PROJETS</p>
                </Button>
                <Button className='icon-hover' onClick={()=>handleFade(2)} style={{backgroundColor:'transparent', borderColor:'transparent', boxShadow:'none'}}>
                    <p className='fadeMenu' style={{color:'white'}}>À PROPOS</p>
                </Button>
                <Button className='icon-hover' onClick={()=>handleFade(3)} style={{backgroundColor:'transparent', borderColor:'transparent', boxShadow:'none'}}>
                    <p className='fadeMenu' style={{color:'white'}}>CONTACT</p>
                </Button>
            </div>
        </Fade>
    )
}

export default Menu;