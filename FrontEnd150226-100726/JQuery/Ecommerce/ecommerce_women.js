
gsap.to(".img1",{
    width:"100%",
    height:"300vh",
    marginTop:"-45%",
    scrollTrigger:{
        trigger:".header",
        scroller:"body",
        markers:true,
        start:"1% 0",
        end:"bottom 0%",
        scrub:5,
        pin:true,
    }
    })
    gsap.to(".info",{
        opacity:1,
         scrollTrigger:{
             trigger:".header",
             scroller:"body",
             markers:true,
             start:"10px 0%",
             end:"1% 0%",
            scrub:5,
           
         }
         })

    gsap.to(".img2,.img3",{
       x:900,
        scrollTrigger:{
            trigger:".header",
            scroller:"body",
            markers:true,
            start:"1% 0",
            end:"15% 0%",
           scrub:2,
          
        }
        })
     








