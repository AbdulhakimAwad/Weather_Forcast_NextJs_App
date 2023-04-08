import Image from "next/image";
import React from "react";

function Weather({ data }) {
  // console.log(data);
  return (
    <div className="flex relative flex-col justify-between max-w-[500px] w-full h-[70vh] m-auto p-4 text-white z-20">
      <div className="relative flex justify-between pt-12 z-20 ">
        <div className="flex flex-col items-center">
          <Image
            alt="/"
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            width="100"
            height="100"
          />
          <p className=" text-2xl ">{data.weather[0].main}</p>
        </div>
        <p className=" text-9xl">{data.main.temp.toFixed(0)}</p>
      </div>
      <div className=" bg-black/75 relative p-8 rounded-md">
        <p className="text-2xl text-center pb-6">weather in {data.name}</p>
        <div className=" flex justify-between text-center">
          <div>
            <p className=" font-bold text-2xl">
              {data.main.feels_like.toFixed(0)} DEG
            </p>
            <p className=" text-xl">Feels Like</p>
          </div>
          <div>
            <p className=" font-bold text-2xl">
              {data.main.humidity.toFixed(0)} %
            </p>
            <p className=" text-xl">Humidity</p>
          </div>
          <div>
            <p className=" font-bold text-2xl">
              {data.wind.speed.toFixed(0)} MPH
            </p>
            <p className=" text-xl"> Winds speed </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
