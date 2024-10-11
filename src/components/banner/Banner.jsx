import React from "react";

function Banner({
  title,
  banName,
  subtitle,
  price,
  ctaText = "Shop",
  imageUrl,
}) {
  return (
    <div className="relative w-full rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt="Banner"
        className="w-full h-64 md:h-80 object-cover"
      />
      <div className="absolute inset-0 bg-opacity-60 flex flex-col justify-center items-start pl-6 md:pl-12">
        <div>
          <p className="text-sm md:text-lg text-blue-600 mb-2">
            {subtitle} <span className="font-bold">{price}</span>
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className=" lg:block">
              {title}
              <br />
              {banName}
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-800 mb-6"></p>
          <div className="flex  font-bold">
            <button className="text-lg underline decoration-2 underline-offset-1">
              {ctaText}
            </button>
            <button className="mx-1">Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;