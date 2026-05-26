

gsap.to(".section",{
width:"20%",
height:"100vh",
backgroundColor:"white",
scrollTrigger:{
    trigger:".main",
    scroller:"body",
    markers:true,
    start:"-5% 0",
    end:"-5% 0%",
    scrub:5,
    pin:true,
}
})


gsap.to("img",{
    scale:0.8,
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        markers:true,
        start:"-4% 0",
        end:"-4% 0%",
        scrub:5,
        pin:true,
    }
    })

    gsap.from(".info",{
        y:200,
        opacity:0,
        scrollTrigger:{
            trigger:".info",
            scroller:"body",
            markers:true,
            start:"-20% 0",
            end:"-20% 0%",
           scrub:5,
            pin:true,
        }
        })

