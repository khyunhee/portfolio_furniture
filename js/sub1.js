
gsap.registerPlugin(ScrollTrigger);
 
    gsap.to(".animate-txt", {
        scrollTrigger: {
            trigger: ".animate-txt",
            scrub: true,
            start: "bottom 70%",
        },
        color: "#fff",
        duration: 1.5,
    });
    gsap.to(".animate-heading", {
        scrollTrigger: {
            trigger: ".hero_img",
            start: "top 20%",
            toggleClass: "active",
        },
        opacity: 0,
        y: -100,
        stagger: .3,
        duration: 1
    })

    gsap.from(".span_box span", {
        scrollTrigger: ".span_box span",
        y: -100, 
        stagger: .3
    });

    gsap.from(".animate-txt-2", {
        scrollTrigger: ".animate-txt-2",
        duration: .5,
        scrub: true,
        x: -100, 
        stagger: .3
    });

    gsap.from(".animate-txt-3", {
        scrollTrigger: ".animate-txt-3",
        duration: 2,
        scrub: true,
        y: -200, 
        stagger: .3
    });

    gsap.from(".animate-ending", {
        scrollTrigger: ".part4",
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "Expo.easeInOut"
    });
    gsap.from(".text_box", {
        scrollTrigger: ".part4",
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "Expo.easeInOut"
    });






    

    


