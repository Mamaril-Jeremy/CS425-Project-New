import{a3 as h}from"./scheduler.b03a764b.js";function f(t){const o=t-1;return o*o*o+1}function v(t){return--t*t*t*t*t+1}function x(t,{delay:o=0,duration:p=400,easing:s=h}={}){const i=+getComputedStyle(t).opacity;return{delay:o,duration:p,easing:s,css:a=>`opacity: ${a*i}`}}function F(t,{delay:o=0,duration:p=400,easing:s=f,axis:i="y"}={}){const a=getComputedStyle(t),c=+a.opacity,d=i==="y"?"height":"width",$=parseFloat(a[d]),e=i==="y"?["top","bottom"]:["left","right"],n=e.map(r=>`${r[0].toUpperCase()}${r.slice(1)}`),l=parseFloat(a[`padding${n[0]}`]),u=parseFloat(a[`padding${n[1]}`]),_=parseFloat(a[`margin${n[0]}`]),y=parseFloat(a[`margin${n[1]}`]),g=parseFloat(a[`border${n[0]}Width`]),m=parseFloat(a[`border${n[1]}Width`]);return{delay:o,duration:p,easing:s,css:r=>`overflow: hidden;opacity: ${Math.min(r*20,1)*c};${d}: ${r*$}px;padding-${e[0]}: ${r*l}px;padding-${e[1]}: ${r*u}px;margin-${e[0]}: ${r*_}px;margin-${e[1]}: ${r*y}px;border-${e[0]}-width: ${r*g}px;border-${e[1]}-width: ${r*m}px;`}}export{x as f,v as q,F as s};
