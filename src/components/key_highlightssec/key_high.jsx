import "./key_high.css";
export default function Key_high() {
  return (
    <>
      <section className="text-gray-400 bg-black body-font kh">
        <div className="container  pt-10 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl text-white mb-4 key-main">
              Key Highlights
            </h1>
            <div className="flex mt-2 justify-center">
              <div className="w-16 h-1 rounded-full bg-purple-500 inline-flex" />
            </div>
          </div>
          <div className="container  pb-10 mx-auto flex flex-row justify-center flex-wrap">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden flex flex-row justify-center">
              <img
                alt="feature"
                className="key-hig-img object-cover object-center "
                src={require("../../img/techno_ground.webp")}
              />
            </div>
            <div className="flex flex-col flex-wrap justify-center lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-white text-4xl title-font font-medium mb-3">
                    Technovanza
                  </h2>
                  <p className="leading-relaxed des-key text-lg">
                    Technovanza is the annual technical fest of VJTI, where
                    students strive for excellence while giving back to the
                    community. Over the last 18 years, it has grown to become
                    one of the most popular Techno-managerial events in the
                    country and continues to awe its audience with the quality
                    of events it hosts : From conducting competitive events,
                    where people all over India can showcase their talents to
                    hosting exhibitions and dignitaries from various fields,
                    Technovanza keeps getting better each year. Keeping up with
                    our motto of “Taking Technology to the society”, we continue
                    to deliver an exuberant event, virtually this year!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="aftermovie flex flex-col justify-center items-center my-6">
        <h3 className="text-white text-6xl max-sm:text-5xl font-orbitron mt-16 key-main">
          Aftermovie
        </h3>
        <div className="flex my-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-purple-500 inline-flex" />
        </div>
        <div className="container video-frame relative flex flex-col lg:flex-row items-center gap-8 ">
          <iframe
            className="responsive-iframe h-48 w-5/6 sm:w-3/6 sm:h-80"
            src="https://www.youtube.com/embed/e-t4dMonPZc?si=cnoAF2CRqkSF86qI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen=""
          />

          <p className="text-xl md:text-3xl afterMovie">
            Explore the Future of Technology and Entrepreneurship at the Giant
            Technovanza 2024,
            <br /> Asia's Most Anticipated Techno-Managerial Festival!
          </p>
        </div>
      </section>
      {/* Maps */}
      <section className="w-screen radialcir aftermovie flex flex-col justify-center items-center my-6">
        <h3 className="text-white text-5xl font-orbitron mt-16 key-main max-sm:text-4xl">
          Locate Us
        </h3>
        <div class="flex my-2 justify-center">
          <div class="w-16 h-1 rounded-full bg-purple-500 inline-flex"></div>
        </div>

        <iframe
          className="w-screen sm:w-2/3"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9432282763996!2d72.85354627438042!3d19.022223153660192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf26f4972d21%3A0x2c50185364aca4c1!2sVeermata%20Jijabai%20Technological%20Institute%20VJTI!5e0!3m2!1sen!2sin!4v1704468679370!5m2!1sen!2sin"
          // width={500}
          height={450}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
