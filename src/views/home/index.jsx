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
  // return (
  //   <>
  //     <Header />
  //     <img src={backgroundSvgCenterTop} alt="bg-svg-ract" className="absolute top-0 -z-10" />
  //     <img src={backgroundSvgRightTop} alt="bg-svg-ract" className="absolute top-0 right-0 -z-10" />
  //     <img
  //       src={home_illustration_study}
  //       alt="bg-svg-ract"
  //       className="absolute top-40 right-0 z-0"
  //     />
  //     <h1 className="font-['poppins'] font-bold text-[#3E3E3E] m-40 max-w-[24rem] text-6xl leading-snug">
  //       Education & E-learning
  //     </h1>
  //     <section
  //       title="main features"
  //       className="text-black flex flex-col justify-center items-center mx-auto mt-[26rem] mb-8 px-5"
  //     >
  //       <h2 className="text-[36px] font-['Inter'] font-bold">Main Features</h2>
  //       <h5 className="text-[14px] font-['Inter'] text-neutral-500 font-semibold">
  //         Key benefits provided by us
  //       </h5>
  //       <div className="grid grid-cols-2 place-items-center place-content-center mt-8">
  //         <span className="grid grid-cols-[1fr_1fr] justify-center items-center gap-8 p-4 min-w-[24rem]">
  //           <img src={feature1} alt="feature-1-Illustration" />
  //           <span className="text-[16px] font-['Inter'] text-neutral-500 font-semibold">
  //             <h2 className="text-[28px] font-['Inter'] text-neutral-900 font-bold">HD</h2>
  //             Video Calls
  //           </span>
  //         </span>
  //         <span className="grid grid-cols-[1fr_1fr] justify-center items-center gap-8 p-4 min-w-[24rem]">
  //           <img src={feature2} alt="feature-2-Illustration" />
  //           <span className="text-[16px] font-['Inter'] text-neutral-500 font-semibold">
  //             <h2 className="text-[28px] font-['Inter'] text-neutral-900 font-bold"> +200</h2>{" "}
  //             Professors
  //           </span>
  //         </span>
  //         <span className="grid grid-cols-[1fr_1fr] justify-center items-center gap-8 p-4 min-w-[24rem]">
  //           <img src={feature3} alt="feature-3-Illustration" />
  //           <span className="text-[16px] font-['Inter'] text-neutral-500 font-semibold">
  //             <h2 className="text-[28px] font-['Inter'] text-neutral-900 font-bold">24/7</h2>
  //             Communication
  //           </span>
  //         </span>
  //         <span className="grid grid-cols-[1fr_1fr] justify-center items-center gap-8 p-4 min-w-[24rem]">
  //           <img src={feature4} alt="feature-4-Illustration" />
  //           <span className="text-[16px] font-['Inter'] text-neutral-500 font-semibold">
  //             <h2 className="text-[28px] font-['Inter'] text-neutral-900 font-bold">24</h2>
  //             Hours Free
  //           </span>
  //         </span>
  //       </div>
  //     </section>
  //     <section
  //       title="about us"
  //       className="text-black bg-[#bbffee] flex flex-col justify-center items-center mx-auto my-32 p-8"
  //     >
  //       <div className="grid grid-cols-[1fr_1fr] gap-4 place-content-start place-items-center">
  //         <img src={about_illustration} alt="feature-4-Illustration" />
  //         <span className="p-4 flex flex-col gap-4 justify-center max-w-[36rem]">
  //           <h2 className="text-[36px] font-['Inter'] font-bold">About Us</h2>
  //           <p className="text-neutral-600">
  //             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quam eveniet
  //             veritatis sed excepturi. Nostrum dolore nisi inventore maiores ipsa perferendis,
  //             voluptas soluta harum repellendus recusandae perspiciatis totam sit molestiae.
  //             <br />
  //             <br />
  //             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsa aliquam
  //             vero accusamus. Reprehenderit quo, earum incidunt ad ipsam minus tenetur magnam
  //             aliquam, perferendis eum saepe facilis. Hic, odit sunt?
  //             <br />
  //             <br />
  //           </p>
  //         </span>
  //       </div>
  //     </section>
  //   </>
  // );

  return (
    <>
      <Header />
      <div dangerouslySetInnerHTML={iframe()} className="h-[calc(100vh_-_64px)] w-full" />
    </>
  );
};

export default Home;
