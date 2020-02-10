import styled from 'styled-components'
export const SliderContainer = styled.div`
 overflow-x: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0rem 1rem 1rem -1.5rem;
	padding: 3px;
 scroll-behavior: smooth;
`;


export const ParentDiv = styled.div`
width: 100%;
	
	margin: auto;
	padding: 1rem;
`

export const ChildDiv = styled.div`
padding: 5px 5px;
	text-align: center;
	width: 100%;
	margin-right: 2px;
	border-radius: 1px;
	&.child {
	padding: 1px 2px 1px 1px;
	text-align: center;
	width: 100%;
	border-radius: 4px;
	&:hover {
    
	background-color: rgba(50, 115, 220, 0.3);
  }
}
`;


export const ImageWrapperContainer = styled.div`
&.slider-wrapper {
	display: flex;
	align-items: center;
	width: 100%;
}
`;


export const ButtonDiv = styled.div`
	position: absolute;
	box-shadow: 0 0 6.1px 0.9px grey;
	padding: 5px;
	cursor: pointer;
	width: 20px;
	height: 20px;
	background: transparent;
	text-align: center;
	color: white;
	border-radius: 50%;


&.prev {
	left: 1rem;
	
}
&.next {
	right: 1rem;
}
&.disable {
	opacity: 0.5;
 pointer-events: none;
}
`;


export const ImageButton = styled.button`
background: transparent;
border: transparent;
`

export const SliderWrapperDiv = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	`

export const ImageWrapper = styled.img`
height: 20rem;
width: 32rem;
cursor: pointer;
&:hover {
    color: white;
  }
`

export const ModalWrapper = styled.div`
	flex-direction: row;
	height: 71rem;
    width: 104rem;
    border: 1px solid #d0cccc;
    box-shadow: 0 5px 20px 0 rgba(0,0,0,0.2), 0 7px 20px 0 rgba(0,0,0,0.17);
	transition: all .8s;
	margin-left: auto;
    margin-right: auto;
	background: rgba(0, 0, 0, 0.68);
	

`

export const ModalCloseButton = styled.div`
position: sticky;
right: 0;
top: 0;
padding: 5px;
cursor: pointer;
width: 20px;
height: 20px;
background: transparent;
text-align: center;
color: white;
border-radius: 50%;
`

export const ModalWrapperDiv = styled.div`
margin: -61px 0px 0px 0px;
`

export const ImageModalMainImg = styled.div`
	width: 940px;
    height: 730px;

`

export const ImageModalRightColumn = styled.div`
	overflow-y: scroll;
	scroll-behavior: smooth;
	width: 23rem;
	background-color: white;
	margin-left: 0.5em;
    height: 730px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
	
`
export const ImageModalChildDiv = styled.div`
 	    height: 130px;
    width: 9.4em;
    min-width: 2em;
    margin-top: 0.1em;
    margin-right: 0.5em;
    margin-left: 0.35em;
    margin-bottom: 0.1em;
	border-radius:4%;
	`

export const ImageModalWrapper = styled.img`
	
    height: 730px;
    width: 940px;
`

export const ImageModalRightColumnImg = styled.img`
 	height: 130px;
    width: 9.5em;
    min-width: 150px;
	border-radius: 4%;

`

export const ImageModalRect = styled.img`
	width: 21em;
    height: 8em;
    min-width: 290px;
	border-radius: inherit;
`

export const ImageModalRectDiv = styled.div`
    width: 21rem;
    height: 8em;
    min-width: 290px;
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    margin-left: 0.5em;
    margin-right: 0.5em;
	border-radius: 4%;
`

export const ImageModalButton = styled.button`
	background: white;
    position: sticky;
    padding-left: 4px;
    border-radius: 5px;
    width: 20px;
    height: 19px;

`
export const ImageModalContainer = styled.div`
display: flex;
flex-direction: coloumn;
margin-right: -20px;
display: flex;
justify-content: center;
margin-top: 10rem;
`

