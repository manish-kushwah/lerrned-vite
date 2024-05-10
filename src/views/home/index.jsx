import React from "react";
import Header from "../../components/Header";
import backgroundSvgCenterTop from "../../assets/home/home_illustration_bg.svg";
import backgroundSvgRightTop from "../../assets/home/home_right_corner_bg.svg";
import home_illustration_bg from '../../assets/home/home_illustration_study.svg';
import home_illustration_study from '../../assets/home/Home-Illustrations-Online-Education.svg';

const Home = () => {
  return (
    <>
      <Header />
      <img src={backgroundSvgCenterTop} alt="bg-svg-ract" className="absolute top-0"/>
      <img src={backgroundSvgRightTop} alt="bg-svg-ract" className="absolute top-0 right-0 -z-10"/>
      <img src={home_illustration_study} alt="bg-svg-ract" className="absolute top-40 right-0"/>
      <h1 className="font-['poppins'] font-bold text-[#3E3E3E] m-40 max-w-[24rem] text-6xl leading-snug">Education & E-learning</h1>
    </>
  );
};

export default Home;
