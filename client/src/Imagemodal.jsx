import React from 'react';
import { ModalWrapper, ModalCloseButton,ImageModalWrapper,ImageModalButton,
     ModalWrapperDiv, ImageModalMainImg, ImageButton, 
     ImageModalChildDiv, ImageModalRightColumn, ImageWrapper,
     ImageModalRightColumnImg, ImageModalContainer,
    ImageModalRect, ImageModalChildRect } from './styling'

export class ImageModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.images || null
        }
    }

    render() {
        let data = this.state.data;
        console.log("This.state.data ",this.state.data);
        return (
            <ModalWrapper
                style={{
                    transform: this.props.show ? 'translateY(0vh)' : 'translateY(-500vh)',
                    opacity: this.props.show ? '1' : '0',
                    zIndex: this.props.show ? "11": "0",
                    position: this.props.show ? "absolute" : "static"
                    
                }}>
                    
                    <ImageModalButton onClick={this.props.close}> X</ImageModalButton>
                    <ImageModalContainer>
                    <ImageModalMainImg>
                        
                    <ImageModalWrapper src={this.props.currentImage}></ImageModalWrapper>
                    
                    </ImageModalMainImg>
                <ImageModalRightColumn>
                    

                {data.map((image, index) => {
                    if ((index + 1) % 3 !== 0) {
                        return (
                        <ImageModalChildDiv key={index}>
                            <ImageModalRightColumnImg  onClick={this.props.close} src={image.images[0]+".jpg"}>

                            </ImageModalRightColumnImg>
                        </ImageModalChildDiv>
                        )
                    } else {
         return (
          <ImageModalChildRect key={index}>
             
           <ImageModalRect  onClick={this.props.close} src={image.images[0]+".jpg"}></ImageModalRect>
           
          </ImageModalChildRect>
         )}
        })}
                    

                </ImageModalRightColumn>
                </ImageModalContainer>




            </ModalWrapper>

        )
    }
};