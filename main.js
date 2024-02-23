let cursor = document.querySelector('#cursor');
let blur = document.querySelector('#cursor-blur');
document.addEventListener("mousemove",(dets) => {
       cursor.style.left = dets.x - 7 + "px"; 
       cursor.style.top = dets.y - 7 + "px"; 
       blur.style.left = dets.x - 100 + "px"; 
       blur.style.top = dets.y - 100 + "px"; 
})


let list = document.querySelectorAll("#nav>ul>li");
list.forEach((ele)=>{
        ele.addEventListener("mouseenter",()=>{
            cursor.style.cssText = `
                    scale:3; 
                    border: 1px solid #fff;
                    background: transparent;
                `;
        })
        ele.addEventListener("mouseleave",()=>{
            cursor.style.cssText = `
                    scale:1; 
                    border: none;
                    background: #96c11e90;
                `;
        })
})

// ----------- menu - bar -------------//

let closeBtn = document.getElementById("close-menu");
let navMenu = document.querySelector("#nav ul");

closeBtn.addEventListener("click",()=>{
    navMenu.classList.toggle("d-block");
})

gsap.from("#scroller-in h4",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#scroller-in",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:3,

    }
})

gsap.from(".card",{
    x:150,
    opacity:0,
    duaration:2,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#cards-container",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 50%",
        scrub:3,
    }
    
})

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duaration:2,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 48%",
        scrub:3,
    }
})

gsap.to("#nav",{
    background:"linear-gradient(to right bottom, #0d782b 10%,#769915)",
    duaration:0.5,
    height:"90px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    }
})

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

  gsap.from("#page4 h1",{
    y:80,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 85%",
        end:"top 75%",
        scrub:3,
    }
  })