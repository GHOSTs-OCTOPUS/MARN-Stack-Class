
let nn = gsap.matchMedia();
nn.add("(min-width:700px)", () =>{
    gsap.to("img",{
        rotate:360,
        duration:1,
        y:540,
        x:-170,
        scale:0.8,
        scrollTrigger:{
         trigger:"img",
         scroller:"body",
         markers:true,
         start:"top 20%",
         end:"top 0%",
         scrub:10,
         
     }
     })
})

let mm = gsap.matchMedia();
mm.add("(max-width:600px)", () =>{
    gsap.to("img",{
        rotate:360,
        duration:1,
        y:530,
        x:5,
        scale:0.8,
        scrollTrigger:{
         trigger:"img",
         scroller:"body",
         markers:true,
         start:"top 20%",
         end:"top 0%",
         scrub:10,
         
     }
     })
})


gsap.from(".boxes",{
    opacity:0,
    x:-20,
    scrollTrigger:{
        trigger: ".cards" ,
        scroller:"body",
        markers:true,
        start:"-28% 0",
        end:"center -200%",
        stagger:{
            amount:1
        },
    }
  })


