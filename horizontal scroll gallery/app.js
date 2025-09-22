


// document.addEventListener("DOMContentLoaded", () => {
//     gsap.registerPlugin(ScrollTrigger);

//     const container = document.querySelector(".container");
//     const direction = gsap.utils.toArray(".direction");
//     const oppositeDirection = gsap.utils.toArray(".opposite-direction");
//     const images = gsap.utils.toArray(".image-wrapper img");


//     document.querySelectorAll(".image-wrapper").forEach((wrapper) => {
//         const frames = wrapper.querySelectorAll(".frame");
//         const cloneCount = 2;

//         for(let i=0; i< cloneCount; i++) {
//             frames.forEach((frame) => {
//                 wrapper.appendChild(frame.cloneNode(true));
//             });
//         }
//     });

//     const tl = gsap.timeline({
//         defaults: { ease: "none"},
//         scrollTriggr: {
//             trigger: "section",
//             start: "top top",
//             end: `+=${images.length * 50}`,
//             scrub: 2,
//             pin: true,
//             invalidateOnRefrsh: true,
//         },
//     });

//     direction.forEach((row) => {
//         tl.to(
//             row,
//             {
//                 x: () => -(row.scrollWidth - container.offsetWidth),
//             },
//             0
//         );
//     });

    
//     oppositeDirection.forEach((row) => {
//         tl.fromTo(row, {
//             x: () => container.offsetWidth - row.scrollWidth
//         },
//         { x: 0 },
//         0
//     );
//     });
// });




document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const container = document.querySelector(".container");
  const direction = gsap.utils.toArray(".direction");
  const oppositeDirection = gsap.utils.toArray(".opposite-direction");
  const images = gsap.utils.toArray(".image-wrapper img");

  // Clone frames for infinite-like effect
  document.querySelectorAll(".image-wrapper").forEach((wrapper) => {
    const frames = wrapper.querySelectorAll(".frame");
    const cloneCount = 2;

    for (let i = 0; i < cloneCount; i++) {
      frames.forEach((frame) => {
        wrapper.appendChild(frame.cloneNode(true));
      });
    }
  });

  // Timeline
  const tl = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      trigger: "section",
      start: "top top",
      end: `+=${images.length * 200}`, // control scroll distance
      scrub: 2,
      pin: true,
      invalidateOnRefresh: true,
    },
  });

  // Normal direction
  direction.forEach((row) => {
    tl.to(
      row,
      {
        x: () => -(row.scrollWidth - container.offsetWidth),
      },
      0
    );
  });

  // Opposite direction
  oppositeDirection.forEach((row) => {
    tl.fromTo(
      row,
      { x: () => container.offsetWidth - row.scrollWidth },
      { x: 0 },
      0
    );
  });
});