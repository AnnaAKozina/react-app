import React from 'react'
import ReactTooltip from 'react-tooltip'

const ActiveImageWindow = ({activeImage}) => {
    const tip = 'Brand: ' + activeImage.brand + 
    '\nSize: ' + activeImage.size
    return(
        <div style={styles}>
            <img src={activeImage.image_group} 
            data-tip={tip}
                    style={{
                        width:'100%',
                        height: '100%'
                    }}/>
            <ReactTooltip />
        </div>
    )
}

const styles = {
    height: '65%',
    width: '100%',
    background: '#333',
    position: 'relative'
}

export default ActiveImageWindow;