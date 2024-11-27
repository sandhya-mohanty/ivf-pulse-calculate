import React from "react";
import couple from "../assets/couple.png"
import Header from "./Header";
const ResultScreen = () => {
  const successRate = 64; // Dynamic value (can be passed via props or state)
  const cycles = 1; 
  return (
    <>
    <Header/>
   <div className=" bg-black">
   
   
     <div className="w-full  py-2 px-4">
   
     <div className="max-w-6xl mr-auto text-sm text-white px-7 py-5 ">
       Home / IVF Success Rate Calculator / <span className="text-white">Result</span>
   </div>
 </div>

 {/* Main Content */}
 <div className="flex flex-col p-7  items-center justify-center ">
   <h2 className="text-l md:px-7 md:text-4xl font-semibold text-white mb-6  mr-100 mr-auto">
     Your estimated IVF Success Rate is
   </h2>

   {/* Success Rate Circular Graph */}
   <div className="flex lg:flex-row flex-col justify-center items-center ">

   <div className="flex-col flex py-10">

   <div className="relative w-40 h-40 md:w-56 md:h-56 flex items-center justify-center mb-6">
     <div className="w-full h-full rounded-full bg-green-500 text-white flex items-center justify-center">
       <span className="text-3xl md:text-5xl font-bold">{successRate}%</span>
     </div>
     <div
       className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-white-800"
       style={{
         clipPath: `inset(0 ${100 - successRate}% 0 0)`,
       }}
     ></div>
   </div>

   {/* IVF Cycle Information */}
   <p className="text-lg md:text-xl text-gray-300">With {cycles} IVF Cycle</p>
   </div>

   {/* Decorative Image */}
     <img
       src={couple} // Replace with actual image URL
       alt="Couple Celebrating IVF Success"
       className="size-xxl ml-[70px] lg:w-[565px] "
     />
   </div>
 </div>
</div>
</>

  );
};

export default ResultScreen;
