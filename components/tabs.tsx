"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import techstk1 from '@/public/images/tech-stk-icon1.webp';
import techstk2 from '@/public/images/tech-stk-icon2.webp';
import techstk3 from '@/public/images/tech-stk-icon3.webp';
import techstk4 from '@/public/images/tech-stk-icon4.webp';
import techstk5 from '@/public/images/tech-stk-icon5.webp';
import techstk6 from '@/public/images/tech-stk-icon6.webp';
import techstk7 from '@/public/images/tech-stk-icon7.webp';
import techstk8 from '@/public/images/tech-stk-icon8.webp';
import techstk9 from '@/public/images/tech-stk-icon9.webp';
import techstk10 from '@/public/images/tech-stk-icon10.webp';
import techstk11 from '@/public/images/tech-stk-icon11.webp';
import techstk12 from '@/public/images/tech-stk-icon12.webp';
import techstk13 from '@/public/images/tech-stk-icon13.webp';
import techstk14 from '@/public/images/tech-stk-icon9.webp';
import techstk15 from '@/public/images/tech-stk-icon10.webp';
import techstk16 from '@/public/images/tech-stk-icon11.webp';
import techstk17 from '@/public/images/tech-stk-icon12.webp';
import techstk18 from '@/public/images/tech-stk-icon13.webp';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
   <div className="min-h-screen flex flex-col items-center justify-center py-8 ">
   <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4"  data-aos="fade-up" data-aos-delay="100">Our Technologies.</h2>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Web technologies form the foundation of our company's operations. We leverage the power of the internet to create innovative solutions, deliver seamless user experiences, and drive digital transformation. From web development to cloud computing, our expertise in web technologies empowers businesses to stay competitive in the digital age. We specialize in harnessing the potential of HTML, CSS, JavaScript, and beyond, ensuring that our clients benefit from cutting-edge web solutions that connect, engage, and thrive in the online landscape.</p>
          </div>
      <div className="w-full max-w-md">
        <ul className="flex ">
          <li className="mr-2">
            <button
              className={`p-2 focus:outline-none ${
                activeTab === '1' ? 'bg-purple-600 text-white' : 'gray-100 gray-600 '
              }`}
              onClick={() => toggle('1')}
            >
              Web
            </button>
          </li>
          <li className="mr-2">
            <button
              className={`p-2 focus:outline-none ${
                activeTab === '2' ? 'bg-purple-600 text-white' : 'gray-100 gray-600'
              }`}
              onClick={() => toggle('2')}
            >
              Mobile
            </button>
          </li>
          <li className="mr-2">
            <button
              className={`p-2 focus:outline-none ${
                activeTab === '3' ? 'bg-purple-600 text-white' : 'gray-100 gray-600'
              }`}
              onClick={() => toggle('3')}
            >
              Design
            </button>
          </li>
          <li className="mr-2">
            <button
              className={`p-2 focus:outline-none ${
                activeTab === '4' ? 'bg-purple-600 text-white' : 'gray-100 gray-600'
              }`}
              onClick={() => toggle('4')}
            >
              server
            </button>
          </li>
          
        </ul>
        <div className="p-4 gray-200  rounded-lg mt-4">
          {activeTab === '1' && (
            <div className='flex flex-row justify-between'>
              
              <Image src={techstk1} alt="test" data-aos="fade-right" data-aos-delay="100"/>
              <Image src={techstk4} alt="test" data-aos="fade-right" data-aos-delay="200"/>
              <Image src={techstk5} alt="test" data-aos="fade-right" data-aos-delay="300"/>
              <Image src={techstk6} alt="test" data-aos="fade-right" data-aos-delay="400"/>
              <Image src={techstk7} alt="test" data-aos="fade-right" data-aos-delay="500"/>
              <Image src={techstk8} alt="test" data-aos="fade-right" data-aos-delay="600"/>
              
            </div>
          )}
          {activeTab === '2' && (
            <div className="flex flex-row justify-between  ">
              
              <Image src={techstk2} alt="test"   data-aos="fade-right" data-aos-delay="100" />
              <Image src={techstk14} alt="test"  data-aos="fade-right" data-aos-delay="200" />
              <Image src={techstk15} alt="test"  data-aos="fade-right" data-aos-delay="300" />
              <Image src={techstk16} alt="test"  data-aos="fade-right" data-aos-delay="400"/>
              <Image src={techstk17} alt="test"  data-aos="fade-right" data-aos-delay="500"/>
              <Image src={techstk18} alt="test"  data-aos="fade-right" data-aos-delay="600"/>
            </div>
          )}
          {activeTab === '3' && (
            <div className="flex flex-row justify-between  ">
              
              <Image src={techstk4} alt="test"  data-aos="fade-right" data-aos-delay="100"/>
              <Image src={techstk5} alt="test"  data-aos="fade-right" data-aos-delay="200"/>
              <Image src={techstk6} alt="test"  data-aos="fade-right" data-aos-delay="300" />
              <Image src={techstk7} alt="test"  data-aos="fade-right" data-aos-delay="400"/>
              <Image src={techstk8} alt="test"  data-aos="fade-right" data-aos-delay="500" />
            </div>
          )}
          {activeTab === '4' && (
            <div className="flex flex-row justify-between  ">
              
              <Image src={techstk9} alt="test"   data-aos="fade-right" data-aos-delay="100" />
              <Image src={techstk10} alt="test"  data-aos="fade-right" data-aos-delay="200"/>
              <Image src={techstk11} alt="test"  data-aos="fade-right" data-aos-delay="300"/>
              <Image src={techstk12} alt="test"  data-aos="fade-right" data-aos-delay="400"/>
              <Image src={techstk13} alt="test"  data-aos="fade-right" data-aos-delay="500"/>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Tabs;
