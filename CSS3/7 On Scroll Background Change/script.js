var tl = gsap.timeline({scrollTrigger:{
    trigger:'#one',
    markers:true,
    start:'50% 0%',
    end:'55% 0%',
    scrub:1,
    duration:1
}
})

tl.to('#main',{
    backgroundColor:'#55334A',
})

var tl2 = gsap.timeline({scrollTrigger:{
    trigger:'#two',
    markers:true,
    start:'70% 0%',
    end:'75% 0%',
    scrub:1,
    duration:1

}
})

tl2.to('#main',{
    backgroundColor:'#242E24'
})