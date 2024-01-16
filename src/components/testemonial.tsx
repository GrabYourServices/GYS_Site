import React from "react";
import { motion, Variants } from 'framer-motion';

export interface TestimonialProps {
  name: string;
  desc: string;
  testimonial: string;
  imgUri: string;
}

interface ScreenSize {
  width: number;
  height: number;
}

export const Testimonial: React.FC<TestimonialProps> = ({ name, desc, testimonial, imgUri }) => {
  const [screenSize, setScreenSize] = React.useState<ScreenSize>({
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Call handleResize on component mount to set initial values
    handleResize();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let motionA: Variants = {
    rest: {
      width: '100px',
      borderRadius: '99px',
      height: 'fit-content',
    },
    hover: {
      borderRadius: '0.75rem',
      width: '50%',
      height: 'fit-content',
      padding: '3rem',
      transition: {
        delayChildren: 2,
      }
    }
  };

  if(screenSize.width <=1023) {
    motionA = {
      rest: {
        width: '100px',
        borderRadius: '99px',
        height: 'fit-content',
      },
      hover: {
        borderRadius: '0.75rem',
        width: screenSize.width -12 -12-12-12-12-12,
        height: 'fit-content',
        padding: '3rem',
        transition: {
          delayChildren: 2,
        }
      }
    };
  }

  const motionB: Variants = {
    rest: {
      opacity: 0,
      visibility: 'hidden',
      display: 'none'
    },
    hover: {
      opacity: 1,
      visibility: 'visible',
      display: 'flex',
    },
  };

  const motionC: Variants = {
    rest: {
      marginRight: '0px',
    },
    hover: {
      marginRight: screenSize.width <= 1023 ? '0px' : '1rem',
    }
  };
  if(screenSize.width <= 1023) {
    return (
      <motion.div
      className='test-1 lg:my-4 w-[calc(100%-4.5rem)] rounded-xl flex flex-col justify-center items-center bg-black z-30 border-[1px] border-solid border-yellow transition-all duration-500'
      initial='rest'
      whileInView='hover'
      variants={motionA}
      transition={{ duration: 0.5 }}
      style={{ alignItems: 'center' }}
    >
      <motion.div
        className='w-full flex justify-between items-center flex-row lg:justify-center'
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="flex justify-center items-center flex-row lg:flex-col"
        >
          <motion.img
            variants={motionC}
            transition={{ delay: 1, duration: 1.5 }}
            src={imgUri}
            className="rounded-full border-2 border-yellow test-sec-f"
            alt={`${name} Logo`}
            width={82}
            height={82}
          />
          <motion.div
            className='flex justify-center items-center flex-col'
            variants={motionB}
            transition={{duration: 1.5}}
          >
            <h1 className="text-yellow text-3xl w-full lg:text-center">{name}</h1>
            <p className="text-white text-md text-left w-full lg:text-center lg:text-center">{desc}</p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        variants={motionB}
        transition={{duration: 1.5}}
        className="flex flex-col justify-center test-sec-t items-center mt-4"
      >
        <p className="text-white lg:text-center">{testimonial}</p>
      </motion.div>
    </motion.div>
    );
  } else {
    return (
    <motion.div
      className='test-1 w-1/2 mx-4 lg:my-4 lg:w-[calc(100%-4.5rem)] rounded-xl flex flex-col justify-center items-center bg-black z-30 border-2 border-solid border-yellow transition-all duration-500'
      initial='rest'
      whileHover='hover'
      variants={motionA}
      transition={{ duration: 0.5 }}
      style={{ alignItems: 'center' }}
    >
      <motion.div
        className='w-full flex justify-between items-center flex-row lg:justify-center'
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="flex justify-center items-center flex-row lg:flex-col"
        >
          <motion.img
            variants={motionC}
            transition={{ delay: 1, duration: 1.5 }}
            src={imgUri}
            className="rounded-full border-2 border-yellow test-sec-f"
            alt={`${name} Logo`}
            width={82}
            height={82}
          />
          <motion.div
            className='flex justify-center items-center flex-col'
            variants={motionB}
            transition={{duration: 1.5}}
          >
            <h1 className="text-yellow text-3xl w-full lg:text-center">{name}</h1>
            <p className="text-white text-md text-left w-full lg:text-center lg:text-center">{desc}</p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        variants={motionB}
        transition={{duration: 1.5}}
        className="flex flex-col justify-center test-sec-t items-center mt-4"
      >
        <p className="text-white lg:text-center">{testimonial}</p>
      </motion.div>
    </motion.div>
    );
  }
};