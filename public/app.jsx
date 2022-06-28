const tl=gsap.timeline({defaults:{ease: 'power1.out'}});

tl.to('.text',{y:"0%", duration:1,stagger:0.30 })
tl.to('.slider',{y:"-100%",duration:2,delay:0.5})
tl.to('.intro',{y:"-100%",duration:1},"=-1.9");


