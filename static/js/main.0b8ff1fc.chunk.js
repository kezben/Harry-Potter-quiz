(this["webpackJsonphp-app"]=this["webpackJsonphp-app"]||[]).push([[0],{62:function(e,t,n){e.exports=n(71)},67:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),s=n.n(o),i=(n(67),n(45)),l=n(46),c=n(49),u=n(48),d=[{id:0,question:"What is Lord Voldemort's real name?",options:["Type your answer..."],answer:"Tom Marvolo Riddle"},{id:1,question:"What's the LAST line of the book, \"Harry Potter and the Sorcerer's Stone\"?",options:['"Goodbye, for now, Hogwarts."','"Harry, Ron, and Hermione looked at each other sheepishly and smiled."','"I\'m going to have a lot of fun with Dudley this summer..."',"\"'Until the fall', said Dumbledore with a nod.\""],answer:'"I\'m going to have a lot of fun with Dudley this summer..."'},{id:2,question:"According to the Dursleys, did Harry\u2019s parents die in a car crash?",options:["True","False"],answer:"True"},{id:3,question:"What are the houses in Hogwarts?",options:["Gryffindor","Whitehouse","Ravenclaw","Hufflepuff","Greenhouse","Slytherin"],answer:["Gryffindor","Ravenclaw","Hufflepuff","Slytherin"]},{id:4,question:"How old is Harry Potter in book 1 \u201cHarry Potter and the Sorcerer's Stone\u201d?",options:["11","A2","A4","A5"],answer:"11"}],m=n(119),f=n(122),h=n(115),p=n(124),y=n(123),E=n(125),w=n(114),g=n(120),b=n(121),v=n(117),H=n(116),k=n(72),A=n(126),C=n(118),S=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={currentQuestion:0,userAnswer:"",numberOfAnswers:0,score:0,disabled:!0,isEnd:!1,ans:""},e.finishHandler=function(){e.setState({isEnd:!0})},e.firstHandler=function(){e.state.userAnswer.value===d[0].answer&&(e.state.score+=1,e.state.userAnswer="")},e.secondHandler=function(t){JSON.stringify(t).includes(JSON.stringify(d[1].answer))&&(e.state.score+=1)},e.thirdHandler=function(t){e.state.userAnswer=JSON.stringify(t).slice(11,-2),console.log(d[2].answer),e.state.userAnswer===d[2].answer&&(e.state.score+=1,e.state.userAnswer="")},e.fourthHandler=function(t){e.state.ans=t,console.log(e.state.ans)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t={backgroundColor:"#73C2FB",color:"#ffffff",margin:"10px",marginBottom:"90px"};return this.state.isEnd?r.a.createElement("div",{className:"result"},r.a.createElement("h3",null,"You have answered ",this.state.score," out of ",d.length," correctly! ")):r.a.createElement("div",null,r.a.createElement("p",null,"Q",d[0].id+1),r.a.createElement("h1",null,d[0].question),r.a.createElement(f.a,{style:{marginBottom:"90px"},label:d[0].options,inputRef:function(t){e.state.userAnswer=t},onChange:this.firstHandler}),r.a.createElement("p",null,"Q",d[1].id+1),r.a.createElement("h1",null,d[1].question),r.a.createElement(p.a,{exclusive:!0},d[1].options.map((function(n){return r.a.createElement(h.a,{key:n,value:n,style:t,variant:"contained",onClick:e.secondHandler.bind(e,{option:n})},n)}))),r.a.createElement("p",null,"Q",d[2].id+1),r.a.createElement("h1",null,d[2].question),r.a.createElement(w.a,{style:{width:"25%",backgroundColor:"#ffffff",marginBottom:"90px"}},r.a.createElement(y.a,null,"Choose an answer"),r.a.createElement(g.a,{style:{padding:"10px"}},d[2].options.map((function(t){return r.a.createElement(E.a,{key:t,value:t,onClick:e.thirdHandler.bind(e,{option:t})},t)})))),r.a.createElement("p",null,"Q",d[3].id+1),r.a.createElement("h1",null,d[3].question),r.a.createElement(H.a,{style:{display:"grid",justifyContent:"center",marginBottom:"90px"}},d[3].options.map((function(t){return r.a.createElement(v.a,{key:t,control:r.a.createElement(b.a,{name:t}),label:t,onClick:e.fourthHandler.bind(e,{option:t})})}))),r.a.createElement("p",null,"Q",d[4].id+1),r.a.createElement("h1",null,d[4].question),r.a.createElement(k.a,{id:"discrete-slider-custom",gutterBottom:!0},"Choose an age:"),r.a.createElement(C.a,{container:!0,spacing:2,style:{paddingLeft:"15%",paddingRight:"15%",marginBottom:"90px"}},r.a.createElement(C.a,{item:!0},"0"),r.a.createElement(C.a,{item:!0,xs:!0},r.a.createElement(A.a,{defaultValue:0,"aria-labelledby":"discrete-slider-custom",step:1,valueLabelDisplay:"auto",min:0,max:20})),r.a.createElement(C.a,{item:!0},"20")),r.a.createElement(m.a,{variant:"contained",color:"secondary",onClick:this.finishHandler},"Submit"))}}]),n}(r.a.Component);function x(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,null))}var q=document.getElementById("root");s.a.render(r.a.createElement(x,null),q)}},[[62,1,2]]]);
//# sourceMappingURL=main.0b8ff1fc.chunk.js.map