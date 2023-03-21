import useEmblaCarousel from 'embla-carousel-react';
import { IChildren } from '~/interfaces/IChildren';

import { CarouselWrapper, CarouselContainer, CarouselOverflow } from './style';

const Carousel = ({ children }: IChildren) => {
  const [emblaRef] = useEmblaCarousel({ containScroll: 'trimSnaps' });

  return (
    <CarouselOverflow>
      <CarouselWrapper ref={emblaRef}>
        <CarouselContainer>{children}</CarouselContainer>
      </CarouselWrapper>
    </CarouselOverflow>
  );
};

export default Carousel;
