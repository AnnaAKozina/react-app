import React from 'react';
import Image from './Image'

const ImageGrid = ({ images, handleClick }) => {
    console.log(images)
    return(
        <div style={styles}>
           {
               images.map((image, i)=>{
                return(
                    <Image 
                    key = {image.image_group + image.word}
                    imgUrl = {image.image_group}
                    handleClick = {handleClick}
                    index = {i}/>
                )
            })
           }
        </div>
    )
}

const styles = {
    height: '35%',
    width: '100%',
    background: 'yellow',
    display: 'flex',
    flexWrap: 'wrap'
}

export default ImageGrid;