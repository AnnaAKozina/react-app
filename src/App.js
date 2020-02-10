import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import ActiveImageWindow from './ImageGallery/active-image-window'
import ImageGrid from './ImageGallery/Image-grid'

class Form1 extends Component{
    constructor(props) {
                super(props)
                this.state = {
                    images: [],
                    activeIndex: 0,
                    baseImage: []
                }
    }

    handleInputChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state
        fetch('https://test-ennergia-recommend.herokuapp.com/api/'+data.productId, {
            method: 'POST',
            // mode:'no-cors',
            dataType: 'json'
          })
            .then(r => r.json())
            .then(r => {
              console.log(r)
              this.setState({
                images: r.recommendation,
                baseImage: r.item
              })
            })
            .catch(err => console.log(err))
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

    renderBaseImage = () => {
        const baseImage = this.state.baseImage[0]
        const brand = 'Brand: ' + baseImage.brand 
        const size =  'Size: ' + baseImage.size
        const id =  'ProductID: ' + baseImage.product_item_id
        console.log(brand)
        if (this.state.baseImage.length) {
            return (
                <>
                <img src={this.state.baseImage[0].image_group} />
                <p style={{padding: '10px', fontSize: '20px'}}>{id}</p>
                <p style={{padding: '10px', fontSize: '20px'}}>{brand}</p>
                <p style={{padding: '10px', fontSize: '20px'}}>{size}</p>
                </>
            )
        }
    }

    renderImages = () => {
        const {images, activeIndex} = this.state
        // console.log(images)
        if (images.length) {
            return (
                <ActiveImageWindow 
                activeImage = {images[activeIndex]}/>
            )
        }
        return null
    }

    handleClick = (e) => {
        const newActiveIndex=e.target.getAttribute('data-index')
        this.setState({activeIndex: newActiveIndex})
    }

    render(){
        const {images} = this.state
        const ImageGalleryStyles = {
            background: '#ddd',
            height: '831px',
            width: '720px',
            margin: '10px auto',
            display: 'flex'
        };

        // console.log(this.state.pyResp)
        return (
            <>
            <div className="form" style={{padding: '20px'}}>
                <form onSubmit={this.handleSubmit}
                onChange={this.handleInputChange}
                >
                    productId: <input type="text" name="productId"/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
            {images.length > 0 &&
            <div style={ImageGalleryStyles}>
                <div style={{flex:1}}>
                    {this.renderBaseImage()}
                </div>
                <div style={{flex:1}}>
                    {this.renderImages()}
                    <ImageGrid images={this.state.images} 
                    handleClick = {this.handleClick}/>
                </div>
                {/* <div style={{flex:1, padding: '40px'}}>
                    {this.renderText()}
                </div> */}
            </div>
            }
            </>
        )
    }
};

ReactDOM.render(
    <Form1/>,
    document.getElementById('root')
);



export default Form1;