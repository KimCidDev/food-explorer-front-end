import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  swiper-container {
    width: 100%;
  }

  swiper-slide {
    width: 210px;
  }

  swiper-button-next,
  swiper-button-prev {
    display: none;
    top: 22px;
    height: 100%;
    width: 1rem;
    color: white;

    > svg {
      height: 27px;
    }
  }

  .swiper-button-next {
    background: linear-gradient(90deg, transparent, #000a0f);
    justify-content: flex-end;
  }

  .swiper-button-prev {
    background: linear-gradient(90deg, #000a0f, transparent);
    justify-content: flex-start;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    swiper-container {
      display: flex;
      width: 100%;
    }

    swiper-slide {
      width: 304px;
      
    margin-left: 50px;

      .swiper-slide-active {
        width: 400px;
      }
    }

    .swiper-button-disabled {
      display: none;
    }
  }
`;
