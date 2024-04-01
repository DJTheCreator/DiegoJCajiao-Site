gsap.registerPlugin(ScrollTrigger);

const items = gsap.utils.toArray('.item-text');
items.forEach((item)=>{
  gsap.fromTo(item,{
    opacity: 1,
    scale:2,
    duration: 4,
    scrollTrigger: {
      trigger: item,
      start: "center 50%",
      end: "center 10%",
      scrub: true,
      // markers:true,
      toggleActions: "restart none none none",
    }
  }, {
    opacity: 0,
    scale:1,
    duration: 4,
    scrollTrigger: {
      trigger: item,
      start: "center 50%",
      end: "center 10%",
      scrub: true,
      // markers:true,
      toggleActions: "restart none none none",
    }
  });
  gsap.fromTo(item,{
    opacity: 0,
    scale:1,
    duration: 4,
    scrollTrigger: {
      trigger: item,
      start: "center 100%",
      end: "center 60%",
      scrub: true,
      // markers: {endColor: "blue", startColor: "orange"},
      toggleActions: "restart none none none",
    }
  }, {
    opacity: 1,
    scale:2,
    duration: 4,
    scrollTrigger: {
      trigger: item,
      start: "center 100%",
      end: "center 60%",
      scrub: true,
      // markers: {endColor: "blue", startColor: "orange"},
      toggleActions: "restart none none none",
    }
  });
})
