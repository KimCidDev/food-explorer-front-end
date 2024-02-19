import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { Card } from '../Card';
import { Container } from './styles';

register();

export function Swiper({ dishes }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      slidesPerView: 'auto'
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []); 

  return (
    <Container>
      <swiper-container ref={swiperRef} init="false" pagination="false" className="swiper-container"> 
        {dishes.map((dish) => (
          <swiper-slide key={dish.id}>
            <Card dish={dish} />
          </swiper-slide>
        ))}
      </swiper-container>
    </Container>
  );
}
