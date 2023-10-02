import React from "react";
import { motion } from "framer-motion";

const ScrollTo = ({ href }) => {
  return (
    <div className='absolute bottom-5 bottom-12 w-full flex justify-center items-center'>
      <a href={href}>
        <div className='w-[32px] h-[60px] rounded-2xl border-2 
        border-secondary 
        flex justify-center items-start p-1'>
          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className='w-4 h-4 rounded-full bg-secondary'
          />
        </div>
      </a>
    </div>
  );
};

export default ScrollTo;
