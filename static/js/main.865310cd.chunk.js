(this.webpackJsonpflashtype=this.webpackJsonpflashtype||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),r=a(5),c=a.n(r),i=a(4),l=a(9),o=a(6),d=a(7),h=a(11),j=a(10),m=(a(16),a.p+"static/media/logo.904ac8fd.png"),p=(a(17),a(0));var b=function(){return Object(p.jsx)("div",{className:"nav-container",children:Object(p.jsxs)("div",{className:"nav-left",children:[Object(p.jsx)("img",{className:"flash-logo",src:m,alt:"logo"}),Object(p.jsx)("p",{class:"flash-logo-text",children:"Flashtype"})]})})},u=(a(19),a.p+"static/media/hero.96e141d3.png"),g=a(8),f=a.n(g);var x=function(){return Object(p.jsxs)("div",{className:"landing-container",children:[Object(p.jsxs)("div",{"data-aos":"fade-right",class:"landing-left",children:[Object(p.jsx)("h1",{className:"landing-header",children:"Can you type..."}),Object(p.jsx)("div",{class:"typewriter-container",children:Object(p.jsx)(f.a,{options:{strings:["Fast ?","Correct ?","Quick ?"],autoStart:!0,loop:!0}})})]}),Object(p.jsx)("div",{"data-aos":"fade-left",class:"landing-right",children:Object(p.jsx)("img",{className:"hero-image",src:u,alt:"flash"})})]})},O=a(2);a(20);var v=function(){return Object(p.jsx)("div",{className:"main-footer",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col",children:[Object(p.jsx)("h3",{className:"col-sm ",children:"Contact Priyank Agarwal at:"}),Object(p.jsxs)("div",{className:"contact_details",children:[Object(p.jsx)("p",{className:"each_detail",children:Object(p.jsx)("a",{href:"https://www.linkedin.com/in/priyank-agarwal-iiita/",target:"_blank",className:"display_contact",rel:"noopener noreferrer",title:"Click to open LinkedIn",children:Object(p.jsx)(O.d,{})})}),Object(p.jsx)("p",{className:"each_detail",children:Object(p.jsx)("a",{href:"https://github.com/priyank-ayron/",target:"_blank",className:"display_contact",rel:"noopener noreferrer",title:"Click to open Github",children:Object(p.jsx)(O.c,{})})}),Object(p.jsx)("p",{className:"each_detail",children:Object(p.jsx)("a",{href:"https://www.facebook.com/priyank.agarwal.731/",target:"_blank",className:"display_contact",rel:"noopener noreferrer",title:"Click to open facebook",children:Object(p.jsx)(O.b,{})})}),Object(p.jsx)("li",{className:"display_contact",children:Object(p.jsx)("a",{href:"tel:+91-6386947948",target:"_blank",className:"display_contact",rel:"noopener noreferrer",title:"+91-6386947948",children:Object(p.jsx)(O.e,{})})}),Object(p.jsx)("li",{className:"display_contact",children:Object(p.jsx)("a",{href:"mailto:priyank.ayron@gmail.com",target:"_blank",className:"display_contact",rel:"noopener noreferrer",title:"priyank.ayron@gmail.com",children:Object(p.jsx)(O.a,{})})})]})]})})})})};a(21);var w=function(t){var e=t.words,a=t.characters,n=t.wpm,s=t.startAgain,r="https://www.linkedin.com/in/priyank-agarwal-iiita/";return Object(p.jsxs)("div",{className:"try-again-container",children:[Object(p.jsx)("h1",{children:"Test Results"}),Object(p.jsxs)("div",{class:"result-container",children:[Object(p.jsx)("p",{children:Object(p.jsxs)("b",{children:["Characters: ",a]})}),Object(p.jsx)("p",{children:Object(p.jsxs)("b",{children:["Words: ",e]})}),Object(p.jsx)("p",{children:Object(p.jsxs)("b",{children:["WPM: ",n]})})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{onClick:function(){return s()},className:"start-again-btn end-buttons",children:"Re-try"}),Object(p.jsx)("button",{onClick:function(){return window.open("https://www.facebook.com/sharer/sharer.php?u="+r,"facebook-share-dialog","width=800,height=600")},className:"end-buttons share-btn",children:"Share"}),Object(p.jsx)("button",{onClick:function(){return window.open("https://twitter.com/intent/tweet?text=Check%20this%20out%20"+r,"Twitter","width=800,height=600")},className:"end-buttons tweet-btn",children:"Tweet"})]})]})};a(22);var N=function(t){var e=t.cardName,a=t.cardValue;return Object(p.jsxs)("div",{className:"details-card-container",children:[Object(p.jsx)("div",{className:"card-name",children:e}),Object(p.jsx)("div",{className:"card-value",children:a})]})};a(23);var y=function(t){var e=t.individualLetterInfo,a={correct:"test-letter-correct",incorrect:"test-letter-incorrect",notAttempted:"test-letter-not-attempted"}[e.status];return Object(p.jsx)("span",{className:"test-letter ".concat(a),children:e.testLetter})};a(24);var I=function(t){var e=t.timeRemaining,a=t.timeStarted,n=t.testInfo,s=t.onInputChange;return Object(p.jsxs)("div",{className:"typing-challenge",children:[Object(p.jsxs)("div",{class:"timer-container",children:[Object(p.jsxs)("div",{class:"timer",children:["00:",e>=10?e:"0".concat(e)]}),a?Object(p.jsx)("div",{className:"timer-info"}):Object(p.jsx)("div",{class:"timer-info",children:"Start typing to start the test."})]}),Object(p.jsxs)("div",{class:"textarea-container",children:[Object(p.jsx)("div",{class:"textarea-left",children:Object(p.jsx)("div",{class:"textarea test-paragraph",children:n.map((function(t,e){return Object(p.jsx)(y,{individualLetterInfo:t},e)}))})}),Object(p.jsx)("div",{class:"textarea-right",children:Object(p.jsx)("textarea",{class:"textarea",placeholder:"Start typing here",onChange:function(t){s(t.target.value)}})})]})]})};a(25);var k=function(t){var e=t.timeRemaining,a=t.timeStarted,n=t.selectedParagraph,s=t.words,r=t.characters,c=t.wpm,i=t.testInfo,l=t.onInputChange;return Object(p.jsxs)("div",{className:"typing-challenge-container",children:[Object(p.jsxs)("div",{class:"details-container",children:[Object(p.jsx)(N,{cardName:"Words",cardValue:s}),Object(p.jsx)(N,{cardName:"Characters",cardValue:r}),Object(p.jsx)(N,{cardName:"WPM",cardValue:c})]}),Object(p.jsx)("div",{className:"typewriter-challenge",children:Object(p.jsx)(I,{timeRemaining:e,timeStarted:a,selectedParagraph:n,testInfo:i,onInputChange:l})})]})};a(26);var S=function(t){var e=t.timeRemaining,a=t.timeStarted,n=t.selectedParagraph,s=t.words,r=t.characters,c=t.wpm,i=t.testInfo,l=t.onInputChange,o=t.startAgain;return Object(p.jsx)("div",{className:"test-container",children:e>0?Object(p.jsx)("div",{"data-aos":"fade-up",className:"typing-challenge-container",children:Object(p.jsx)(k,{timeRemaining:e,timeStarted:a,selectedParagraph:n,words:s,characters:r,wpm:c,testInfo:i,onInputChange:l})}):Object(p.jsx)("div",{className:"try-again-container",children:Object(p.jsx)(w,{words:s,characters:r,wpm:c,startAgain:o})})})};a(27);var C=function(t){var e=t.timeRemaining,a=t.timeStarted,n=t.selectedParagraph,s=t.words,r=t.characters,c=t.wpm,i=t.testInfo,l=t.onInputChange,o=t.startAgain;return Object(p.jsx)("div",{className:"challenge-section-container",children:Object(p.jsxs)("div",{"data-aos":"fade-down",className:"challenge-section-header",children:[Object(p.jsx)("h1",{children:"Take a speed test now!!!"}),Object(p.jsx)(S,{timeRemaining:e,timeStarted:a,selectedParagraph:n,words:s,characters:r,wpm:c,testInfo:i,onInputChange:l,startAgain:o})]})})},P="https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=text",R={selectedParagraph:"",testInfo:[],timerStarted:!1,timeRemaining:60,words:0,characters:0,wpm:0},_=function(t){Object(h.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state=R,t.handleUserInput=function(e){t.state.timeStarted||t.startTimer();var a=e.length,n=e.split(" ").length,s=a-1;if(s<0)t.setState({testInfo:[{testLetter:t.state.testInfo[0].testLetter,status:"notAttempted"}].concat(Object(l.a)(t.state.testInfo.slice(1))),characters:a,words:n});else if(s>=t.state.selectedParagraph.length)t.setState({characters:a,words:n});else{var r=t.state.testInfo;s!==t.state.selectedParagraph.length-1&&(r[s+1].status="notAttempted");var c=e[s]===r[s].testLetter;r[s].status=c?"correct":"incorrect",t.setState({testInfo:r,words:n,characters:a})}},t.startAgain=function(){t.fetchNewParagraph()},t.startTimer=function(){t.setState({setTimeStarted:!0});var e=setInterval((function(){if(t.state.timeRemaining>0){var a=60-t.state.timeRemaining,n=a>0?t.state.words/a*60:0;t.setState({timeRemaining:t.state.timeRemaining-1,wpm:parseInt(n)})}else clearInterval(e)}),1e3)},t.fetchNewParagraph=function(){fetch(P).then((function(t){return t.text()})).then((function(e){t.setState({setSelectedParagraph:e});var a=e.split("").map((function(t){return{testLetter:t,status:"notAttempted"}}));t.setState(Object(i.a)(Object(i.a)({},R),{},{testInfo:a,selectedParagraph:e}))}))},t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchNewParagraph()}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)(b,{}),Object(p.jsx)(x,{}),Object(p.jsx)(v,{}),Object(p.jsx)(C,{selectedParagraph:this.state.selectedParagraph,timeStarted:this.state.timeStarted,timeRemaining:this.state.timeRemaining,words:this.state.words,characters:this.state.characters,wpm:this.state.wpm,testInfo:this.state.testInfo,onInputChange:this.handleUserInput,startAgain:this.startAgain})]})}}]),a}(s.a.Component);c.a.render(Object(p.jsx)(_,{}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.865310cd.chunk.js.map