import { motion } from "framer-motion";
import { styles } from "../styles";

import headerImg from "/header-img.svg";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX}
       flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#38cef3]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='container mx-auto'>
          <div className='flex flex-wrap justify-between items-center'>
            <div className='self-start mx-2'>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hola, Soy <span className='text-[#38cef3]'>Arthur</span>
              </h1>

              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                Full Stack Developer<br className='sm:block hidden' />
              </p>
            </div>
            <div className='self-end mx-auto mt-20 w-10/12 xl:w-1/3 lg:w-1/3 lg:mx-0 md:w-1/2 md:mx-auto md:mt-5 sm:mt-10'>
              <a href='#contact'> <div className='floating-img object-fill'>
                <img src={headerImg} 
                alt='Header Img'
                title='Ir a la sección de contacto'
                />
              </div>
              </a>
            </div>
          </div>
        </div>


      </div>

      <div className='absolute xs:bottom-6 bottom-16 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
              title="Ir a sobre mí"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
