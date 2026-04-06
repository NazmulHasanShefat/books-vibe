import React from "react";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/public/pngwing 1.png"
          className="w-[300px] rounded-lg "
        />
        <div>
          <h1 className="text-5xl font-bold w-[500px] my-5">Books to freshen up your bookshelf!</h1>
          <button className="btn btn-primary bg-green-500 text-white rounded-lg border-0 outline-0">View the list</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
