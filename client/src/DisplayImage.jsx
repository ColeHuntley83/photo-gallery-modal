import React from 'react';
import axios from 'axios';
import {ImageModal} from './Imagemodal.jsx'

import ImageSlider from './ImageSlider.jsx';
import { ChildDiv, ParentDiv,
   ImageModalChildDiv, ImageButton, ImageWrapper} from './styling';

   
   class SliderParent extends React.Component {
      constructor(props) {
         super(props)
         this.state = {
            isShowing: false,
            imageData: null,
            currentImage: null
         }
         this.handleClick = this.handleClick.bind(this);
      }


      handleClick(event, link) {
         event.preventDefault();
         // let image = link;
         // console.log("curretn image", link)
         this.setState({
            isShowing: true,
            currentImage: link
         })
      }
      closeModalHandler = () => {
         console.log("clicked")
         event.preventDefault();
         this.setState({
             isShowing: false
         });
     }

     getData(){
      axios.get('/images')
         .then((response) => {
            
            const imageData = response.data.images;
            this.setState({
               imageData: imageData
            })
            
         })
      
      };

     componentDidMount() {
        this.getData();
        
     }

     handleUpdateCurrentImage(e) {
        e.preventDefault();
        const updatedImage = e.target.value();
        this.setState({
           currentImage: updatedImage
        })

     }
      
      render() {
     let data = this.state.imageData;
    
     
     

     return (
      <ParentDiv>
         {(!this.state.isShowing && this.state.imageData) && 
       <ImageSlider>
        {data.map((image, index) => {
         return (
          <ChildDiv key={index} className="child">
             <ImageButton onClick={(e) => this.handleClick(e, image.images[0]+".jpg")} value={image.images[0]+".jpg"}>
           <ImageWrapper src={image.images[0]+".jpg"}></ImageWrapper>
           </ImageButton>
          </ChildDiv>
         );
        })}
       </ImageSlider>
      }
      {this.state.isShowing &&
      <ImageModal
      show={this.state.isShowing}
      close={this.closeModalHandler}
      handleClick={this.handleClick}
      currentImage={this.state.currentImage || null}
      images={this.state.imageData || null}
      />
      
      
      }
      
       </ParentDiv>
      
     )
     

    }
   }

   export default SliderParent
