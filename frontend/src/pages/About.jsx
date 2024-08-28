// import React from "react";

import Navbar from "../component/Navbar";
// import PrdCarousel from "../component/PrdCarousel";
const About = () => {
  return (
    <div>
      <Navbar />
      <article className="flex justify-center mt-20 gap-9 p-20">
        <img
          className="rounded-[17px] h-[800px]"
          src="/ImagesAbout/diff.jpg"
          alt=""
        />
        <div>
          <h2 className="font-medium text-6xl">Our Story</h2>
          <p className="text-[16px] mt-3">
            At TrendSpire, we believe that fashion is more than just
            clothing—it&apos;s a statement, an art form, and a way to express
            who you are. <br /> Our journey began with a vision to bring
            cutting-edge fashion trends to everyone, without compromising on
            quality or style.
            <br /> From humble beginnings to a thriving brand, our mission has
            always been to inspire individuality through every piece we create.
            <br />
            From the very start, we understood that fashion is personal. <br />
            It&apos;s about embracing your uniqueness and showcasing it to the
            world. <br /> That&apos;s why our collections are thoughtfully
            curated, blending timeless classics with the latest trends. <br />
            We work closely with designers and artisans to ensure that every
            piece not only reflects our vision but also resonates with your
            personal style. <br /> As we&apos;ve grown, so has our commitment to
            sustainability and ethical practices. <br /> We believe in
            responsible fashion, <br /> where every item is crafted with care,
            using materials that are as good for the planet as they are for you.{" "}
            <br />
            TrendSpire is more than a brand—it&apos;s a movement toward a more
            conscious and inclusive fashion industry. <br /> Our community is at
            the heart of everything we do. <br /> We&apos;re not just here to
            sell clothes; we&apos;re here to build connections. <br /> Whether
            you&apos;re shopping with us or engaging with our content, <br /> we
            want you to feel inspired, confident, and part of something bigger.{" "}
            <br />
            Welcome to TrendSpire, where fashion meets passion, creativity knows
            no bounds, and every thread tells a story—your story.
          </p>
        </div>
      </article>

      {/* <PrdCarousel />
      <hr className="border-t-2 border-slate-900 mb-16" />
      <div>
        <h2 className="font-medium text-6xl ml-20 mb-20">Stay Inspired.</h2>
        <div className="flex justify-center mb-32">
          <img className="w-[2000px]" src="/assets/logo.svg" alt="" />
        </div>
      </div>
      <hr className="border-t-2 border-slate-900 mb-20" /> */}
    </div>
  );
};

export default About;
