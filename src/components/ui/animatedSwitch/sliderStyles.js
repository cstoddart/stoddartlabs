import styled from 'styled-components';

import { SITE_WIDTH } from '../../../constants'

export const CurrentComponent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;

  ${({ animation }) => {
    if (animation === 'fadeOut') {
      return `
        opacity: 1;
      `;
    }
    if (animation === 'toLeft') {
      return `
        transform: translateX(0px);
      `;
    }
    if (animation === 'toRight') {
      return `
        transform: translateX(0px);
      `;
    }
  }}

  ${({ animating, animation }) => {
    if (!animating) return;
      if (animation === 'fadeOut') {
        return `
          transition: 0.3s ease-out;
          opacity: 0;
        `;
      }
      if (animation === 'toLeft') {
        return `
          transition: 0.3s ease-out;
          transform: translateX(${document.body.scrollWidth * -1}px);
        `;
      }
      if (animation === 'toRight') {
        return `
          transition: 0.3s ease-out;
          transform: translateX(${document.body.scrollWidth}px);
        `;
      }
  }}
`;

export const EnteringComponent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: .0.3s ease-out;
  pointer-events: none;

  ${({ animation }) => {
    if (animation === 'fadeIn') {
      return `
        opacity: 0;
      `;
    }
    if (animation === 'fromLeft') {
      return `
        transform: translateX(${document.body.scrollWidth * -1}px);
      `;
    }
    if (animation === 'fromRight') {
      return `
        transform: translateX(${document.body.scrollWidth}px);
      `;
    }
  }}

  ${({ animating, animation }) => {
    if (!animating) return;
    if (animation === 'fadeIn') {
      return `
        transition: 0.3s ease-out;
        transition-delay: .2s;
        opacity: 1;
      `;
    }
    if (animation === 'fromLeft') {
      return `
        transition: 0.3s ease-out;
        transition-delay: .2s;
        transform: translateX(0px);
      `;
    }
    if (animation === 'fromRight') {
      return `
        transition: 0.3s ease-out;
        transition-delay: .2s;
        transform: translateX(0px);
      `;
    }
  }}
`;
