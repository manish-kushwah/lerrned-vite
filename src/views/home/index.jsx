import React from "react";
import Header from "../../components/Header";
import backgroundSvgCenterTop from "../../assets/home/home_illustration_bg.svg";
import backgroundSvgRightTop from "../../assets/home/home_right_corner_bg.svg";
import home_illustration_study from "../../assets/home/Home-Illustrations-Online-Education.svg";
import about_illustration from "../../assets/home/About_illustration.svg";

function iframe() {
  return {
    __html: '<iframe src="./home.html" width="100%" height="100%"></iframe>',
  };
}

const Home = () => {
  return (
    <>
      <Header />
      <div dangerouslySetInnerHTML={iframe()} className="h-[calc(100vh_-_64px)] w-full" />
    </>
  );
};

export default Home;
