import React from 'react';

const Image = ({ imgUrl, handleClick, index }) => {
    return(
        <div style={styles}>
            <img src={imgUrl} 
            style={{
                width:'100%',
                height: '100%'
            }} 
            onClick={handleClick}
            data-index={index}/>
        </div>
    )
}

const styles = {
    height: '50%',
    width: '25%',
    background: 'red'
}

export default Image;