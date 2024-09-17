import { Box, Flex, Slide, SlideDirection} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { SliderData } from './SliderData';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';


const ImageSlider = () => {
  var delay = 20000;
  var direction: SlideDirection = 'left';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % SliderData.length);
    }, delay);

    return () => clearInterval(interval);
  }, [SliderData.length, delay]);

  const goToPrevious = () => {
    // direction = 'left'
    const isFirstIndex = index === 0;
    const previousIndex = isFirstIndex ? SliderData.length - 1 : index - 1;
    setIndex(previousIndex);

  }
  const goToNext = () => {
    // direction = 'right'
    const isLastIndex = index === SliderData.length - 1;
    const nextIndex = isLastIndex ? 0 : index + 1;
    setIndex(nextIndex);
  }


  return (
    <Flex {...ParentFlex}>
      {SliderData.map((slide, i) => (
        <Slide
          key={i}
          direction={direction}
          in={index === i}
          style={{
            marginRight: '20vw',
            marginLeft: '20vw',
            transition: 'transform 3s ease-in-out', 
            transform: `translateX(${-i * 100}%)`,
            position: 'absolute',
          }}
        >
          <Box
            p='40px'
            color='white'
            mt='4'
            backgroundImage={`url(${slide.image})`}
            shadow='md'
            backgroundSize='100% 100%'
            height='100%'
            width='60vw'
            marginTop={0}
          >
          </Box>
        </Slide>
      ))}
      
      <ArrowLeftIcon {...ArrowIcons(true)} onClick={goToPrevious}></ArrowLeftIcon>
      <ArrowRightIcon {...ArrowIcons(false)} onClick={goToNext}></ArrowRightIcon>

    </Flex>

  )
}


const ParentFlex = {
  bg: 'red',
  w: '100vw',
  h: '36vh',//['100px', '200px', '300px', '400px'],
  display: 'flex',
  position: 'relative' as const,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  justifyItems: 'center',
}

const ArrowIcons = (left: boolean) => {
  return {
    position: 'absolute' as const,
    w: 8,
    h: 8,
    color: 'white',
    [left? 'left' : 'right'] : '7.5vw',
    marginTop: '15vh'
  }
}



export default ImageSlider;
