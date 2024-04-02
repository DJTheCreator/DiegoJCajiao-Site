gsap.registerPlugin(ScrollTrigger);

window.onbeforeunload = function () {
  window.scrollTo(0,0);
};

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

let borderClasses = document.getElementById("ProjectTimelineBorder").classList;
ScrollTrigger.create({
  trigger: document.getElementById("ProjectTimelineBorder"),
  start: "center 50%",
  end: "center 50%",
  // markers: true,
  onEnter: () => document.getElementById("ProjectTimelineBorder").classList.add('enableFixed'),
  onEnterBack: () => document.getElementById("ProjectTimelineBorder").classList.remove('enableFixed')
})

let fakeBorderClasses = document.getElementById("fakeEndBorder").classList;
ScrollTrigger.create({
  trigger: document.getElementById("ProjectTimeline"),
  start: "bottom 95%",
  end: "bottom 95%",
  markers: true,
  onEnter: () => {
    borderClasses.remove('enableFixed');
    borderClasses.add('timelineBottom');
    fakeBorderClasses.add('timelineBottom')},
  onEnterBack: () => {
    borderClasses.add('enableFixed');
    borderClasses.remove('timelineBottom');
    fakeBorderClasses.remove('timelineBottom')},
})
