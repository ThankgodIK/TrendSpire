// import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";

// import Navbar2 from "../component/Navbar2";

const Product = () => {
  return (
    <div>
      <Navbar />

      <div className="mt-20 bg-slate-900 text-white p-8 flex justify-between">
        <div className="m-5 ml-9">
          <h2 className="text-[50px] font-medium mb-5">
            Our Best Picks For You.
          </h2>

          <p className="text-[15px]">
            At TrendSpire, our collection is where fashion meets innovation for
            everyone. Carefully curated by our style experts,
            <br /> these selections offer something for every taste and
            occasion, featuring exclusive collections for men, women, kids, and
            unisex styles.
            <br /> Whether you&aps;re looking for bold statement pieces or
            timeless classics, our range ensures that you&aps;re always dressed
            to impress. Explore our diverse collection, designed to elevate the
            style game of the entire family.
          </p>
        </div>

        <img
          className="h-[400px] w-[500px] rounded-[20px] m-5 mr-5"
          src="/assets/fab2.jpeg"
          alt=""
        />
      </div>
      <div>
        <h2 className="text-4xl font-medium text-center m-9 mb-16">
          Shop Collections
        </h2>
        {/* <Navbar2 /> */}

        {/* container section */}
        <div className="flex justify-center gap-11 mt-10 relative">
          {/* womwn collection */}
          <div className="relative">
            <Link to="/Women">
              <img
                className="w-[500px] h-[600px] rounded-[20px] transform transition-transform duration-300 hover:scale-110 hover:shadow-lg brightness-50 "
                src="/img/mat4.jpg"
                alt=""
              />
            </Link>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h3 className="text-5xl text-white font-medium">WOMEN</h3>
              <p className="text-[15px] text-slate-200 font-semibold ml-5 mt-1">
                Shop collection
              </p>
            </div>
          </div>

          {/* men collection */}
          <div className="relative">
            <Link to="/Men">
              <img
                className="w-[500px] h-[600px] rounded-[20px] transform transition-transform duration-300 hover:scale-110 hover:shadow-lg brightness-50"
                src="/img/mat5.jpg"
                alt=""
              />
            </Link>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h3 className="text-5xl text-white font-medium">MEN</h3>
              <p className="text-[15px] text-slate-200 font-semibold mt-1">
                Shop collection
              </p>
            </div>
          </div>

          {/* unisex collection */}
          <div className="relative">
            <Link to="/Unisex">
              <img
                className="w-[500px] h-[600px] rounded-[20px] transform transition-transform duration-300 hover:scale-110 hover:shadow-lg brightness-50"
                src="/img/mat6.jpg"
                alt=""
              />
            </Link>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h3 className="text-5xl text-white font-medium">UNISEX</h3>
              <p className="text-[15px] text-slate-200 font-semibold ml-5 mt-1">
                Shop collection
              </p>
            </div>
          </div>

          {/* kids collection */}
          <div className="relative">
            <Link to="/Kids">
              <img
                className="w-[500px] h-[600px] rounded-[20px] transform transition-transform duration-300 hover:scale-110 hover:shadow-lg brightness-50"
                src="/img/mat9.jpg"
                alt=""
              />
            </Link>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h3 className="text-5xl text-white font-medium">KIDS</h3>
              <p className="text-[15px] text-slate-200 font-semibold mt-1">
                Shop collection
              </p>
            </div>
          </div>
        </div>
        {/* container section end here */}
      </div>

      <article className="bg-slate-600 text-white p-40 mt-20">
        <h2 className="text-4xl font-medium text-center mb-8  text-white">
          Explore the Latest Trends
        </h2>
        <p className="text-center pl-20 pr-20 text-[15px]">
          Welcome to our fashion carousel, where style meets convenience. This
          interactive showcase lets you browse through a diverse range of
          clothing options, <br /> all designed to keep you ahead of the trends.
          From casual streetwear to sophisticated evening attire, our collection
          features the latest in fashion,
          <br /> Each swipe reveals carefully selected pieces that highlight
          seasonal trends, timeless classics, and unique statements. <br />{" "}
          Whether you’re on the hunt for everyday essentials or looking to make
          a bold impression, our carousel offers an effortless way to explore
          and find outfits that perfectly match your personal style. <br /> Dive
          into a world of fashion innovation and let our collection inspire your
          next wardrobe update.
        </p>
        <div className="flex justify-center gap-14 mt-10">
          <img src="/svg/apparel.svg" alt="" />
          <img src="/svg/pricecheck.svg" alt="" />
          <img src="/svg/sell.svg" alt="" />
          <img src="/svg/store.svg" alt="" />
          <img src="/svg/styler.svg" alt="" />
        </div>
        <h3 className="text-3xl font-medium text-center mb-8 mt-20">
          Discover a World of Fashion with Our Interactive Carousel
        </h3>
        <p className="text-center pl-20 pr-20 text-[15px]">
          Step into the ultimate fashion experience with our dynamic carousel,
          designed to bring the latest trends directly to your fingertips.
          <br /> This immersive browsing tool allows you to effortlessly explore
          a vast array of clothing options,
          <br /> from laid-back casual wear to sophisticated evening outfits.
          <br />
          Our carousel showcases a thoughtfully curated selection that includes
          everything from seasonal must-haves to timeless classics.
          <br /> As you swipe through, you’ll encounter a diverse range of
          styles tailored to suit every occasion and personal preference.
          <br /> Each piece is chosen with care to reflect current fashion
          trends while maintaining the high-quality standards you expect.
          <br />
          Whether you&apos;re searching for the perfect ensemble for a special
          event or simply updating your everyday wardrobe,
          <br /> our collection provides endless inspiration. Take your time to
          browse through our extensive array of clothing,
          <br /> each image offering a glimpse into the vibrant and versatile
          world of fashion.
          <br /> This interactive tool not only highlights the latest styles but
          also allows you to envision how each piece can be incorporated into
          your wardrobe.
          <br /> Our goal is to make fashion discovery as enjoyable and
          convenient as possible, so you can easily find pieces that resonate
          with your unique sense of style.
          <br /> Dive in now and start discovering the endless possibilities
          that await!
        </p>
      </article>
    </div>
  );
};

export default Product;
