import React, { useEffect, useState, useRef } from "react";
import img1 from "../../images/carousel-img1.png";
import img2 from "../../images/carousel-img2.png";
import img3 from "../../images/carousel-img3.png";
import "./MyCarousel.css";

const MyCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const slides = [
    {
      img: img1,
      title: "HOCOOS DOESN'T ASSUME WHAT YOU WANT: IT ASKS WHAT YOU NEED",
      description:
        "Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum necessitatibus praesentium voluptatum deleniti atque corrupti.",
      readMore1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at?",
      readMore2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at?",
      readMoreBtn: "Read More -->",
    },
    {
      img: img2,
      title: "HOCOOS DOESN'T ASSUME WHAT YOU WANT: IT ASKS WHAT YOU NEED",
      description:
        "Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum necessitatibus praesentium voluptatum deleniti atque corrupti.",
      readMore1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at?",
      readMore2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at?",
      readMoreBtn: "Read More -->",
    },
    {
      img: img3,
      title: "HOCOOS DOESN'T ASSUME WHAT YOU WANT: IT ASKS WHAT YOU NEED",
      description:
        "Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum necessitatibus praesentium voluptatum deleniti atque corrupti.",
      readMore1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at?",
      readMore2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at?",
      readMoreBtn: "Read More -->",
    },
  ];
  const progressBarRef = useRef(null);
  let progressBarInterval = null;
  useEffect(() => {
    moveProgressBar(activeSlide);
    return () => {
      clearInterval(progressBarInterval);
    };
  }, [activeSlide]);

  const moveProgressBar = (slideIndex) => {
    const progressBar = progressBarRef.current;
    if (progressBar) {
      progressBar.style.width = "0";
      clearInterval(progressBarInterval);

      let width = 0;
      progressBarInterval = setInterval(() => {
        if (width >= 100) {
          clearInterval(progressBarInterval);
        } else {
          width += 1;
          progressBar.style.width = `${width}%`;
        }
      }, 50);
    } // Adjust the interval time to control the speed of the progress bar
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const handleReadMoreClick = () => {
    setShowContent(true);
  };

  useEffect(() => {
    const autoplayInterval = setInterval(nextSlide, 5000);

    return () => clearInterval(autoplayInterval);
  }, [nextSlide]);

  ////////////////////////////////////////

  ///////////////////////////////////

  return (
    <div id="myCarousels" className="section-carousel ">
      <div className="carousel-head animated animatedFadeInUp fadeInUp">
        <div className="head-tw">
          <div className="head-top-tw">
            <div></div>
            <h5>
              <span>YOUR WEBSITE, YOUR WAY</span>
            </h5>
          </div>
          <h1>
            <span>WITH OUR AI WEBSITE CREATOR</span>
          </h1>
        </div>
      </div>

      <div
        id="myCarousel"
        className="container carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === activeSlide ? "active" : ""
              }`}
            >
              <div className="mask flex-center">
                <div className="container-item">
                  <div className="carousel-content">
                    <div className="container-left">
                      <img src={slide.img} className="mx-auto" alt="slide" />
                    </div>
                    <div className="container-right">
                      <h4>{slide.title}</h4>
                      <p>{slide.description}</p>
                      <p>{slide.description}</p>
                      {showContent ? (
                        <div>
                          <p>{slide.readMore1}</p>
                        </div>
                      ) : (
                        <p className="read-more" onClick={handleReadMoreClick}>
                          {slide.readMoreBtn}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            href="#myCarousels"
            data-slide="prev"
            onClick={prevSlide}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>                                                                                                                                                                                                                                                                                                                                                                                  
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            href="#myCarousels"
            data-slide="next"
            onClick={nextSlide}
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}

        {/* <a
          className="carousel-control-prev"
          href="#myCarousels"
          role="button"
          data-slide="prev"
          onClick={prevSlide}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousels"
          role="button"
          data-slide="next"
          onClick={nextSlide}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a> */}
      </div>
      {/* Carousel Indicators */}
      <ol className="carousel-indicators">
        {slides.map((_, index) => (
          <li
            key={index}
            className={index === activeSlide ? "active" : ""}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </ol>
      <div ref={progressBarRef} className="carousel-indicators-progress" />
    </div>
  );
};

export default MyCarousel;

// import React, { useEffect, useState } from "react";
// import img1 from "../../images/carousel-img1.png";
// import img2 from "../../images/carousel-img2.png";
// import img3 from "../../images/carousel-img3.png";
// import "./MyCarousel.css";

// const MyCarousel = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [showContent, setShowContent] = useState(false);

//   const slides = [
//     {
//       img: img1,
//       title: "HOCOOS DOESN'T ASSUME WHAT YOU WANT: IT ASKS WHAT YOU NEED",
//       description:
//         "Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum necessitatibus praesentium voluptatum deleniti atque corrupti.",
//       readMore1:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at?",
//       readMore2:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at?",
//       readMoreBtn: "Read More -->",
//     },
//     {
//       img: img2,
//       title: "HOCOOS DOESN'T ASSUME WHAT YOU WANT: IT ASKS WHAT YOU NEED",
//       description:
//         "Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum necessitatibus praesentium voluptatum deleniti atque corrupti.",
//       readMore1:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at?",
//       readMore2:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at?",
//       readMoreBtn: "Read More -->",
//     },
//     {
//       img: img3,
//       title: "HOCOOS DOESN'T ASSUME WHAT YOU WANT: IT ASKS WHAT YOU NEED",
//       description:
//         "Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum necessitatibus praesentium voluptatum deleniti atque corrupti.",
//       readMore1:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at?",
//       readMore2:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at?",
//       readMoreBtn: "Read More -->",
//     },
//   ];

//   const nextSlide = () => {
//     setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setActiveSlide(
//       (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
//     );
//   };

//   const handleReadMoreClick = () => {
//     setShowContent(true);
//   };

//   useEffect(() => {
//     const autoplayInterval = setInterval(nextSlide, 5000);

//     return () => clearInterval(autoplayInterval);
//   }, [nextSlide]);

//   return (
//     <div id="myCarousels" className="section-carousel ">
//       {/* <div className="gradient1"></div>
//       <div className="gradient2"></div>
//       <div className="gradient3"></div> */}
//       <div className="carousel-head">
//         <h3>YOUR WEBSITE, YOUR WAY</h3>
//         <h1>WITH OUR AI WEBSITE CREATOR</h1>
//       </div>
//       <div
//         id="myCarousel"
//         className="container carousel slide carousel-fade"
//         data-ride="carousel"
//       >
//         <div className="carousel-inner">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`carousel-item ${
//                 index === activeSlide ? "active" : ""
//               }`}
//             >
//               <div className="mask flex-center">
//                 <div className="container-item">
//                   <div className="carousel-content">
//                     <div className="container-left">
//                       <img src={slide.img} className="mx-auto" alt="slide" />
//                     </div>
//                     <div className="container-right">
//                       <h4>{slide.title}</h4>
//                       <p>{slide.description}</p>
//                       <p>{slide.description}</p>
//                       {showContent ? (
//                         <div>
//                           <p>{slide.readMore1}</p>
//                         </div>
//                       ) : (
//                         <button
//                           className="read-more"
//                           onClick={handleReadMoreClick}
//                         >
//                           {slide.readMoreBtn}
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <a
//           className="carousel-control-prev"
//           href="#myCarousels"
//           role="button"
//           data-slide="prev"
//           onClick={prevSlide}
//         >
//           <span className="carousel-control-prev-icon" aria-hidden="true" />
//           <span className="sr-only">Previous</span>
//         </a>
//         <a
//           className="carousel-control-next"
//           href="#myCarousels"
//           role="button"
//           data-slide="next"
//           onClick={nextSlide}
//         >
//           <span className="carousel-control-next-icon" aria-hidden="true" />
//           <span className="sr-only">Next</span>
//         </a>
//       </div>
//     </div>
//   );
// };
// export default MyCarousel;

//////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from "react";
// import img1 from "../../images/carousel-img1.png";
// import img2 from "../../images/carousel-img2.png";
// import img3 from "../../images/carousel-img3.png";
// import "./MyCarousel.css";

// const MyCarousel = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [showContent, setShowContent] = useState(false);

//   const slides = [
//     {
//       img: img1,
//       title: "HOCOOS DOESN'T ASSUME WHAT YOU WANT: IT ASKS WHAT YOU NEED",
//       description:
//         "Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum necessitatibus praesentium voluptatum deleniti atque corrupti.",
//       readMore1:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at?",
//       readMore2:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at?",
//       readMoreBtn: "Read More -->",
//     },
//     {
//       img: img2,
//       title: "HOCOOS DOESN'T ASSUME WHAT YOU WANT: IT ASKS WHAT YOU NEED",
//       description:
//         "Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum necessitatibus praesentium voluptatum deleniti atque corrupti.",
//       readMore1:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at?",
//       readMore2:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at?",
//       readMoreBtn: "Read More -->",
//     },
//     {
//       img: img3,
//       title: "HOCOOS DOESN'T ASSUME WHAT YOU WANT: IT ASKS WHAT YOU NEED",
//       description:
//         "Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum necessitatibus praesentium voluptatum deleniti atque corrupti.",
//       readMore1:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at?",
//       readMore2:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at?",
//       readMoreBtn: "Read More -->",
//     },
//   ];

//   const nextSlide = () => {
//     setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setActiveSlide(
//       (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
//     );
//   };

//   const handleReadMoreClick = () => {
//     setShowContent(true);
//   };

//   useEffect(() => {
//     const autoplayInterval = setInterval(nextSlide, 5000);

//     return () => clearInterval(autoplayInterval);
//   }, [nextSlide]);

//   return (
//     <div id="myCarousels" className="section-carousel">
//       <div className="carousel-head">
//         <h3>YOUR WEBSITE, YOUR WAY</h3>
//         <h1>WITH OUR AI WEBSITE CREATOR</h1>
//       </div>
//       <div
//         id="myCarousel"
//         className="container carousel slide carousel-fade"
//         data-ride="carousel"
//       >
//         <div className="carousel-inner">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`carousel-item ${
//                 index === activeSlide ? "active" : ""
//               }`}
//             >
//               <div className="mask flex-center">
//                 <div className="container-item">
//                   <div className="carousel-content">
//                     <div className="container-left">
//                       <img src={slide.img} className="mx-auto" alt="slide" />
//                     </div>
//                     <div className="container-right">
//                       <h4>{slide.title}</h4>
//                       <p>{slide.description}</p>
//                       <p>{slide.description}</p>
//                       {showContent ? (
//                         <div>
//                           <p>{slide.readMore1}</p>
//                         </div>
//                       ) : (
//                         <button
//                           className="read-more"
//                           onClick={handleReadMoreClick}
//                         >
//                           {slide.readMoreBtn}
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div>
//           <button
//             className="carousel-control-prev"
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             href="#myCarousels"
//             data-slide="prev"
//             onClick={prevSlide}
//           >
//             <span className="carousel-control-prev-icon" aria-hidden="true" />
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button
//             className="carousel-control-next"
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             href="#myCarousels"
//             data-slide="next"
//             onClick={nextSlide}
//           >
//             <span className="carousel-control-next-icon" aria-hidden="true" />
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>

//         {/* <a
//           className="carousel-control-prev"
//           href="#myCarousels"
//           role="button"
//           data-slide="prev"
//           onClick={prevSlide}
//         >
//           <span className="carousel-control-prev-icon" aria-hidden="true" />
//           <span className="sr-only">Previous</span>
//         </a>
//         <a
//           className="carousel-control-next"
//           href="#myCarousels"
//           role="button"
//           data-slide="next"
//           onClick={nextSlide}
//         >
//           <span className="carousel-control-next-icon" aria-hidden="true" />
//           <span className="sr-only">Next</span>
//         </a> */}
//       </div>
//       {/* Carousel Indicators */}
//       {/* <ol className="carousel-indicators">
//         {slides.map((_, index) => (
//           <li
//             key={index}
//             className={index === activeSlide ? "active" : ""}
//             onClick={() => setActiveSlide(index)}
//           />
//         ))}
//       </ol> */}
//     </div>
//   );
// };

// export default MyCarousel;

//////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from "react";
// import img1 from "../../images/carousel-img1.png";
// import img2 from "../../images/carousel-img2.png";
// import img3 from "../../images/carousel-img3.png";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./MyCarousel.css";

// const MyCarousel = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [showContent, setShowContent] = useState(false);

//   const slides = [
//     {
//       img: img1,
//       title: "HOCOOS DOESN'T ASSUME WHAT YOU WANT: IT ASKS WHAT YOU NEED",
//       description:
//         "Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum necessitatibus praesentium voluptatum deleniti atque corrupti.",
//       readMore1:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at?",
//       readMore2:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at?",
//       readMoreBtn: "Read More -->",
//     },
//     {
//       img: img2,
//       title: "HOCOOS DOESN'T ASSUME WHAT YOU WANT: IT ASKS WHAT YOU NEED",
//       description:
//         "Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum necessitatibus praesentium voluptatum deleniti atque corrupti.",
//       readMore1:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at?",
//       readMore2:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at?",
//       readMoreBtn: "Read More -->",
//     },
//     {
//       img: img3,
//       title: "HOCOOS DOESN'T ASSUME WHAT YOU WANT: IT ASKS WHAT YOU NEED",
//       description:
//         "Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum necessitatibus praesentium voluptatum deleniti atque corrupti.",
//       readMore1:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at?",
//       readMore2:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at?",
//       readMoreBtn: "Read More -->",
//     },
//   ];

//   const nextSlide = () => {
//     setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setActiveSlide(
//       (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
//     );
//   };

//   const handleReadMoreClick = () => {
//     setShowContent(true);
//   };

//   useEffect(() => {
//     const carousel = new bootstrap.Carousel(
//       document.getElementById("myCarousel")
//     );

//     function fillCarouselIndicator(index) {
//       const indicators = document.querySelectorAll(
//         "#myCarousels .carousel-indicators li"
//       );
//       indicators.forEach((indicator, i) => {
//         if (i === index) {
//           indicator.classList.add("active");
//         } else {
//           indicator.classList.remove("active");
//         }
//       });
//     }

//     carousel.pause(); // Pause the automatic sliding

//     const intervalID = setInterval(() => {
//       if (activeSlide >= slides.length - 1) {
//         carousel.next();
//       } else {
//         carousel.to(activeSlide + 1);
//       }
//       fillCarouselIndicator(activeSlide);
//     }, 5000);

//     return () => clearInterval(intervalID);
//   }, [activeSlide, slides.length]);

//   return (
//     <div id="myCarousels" className="section-carousel">
//       <div className="carousel-head">
//         <h3>YOUR WEBSITE, YOUR WAY</h3>
//         <h1>WITH OUR AI WEBSITE CREATOR</h1>
//       </div>
//       <div
//         id="myCarousel"
//         className="container carousel slide carousel-fade"
//         data-ride="carousel"
//       >
//         <div className="carousel-inner">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`carousel-item ${
//                 index === activeSlide ? "active" : ""
//               }`}
//             >
//               <div className="mask flex-center">
//                 <div className="container-item">
//                   <div className="carousel-content">
//                     <div className="container-left">
//                       <img src={slide.img} className="mx-auto" alt="slide" />
//                     </div>
//                     <div className="container-right">
//                       <h4>{slide.title}</h4>
//                       <p>{slide.description}</p>
//                       <p>{slide.description}</p>
//                       {showContent ? (
//                         <div>
//                           <p>{slide.readMore1}</p>
//                         </div>
//                       ) : (
//                         <button
//                           className="read-more"
//                           onClick={handleReadMoreClick}
//                         >
//                           {slide.readMoreBtn}
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div>
//           <button
//             className="carousel-control-prev"
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             href="#myCarousels"
//             data-slide="prev"
//             onClick={prevSlide}
//           >
//             <span className="carousel-control-prev-icon" aria-hidden="true" />
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button
//             className="carousel-control-next"
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             href="#myCarousels"
//             data-slide="next"
//             onClick={nextSlide}
//           >
//             <span className="carousel-control-next-icon" aria-hidden="true" />
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>

//         {/* <a
//           className="carousel-control-prev"
//           href="#myCarousels"
//           role="button"
//           data-slide="prev"
//           onClick={prevSlide}
//         >
//           <span className="carousel-control-prev-icon" aria-hidden="true" />
//           <span className="sr-only">Previous</span>
//         </a>
//         <a
//           className="carousel-control-next"
//           href="#myCarousels"
//           role="button"
//           data-slide="next"
//           onClick={nextSlide}
//         >
//           <span className="carousel-control-next-icon" aria-hidden="true" />
//           <span className="sr-only">Next</span>
//         </a> */}
//       </div>
//       {/* Carousel Indicators */}
//       {/* <ol className="carousel-indicators">
//         {slides.map((_, index) => (
//           <li
//             key={index}
//             className={index === activeSlide ? "active" : ""}
//             onClick={() => setActiveSlide(index)}
//           />
//         ))}
//       </ol> */}
//     </div>
//   );
// };

// export default MyCarousel;
