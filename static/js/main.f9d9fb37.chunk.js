(window.webpackJsonptrendwatch=window.webpackJsonptrendwatch||[]).push([[0],{102:function(e,t,a){e.exports=a(172)},107:function(e,t,a){},172:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),s=a.n(i),o=a(2),u=a(3),c=a(5),l=a(4),p=a(6),d=(a(107),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("a",{href:"/trendwatchFrontend2"},r.a.createElement("h1",null,"Trendwatch"))}}]),t}(n.Component)),m=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("a",{href:"/trendwatchFrontend2/topic/"+this.props.topic.id},this.props.topic.name," ",r.a.createElement("span",null,this.props.topic.updates," update(s)"))}}]),t}(n.Component),h=a(9),f=a.n(h),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={allTopics:[]},a.componentDidMount=function(){f.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",f()({method:"get",url:"http://localhost:8080/trends/mainPage"}).then((function(e){a.setState({allTopics:e.data})}))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.state.allTopics&&!this.state.allTopics.length?r.a.createElement("p",null,"De lijst met trending topics kan niet worden opgehaald"):this.state.allTopics.map((function(e){return r.a.createElement(m,{topic:e,key:e.id})}))}}]),t}(n.Component),v=a(8),b=a.n(v),j=a(14),E=a(90),O=a(173),y=(a(50),a(36)),w=new y.a,k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).validateForm=function(){a.state.username.length<4&&O.a.info("The username must consist of atleast 4 characters"),a.state.password.length<6&&O.a.info("The password must consist of atleast 6 characters")},a.handleChange=function(e){a.setState(Object(E.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.validateForm(),a.login()},a.handleRegister=function(e){e.preventDefault(),a.validateForm(),a.register()},a.state={username:"",password:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"login",value:function(){var e=Object(j.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={username:this.state.username,password:this.state.password},e.next=3,f.a.get("http://localhost:8080/users/userByCredentials/"+t.username+"/"+t.password);case 3:null!=(a=e.sent).data.username?(w.set("name",a.data.username,{path:"/"}),w.set("id",a.data.id,{path:"/"}),w.set("reputation",a.data.reputation,{path:"/"}),this.props.loginSuccesfull()):O.a.info("The username or password is incorrect");case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){"undefined"!=typeof w.get("name")&&(console.log("session still valid"),this.props.loginSuccesfull())}},{key:"register",value:function(){var e=this,t=new URLSearchParams;t.append("username",this.state.username),t.append("password",this.state.password),f()({method:"post",url:"http://localhost:8080/users",data:t}).then((function(){O.a.info("The account has been created"),e.login()}),(function(){O.a.info("Failed to create account")}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{id:"login",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",id:"username",value:this.state.username,onChange:this.handleChange,placeholder:"Username"}),r.a.createElement("input",{type:"password",id:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Password"}),r.a.createElement("input",{type:"submit",value:"Login"})),r.a.createElement("form",{id:"register",onSubmit:this.handleRegister},r.a.createElement("input",{type:"submit",value:"Register"})))}}]),t}(n.Component),S=a(95),C=a.n(S),P=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return"\xa9 Trendwatch "+C()().format("YYYY")}}]),t}(n.Component),D=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",{className:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis velit eu urna congue lobortis. Nunc ex tortor, placerat ut convallis vel, euismod ut arcu. Praesent eget porta orci, eget ullamcorper ex. Aenean vel ante auctor, gravida magna cursus, condimentum orci. Ut facilisis nec sapien sit amet varius. Suspendisse vehicula ex eros, eu condimentum ligula venenatis interdum. Mauris at euismod ligula, volutpat vulputate ante. Donec ullamcorper risus nec mauris luctus scelerisque. Suspendisse eleifend mauris non neque finibus, at tempor odio aliquet. Aliquam erat volutpat. Phasellus non fermentum ligula. In tincidunt bibendum magna vitae ullamcorper. Phasellus iaculis tellus vel lacus lobortis viverra. Morbi sodales ultricies arcu tempus gravida. Phasellus non ullamcorper ipsum."),r.a.createElement("p",{className:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis velit eu urna congue lobortis. Nunc ex tortor, placerat ut convallis vel, euismod ut arcu. Praesent eget porta orci, eget ullamcorper ex. Aenean vel ante auctor, gravida magna cursus, condimentum orci. Ut facilisis nec sapien sit amet varius. Suspendisse vehicula ex eros, eu condimentum ligula venenatis interdum. Mauris at euismod ligula, volutpat vulputate ante. Donec ullamcorper risus nec mauris luctus scelerisque. Suspendisse eleifend mauris non neque finibus, at tempor odio aliquet. Aliquam erat volutpat. Phasellus non fermentum ligula. In tincidunt bibendum magna vitae ullamcorper. Phasellus iaculis tellus vel lacus lobortis viverra. Morbi sodales ultricies arcu tempus gravida. Phasellus non ullamcorper ipsum."),r.a.createElement("p",{className:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis velit eu urna congue lobortis. Nunc ex tortor, placerat ut convallis vel, euismod ut arcu. Praesent eget porta orci, eget ullamcorper ex. Aenean vel ante auctor, gravida magna cursus, condimentum orci. Ut facilisis nec sapien sit amet varius. Suspendisse vehicula ex eros, eu condimentum ligula venenatis interdum. Mauris at euismod ligula, volutpat vulputate ante. Donec ullamcorper risus nec mauris luctus scelerisque. Suspendisse eleifend mauris non neque finibus, at tempor odio aliquet. Aliquam erat volutpat. Phasellus non fermentum ligula. In tincidunt bibendum magna vitae ullamcorper. Phasellus iaculis tellus vel lacus lobortis viverra. Morbi sodales ultricies arcu tempus gravida. Phasellus non ullamcorper ipsum."))}}]),t}(n.Component),x=new y.a,q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).handleLogout=function(e){e.preventDefault(),a.logout()},a.logout=function(){x.remove("name",{path:"/"}),x.remove("reputation",{path:"/"}),x.remove("id",{path:"/"}),a.props.logout()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleLogout},r.a.createElement("p",null,"Welkom ",x.get("name")," je hebt ",x.get("reputation")," reputatie"),r.a.createElement("input",{type:"submit",value:"Log out"}))}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={bio:"",username:"",reputation:0,errorMessage:""},a.componentDidMount=Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f()({method:"get",url:"http://localhost:8080/users/userById/"+a.props.match.params.id}).then((function(e){null!=e.data.username&&(a.setState({bio:e.data.bio,username:e.data.username,reputation:e.data.reputation}),""===a.state.bio&&O.a.info("Dit profiel heeft geen bio toegevoegd"))}),(function(){O.a.info("Dit profiel bestaat niet")}));case 1:case"end":return e.stop()}}),e)}))),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"profilePage"},r.a.createElement("h1",null,this.state.username),r.a.createElement("p",null,this.state.reputation),r.a.createElement("p",null,this.state.bio))}}]),t}(n.Component),T=a(96),I=a(25),F=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).topicClicked=function(){console.log(a.props.name)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"searchResult",onClick:function(){e.topicClicked()}},r.a.createElement("a",{href:"/trendwatchFrontend2/topic/"+this.props.id},this.props.name))}}]),t}(n.Component),B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).state={query:"",allTopics:[]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onRef(this)}},{key:"sendPost",value:function(){var e=Object(j.a)(b.a.mark((function e(t){var a=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.trim()){e.next=2;break}return e.abrupt("return");case 2:f()({method:"get",url:"http://localhost:8080/trends/trendByKeyword/"+t}).then((function(e){a.setState({allTopics:e.data}),a.render()}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,this.state.allTopics.map((function(e){return r.a.createElement(F,{key:e.id,id:e.id,name:e.name})})))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).handleChange=function(){var e=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({query:t.target.value});case 2:a.SearchResults.sendPost(a.state.query);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={query:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"form"},r.a.createElement("input",{type:"search",onChange:this.handleChange,placeholder:"Search topic"}),r.a.createElement(B,{onRef:function(t){return e.SearchResults=t}}))}}]),t}(n.Component),L=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"topicPageBanner"},r.a.createElement("h1",null,this.props.name),r.a.createElement("p",null,"Creation date: ",this.props.date))}}]),t}(n.Component),N=a(99),R=new y.a,U=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).upDootClicked=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:R.get("id")>0?((t=new URLSearchParams).append("postId",a.props.message.id),t.append("userId",R.get("id")),f()({method:"post",url:"http://localhost:8080/updoots",data:t}).then((function(){var e=document.getElementById(a.props.message.id).innerHTML,t=parseInt(e)+1;document.getElementById(a.props.message.id).innerHTML=t}),(function(){O.a.info("Je hebt deze post al ge\xfcpdoot")}))):O.a.info("Je moet ingelogd zijn om te kunnen updooten");case 1:case"end":return e.stop()}}),e)}))),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"topicPagePost"},r.a.createElement("a",{className:"sender",href:"/trendwatchFrontend2/profile/"+this.props.message.sender.id},this.props.message.sender.username),r.a.createElement("p",{className:"date"},new Date(this.props.message.date).toDateString()),r.a.createElement("p",{className:"message"},this.props.message.message),r.a.createElement("p",{className:"updoots",id:this.props.message.id},this.props.message.updoots),r.a.createElement("span",{className:"thumb",onClick:function(){e.upDootClicked()}},r.a.createElement(N.a,null)))}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).state={allPosts:[]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;f()({method:"get",url:"http://localhost:8080/posts/postByTrend/"+this.props.id}).then((function(t){e.setState({allPosts:t.data})}))}},{key:"render",value:function(){return this.state.allPosts.map((function(e){return r.a.createElement(U,{message:e,key:e.id})}))}}]),t}(n.Component),Y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).componentDidMount=Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f()({method:"get",url:"http://localhost:8080/trends/trendById/"+a.props.match.params.id}).then((function(e){var t=e.data.creationDate;a.setState({id:e.data.id,name:e.data.name,date:new Date(t).toDateString(),isMounting:!1})}),(function(){a.setState({date:null,isMounting:!1}),O.a.info("Iets ging mis bij het ophalen van de topic informatie")}));case 1:case"end":return e.stop()}}),e)}))),a.state={id:0,name:"",date:(new Date).toLocaleString(),isMounting:!0},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.state.isMounting?null:r.a.createElement("div",{id:"topicPageContent"},r.a.createElement(L,{name:this.state.name,date:this.state.date}),r.a.createElement(J,{id:this.state.id}))}}]),t}(n.Component),z=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),u=0;u<n;u++)i[u]=arguments[u];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).loginSuccesfull=function(){document.getElementById("login").style.display="none",document.getElementById("user").style.display="block",s.a.render(r.a.createElement(q,{logout:a.logout}),document.getElementById("user"))},a.logout=function(){document.getElementById("user").style.display="none",document.getElementById("login").style.display="block"},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(T.a,null,r.a.createElement(I.a,{exact:!0,path:"/trendwatchFrontend2/"},r.a.createElement("div",{id:"banner"},r.a.createElement(d,null)),r.a.createElement("div",{id:"login"},r.a.createElement(k,{loginSuccesfull:this.loginSuccesfull})),r.a.createElement("div",{id:"user"}),r.a.createElement("div",{id:"infoPage"},r.a.createElement(D,null)),r.a.createElement("div",{id:"trendingTopic"}," ",r.a.createElement(g,null)),r.a.createElement("div",{id:"search"},r.a.createElement(A,null)),r.a.createElement("div",{id:"footer"},r.a.createElement(P,null))),r.a.createElement(I.a,{path:"/trendwatchFrontend2/profile"},r.a.createElement("div",{id:"banner"},r.a.createElement(d,null)),r.a.createElement("div",{id:"login"},r.a.createElement(k,{loginSuccesfull:this.loginSuccesfull})),r.a.createElement("div",{id:"user"},r.a.createElement(q,{logout:this.logout})),r.a.createElement("div",{id:"footer"},r.a.createElement(P,null))),r.a.createElement(I.a,{path:"/trendwatchFrontend2/profile/:id",component:M}),r.a.createElement(I.a,{path:"/trendwatchFrontend2/topic"},r.a.createElement("div",{id:"banner"},r.a.createElement(d,null)),r.a.createElement("div",{id:"login"},r.a.createElement(k,{loginSuccesfull:this.loginSuccesfull})),r.a.createElement("div",{id:"user"},r.a.createElement(q,{logout:this.logout})),r.a.createElement("div",{id:"footer"},r.a.createElement(P,null))),r.a.createElement(I.a,{path:"/trendwatchFrontend2/topic/:id",component:Y})))}}]),t}(n.Component);s.a.render(r.a.createElement(z,null),document.getElementById("root"))}},[[102,1,2]]]);
//# sourceMappingURL=main.f9d9fb37.chunk.js.map