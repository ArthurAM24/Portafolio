import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ScrollTo from "./ScrollTo";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Swal from 'sweetalert2';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    // Limpiar el error cuando se cambia el valor del campo
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (form.name.trim() === "") {
      errors.name = "Campo requerido";
      isValid = false;
    }

    if (form.email.trim() === "") {
      errors.email = "Campo requerido";
      isValid = false;
    }

    if (form.message.trim() === "") {
      errors.message = "Campo requerido";
      isValid = false;
    }

    setFormErrors(errors);

    return isValid;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // Al menos un campo está vacío, no envía el formulario
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Arthur",
          from_email: form.email,
          to_email: "arthurmoralesd24@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          Swal.fire({
            icon: 'success',
            title: '¡Mensaje Enviado!',
            text: 'Gracias por contactarme. Te contestaré lo más pronto posible',
          });

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'Ahh, algo salió mal. :(',
          });
        }
      );
  };

  return (
    <div
      className={`xl:mt-0 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Contáctame</p>
        <h3 className={styles.sectionHeadText}>Contacto.</h3>

        <form id="contactform"
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-2 flex flex-col gap-1'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Tu Nombre</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Escribe tu nombre"
              className={`bg-tertiary py-4 px-6 
              placeholder:text-secondary 
              text-white rounded-lg 
              outline-none border 
              ${formErrors.name ?
                  "border-red-500" :
                  "border-none"
                } font-medium`}  
                autoComplete="name" // Agregado el atributo autocomplete
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Tu correo</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Escribe tu correo"
              className={`bg-tertiary py-4 px-6 
              placeholder:text-secondary 
              text-white rounded-lg 
              outline-none border 
              ${formErrors.email ?
                  "border-red-500" :
                  "border-none"
                } font-medium`}
                autoComplete="email" // Agregado el atributo autocomplete
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Tu Mensaje</span>
            <textarea
              rows={3}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Escribe tu mensaje'
              className={`bg-tertiary py-4 px-6
              placeholder:text-secondary
              text-white rounded-lg
              outline-none border 
              ${formErrors.message ?
                  "border-red-500" :
                  "border-none"
                } font-medium`}
                autoComplete="off" // Agregado el atributo autocomplete
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-2 px-10 mt-2 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 h-[500px] xl:h-auto lg:h-[550px] md:h-[600px] sm:h-[500px] xs:h-[500px] '
      >
        <EarthCanvas />
        <div className='xl:hidden md:hidden '>
          <ScrollTo href='#contactform' />
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
