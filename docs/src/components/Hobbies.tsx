import { useState } from "react"
import { InstagramEmbed } from "react-social-media-embed"

import akihabaraImg from "../assets/hobbies/akihabara.jpg"
import mbkImg from "../assets/hobbies/mbk.jpg"
import kokoImg from "../assets/hobbies/koko.jpg"
import yumeImg from "../assets/hobbies/yume.jpg"
import wgcImg from "../assets/hobbies/wgc.jpg"
import composingImg from "../assets/hobbies/composing.png"




function Hobbies(){
    const [currentIdx, setIdx] = useState(0)
    return(
        <div>
            <script async src="//www.instagram.com/embed.js"></script>
            <span className="hobbiesText text-2xl">Hobbies</span>
            <div className="hobbiesContainer grid grid-col-1 grid-row-4">
                <div className="hobby flex flex-col justify-center items-center">
                    <div className="hobbyTitle text-2xl">
                        Arcade Travel
                    </div>
                    <div className="imgSliderContainer flex flex-row justify-center items-center">
                        <div className="leftBtn">
                            <button className="btnContainer w-20 h-20 rounded-[50%] shadow text-center text-base/20">L</button>
                        </div>
                        <div className="imgSlider w-400 h-200 flex flex-row overflow-hidden justify-center items-center">
                            <InstagramEmbed className="w-100 h-180" url="https://www.instagram.com/p/DGhUhuFsnBu/" />
                            <img className="w-400 h-180"src={mbkImg} alt="mbkCenter" />
                            <img className="w-100 h-180"src={akihabaraImg} alt="akihabara" />
                            <img className="w-100 h-180" src={wgcImg} alt="wgc" />
                            <img className="w-100 h-180"src={yumeImg} alt="yumeArcade" />
                            <img className="w-100 h-180"src={kokoImg} alt="kokoArcade" />
                        </div>
                        <div className="rightBtn flex">
                            <button className="btnContainer w-20 h-20 rounded-[50%] shadow text-center text-base/20">R</button>
                        </div>
                    </div>
                    
                    <div className="hobbyDetails text-center">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro architecto numquam culpa mollitia qui, corrupti modi libero eaque repellat nesciunt eveniet nisi deserunt sed quia eos enim. Recusandae, voluptate quod!
                    </div>
                </div>
                <hr className="!mt-5" />
                <div className="hobby flex flex-col justify-center items-center">
                    <div className="hobbyTitle text-xl">
                        Rhythm Game - Hands
                    </div>
                    <iframe className="yt w-240 h-120" src="https://www.youtube.com/embed/FAlUwCnmMck?si=xuptKf3Vab2rdl6N&amp;start=73" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    <div className="hobbyDetails text-center">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro architecto numquam culpa mollitia qui, corrupti modi libero eaque repellat nesciunt eveniet nisi deserunt sed quia eos enim. Recusandae, voluptate quod!
                    </div>
                </div>
                <hr className="!mt-5"/>
                <div className="hobby flex flex-col justify-center items-center !mt-5">
                    <div className="hobbyTitle text-2xl">
                        Rhythm Game - Feets
                    </div>
                    <iframe className="yt w-240 h-120 !mt-5" src="https://www.youtube.com/embed/k6-kZOpJymU?si=-GjUkQLdCU2QX4M7&amp;start=60" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    <div className="hobbyDetails text-center !mt-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro architecto numquam culpa mollitia qui, corrupti modi libero eaque repellat nesciunt eveniet nisi deserunt sed quia eos enim. Recusandae, voluptate quod!
                    </div>
                </div>
                <hr className="!mt-5"/>
                <div className="hobby flex flex-col justify-center items-center">
                    <div className="hobbyTitle text-xl !mt-5">
                        Composing
                    </div>
                    <div className="imgageContainer !mt-5">
                        <img className="w-240 h-120" src={composingImg} alt="" />
                    </div>
                    <div className="hobbyDetails text-center !mt-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro architecto numquam culpa mollitia qui, corrupti modi libero eaque repellat nesciunt eveniet nisi deserunt sed quia eos enim. Recusandae, voluptate quod!
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hobbies