/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
// ServiceCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import PropTypes from 'prop-types';
import { fadeIn } from '../utils/motion'; // Adjust the import based on your project structure

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ServiceCard;
