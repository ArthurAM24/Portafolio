import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Skills = () => {
  return (
    <div className={`mt-0 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-[20px] ${styles.padding} min-h-[200px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Mis skills</p>
          <h2 className={styles.sectionHeadText}>Skills.</h2>
        </motion.div>
      </div>
      <div className={`-mt-12 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
