import React from 'react';
import {
Container,
ImageIndexes,
ImageIndex,
CarImageWraper,
CarImage,
} from './ImageSliderStyle'

interface Props {
    imagesUrl: string[]
}

export default function ImageSlider({imagesUrl}: Props){
    
return (
<Container>
    <ImageIndexes>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
    </ImageIndexes>
   
    <CarImageWraper>
        <CarImage 
            source={{uri : imagesUrl[0]}}
            resizeMode='contain'
        />
    </CarImageWraper>
</Container>
);
}