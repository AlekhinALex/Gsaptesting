'use strict'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
if(ScrollTrigger.isTouch != 1){
    ScrollSmoother.create({
        wrapper:'.wrapper',
        content:'.content',
        smooth:1.6,
        effects:true,
    })

    gsap.fromTo('.main-header',{opacity: 1},{
        opacity: 0,
        scrollTrigger:{ 
            trigger:'.main-header',
            start:"center",
            end:"900",
            scrub:true
    }
    })
    gsap.fromTo('.main-tittle',{opacity: 1},{
        opacity: 0,
        scrollTrigger:{ 
            trigger:'.main-tittle',
            start:"center",
            end:"900",
            scrub:true
    }
    })
    
    let itemsL = document.querySelectorAll('.gallery__left .gallery__item')
    itemsL.forEach(item => {
        gsap.fromTo(item,{x: -90,opacity: 0},{
            opacity:1,
            x:0,
            scrollTrigger:{
                trigger:item,
                start:'-1000',
                end:'-100',
                scrub:true
        }
        })
    })

    let itemsR = document.querySelectorAll('.gallery__right .gallery__item')
    itemsR.forEach(item => {
        gsap.fromTo(item,{x: 90,opacity: 0},{
            opacity:1,
            x:0,
            scrollTrigger:{
                trigger:item,
                start:'-1000',
                end:'-100',
                scrub:true
        }
        })
    })

    let itemC = document.querySelectorAll(".circle");
    itemC.forEach(item => {
        gsap.fromTo(item,{y:-30,opacity:0},{
            opacity:1,
            y:0,
            scrollTrigger:{
                trigger:"..circle2",
                start:center,
                end:bottom,
                scrub:true
            }
        })
    })
    let itemC2 = document.querySelectorAll(".circle2");
    itemC.forEach(item => {
        gsap.fromTo(item,{y:30,opacity:0},{
            opacity:1,
            y:0,
            scrollTrigger:{
                trigger:"..circle2",
                start:center,
                end:bottom,
                scrub:true
            }
        })
    })

    let itemStyleL = document.querySelectorAll(".style_gallery__left .style_gallery__item");
    console.log(itemStyleL)
    console.log(itemStyleL)
    itemStyleL.forEach(item =>{
        gsap.fromTo(item,{x: 120,opacity: 0},{
            opacity:1,
            x:0,
            scrollTrigger:{
                trigger:item,
                start:'-1110',
                end:'-100',
                scrub:true
        }
        })
    })
    let itemStyleR = document.querySelectorAll(".style_gallery__right .style_gallery__item");
    itemStyleR.forEach(item =>{
        gsap.fromTo(item,{x: -120,opacity: 0},{
            opacity:1,
            x:0,
            scrollTrigger:{
                trigger:item,
                start:'-1110',
                end:'-100',
                scrub:true
        }
        })
    })
}
let circleNumber;
console.log(window.innerWidth);
if(window.innerWidth <= 1920 ){
    circleNumber = 10;
}
else if(window.innerWidth  < 2400 ){
    circleNumber = 14;
}
else if(window.innerWidth > 2400){
    circleNumber = 21;
}

for(let i=0;i<circleNumber;++i){
    let item = document.createElement('div');
    item.setAttribute("class","circle");
    circleWrapper.appendChild(item);
}
for(let i=0;i<circleNumber;++i){
    let item = document.createElement('div');
    item.setAttribute("class","circle2");
    circleWrapper2.appendChild(item);
}


let circles = document.querySelectorAll('.circle');
let circlesPosition = [];
for(let i=0;i<circles.length;++i){
    circlesPosition[i] = true;
}
for(let i =0; i< circles.length; ++i){
    circles[i].style.transition = `${1 + i*.15}s`;
    let timer = setInterval(function(){
       if(circlesPosition[i]){
            circlesPosition[i] = 0;
            circles[i].style.transform = 'translate(0,22px)';
            circles[i].style. opacity = '1';
            circles[i].style.scale = '1';
            circles[i].style.backgroundColor = 'turquoise';
       }
       else{
            circlesPosition[i] = 1;
            circles[i].style.transform = 'translate(0,-22px)'
            circles[i].style.opacity = '.5';
            circles[i].style.scale = '.4';
            circles[i].style.backgroundColor = 'white';
       }
    },2000)
}
let circles2 = document.querySelectorAll('.circle2');
let circles2Position = [];
for(let i=0;i<circles.length;++i){
    circlesPosition[i] = true;
}


console.log(circles2)
for(let i =0; i< circles2.length; ++i){
    circles2[i].style.transition = `${1 + i*.15}s`;
    let timer2 = setInterval(function(){
       if(circles2Position[i]){
            circles2Position[i] = 0;
            circles2[i].style.transform = 'translate(0,22px)';
            circles2[i].style. opacity = '1';
            circles2[i].style.scale = '1';
            circles2[i].style.backgroundColor = 'turquoise';
       }
       else{
            circles2Position[i] = 1;
            circles2[i].style.transform = 'translate(0,-22px)'
            circles2[i].style.opacity = '.5';
            circles2[i].style.scale = '.4';
            circles2[i].style.backgroundColor = 'white';
       }
    },2000)
}





// window.addEventListener('resize', function(){
//     for(let i=0;i<circles.length;++i){
//        circles[i].remove();
//     }
//     for(let i=0;i<circles2.length;++i){
//        circles2[i].remove();
//     }
//     console.log(window.innerWidth);
//     if(window.innerWidth <= 1920 ){
//         circleNumber = 10;
//     }
//     else if(window.innerWidth  < 2400 ){
//         circleNumber = 14;
//     }
//     else if(window.innerWidth > 2400){
//         circleNumber = 21;
//     }
    
//     for(let i=0;i<circleNumber;++i){
//         let item = document.createElement('div');
//         item.setAttribute("class","circle");
//         circleWrapper.appendChild(item);
//     }
//     for(let i=0;i<circleNumber;++i){
//         let item = document.createElement('div');
//         item.setAttribute("class","circle2");
//         circleWrapper2.appendChild(item);
//     }
    
    
//     let circles = document.querySelectorAll('.circle');
//     let circlesPosition = [];
//     for(let i=0;i<circles.length;++i){
//         circlesPosition[i] = true;
//     }
//     for(let i =0; i< circles.length; ++i){
//         circles[i].style.transition = `${1 + i*.15}s`;
//         let timer = setInterval(function(){
//            if(circlesPosition[i]){
//                 circlesPosition[i] = 0;
//                 circles[i].style.transform = 'translate(0,22px)';
//                 circles[i].style. opacity = '1';
//                 circles[i].style.scale = '1';
//                 circles[i].style.backgroundColor = 'turquoise';
//            }
//            else{
//                 circlesPosition[i] = 1;
//                 circles[i].style.transform = 'translate(0,-22px)'
//                 circles[i].style.opacity = '.5';
//                 circles[i].style.scale = '.4';
//                 circles[i].style.backgroundColor = 'white';
//            }
//         },2000)
//     }
//     let circles2 = document.querySelectorAll('.circle2');
//     let circles2Position = [];
//     for(let i=0;i<circles.length;++i){
//         circlesPosition[i] = true;
//     }
    
    
//     console.log(circles2)
//     for(let i =0; i< circles2.length; ++i){
//         circles2[i].style.transition = `${1 + i*.15}s`;
//         let timer2 = setInterval(function(){
//            if(circles2Position[i]){
//                 circles2Position[i] = 0;
//                 circles2[i].style.transform = 'translate(0,22px)';
//                 circles2[i].style. opacity = '1';
//                 circles2[i].style.scale = '1';
//                 circles2[i].style.backgroundColor = 'turquoise';
//            }
//            else{
//                 circles2Position[i] = 1;
//                 circles2[i].style.transform = 'translate(0,-22px)'
//                 circles2[i].style.opacity = '.5';
//                 circles2[i].style.scale = '.4';
//                 circles2[i].style.backgroundColor = 'white';
//            }
//         },2000)
//     }
    
// })