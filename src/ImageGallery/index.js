// import React, { Component } from 'react'
// import ActiveImageWindow from './active-image-window'
// import ImageGrid from './Image-grid'
// import axios from 'axios'

// class ImageGallery extends Component{
//     state = {
//         images: this.props.pyResp,
//         activeIndex: 0,
//     }
    
//     componentDidMount() {
//         // axios.get('https://gist.githubusercontent.com/DZuz14/56b7f363e9787fb4c0240eb145bc2b9f/raw/601a198c5638d2fad2eaf59bc74862cae9b51905/data.json')
//         // .then(res => {
//         //     this.setState({images: this.props.pyResp})
//         // })
//         if (this.props.pyResp.length) {
//             this.setState({images: this.props.pyResp})
//         }
//     }

//     renderImages = () => {
//         const {images, activeIndex} = this.state
//         console.log(images)
//         if (images.length) {
//             return (
//                 <ActiveImageWindow 
//                 activeImage = {images[activeIndex]}/>
//             )
//         }
//         return null
//     }

//     renderText = () => {
//         const {images, activeIndex} = this.state
//         if (images.length) {
//             return (
//                 <>
//                 <h1>{images[activeIndex].product_item_id}</h1>
//                 <p>{images[activeIndex].word}</p>
//                 </>
//             )
//         }
//     }
//     handleClick = (e) => {
//             const newActiveIndex=e.target.getAttribute('data-index')
//             this.setState({activeIndex: newActiveIndex})
//         }

//     render(){
//         const {images} = this.state
//         // console.log(this.props)
//         return(
//         <div style={ImageGalleryStyles}>
//             <div style={{flex:1}}>
//                 {/* {this.componentDidMount()} */}
//                 {this.renderImages()}
//                 <ImageGrid images={images} 
//                 handleClick = {this.handleClick}/>
//             </div>
//             <div style={{flex:1, padding: '40px'}}>
//                 {this.renderText()}
//             </div>
//         </div>
//     )
//     }
// }

// const ImageGalleryStyles = {
//     background: '#ddd',
//     height: '500px',
//     width: '1024px',
//     margin: '40px auto',
//     display: 'flex'
// }
// export default ImageGallery;

import React, { Component } from 'react'
import ActiveImageWindow from './active-image-window'
import ImageGrid from './Image-grid'
import axios from 'axios'

const ImageGallery = ({ images }) => {
    state = {
        images: {images},
        activeIndex: 0,
    }
    
    // componentDidMount() {
    //     // axios.get('https://gist.githubusercontent.com/DZuz14/56b7f363e9787fb4c0240eb145bc2b9f/raw/601a198c5638d2fad2eaf59bc74862cae9b51905/data.json')
    //     // .then(res => {
    //     //     this.setState({images: this.props.pyResp})
    //     // })
    //     if (this.props.pyResp.length) {
    //         this.setState({images: this.props.pyResp})
    //     }
    // }

    renderImages = () => {
        const {images, activeIndex} = this.state
        console.log(images)
        if (images.length) {
            return (
                <ActiveImageWindow 
                activeImage = {images[activeIndex]}/>
            )
        }
        return null
    }

    renderText = () => {
        const {images, activeIndex} = this.state
        if (images.length) {
            return (
                <>
                <h1>{images[activeIndex].product_item_id}</h1>
                <p>{images[activeIndex].word}</p>
                </>
            )
        }
    }
    handleClick = (e) => {
            const newActiveIndex=e.target.getAttribute('data-index')
            this.setState({activeIndex: newActiveIndex})
        }

    return(
    <div style={ImageGalleryStyles}>
        <div style={{flex:1}}>
            {/* {this.componentDidMount()} */}
            {this.renderImages()}
            <ImageGrid images={this.state} 
            handleClick = {this.handleClick}/>
        </div>
        <div style={{flex:1, padding: '40px'}}>
            {this.renderText()}
        </div>
    </div>
    )
}

const ImageGalleryStyles = {
    background: '#ddd',
    height: '500px',
    width: '1024px',
    margin: '40px auto',
    display: 'flex'
}
export default ImageGallery;