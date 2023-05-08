'use client';

import Lottie from 'react-lottie';

import SendEmailAnimate from '@/lotties/send-email.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: SendEmailAnimate,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const SendEmailAnimation = () => {
  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={300}
        width={300}
        isClickToPauseDisabled
        style={{ cursor: 'default' }}
      />
    </div>
  );
};

export default SendEmailAnimation;
