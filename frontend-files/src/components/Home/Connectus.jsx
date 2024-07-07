import * as React from "react";

function Connectus() {
  return (
    <div className="flex justify-center items-center px-16 py-20 font-semibold text-white bg-black max-md:px-5">
      <div className="flex flex-col mt-5 w-full max-w-[1000px] max-md:max-w-full">
        <div className="justify-center self-center px-4 py-3 text-lg leading-7 bg-blue-500 rounded-lg">
          Integration made easy
        </div>
        <div className="justify-center items-center px-16 mt-4 text-4xl leading-10 text-center max-md:px-5 max-md:max-w-full">
          Connect with 300+ apps
        </div>
        <img
          loading="lazy"
          srcSet="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29ubmVjdHxlbnwwfHwwfHx8MA%3D%3D"
          className="mt-16 w-full aspect-[5] max-md:mt-10 max-md:max-w-full"
        />
      </div>
    </div>
  );
}

export default Connectus;
