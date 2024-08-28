// import React from "react";

import HomeBtn from "../component/HomeBtn";
import Navbar from "../component/Navbar";
import Navbar2 from "../component/Navbar2";
// import SideBar from "../component/SideBar";
import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  height: "1350px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  // background: "#364d79",
};

// carosel

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <SideBar /> */}
      {/* burger start */}

      {/* burger stop */}
      <div className="mt-[64px]">
        {/* carosel starts here */}
        <Carousel autoplay>
          <div className="relative">
            <video
              style={contentStyle}
              className="w-full h-full object-cover brightness-50 "
              src="/video/nigga.mp4"
              autoPlay
              loop
              muted
            />
            <div className="absolute top-1/2 left-1 transform -translate-x-1 -translate-y-1/2 ">
              <h1 className="text-[90px] ml-16 font-medium text-white">
                Discover Your Unique Style
              </h1>
              <p className="text-[20px] text-white ml-20">
                Explore TrendSpire&apos;s curated collection of the latest
                fashion trends. <br /> From bold statements to timeless
                classics, each piece is crafted to inspire confidence and
                individuality. <br /> Find the perfect outfit that speaks to
                your style.
              </p>
            </div>
          </div>

          {/* <div>
            <img
              style={contentStyle}
              className="w-full h-auto mt-4 relative"
              src="/assets/mens.jpg"
              alt="Fashion Model"
            />
            <h1 className="absolute text-[100px] font-bold text-black">
              lorem black guys
            </h1>
          </div> */}

          <div>
            <video
              style={contentStyle}
              className="w-full h-full object-cover brightness-50 "
              src="/video/sew2.mp4"
              autoPlay
              loop
              muted
            />
          </div>

          <div>
            <video
              style={contentStyle}
              className="w-full h-full object-cover brightness-50 "
              src="/video/white.mp4"
              autoPlay
              loop
              muted
            />
          </div>

          <div>
            <video
              style={contentStyle}
              className="w-full h-full object-cover brightness-50 "
              src="/video/blck.mp4"
              autoPlay
              loop
              muted
            />
          </div>
        </Carousel>
        ;{/* carosel ends here */}
        <h1 className="text-center m-16 text-6xl font-medium text-gray-900">
          Inspire Your Wardrobe
        </h1>
        <p className="text-center text-2xl text-gray-900 mb-20 mr-10 ml-10">
          Inspire your wardrobe with our curated collection of fashion-forward
          pieces designed to spark creativity and elevate your personal style.{" "}
          Whether you&apos;re seeking bold new trends or timeless classics, our
          selection encourages you to mix, match, and express yourself with
          confidence.
          <br /> Let each piece inspire your next outfit and transform your
          everyday look into something extraordinary.
        </p>
      </div>
      <div>
        {/* container sections */}
        <Navbar2 />
        <article className=" flex items-center justify-center gap-16 mr-32 ml-32 text-center mt-7">
          <div className="w-[900px] bg-white p-8 rounded-[20px] drop-shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 ...">
            <img className="rounded-md" src="/assets/wo.jpeg" alt="" />
            <h2 className="text-[20px] font-medium mt-4">
              Style with Confidence
            </h2>
            <p className="text-gray-700">
              Discover the latest trends curated just for you.
            </p>
          </div>
          <div className="w-[950px] bg-white p-8 rounded-[20px] drop-shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 ...">
            <img className="rounded-md" src="/assets/shirt.jpeg" alt="" />
            <h2 className="text-[20px] font-medium mt-4">
              Classic Meets Contemporary
            </h2>
            <p className="text-gray-700">
              From casual to formal, we have you covered.
            </p>
          </div>
          <div className="w-[1060px] bg-white p-8 rounded-[20px] drop-shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 ...">
            <img className="rounded-md" src="/assets/spray.jpeg" alt="" />
            <h2 className="text-[20px] font-medium mt-4">
              Fashion for Everyone
            </h2>
            <p className="text-gray-700">
              Express yourself with our versatile unisex collection.
            </p>
          </div>
          <div className="w-[1080px] bg-white p-8 rounded-[20px] drop-shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 ...">
            <img className="rounded-md" src="/assets/yellow.jpeg" alt="" />
            <h2 className="text-[20px] font-medium mt-4">
              Fashion for the Little Ones
            </h2>
            <p className="text-gray-700">
              Comfort meets style in our kid&apos;s collection.
            </p>
          </div>
        </article>
      </div>

      <HomeBtn />
    </div>
  );
};

export default Home;
