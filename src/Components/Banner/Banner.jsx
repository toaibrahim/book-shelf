import React from 'react';
import bannerImg from '../../assets/bannerBook.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[555px] bg-[#1313130d] rounded-[20px] my-4 ">
            <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center gap-10">
              <img
                src={bannerImg}
                className="max-w-sm"
              />
              <div>
                <h1 className="text-5xl font-bold mb-12 leading-[84px] text-[#131313]">Books to freshen up <br /> your bookshelf</h1>
                
                <button className="btn bg-[#23BE0A] text-white font-semibold">View The List</button>
              </div>
            </div>
        </div>
    );
};

export default Banner;