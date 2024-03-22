import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCaroselData';




const MainCrousel = () => {

    const item = mainCarouselData.map((item)=>
    <img className='cursor-pointer -z-10' 
        role='presentation' src={item.image}
        alt=''
    />)

 return ( <AliceCarousel
        autoPlay
        autoPlayInterval={700}
        animationDuration={1000}
        
       
        disableButtonsControls items={item} />)

   
}

  

export default  MainCrousel;