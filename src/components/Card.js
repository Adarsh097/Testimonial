
import React from "react";
import { RiDoubleQuotesL,RiDoubleQuotesR } from "react-icons/ri";

export default function Card(props){
    const review = props.review;
    return (
        <div className="flex flex-col md : relative">
            <div className="absolute top-[-7rem] z-[10] mx-auto">
                <img src={review.image} className="aspect-square rounded-full w-[140px] h-[140px] z-25"/>
            
                <div className="aspect-square absolute top-[-0.5rem] right-[-0.5rem] rounded-full w-[140px] h-[140px] z-[-10] bg-purple-600"></div>

            </div>

            <div className="text-center mt-8 ">
                <p className="text-3xl font-bold mb-1 capitalize tracking-wide">{review.name}</p>
            </div>
            <div  className="text-center mt-1 ">
                <p className="text-purple-400 uppercase text-sm">{review.job}</p>
            </div>
            <div>
                <RiDoubleQuotesL className="text-purple-800 mx-auto mt-7"/>
            </div>
            <div className="text-center text-slate-600 text-lg">
                {review.text}
            </div>
            <div>
                <RiDoubleQuotesR className="text-purple-800 mx-auto mb-7" />
            </div>

            
        </div>
    );
};