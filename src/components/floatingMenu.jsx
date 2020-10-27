import React, { Fragment } from "react";

function Float() {
  return (
    <Fragment>
      <div className=" rounded-full z-50 bg-red-600 w-12 h-12 fixed bottom-0 right-0  flex mb-5 mr-6 p-2">
        <i class="fas fa-user fa-2x mx-auto my-auto "></i>
      </div>

      <div className="md:hidden z-50 float-holder fixed bottom-0 left-0  flex mb-5 ml-5 flex-col gap-1">
        <div className="rounded-full bg-red-600 flex w-12 h-12">
          <i class="fas fa-bars  fa-1x mx-auto my-auto "></i>
        </div>
        <p className="categories">Categories</p>

        <div className="rounded-full bg-red-600 flex w-12 h-12">
          <i class="fas fa-bars  fa-1x mx-auto my-auto "></i>
        </div>
        <p className="categories">Categories</p>

        <div className="rounded-full bg-red-600 flex w-12 h-12">
          <i class="fas fa-bars  fa-1x mx-auto my-auto "></i>
        </div>
        <p className="categories">Categories</p>

        <div className="rounded-full bg-red-600 flex w-12 h-12">
          <i class="fas fa-bars  fa-1x mx-auto my-auto "></i>
        </div>
      </div>
    </Fragment>
  );
}

export default Float;
