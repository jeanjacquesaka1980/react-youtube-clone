(this["webpackJsonpreact-youtube-clone"]=this["webpackJsonpreact-youtube-clone"]||[]).push([[0],{16:function(e,t,a){e.exports="static/media/mytube.ebfecc3a.png"},18:function(e,t,a){e.exports=a(45)},23:function(e,t,a){},25:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),c=a.n(i),o=(a(23),a(7)),s=a.n(o),l=a(2),d=a(3),m=a(5),u=a(4),p=a(6),h=(a(25),a(16)),b=a.n(h),f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={term:""},a.handleOnChange=function(e){a.setState({term:e.target.value})},a.handleOnSubmit=function(e){e.preventDefault();var t=a.state.term;a.props.searchVideo(t)},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg shadow navbar-light bg-light col-12 mx-auto mb-3 py-3 position-fixed"},r.a.createElement("a",{class:"navbar-brand",href:"#"},r.a.createElement("img",{className:"mytube",src:b.a,alt:""})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("form",{className:"form-inline w-100",onSubmit:this.handleOnSubmit},r.a.createElement("input",{style:{width:"inherit"},type:"text",className:"form-control",id:"exampleFormControlInput1",placeholder:"Search ...",value:this.state.term,onChange:this.handleOnChange})))))}}]),t}(r.a.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.idVideo,a=e.description;return r.a.createElement("div",{className:"col-8 float-left"},r.a.createElement("div",{className:"card col-7 videoDetail mx-auto text-center border-0 bg-light shadow position-fixed"},r.a.createElement("div",{className:"card-body"},r.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/".concat(t),frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),r.a.createElement("p",{className:"card-text"},a))))}}]),t}(r.a.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-4 float-right sideBar"},this.props.children)}}]),t}(r.a.Component),y=a(17),g=a.n(y).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,key:"AIzaSyAnDzEfz1q5C_YNQ5P1fadWCo6dFJdOoyc"}}),w=(a(44),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.idVideo,a=e.description,n=e.onClick,i=e.src;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{onClick:n,idVideo:t,className:"card mb-3 border-0 shadow videoItem"},r.a.createElement("img",{src:i,className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},a))))}}]),t}(r.a.Component)),E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={videos:[],description:"",listVideo:[]},a.componentDidMount=function(){var e,t,n,i;return s.a.async(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,s.a.awrap(g.get("/search",{params:{q:"React.js"}}));case 2:e=c.sent,t=e.data.items[0].id.videoId,n=e.data.items[0].snippet.description,i=e.data.items.map(function(e){var t=a.props,n=t.src,i=t.description,c=t.idVideo;return n=e.snippet.thumbnails.high.url,i=e.snippet.description,c=e.id.videoId,r.a.createElement(w,{onClick:function(){return a.handleVideoOnClick(c,i)},idVideo:c,src:n,description:i})}),a.setState({videos:t,description:n,listVideo:i});case 7:case"end":return c.stop()}})},a.searchVideo=function(e){var t,n,i,c;return s.a.async(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,s.a.awrap(g.get("/search",{params:{q:e}}));case 2:t=o.sent,n=t.data.items[0].id.videoId,i=t.data.items[0].snippet.description,c=t.data.items.map(function(e){var t=a.props,n=t.src,i=t.description,c=t.idVideo;return n=e.snippet.thumbnails.high.url,i=e.snippet.description,c=e.id.videoId,r.a.createElement(w,{onClick:function(){return a.handleVideoOnClick(c,i)},idVideo:c,src:n,description:i})}),a.setState({videos:n,description:i,listVideo:c});case 7:case"end":return o.stop()}})},a.handleVideoOnClick=function(e,t){a.setState({videos:e,description:t})},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement(f,{searchVideo:this.searchVideo}))),r.a.createElement("main",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement(v,{idVideo:this.state.videos,description:this.state.description}),r.a.createElement(O,{onMouseDown:this.handleVideoOnClick},this.state.listVideo))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)),c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);