(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/main-logo.dfe0d73a.png"},25:function(e,t,a){e.exports=a(36)},30:function(e,t,a){},31:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),i=a.n(r),s=(a(30),a(31),a(6)),c=a(5),o=a(24),u=a(9),m=a(10),d=a(12),h=a(11),f=a(13),p=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={existingArray:[7e3,7001,7002,7003,7004,7005],finalArray:[],duplicatesArray:[],userValues:[]},a.filterRange=function(){var e=document.getElementById("range").value.trim(),t=[],n=[];if(""!==e){var l=e.split(",");a.setState({userValues:e.split(",")}),l.forEach(function(e){if(-1===e.indexOf("-"))-1===a.state.existingArray.indexOf(Number(e))?a.addToFinalArray(t,Number(e)):a.addToDuplicatesArray(n,Number(e));else for(var l=e.split("-")[0],r=e.split("-")[1],i=l;i<=r;i++)-1===a.state.existingArray.indexOf(Number(i))?a.addToFinalArray(t,Number(i)):a.addToDuplicatesArray(n,Number(i))}),a.setState({finalArray:t,duplicatesArray:n})}},a.allowNumerals=function(e){/[0-9,\s-]/.test(e.key)||e.preventDefault()},a.addToFinalArray=function(e,t){-1===e.indexOf(t)&&e.push(t)},a.addToDuplicatesArray=function(e,t){-1===e.indexOf(t)&&e.push(t)},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-1"},l.a.createElement("nav",{className:"nav-1"},l.a.createElement(s.b,{to:"/",className:"nav-link"}," ",l.a.createElement("span",null,"\u2190")," Go Back")),l.a.createElement("main",null,l.a.createElement("div",{className:"card"},l.a.createElement("h3",null," Problem Statement"),l.a.createElement("p",null,"Create a text input that accepts single, multiple and even a range of numbers and matches the entered numbers with an already existing array and shows the duplicates, if any, and the final list of unique numbers."),l.a.createElement("p",null,"Eg inputs -> 7000, 6000, 8000-8005."),l.a.createElement("p",null,"If a range is entered, or multiple ranges are entered, all the numbers falling between that range/those ranges have to be considered, matched and displayed."),l.a.createElement("p",null,"So to sum it up, if I have an existing array of [7000,7001,7002,7003,7004,7005] in the script and in the text input I enter 6998-7003, I should be notified that 7000, 7001, 7002, 7003 are duplicates and will be skipped, with the final list of new additions (2 in this case).")),l.a.createElement("div",{className:"solution"},l.a.createElement("input",{type:"text",name:"range",id:"range",onKeyPress:this.allowNumerals}),l.a.createElement("button",{onClick:this.filterRange},"Filter"),this.state.userValues.length>0&&l.a.createElement("div",null,"Existing Values: ",this.state.existingArray.join(", ")),this.state.userValues.length>0&&l.a.createElement("div",null,"Newly added Values:"," ",this.state.finalArray.length>0?this.state.finalArray.join(", "):"No Unique Values found"," "),this.state.userValues.length>0&&l.a.createElement("div",null,"Duplicate Values:"," ",this.state.duplicatesArray.length>0?this.state.duplicatesArray.join(", "):"No Duplicate Values found"),this.state.userValues.length>0&&l.a.createElement("div",null,"Final Unique Values:"," ",this.state.finalArray.length>0?[].concat(Object(o.a)(this.state.existingArray),[this.state.finalArray]).join(", "):"No Unique Values found"," "))))}}]),t}(l.a.Component),g=a(23),E=a.n(g),v=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).componentDidMount=function(){console.log(1),fetch("http://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs").then(function(e){return e.json()}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-2"},l.a.createElement("nav",null,l.a.createElement("img",{src:E.a,height:"40px",width:"150px",alt:"logo"}),l.a.createElement("div",{className:"nav-left"},l.a.createElement("button",{className:"green-btn"},"COMING SOON"),l.a.createElement("button",{className:"gray-btn"},"NOW SHOWING")),l.a.createElement("div",{className:"nav-right"},l.a.createElement("button",null,"Popular ",l.a.createElement("i",{className:"fas fa-chevron-down"})),l.a.createElement("button",null,"English ",l.a.createElement("i",{className:"fas fa-chevron-down"})),l.a.createElement("button",null,"All Genres ",l.a.createElement("i",{className:"fas fa-chevron-down"}))),l.a.createElement("i",{className:"fas fa-times"})),l.a.createElement("main",null,"This will be main content"))}}]),t}(l.a.Component);var y=function(){return l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.b,{to:"/assignment-1"},"Go to Assignment 1")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/assignment-2"},"Go to Assignment 2"))))};var b=function(){return l.a.createElement(s.a,null,l.a.createElement(c.c,null,l.a.createElement(c.a,{path:"/home",exact:!0,component:y}),l.a.createElement(c.a,{path:"/assignment-1",exact:!0,component:p}),l.a.createElement(c.a,{path:"/assignment-2",exact:!0,component:v}),l.a.createElement(c.a,{component:y})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.61d6bbf7.chunk.js.map