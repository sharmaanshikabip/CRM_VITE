import{r as u,j as a}from"./index-d970708c.js";import{C as s}from"./auto-1f697c56.js";import{h as t}from"./chartjs-55811c8e.js";import{P as x}from"./PageBreadcrumb-5a2fb846.js";const e=["#3e60d5","#47ad77"],y={type:"bar",data:{labels:["Jan","Feb","March","April","May","June"],datasets:[{label:"Fully Rounded",data:[12,-19,14,-15,12,-14],borderColor:e[0],backgroundColor:t(e[0],.3),borderWidth:2,borderRadius:Number.MAX_VALUE,borderSkipped:!1},{label:"Small Radius",data:[-10,19,-15,-8,12,-7],backgroundColor:t(e[1],.3),borderColor:e[1],borderWidth:2,borderRadius:5,borderSkipped:!1}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1,position:"top"}},scales:{x:{grid:{display:!1}},y:{grid:{display:!1}}}}},f={type:"bar",data:{labels:["Jan","Feb","March","April","May","June"],datasets:[{label:"Fully Rounded",data:[12,-19,14,-15,12,-14],backgroundColor:e[0]},{label:"Small Radius",data:[-10,19,-15,-8,12,-7],backgroundColor:e[1]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1,position:"top"}},scales:{x:{grid:{display:!1}},y:{grid:{display:!1}}}}},k={type:"bar",data:{labels:["Jan","Feb","March","April"],datasets:[{label:"Fully Rounded",data:[12,-19,14,-15],borderColor:e[0],backgroundColor:t(e[0],.3),borderWidth:1},{label:"Small Radius",data:[-10,19,-15,-8],backgroundColor:t(e[1],.3),borderColor:e[1],borderWidth:1}]},options:{indexAxis:"y",responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1,position:"top"}},scales:{x:{grid:{display:!1}},y:{grid:{display:!1}}}}},j={type:"bar",data:{labels:["Jan","Feb","March","April"],datasets:[{label:"Dataset 1",data:[12,-19,14,-15],backgroundColor:e[0]},{label:"Dataset 2",data:[-10,19,-15,-8],backgroundColor:e[1]},{label:"Dataset 3",data:[-10,19,-15,-8],backgroundColor:e[2]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1,position:"top"}},scales:{x:{stacked:!0,grid:{display:!1}},y:{stacked:!0,grid:{display:!1}}}}},v={type:"bar",data:{labels:["Jan","Feb","March","April"],datasets:[{label:"Dataset 1",data:[12,-19,14,-15],backgroundColor:e[0],stack:"Stack 0"},{label:"Dataset 2",data:[-10,19,-15,-8],backgroundColor:e[1],stack:"Stack 0"},{label:"Dataset 3",data:[-10,19,-15,-8],backgroundColor:e[2],stack:"Stack 1"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1,position:"top"}},scales:{x:{stacked:!0,grid:{display:!1}},y:{stacked:!0,grid:{display:!1}}}}},C={type:"bar",data:{labels:["Jan","Feb","March","April"],datasets:[{label:"Dataset 1",data:[12,-19,14,-15],backgroundColor:e[0]},{label:"Dataset 2",data:[-10,19,-15,-8],backgroundColor:e[1]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1,position:"top"}},scales:{x:{grid:{display:!1}},y:{grid:{display:!1}}}}},F=()=>(u.useEffect(()=>{const l=document.getElementById("border-radius-example"),d=new s(l,y),r=document.getElementById("floating-example"),o=new s(r,f),i=document.getElementById("horizontal-example"),c=new s(i,k),n=document.getElementById("stacked-example"),p=new s(n,j),m=document.getElementById("group-stack-example"),g=new s(m,v),b=document.getElementById("vertical-example"),h=new s(b,C);return()=>{d.destroy(),o.destroy(),c.destroy(),p.destroy(),g.destroy(),h.destroy()}}),a.jsxs(a.Fragment,{children:[a.jsx(x,{title:"Chartjs",subName:"Charts"}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[a.jsx("div",{className:"card",children:a.jsxs("div",{className:"p-6",children:[a.jsx("h4",{className:"card-title mb-4",children:"Border Radius"}),a.jsx("div",{className:"mt-3",style:{height:320},children:a.jsx("canvas",{id:"border-radius-example","data-colors":"#3e60d5,#47ad77"})})]})}),a.jsx("div",{className:"card",children:a.jsxs("div",{className:"p-6",children:[a.jsx("h4",{className:"card-title mb-4",children:"Floating"}),a.jsx("div",{className:"mt-3",style:{height:320},children:a.jsx("canvas",{id:"floating-example","data-colors":"#3e60d5,#47ad77"})})]})}),a.jsx("div",{className:"card",children:a.jsxs("div",{className:"p-6",children:[a.jsx("h4",{className:"card-title mb-4",children:"Horizontal"}),a.jsx("div",{className:"mt-3",style:{height:320},children:a.jsx("canvas",{id:"horizontal-example","data-colors":"#3e60d5,#47ad77"})})]})}),a.jsx("div",{className:"card",children:a.jsxs("div",{className:"p-6",children:[a.jsx("h4",{className:"card-title mb-4",children:"Stacked"}),a.jsx("div",{className:"mt-3",style:{height:320},children:a.jsx("canvas",{id:"stacked-example","data-colors":"#3e60d5,#47ad77"})})]})}),a.jsx("div",{className:"card",children:a.jsxs("div",{className:"p-6",children:[a.jsx("h4",{className:"card-title mb-4",children:"Stacked with Groups"}),a.jsx("div",{className:"mt-3",style:{height:320},children:a.jsx("canvas",{id:"group-stack-example","data-colors":"#3e60d5,#47ad77"})})]})}),a.jsx("div",{className:"card",children:a.jsxs("div",{className:"p-6",children:[a.jsx("h4",{className:"card-title mb-4",children:"Vertical"}),a.jsx("div",{className:"mt-3",style:{height:320},children:a.jsx("canvas",{id:"vertical-example","data-colors":"#3e60d5,#47ad77"})})]})})]})]}));export{F as default};
