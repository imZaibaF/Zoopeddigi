import React from "react";

const Google = () => {
  return (
    <>
      <div className="text-black">
        <div className="py-40 bg-white text-center px-4">
          <h1 className="lg:text-7xl text-5xl leading-snug font-bold mb-5">
            Google Ads Page
          </h1>
        </div>

        {/* about content */}
        <div className="max-w-7xl mx-auto px-4 my-20 text-black">
          {/* top content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            {/* <div className="md:w-1/2">
              <img src={aboutImg} alt="" className="w-full" />
            </div> */}
            <div className="md">
              <h5 className="text-blue-500 text-xl font-medium mb-4">
                Who we are
              </h5>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-darkmb-4 mb-8">
                Improve Marketing Solutions
              </h2>
              <p className="text-lg text-gray-600 text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reiciendis, quasi? Possimus reprehenderit ipsum necessitatibus
                voluptatum minus aliquid, beatae dolor, delectus vero
                accusantium vel doloribus. Id itaque explicabo expedita
                voluptatibus possimus! Pariatur totam iste aspernatur tenetur
                et. Voluptas, molestiae nemo. Ratione quis ipsum suscipit
                praesentium dolores aperiam ullam corporis animi autem? Sunt
                facere ullam doloribus molestias cumque at eaque accusamus
                dolorum. Sed ullamcorper dui at risus viverra, nec cursus leo
                ullamcorper. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos congue dui nec dui
                lobortis maximus.
                <br /> <br />
                Curabitur pretium, libero vitae pharetra rhoncus, tellus urna
                auctor orci, eu dictum diam diam nec neque. Pellentesque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Google;
