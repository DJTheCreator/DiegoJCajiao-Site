gsap.registerPlugin(ScrollTrigger);

window.onbeforeunload = function () {
  window.scrollTo(0,0);
};

const items = gsap.utils.toArray('.item-text');
items.forEach((item, index)=>{
  gsap.fromTo(item,{
    opacity: 1,
    scale:2,
  }, {
    opacity: 0,
    scale:1,
    duration: 4,
    scrollTrigger: {
      trigger: item,
      start: "center 30%",
      end: "center 5%",
      scrub: true,
      // markers:true,
      toggleActions: "restart none none none",
    }
  });
  if(index !== 0) {
    gsap.fromTo(item,{
      opacity: 0,
      scale:1,
    }, {
      opacity: 1,
      scale:2,
      duration: 4,
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        end: "center 60%",
        scrub: true,
        // markers: {endColor: "blue", startColor: "orange"},
        toggleActions: "restart none none none",
      }
    });
  }
})

const lastItem = document.querySelector('.item:last-child')
ScrollTrigger.create({
  trigger: "#ProjectTimelineBorder",  // divider triggers itself
  start: "center center",             // fires when divider center hits screen center
  endTrigger: lastItem,
  end: "center center",
  pin: "#ProjectTimelineBorder",
  pinSpacing: false,
  // markers: true
})

const border = document.getElementById('ProjectTimelineBorder');
const itemsContainer = document.querySelector('.items');
const firstItem = document.querySelector('.item');

function alignFirstItem() {
  // Divider center = its top position + half its height
  const dividerCenter = border.offsetTop + (border.offsetHeight / 2);
  // First item needs its center at that same point
  const firstItemHalfHeight = firstItem.offsetHeight / 2;

  itemsContainer.style.paddingTop = (dividerCenter - firstItemHalfHeight) + 'px';
}

alignFirstItem();

// Recalculate if window resizes
window.addEventListener('resize', () => {
  alignFirstItem();
  ScrollTrigger.refresh();
});
