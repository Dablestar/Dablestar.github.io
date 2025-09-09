import { useState, useEffect } from "react"
import { InstagramEmbed } from "react-social-media-embed"

import akihabaraImg from "../assets/hobbies/akihabara.jpg"
import mbkImg from "../assets/hobbies/mbk.jpg"
import kokoImg from "../assets/hobbies/koko.jpg"
import yumeImg from "../assets/hobbies/yume.jpg"
import wgcImg from "../assets/hobbies/wgc.jpg"
import composingImg from "../assets/hobbies/composing.png"
import leftArr from "../assets/hobbies/left-arrow.png"
import rightArr from "../assets/hobbies/right-arrow.png"



function Hobbies(){
    const [currentIdx, setIdx] = useState(0)
    const [isHover, setImgMove] = useState(false)

    const imgs = [
        <InstagramEmbed className="w-100 h-180" url="https://www.instagram.com/p/DGhUhuFsnBu/" />,
        <img className="w-300 h-180"src={mbkImg} alt="mbkCenter" />,
        <img className="w-100 h-180"src={akihabaraImg} alt="akihabara" />,
        <img className="w-100 h-180" src={wgcImg} alt="wgc" />,
        <img className="w-100 h-180"src={yumeImg} alt="yumeArcade" />,
        <img className="w-100 h-180"src={kokoImg} alt="kokoArcade" />
    ]   

    const subs = [
        <p className="text-xl">Feb 2025, 8 On the Break, Dunnellen, NJ, USA</p>,
        <p className="text-xl">Dec 2018, MBK Center Arcades, Bangkok, Thailand</p>,
        <p className="text-xl">Dec 2023, GiGO Akihabara #1, Tokyo, Japan</p>,
        <p className="text-xl">Dec 2024, World Game Circus, Tokyo, Japan</p>,
        <p className="text-xl">Jan 2025, Yume Arcade, Toronto, Canada</p>,
        <p className="text-xl">Jul 2025, KOKO Amusement Town Hall, Sydney, Australia</p>
    ]

      useEffect(() => {
        const interval = setInterval(() => {
            if(!isHover){
                goNextImg()
            }
        }, 5000)
        return () => clearInterval(interval)
    })

    const goPrevImg = () => {
        setIdx((prevIdx) => prevIdx > 0 ? prevIdx - 1 : imgs.length -1)
        console.log(currentIdx)
    }
    const goNextImg = () => {
        setIdx((prevIdx) => prevIdx < imgs.length - 1? prevIdx + 1 : 0)
        console.log(currentIdx)
    }

    const toggleHover = () => {
        setImgMove((prevStatus) => !prevStatus)
    }
    return(
        <div>
            <script async src="//www.instagram.com/embed.js"></script>
            <span className="hobbiesText text-4xl">Hobbies</span>
            <div className="hobbiesContainer grid grid-col-1 grid-row-4">
                <div className="hobby flex flex-col justify-center items-center">
                    <div className="hobbyTitle text-2xl">
                        Arcade Travel
                    </div>
                    <div className="imgSliderContainer flex flex-row justify-center items-center relative w-400 overflow-hidden !mt-5" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                        <button className="btnContainer absolute left-0 z-10 w-20 h-20 rounded-[50%] flex items-center justify-center bg-[#EFEFEF] hover:shadow transition" onClick={goPrevImg}><img className="w-10 h-10"src={leftArr} alt="leftArrow" /></button>
                        <div className="imgSlider w-400 flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIdx * 100}%)` }}>
                            {
                                imgs.map((content, i) => (
                                    <div key={i} className="imgContainer w-400 h-200 flex-shrink-0 flex justify-center items-center flex-col" >
                                        {content}
                                        {subs[i]}
                                    </div>
                                ))
                            }
                        </div>
                        <button className="btnContainer absolute right-0 z-10 w-20 h-20 rounded-[50%] flex items-center justify-center bg-[#EFEFEF] hover:shadow transition" onClick={goNextImg}><img className="w-10 h-10" src={rightArr} alt="rightArrow" /></button>
                    </div>
                    <div className="hobbyDetails text-center">
                        As a huge arcade game enjoyer, I'm trying to visit at least one arcade for each trip.
                    </div>
                </div>
                <hr className="!mt-5" />
                <div className="hobby flex flex-col justify-center items-center !mt-5">
                    <div className="hobbyTitle text-2xl">
                        Rhythm Game - Feets
                    </div>
                    <iframe className="yt w-240 h-120 !mt-5" src="https://www.youtube.com/embed/k6-kZOpJymU?si=-GjUkQLdCU2QX4M7&amp;start=60" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    <div className="hobbyDetails text-center !mt-5 text--xl font-thin">
                        Rhythm games shaped my life. I visited an arcade center nearby the school almost everyday when I was young<br />
                        Especially I play rhythm games using feets, like Dance Dance Revolution, Pump It Up as a part of daily workout
                    </div>
                </div>
                <hr className="!mt-5"/>
                <div className="hobby flex flex-col justify-center items-center !mt-5">
                    <div className="hobbyTitle text-2xl">
                        Rhythm Game - Hands
                    </div>
                    <iframe className="yt w-240 h-120 !mt-5" src="https://www.youtube.com/embed/FAlUwCnmMck?si=xuptKf3Vab2rdl6N&amp;start=73" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    <div className="hobbyDetails text-center text-xl !mt-5">
                        If you ask me "What is rhythm game?", then I'll answer "It is kind of self development" <br />
                        The player feels achivement when they see themselves getting better
                    </div>
                </div>
                <hr className="!mt-5"/>
                <div className="hobby flex flex-col justify-center items-center">
                    <div className="hobbyTitle text-xl !mt-5">
                        Composing
                    </div>
                    <div className="imgageContainer !mt-5">
                        <img className="w-240 h-120" src={composingImg} alt="composing screenshot" />
                    </div>
                    <div className="hobbyDetails text-center !mt-5 text-xl">
                        I also enjoy composing, using FL Studio <br />
                        As a recent project, I'm creating a combination of Buddhism Sounds and Psychedelic Trance 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hobbies