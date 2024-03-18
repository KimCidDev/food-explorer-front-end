import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  swiper-container {
    width: 100%;
  }

  swiper-slide {
    width: 210px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    swiper-container {
      display: flex;
      width: 100%;

      div {
        .swiper-button-prev,
        .swiper-button-disabled {
          svg {
            display: none;
          }
        }
      }
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
