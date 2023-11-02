"use client";

import React from "react";
import Lottie from "lottie-react";

import { FaBehance, FaDribbble } from "react-icons/fa";
import { IoMailOutline, IoChevronForwardCircle, IoStar } from "react-icons/io5";
import { Variants, motion } from "framer-motion";
import { IconContext } from "react-icons";
import bg from "@/public/images/bg.png";
import "./landing.scss";
import Image from "next/image";
import back_anime from "@/public/images/trIxmr6aGD.json";

let easing: number[] = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const fadeInUp = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: easing,
    },
  },
};

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    // transition: { duration: 1, ...transition },
  },
};

const btnGroup = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const star = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.8, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easing,
    },
  },
};
const starVariants: Variants = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const btnGroupVariants: Variants = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  },
  animate: {
    y: 0,
    opacity: 1,
    // animation: {
      // duration: 0.6,
      // ease: [0.6, -0.05, 0.01, 0.99],
    // },
  },
};

const header = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.05, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easing,
    },
  },
};

function TempHeader() {
  return (
    <div>
          <motion.div initial="initial" animate="animate">
      <br />

      <motion.div
        className="content_wrapper"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: easing }}
      >
        <div className="left_content_wrapper">
          <motion.h2>
            <motion.span
              variants={firstName}
              initial="initial"
              animate="animate"
              className="first"
            >
              <motion.span variants={letter}>D</motion.span>
              <motion.span variants={letter}>e</motion.span>
              <motion.span variants={letter}>s</motion.span>
              <motion.span variants={letter}>i</motion.span>
              <motion.span variants={letter}>g</motion.span>
              <motion.span variants={letter}>n</motion.span>
              <motion.span variants={letter}>f</motion.span>
              <motion.span variants={letter}>o</motion.span>
              <motion.span variants={letter}>c</motion.span>
              <motion.span variants={letter}>u</motion.span>
              <motion.span variants={letter}>s</motion.span>
              <motion.span variants={letter}>e</motion.span>
              <motion.span variants={letter}>d</motion.span>
              <motion.span variants={letter} className="second">
                f
              </motion.span>
              <motion.span variants={letter}>o</motion.span>
              <motion.span variants={letter}>r</motion.span>
              <motion.span variants={letter} className="second">
                s
              </motion.span>
              <motion.span variants={letter}>t</motion.span>
              <motion.span variants={letter}>a</motion.span>
              <motion.span variants={letter}>r</motion.span>
              <motion.span variants={letter}>t</motion.span>
              <motion.span variants={letter}>u</motion.span>
              <motion.span variants={letter}>p</motion.span>
              <motion.span variants={letter}>s</motion.span>
            </motion.span>
            <motion.span
              variants={lastName}
              initial="initial"
              animate="animate"
              className="last"
            >
              <motion.span variants={letter}>S</motion.span>
              <motion.span variants={letter}>t</motion.span>
              <motion.span variants={letter}>a</motion.span>
              <motion.span variants={letter}>r</motion.span>
              <motion.span variants={letter}>t</motion.span>
              <motion.span variants={letter}>u</motion.span>
              <motion.span variants={letter}>p,</motion.span>
              <motion.span variants={letter} className="second">
                f
              </motion.span>
              <motion.span variants={letter}>o</motion.span>
              <motion.span variants={letter}>r</motion.span>
              <motion.span variants={letter} className="second">
                s
              </motion.span>
              <motion.span variants={letter}>t</motion.span>
              <motion.span variants={letter}>a</motion.span>
              <motion.span variants={letter}>r</motion.span>
              <motion.span variants={letter}>t</motion.span>
              <motion.span variants={letter}>u</motion.span>
              <motion.span variants={letter}>p</motion.span>
              <motion.span variants={letter}>s.</motion.span>
            </motion.span>
          </motion.h2>
          <motion.p variants={fadeInUp}>
            When, while lovely valley teems with vapor around meand <br />
            meridian sun strikes the upper impenetrable.
          </motion.p>
          <motion.div className="btn_group" variants={stagger}>
            <motion.div
              className="btn btn_primary"
              variants={btnGroupVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
              <IconContext.Provider value={{ color: "#23a9e1", size: "40px" }}>
                <IoChevronForwardCircle />
              </IconContext.Provider>
            </motion.div>
            <motion.div
              className="btn btn_secondary"
              variants={btnGroupVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Chat
            </motion.div>
          </motion.div>
          <motion.div className="review_container" variants={stagger}>
            <motion.p className="total_review" variants={starVariants}>
              64+ Reviews
            </motion.p>
            <IconContext.Provider value={{ color: "#fff", size: "18px" }}>
              <motion.span
                variants={starVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: 180,
                  borderRadius: "100%",
                  cursor: "pointer",
                }}
              >
                <IoStar />
              </motion.span>
              <motion.span
                variants={starVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: 180,
                  borderRadius: "100%",
                  cursor: "pointer",
                }}
              >
                <IoStar />
              </motion.span>
              <motion.span
                variants={starVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: 180,
                  borderRadius: "100%",
                  cursor: "pointer",
                }}
              >
                <IoStar />
              </motion.span>
              <motion.span
                variants={starVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: 180,
                  borderRadius: "100%",
                  cursor: "pointer",
                }}
              >
                <IoStar />
              </motion.span>
              <motion.span
                variants={starVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: 180,
                  borderRadius: "100%",
                  cursor: "pointer",
                }}
              >
                <IoStar />
              </motion.span>
            </IconContext.Provider>
            <motion.p className="more_review" variants={starVariants}>
              More than 50+ people taking services.
            </motion.p>
          </motion.div>
        </div>
        <div className="right_content_wrapper backImg">
        <motion.div>
          <Lottie animationData={back_anime} loop={true} />
        </motion.div>
        </div>
      </motion.div>
    </motion.div>

    </div>

  );
}

export default TempHeader;
