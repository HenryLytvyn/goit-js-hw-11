import{a as m,S as p,i as d}from"./assets/vendor-BjRz3xa9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="49626853-35a7cc777388834eb6e89d08d";function y(i){const s=new URLSearchParams({key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return m(`https://pixabay.com/api/?${s}`)}const l=document.querySelector(".gallery"),n=document.querySelector(".loader-js");function h(i){l.innerHTML=i.map(({webformatURL:s,largeImageURL:r,tags:a,likes:e,views:t,comments:o,downloads:f})=>`<li class="gallery-item">
  <a class="item-link" href="${r}">
    <img class="img" src="${s}" alt="${a}" />
    <ul class="statistic-list">
      <li class="statistic-item">
        <p class="statistic-text">Likes</p>
        <p class="statistic-value">${e}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Views</p>
        <p class="statistic-value">${t}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Comments</p>
        <p class="statistic-value">${o}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Downloads</p>
        <p class="statistic-value">${f}</p>
      </li>
    </ul></a
  >
</li>`).join(""),new p(".gallery li a",{captionsData:"alt",captionDelay:250}).refresh()}function L(){l.innerHTML=""}function v(){n.classList.add("loader")}function c(){n.classList.remove("loader")}const u=document.querySelector(".form");u.addEventListener("submit",b);function b(i){i.preventDefault(),v();const s=i.target.elements.text.value.trim();s&&(y(s).then(r=>{const a=r.data.hits;if(!a.length){d.show({iconUrl:"./img/error.svg",iconColor:"#ffffff",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#B51B1B",messageColor:"#ffffff"}),L(),c();return}h(a),c()}).catch(r=>console.log(r.message)),u.reset())}
//# sourceMappingURL=index.js.map
