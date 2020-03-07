import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './Animation.css';

const Animation = ({
  animationType,
  children,
  show,
  timeout,
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited
}) => (
  <CSSTransition
    in={show}
    timeout={timeout}
    classNames={animationType}
    unmountOnExit
    onEnter={onEnter}
    onEntering={onEntering}
    onEntered={onEntered}
    onExit={onExit}
    onExiting={onExiting}
    onExited={onExited}
  >
    {children}
  </CSSTransition>
);

Animation.defaultProps = {
  show: false,
  timeout: 500,
  animationType: 'fadeIn',
};

export default Animation;
