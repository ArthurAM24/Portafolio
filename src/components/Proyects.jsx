import React from "react";
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";
import { styles } from "../styles";
import { link } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-3xl w-full sm:w-[360px] xl:w-[365px] xs:w-[400px]'
      >
        <div className='relative w-full h-[210px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover '>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='violet-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={link}
                alt='source code'
                className='w-1/2 h-1/2 object-contain hover:scale-150'
              />

            </div>
          </div>
        </div>

        <div className='mt-2'>
          <h3 className='text-white font-bold text-[15px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[13px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Proyects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Mis Proyectos</p>
        <h2 className={`${styles.sectionHeadText}`}>Proyectos.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-2 text-secondary text-[17px] max-w-5xl leading-[25px]'
        >
          Los siguientes proyectos muestran mis habilidades y experiencia a través de
          Ejemplos del mundo real de mi trabajo. Cada proyecto se describe brevemente con
          enlaces y demostraciones en vivo en él.
        </motion.p>
      </div>

      <div className='mt-5 flex flex-wrap gap-7 justify-center items-center'>
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(Proyects, "proyects");
