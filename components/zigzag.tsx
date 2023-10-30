"use client"
import Image from 'next/image'
import Lottie from "lottie-react";

import FeatImage01 from '@/public/images/features-03-image-01.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'
import mobi_animation from "./mobi_animation.json"
import buis_animation from "./buis_animation.json"
import team_animation from "./team_animation.json"
export default function Zigzag() {

  

  
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div>
            <h1 className="h2 mb-4">One product, unlimited solutions</h1>
            <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
          </div> */}

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
              <Lottie animationData={mobi_animation} loop={true} />
                {/* <img className="max-w-full mx-auto md:max-w-none h-auto" src="https://cdn.easyfrontend.com/pictures/hero/hero_28.png" width={540} height={405} alt="Features 01" /> */}
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right" data-aos-delay="100">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                  <h3 className="h3 mb-3" data-aos="fade-right" data-aos-delay="300"  data-aos-duration="500">WE HELP CORPORATE BUSINESSES GROW TOGETHER.
</h3>
                  <p className="text-xl text-gray-400 mb-4" data-aos="fade-right" data-aos-delay="400" data-aos-duration="500">Unlock the full potential of your business with Colan Infotech, the leading software application development company. Our team of experts works with the latest tools and technologies to deliver highly performant & scalable software products.
</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2" data-aos="fade-right" data-aos-delay="500" data-aos-duration="500">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Duis aute irure dolor in reprehenderit</span>
                    </li>
                    <li className="flex items-center mb-2" data-aos="fade-right" data-aos-delay="600" data-aos-duration="500">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Excepteur sint occaecat</span>
                    </li>
                    <li className="flex items-center" data-aos="fade-right" data-aos-delay="700">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Amet consectetur adipiscing elit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
              <Lottie animationData={buis_animation} loop={true} />

              {/* <img className="max-w-full mx-auto md:max-w-none h-auto" src="https://cdn.easyfrontend.com/pictures/hero/hero_28.png" width={540} height={405} alt="Features 01" /> */}
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"  data-aos="zoom-in" data-aos-delay="100" data-aos-duration="100">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2" data-aos="fade-left" data-aos-delay="100" data-aos-duration="100">More speed. Less spend</div>
                  <h3 className="h3 mb-3" data-aos="fade-left" data-aos-delay="200" data-aos-duration="200">TRANSFORM YOUR BUSINESS WITH TRENDING TECHNOLOGIES
</h3>
                  <p className="text-xl text-gray-400 mb-4" data-aos="fade-left" data-aos-delay="300" data-aos-duration="300">Stay ahead of the competition by embracing trending technologies
                  
                  . Our emerging software development services will equip your business for the future & keep you unbeatable.
</p>
                  <ul className="text-lg text-gray-400 -mb-2" >
                    <li className="flex items-center mb-2" data-aos="fade-left" data-aos-delay="400" data-aos-duration="400">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Duis aute irure dolor in reprehenderit</span>
                    </li>
                    <li className="flex items-center mb-2" data-aos="fade-left" data-aos-delay="500" data-aos-duration="500">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Excepteur sint occaecat</span>
                    </li>
                    <li className="flex items-center" data-aos="fade-left" data-aos-delay="600" data-aos-duration="600">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Amet consectetur adipiscing elit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
              <Lottie animationData={team_animation} loop={true} />

              {/* <img className="max-w-full mx-auto md:max-w-none h-auto" src="https://cdn.easyfrontend.com/pictures/hero/hero_28.png" width={540} height={405} alt="Features 01" /> */}
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2" data-aos="flip-right" data-aos-delay="100" data-aos-duration="100">More speed. Less spend</div>
                  <h3 className="h3 mb-3" data-aos="fade-right" data-aos-delay="200" data-aos-duration="200">Team of Prodigy</h3>
                  <p className="text-xl text-gray-400 mb-4" data-aos="fade-right" data-aos-delay="300" data-aos-duration="300">A group of energetic, experienced and enthusiastic team is waiting for challenging opportunities to use their skills.
.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2" data-aos="fade-right" data-aos-delay="400" data-aos-duration="400">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Duis aute irure dolor in reprehenderit</span>
                    </li>
                    <li className="flex items-center mb-2" data-aos="fade-right" data-aos-delay="500" data-aos-duration="500">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Excepteur sint occaecat</span>
                    </li>
                    <li className="flex items-center" data-aos="fade-right" data-aos-delay="700" data-aos-duration="700">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Amet consectetur adipiscing elit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
