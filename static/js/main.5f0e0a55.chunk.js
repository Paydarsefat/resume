(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(10),l=n.n(i),r=(n(42),n(1)),o=n(2),s=n(5),u=n(3),m=n(4),h=(n(44),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.children;return c.a.createElement("div",null,c.a.createElement("div",{className:"fullpage ".concat(this.props.className," ||''")},e))}}]),t}(a.Component)),p=n(6),d=n(36),v=n(7),b=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transform:"transletY(-10px)",marginBottom:"10px"}},c.a.createElement("img",{style:{maxWidth:"30px"},src:p.icon.down,alt:""}))}}]),t}(a.Component),f=(n(89),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(v.Element,{name:"Titel"}),c.a.createElement(h,null,c.a.createElement("div",null,c.a.createElement("h1",null,p.title)),c.a.createElement("div",{calssName:"kholase"},c.a.createElement("h2",null,p.kholase)),c.a.createElement("div",null,Object.keys(p.links).map(function(e){return c.a.createElement(d.SocialIcon,{url:p.links[e]})})),c.a.createElement(v.Link,{activeClass:"active",to:"About",spy:!0,smooth:!0,hashSpy:!0,offset:50,duration:500,delay:1,isDynamic:!0,onSetActive:this.handleSetActive,onSetInactive:this.handleSetInactive,ignoreCancelEvents:!1},c.a.createElement(b,null))),c.a.createElement(v.Element,{name:"About"}))}}]),t}(a.Component)),E=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transform:"transletY(-10px)",marginBottom:"10px"}},c.a.createElement("img",{style:{maxWidth:"30px"},src:p.icon.up,alt:""}))}}]),t}(a.Component),y=(n(91),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(h,null,c.a.createElement("h3",null,p.section[0].title),c.a.createElement("p",null,p.section[0].item[0].content),c.a.createElement(v.Link,{activeClass:"active",to:"Titel",spy:!0,smooth:!0,hashSpy:!0,offset:50,duration:500,delay:1,isDynamic:!0,onSetActive:this.handleSetActive,onSetInactive:this.handleSetInactive,ignoreCancelEvents:!1},c.a.createElement(E,null)),c.a.createElement(v.Link,{activeClass:"active",to:"Skill",spy:!0,smooth:!0,hashSpy:!0,offset:50,duration:500,delay:1,isDynamic:!0,onSetActive:this.handleSetActive,onSetInactive:this.handleSetInactive,ignoreCancelEvents:!1},c.a.createElement(b,null)))}}]),t}(a.Component)),j=(n(93),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.skill;return c.a.createElement("div",{className:"card"},c.a.createElement("div",null,c.a.createElement("img",{className:"image-wrapper",alt:"",src:e.content.image})),c.a.createElement("div",null,c.a.createElement("h4",{className:"skill-wrapper"},e.content.title)))}}]),t}(a.Component)),O=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(v.Element,{name:"Skill"}),c.a.createElement(h,null,c.a.createElement("h3",null,p.section[1].title),c.a.createElement("div",{className:"row"},p.section[1].item.map(function(e){return c.a.createElement(j,{skill:e})})),c.a.createElement(v.Link,{activeClass:"active",to:"Titel",spy:!0,smooth:!0,hashSpy:!0,offset:50,duration:500,delay:1,isDynamic:!0,onSetActive:this.handleSetActive,onSetInactive:this.handleSetInactive,ignoreCancelEvents:!1},c.a.createElement(E,null))))}}]),t}(a.Component),g=n(11),k=(n(95),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.children;return c.a.createElement(h,{className:"fix"},c.a.createElement("div",{className:"nav"},e,c.a.createElement("div",{className:"nav_menu"},c.a.createElement("div",{style:{marginRight:"1rem"}},"About"),c.a.createElement("div",null,"Skills"))))}}]),t}(a.Component)),C=(n(97),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).changeColor=e.changeColor.bind(Object(g.a)(Object(g.a)(e))),e.state={backgroundColor:"blueviolet",color:"white"},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"changeColor",value:function(){var e="#"+((1<<24)*Math.random()|0).toString(16),t="#"+((1<<24)*Math.random()|0).toString(16);this.setState({backgroundColor:e,color:t})}},{key:"render",value:function(){var e=this,t=this.props.children;return c.a.createElement("div",null,c.a.createElement("div",{style:{backgroundColor:this.state.backgroundColor,color:this.state.color}},c.a.createElement(k,null,c.a.createElement("div",{className:"nav_change "},c.a.createElement("div",{onClick:function(){return e.changeColor()},style:{cursor:"pointer"}},"ChangeColor"))),t))}}]),t}(a.Component)),S=(n(99),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(C,null,c.a.createElement(f,null),c.a.createElement(y,null),c.a.createElement(O,null)))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},37:function(e,t,n){e.exports=n(101)},42:function(e,t,n){},44:function(e,t,n){},6:function(e){e.exports={title:"My name is  Mostafa",kholase:"Full Stack Dev | Open-Source Enthusiast | Blogger | Ninja",links:{linkedin:"https://www.linkedin.com/in/paydarsefat/",Medium:"https://medium.com/@m.sharmsar"},section:[{title:"About",item:[{type:"p",content:"`I like JavaScript and everything web."}]},{title:"Skill",item:[{type:"cart",content:{image:"images/react_js.png",title:"React"}},{type:"cart",content:{image:"images/mysql-512.png",title:"Mysql"}},{type:"cart",content:{image:"images/Laravel-512.png",title:"Laravel"}}]}],icon:{down:"images/downicon.png",up:"images/upicon.png"}}},89:function(e,t,n){},91:function(e,t,n){},93:function(e,t,n){},95:function(e,t,n){},97:function(e,t,n){},99:function(e,t,n){}},[[37,2,1]]]);
//# sourceMappingURL=main.5f0e0a55.chunk.js.map