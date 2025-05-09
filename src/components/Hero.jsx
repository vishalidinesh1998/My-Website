import React from "react";

function Hero(){
    return(
        <section className="mt-4 gap-5 py-16 text-center ">
            <img className="mx-auto rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPCNlr114udk91XPvvOGBfmKH-vKDZjdnyqg&s" alt=""></img>
            <h2 className="text-4xl font-bold mt-4 ">🎨 Build Amazing UIs with React & Vite</h2>
            <p className="text-gray-600 mt-4">Fast, lightweight, and modern frontend development</p>
            <button className=" mt-4 bg-blue-600 p-2 rounded-lg text-white hover:bg-blue-800 transition ">🚀Get Started</button>
        </section>
    )
}

export default Hero