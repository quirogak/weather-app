(()=>{const t={assignData:async e=>{try{const t=await(async e=>{const t=await(async e=>{const t="https://api.openweathermap.org/data/2.5/weather?q="+e+"&APPID=b6e2e1fb6cdedd11a6bcd01984a7cc13&units=metric";try{const e=await fetch(t,{mode:"cors"}),n=await e.json();return await n}catch(e){return console.log("please put a valid search value")}})(e);return{weatherDetails:await t.weather[0],mainDetails:await t.main,locationName:await t.name,fetchedData:t}})(e),a=t.locationName,c=t.mainDetails.temp,i=t.mainDetails.temp_min,s=t.mainDetails.temp_max,o=t.mainDetails.humidity,l=t.weatherDetails.description,r=l.charAt(0).toUpperCase()+l.slice(1),d="http://openweathermap.org/img/wn/"+t.weatherDetails.icon+"@2x.png";n.genWeatherBox(a,c,i,s,o,r,d)}catch(e){return}}},n={genWeatherBox:(e,t,n,a,c,i,s)=>{const o=document.querySelector(".weather-container");if(null==o){const o=document.querySelector("main"),l=document.createElement("section");l.classList="weather-container",o.appendChild(l);const r=document.createElement("div");r.classList="first-container",l.appendChild(r);const d=document.createElement("div");d.classList="second-container",l.appendChild(d);const m=document.createElement("section");r.appendChild(m);const p=document.createElement("section");r.appendChild(p);const h=document.createElement("h2");h.classList="temp-title",m.appendChild(h),h.textContent=t+"°";const u=document.createElement("h2");u.classList="location-title",m.appendChild(u),u.textContent=e;const C=document.createElement("h3");C.classList="max-temp-title",p.appendChild(C),C.textContent="Max: "+a;const w=document.createElement("h3");w.classList="min-temp-title",p.appendChild(w),w.textContent="Min: "+n;const v=document.createElement("section");v.classList="second-half-section",d.appendChild(v);const E=document.createElement("img");E.classList="weather-img",v.appendChild(E),E.src=s;const y=document.createElement("h2");y.classList="weather-desc",v.appendChild(y),y.textContent=i;const L=document.createElement("section");L.classList="second-half-section",d.appendChild(L);const x=document.createElement("h2");x.classList="weather-hum",L.appendChild(x),x.textContent="Humidity  "+c+"%"}else o.remove(),document.querySelector("button").click()}};(()=>{const n=document.querySelector("button"),a=document.getElementById("location"),c=document.querySelector("form"),i=()=>{const e=document.querySelector("#location + span.error");a.validity.valueMissing||a.validity.tooShort||!/^([^0-9]*)$/.test(a.value)?(e.textContent="Please enter a location",e.className="error active"):a.validity.valid&&(e.textContent="",e.className="error")},s=()=>{a.validity.valid||e.preventDefault()};n.addEventListener("click",(()=>{t.assignData(a.value)})),a.addEventListener("input",i),a.addEventListener("blur",i),c.addEventListener("submit",(e=>{s()}))})()})();