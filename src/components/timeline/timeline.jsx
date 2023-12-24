import Fotter from "../fotter/fotter";
import LeftSide from "./left-side/left-side";
import ImageCarousel from "./main-animation/ImageCarousel";
import RightSide from "./right-side/right-side";
import "./timeline.css";

let Timeline = () => {

    return (
        <>
        <div className="flex flex-row justify-center text-2xl sm:text-3xl md:text-4xl lg:texl-5xl xl:text-6xl text-white mt-28 main-g-h">
            <p>Gallery</p>
        </div>
        <ImageCarousel />
        <div className="gallery-header flex flex-col justify-center items-center text-white mb-8 gap-4">
            <p className="text-2xl md:text-3xl lg:texl-4xl xl:text-5xl main-g-h">Sacred Timeline</p>
        </div>
        <section id="Timeline" className="mb-10">
            <div className="timeline flex flex-col justify-center items-center">
                <div className="flex flex-row">
                    <div className="vacant">
                    </div>
                    <div className="dot">
                    </div>
                    <div className="vacant">
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="vacant">
                    </div>
                    <div className="ver-line">
                    </div>
                    <div className="vacant">
                    </div>
                </div>
                <LeftSide img="vjtiquad.jpg" year="2000" des="Technovanza held its maiden aiming to encourage Science and Technology" />
                <RightSide img="kalam.jpg" year="2009" des="The Missile Man of India greeted us saying 'Taking Technology to Society'" />
                <LeftSide img="tata.jpg" year="2013" des="Technovanza 2013 was inaugrated by Sir Ratan Tata" />
                <RightSide img="dalai.webp" year="2016" des="His Holiness Dalai Lama blessed us with his letter and appreciated our efforts." />
                <LeftSide img="sophia.jpg" year="2019" des="Sophia, the first robot citizen of world was featured in our lecture series." />
                <div className="flex flex-row">
                    <div className="vacant">
                    </div>
                    <div className="ver-line">
                    </div>
                    <div className="vacant">
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="vacant">
                    </div>
                    <div className="dot">
                    </div>
                    <div className="vacant">
                    </div>
                </div>
            </div>
        </section>
        <Fotter position="static" />
        </>
    )
}
export default Timeline;