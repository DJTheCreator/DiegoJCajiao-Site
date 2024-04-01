gsap.registerPlugin(ScrollTrigger);

// gsap.to("#event1",{
//   opacity: 1,
//   x:200,
//   duration: 4,
//   scrollTrigger: {
//     trigger: "#event1",
//     start: "center 90%",
//     end: "center 60%",
//     scrub: true,
//     toggleActions: "restart none none none",
//     markers: {startColor: "blue", endColor: "orange"},
//   }
// })

const items = gsap.utils.toArray('.item-text');
items.forEach((item)=>{
  gsap.fromTo(item,{
    opacity: 1,
    duration: 4,
    scrollTrigger: {
      trigger: item,
      start: "center 30%",
      end: "center 5%",
      scrub: true,
      toggleActions: "restart none none none",
    }
  }, {
    opacity: 0,
    duration: 4,
    scrollTrigger: {
      trigger: item,
      start: "center 30%",
      end: "center 5%",
      scrub: true,
      toggleActions: "restart none none none",
    }
  });
  gsap.fromTo(item,{
    opacity: 0,
    duration: 4,
    scrollTrigger: {
      trigger: item,
      start: "center 100%",
      end: "center 40%",
      scrub: true,
      toggleActions: "restart none none none",
    }
  }, {
    opacity: 1,
    duration: 4,
    scrollTrigger: {
      trigger: item,
      start: "center 100%",
      end: "center 40%",
      scrub: true,
      toggleActions: "restart none none none",
    }
  });
})
