import "./key_high.css";
import banner from './banner.jpg';

export default function Key_high() {
  return (
    <>
      <section
        className="text-gray-400 bg-black body-font kh"
      >
        <div className="container px-5 pt-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4 key-main">
              Key Highlights
            </h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-purple-500 inline-flex" />
            </div>
          </div>
          <div className="container px-5 pb-24 mx-auto flex flex-wrap">
            <div
              className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden"
              // data-tilt=""
              // data-tilt-max={25}
              // data-tilt-speed={100}
              // data-tilt-perspective={20000}
              // data-tilt-glare=""
              // data-tilt-max-glare="0.5"
            >
              <img
                alt="feature"
                className="object-cover object-center h-full w-full"
                width={460}
                height={270}
                src={banner}
              />
            </div>
            <div className="flex flex-col flex-wrap justify-center lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-5">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-white text-4xl title-font font-medium mb-3">
					  Technovanza
                  </h2>
                  <p className="leading-relaxed des-key text-lg">
	  Technovanza is the annual technical fest of VJTI, where students strive for excellence while giving back to the community. Over the last 18 years, it has grown to become one of the most popular Techno-managerial events in the country and continues to awe its audience with the quality of events it hosts : From conducting competitive events, where people all over India can showcase their talents to hosting exhibitions and dignitaries from various fields, Technovanza keeps getting better each year. Keeping up with our motto of “Taking Technology to the society”, we continue to deliver an exuberant event, virtually this year!
                  </p>
                  <a className="mt-3 text-purple-400 inline-flex items-center">
                    RSVP
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="aftermovie h-screen bg-black">
 <div className="h-full container">
   <iframe
     className="responsive-iframe"
     src="https://www.youtube.com/embed/PdZMegceT_E?si=Fdaxt-nB9Jcuw7y0"
     title="YouTube video player"
     frameBorder={0}
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     allowFullScreen=""
   />
 </div>
</section>
    </>
  );
}
