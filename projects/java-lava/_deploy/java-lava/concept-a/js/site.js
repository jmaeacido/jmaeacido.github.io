/* Java Lava — Volcanic Cinematic · shared behavior */

/* fail-safe: if GSAP didn't load, reveal everything + drop loader */
setTimeout(function(){
  if(!window.gsap){
    document.querySelectorAll('.reveal,[data-hero]').forEach(function(e){e.style.opacity=1;e.style.transform='none';});
    var l=document.getElementById('loader'); if(l){l.style.display='none';}
    document.body.classList.remove('loading');
  }
}, 1200);

/* mobile drawer (works with or without GSAP) */
(function(){
  var btn=document.querySelector('.menu-btn'), drawer=document.getElementById('drawer');
  if(!btn||!drawer) return;
  function toggle(open){drawer.classList.toggle('open',open); document.body.style.overflow=open?'hidden':'';}
  btn.addEventListener('click',function(){toggle(!drawer.classList.contains('open'));});
  drawer.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){toggle(false);});});
})();

/* nav background on scroll (interior pages can force .solid in markup) */
(function(){
  var nav=document.querySelector('nav.site'); if(!nav) return;
  if(nav.classList.contains('solid')) return;
  var onScroll=function(){nav.classList.toggle('scrolled',window.scrollY>60);};
  window.addEventListener('scroll',onScroll); onScroll();
})();

if(window.gsap){
  gsap.registerPlugin(ScrollTrigger);

  /* native/instant scroll — smooth-scroll (Lenis) disabled for the snappiest feel,
     especially inside the Wix iframe. ScrollTrigger reveals/parallax still work on native scroll. */
  gsap.ticker.lagSmoothing(0);

  /* loader (only if present) */
  var loader=document.getElementById('loader');
  function intro(){
    var heroItems = gsap.utils.toArray('[data-hero]');
    if(!heroItems.length) return;
    gsap.from(heroItems,{y:40,autoAlpha:0,duration:1.1,ease:'power3.out',stagger:.14});
  }
  if(loader){
    window.addEventListener('load',function(){
      gsap.to('#loader .bar span',{width:'100%',duration:1,ease:'power2.inOut'});
      gsap.to('#loader',{autoAlpha:0,duration:.6,delay:1,onComplete:function(){
        loader.style.display='none'; document.body.classList.remove('loading'); intro();
      }});
    });
  } else { intro(); }

  /* parallax on any [data-parallax] background */
  gsap.utils.toArray('[data-parallax]').forEach(function(el){
    gsap.to(el,{yPercent:16,scale:1.08,ease:'none',
      scrollTrigger:{trigger:el.closest('.hero,.page-hero')||el,start:'top top',end:'bottom top',scrub:true}});
  });

  /* generic scroll reveals */
  gsap.utils.toArray('.reveal').forEach(function(el){
    gsap.to(el,{y:0,autoAlpha:1,duration:1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 86%'}});
  });

  /* flavor words pop */
  if(document.querySelector('.flavor .words')){
    gsap.from('.flavor .words div',{scale:.6,autoAlpha:0,stagger:.12,duration:.8,ease:'back.out(1.7)',
      scrollTrigger:{trigger:'.flavor',start:'top 72%'}});
  }
}
