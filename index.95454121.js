!function(){var e=document.querySelector(".burger"),t=document.querySelector(".mobile-menu"),n=document.querySelector("body"),c=document.querySelectorAll(".mobile-menu_link"),r=document.querySelectorAll(".services_link"),l=document.querySelector(".steps_controls--left"),o=document.querySelector(".steps_controls--right"),i=document.querySelector(".samples_controls--left"),s=document.querySelector(".samples_controls--right"),a=document.querySelectorAll(".controlBtn"),u=document.querySelector(".steps_list"),d=document.querySelector(".samples_list"),m=1,f=0,h=371,y=window.innerWidth;y>=1200&&(h=600);var v=1,g=0,L=345;function S(){t.classList.toggle("translateY0"),n.classList.toggle("noScroll")}r.forEach((function(e){e.addEventListener("click",(function(e){!function(e){e.currentTarget.children[0].classList.toggle("is-hidden"),e.currentTarget.children[1].classList.toggle("visible")}(e)}))})),o.addEventListener("click",(function(){u.classList.add("slide-right"),(m<5&&y<768||m<4&&y>=768||m<5&&y>=1200)&&(u.style.transform="translateX(".concat(f-h,"px)"),m+=1,f-=h)})),l.addEventListener("click",(function(){u.classList.add("slide-left"),m>1&&(u.style.transform="translateX(".concat(f+h,"px)"),m-=1,f+=h)})),s.addEventListener("click",(function(){v<2&&(d.style.transform="translateX(".concat(g-L,"px)"),v+=1,g-=L)})),i.addEventListener("click",(function(){v>1&&(d.style.transform="translateX(".concat(g+L,"px)"),v-=1,g+=L)})),e.addEventListener("click",S),c.forEach((function(e){e.addEventListener("click",S)})),a.forEach((function(e){e.addEventListener("click",(function(){e.children[0].children[1].attributes[1].value="white",setTimeout((function(){e.children[0].children[1].attributes[1].value="black"}),250),e.children[0].attributes[3].value="#67AEFC",setTimeout((function(){e.children[0].attributes[3].value="none"}),250)}))}))}();
//# sourceMappingURL=index.95454121.js.map
