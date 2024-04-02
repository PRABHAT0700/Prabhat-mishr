import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import mypic from "../Home/images/mypic.png";
import paymentCross from "../Home/images/paymentCross.png";

export default function HeroSection() {
  const [popUp, setPopUp] = useState(false);

  const popClick = () => {
    setPopUp(!popUp);
  };

  const { ref, inView } = useInView({
    threshold: 0.5 // Adjust threshold as per your requirement
  });

  return (
    <>
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">

            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: -50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
            >
              <p className="section--title"> Hey, I'm Prabhat </p>
              <h1 className="hero--section--title">
                <span className="hero--section-title--color">Front-end</span> <br />
                Developer
              </h1>
            </motion.div>

            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              >
              <p className="hero--section-description">
                Engineer valued for driving high-performance
                <br />
                accessible web experiences.
                <br />
                I design quality, user-friendly and scalable products regardless of stack.
              </p>
            </motion.div>

          </div>
          <motion.button
            ref={ref}
            onClick={popClick}
            id="getInTouchID"
            className="btn btn-primary"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get In Touch
          </motion.button>
        </div>
          <motion.div
              ref={ref}
              className="hero--section--img"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
            >
             <motion.img src={mypic} alt="Hero Section" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} />
          </motion.div>

      </section>

      {popUp && (
        <motion.div
          className="popUp-className-head"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="popUp-className-semi">
            <b>Get in Touch With Me</b>
            <button onClick={popClick}>
              <img src={paymentCross} alt=".." />
            </button>
            <hr />
            <div className="popUp-className-inner-head">
               <b>Profile - <span> <p> React js Developer </p> </span></b> 
               <b>Name - <span> <p> Prabhat Mishra </p> </span> </b> 
               <b>Experience - <span> <p> 1.2 year </p> </span> </b>  
               <b>Email - <span> <p> iammishraprabhat@gmail.com </p> </span></b>
               <b>LinkedIn Profile - <span> <a target=".." href="https://www.linkedin.com/in/prabhat-mishra-4b2a2326b/">click here</a> </span> </b>
               <b> Call/whatsApp - <span> +91 62658-56938 </span>  </b>
               <b>whatsApp - <span> <a target=".." href="https://wa.me/916265856938"> click here </a> </span> </b>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}