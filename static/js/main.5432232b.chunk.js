(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,s){e.exports={nav:"Nav_nav__327Em",item:"Nav_item__3wneH",activeNavLink:"Nav_activeNavLink__1chYR"}},100:function(e,t,s){e.exports={imageFon:"ProfileInfo_imageFon__1u7eO",imageAvatar:"ProfileInfo_imageAvatar__3RTQE"}},152:function(e,t,s){e.exports={header:"Header_header__3l3op"}},153:function(e,t,s){e.exports={userPhoto:"Users_userPhoto__Nr18q"}},22:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__JFxO_",dialogItems:"Dialogs_dialogItems__16zI6",active:"Dialogs_active__W3xAv",dialog:"Dialogs_dialog__25fkl",activeNavlink:"Dialogs_activeNavlink__2XrAf",messages:"Dialogs_messages__1GWGH",message:"Dialogs_message__2NyLi",imgAvatar:"Dialogs_imgAvatar__3NWpD"}},31:function(e,t,s){e.exports={sidebar:"Sidebar_sidebar__G4O3l",friendsSidebar:"Sidebar_friendsSidebar__zlma8",miniAvatar:"Sidebar_miniAvatar__3DP3x",friendsItem1:"Sidebar_friendsItem1__2MjmL",friendsItem2:"Sidebar_friendsItem2__RM5Ir",friendsItem3:"Sidebar_friendsItem3__3ZNOm",friendsName:"Sidebar_friendsName__zynNE"}},457:function(e,t,s){},465:function(e,t,s){},466:function(e,t,s){},467:function(e,t,s){},468:function(e,t,s){},469:function(e,t,s){},470:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s(14),i=(s(156),s(4)),c=(s(457),s(2)),r=s.n(c),o=s(29),d=s(37),l=s(5),u="UPDATE-NEW-MESSAGE-TEXT",j="ADD-MESSAGE",m={dialogs:[{name:"Alena",id:1},{name:"Anna",id:2},{name:"Raisa",id:3},{name:"Oleg",id:4},{name:"Denis",id:5}],messages:[{id:1,message:"So, what are your plans for this weekend?"},{id:2,message:"Do you want to get together or something?"},{id:3,message:"How about going to see a movie?"},{id:4,message:"That sounds like a good idea!"}],newMessageText:"hello"},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(l.a)(Object(l.a)({},e),{},{newMessageText:t.newText});case j:var s=e.newMessageText;return Object(l.a)(Object(l.a)({},e),{},{newMessageText:"",messages:[].concat(Object(d.a)(e.messages),[{id:5,message:s}])});default:return e}},g=s(22),f=s.n(g),p=function(e){return Object(a.jsxs)("div",{className:f.a.dialog+" "+f.a.active,children:[Object(a.jsx)("img",{className:f.a.imgAvatar,src:"https://pngimg.com/uploads/github/github_PNG80.png"}),Object(a.jsx)(n.b,{activeClassName:f.a.activeNavlink,to:"/dialogs/"+e.id,children:e.name})]})},O=function(e){return Object(a.jsx)("div",{className:f.a.message,children:e.message})},h=function(e){var t=r.a.createRef();return Object(a.jsxs)("div",{className:f.a.dialogs,children:[Object(a.jsx)("div",{className:f.a.dialogItems,children:e.dialogsPage.dialogs.map((function(e){return Object(a.jsx)(p,{name:e.name,id:e.id})}))}),Object(a.jsx)("div",{className:f.a.messages,children:e.dialogsPage.messages.map((function(e){return Object(a.jsx)(O,{message:e.message})}))}),Object(a.jsxs)("div",{children:[Object(a.jsx)("textarea",{onChange:function(){var s=t.current.value;e.updateNewMessage(s)},ref:t,value:e.dialogsPage.newMessageText}),Object(a.jsx)("button",{onClick:function(){e.addMessage()},children:"Add message"})]})]})},v=Object(o.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{addMessage:function(){return e({type:"ADD-MESSAGE"})},updateNewMessage:function(t){return e(function(e){return{type:"UPDATE-NEW-MESSAGE-TEXT",newText:e}}(t))}}}))(h),x=s(152),_=s.n(x),N=function(){return Object(a.jsx)("header",{className:_.a.header,children:Object(a.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"})})},w=(s(465),function(){return Object(a.jsx)("div",{children:"music"})}),P=s(10),y=s.n(P),k=s(31),T=s.n(k),S=function(e){return Object(a.jsx)("div",{className:T.a.sidebar,children:Object(a.jsxs)("div",{className:T.a.friendsItem1,children:[Object(a.jsx)("img",{className:T.a.miniAvatar,src:"https://pngimg.com/uploads/github/github_PNG80.png"}),Object(a.jsx)("div",{className:T.a.friendsName,children:e.name})]})})},A=function(e){return Object(a.jsxs)("div",{className:T.a.sidebar,children:[Object(a.jsx)("div",{className:T.a.friendsSidebar,children:"Friends"}),e.state.map((function(e){return Object(a.jsx)(S,{name:e.name})}))]})},E=function(e){return Object(a.jsxs)("nav",{className:y.a.nav,children:[Object(a.jsx)("div",{className:"".concat(y.a.item," ").concat(y.a.active),children:Object(a.jsx)(n.b,{activeClassName:y.a.activeNavLink,to:"/profile",children:"Profile "})}),Object(a.jsx)("div",{className:y.a.item,children:Object(a.jsx)(n.b,{activeClassName:y.a.activeNavLink,to:"/dialogs",children:"Messages"})}),Object(a.jsx)("div",{className:y.a.item,children:Object(a.jsx)(n.b,{activeClassName:y.a.activeNavLink,to:"/news",children:"News"})}),Object(a.jsx)("div",{className:y.a.item,children:Object(a.jsx)(n.b,{activeClassName:y.a.activeNavLink,to:"music",children:"Music"})}),Object(a.jsx)("div",{className:y.a.item,children:Object(a.jsx)(n.b,{activeClassName:y.a.activeNavLink,to:"/settings",children:"Settings"})}),Object(a.jsx)("div",{className:y.a.item,children:Object(a.jsx)(n.b,{activeClassName:y.a.activeNavLink,to:"/users",children:"Users"})}),Object(a.jsx)(A,{state:e.state.friends})]})},I=(s(466),function(){return Object(a.jsx)("div",{children:"News"})}),D="ADD-POST",M="UPDATE-NEW-POST-TEXT",C={posts:[{id:1,message:"Hi! It`s very cool social network!",likesCount:"27"},{id:2,message:"Never give up on your drims!",likesCount:"28"}],newPostText:" "},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,s={message:e.newPostText,likesCount:"27"};switch(t.type){case D:return Object(l.a)(Object(l.a)({},e),{},{posts:[].concat(Object(d.a)(e.posts),[s]),newPostText:""});case M:return Object(l.a)(Object(l.a)({},e),{},{newPostText:t.newText});default:return e}},L=s(98),R=s.n(L),W=s(99),F=s.n(W),H=function(e){return Object(a.jsxs)("div",{className:F.a.item,children:[Object(a.jsx)("img",{className:F.a.imgMiniAvatar,src:"https://avatars.mds.yandex.net/get-pdb/2761912/0d6e8505-1f00-4e8a-a54c-9a545ae752bb/s1200?webp=false"}),e.message,Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:"Like"})," ",e.likesCount]})]})},G=function(e){var t=r.a.createRef();return Object(a.jsxs)("div",{className:R.a.myPost,children:["My Post",Object(a.jsxs)("div",{children:[Object(a.jsx)("textarea",{onChange:function(){var s=t.current.value;e.updateNewPostText(s)},ref:t,value:e.newPostText}),Object(a.jsx)("button",{onClick:function(){e.addPost()},children:"Add post"})]}),Object(a.jsx)("div",{className:R.a.posts,children:e.posts.map((function(e){return Object(a.jsx)(H,{message:e.message,likesCount:e.likesCount})}))})]})},B=Object(o.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(){e({type:"ADD-POST"})},updateNewPostText:function(t){e(function(e){return{type:"UPDATE-NEW-POST-TEXT",newText:e}}(t))}}}))(G),K=(s(467),s(100)),z=s.n(K),X=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{className:z.a.imageFon,alt:"image",src:"https://pbs.twimg.com/profile_banners/2451303042/1397844805/1500x500"})}),Object(a.jsx)("div",{children:Object(a.jsx)("img",{className:z.a.imageAvatar,alt:"avatar",src:"https://get.wallhere.com/photo/sunlight-women-blonde-sea-long-hair-water-rock-nature-sand-reflection-photography-morning-hands-on-head-statue-beauty-season-wave-69442.jpg"})})]})},J=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)(X,{}),Object(a.jsx)(B,{})]})},q=(s(468),function(){return Object(a.jsx)("div",{children:"settings"})}),Q="FOLLOW",Y="UNFOLLOW",Z="SET_USERS",V={users:[{id:1,photoUrl:"https://sun9-8.userapi.com/s0pRr5r3R-Ik1f_lBxKPvozUfg4Uh-oulPsS8g/ka51imgcISA.jpg",followed:!0,fullName:"Alena",status:"Hi, I am a boss",location:{sity:"Krupki",country:"Belarus"}},{id:2,photoUrl:"https://i.pinimg.com/236x/73/d0/06/73d006eb726d9ac5954474101c2341e2.jpg",followed:!1,fullName:"Dzianis",status:"Hi, I am a boss too",location:{sity:"Minsk",country:"Belarus"}},{id:3,photoUrl:"https://i.pinimg.com/originals/91/78/2a/91782ad78b4dfaf1c2076209a4d1315f.jpg",followed:!0,fullName:"Anna",status:"Hi, I am a boss too",location:{sity:"Krupki",country:"Belarus"}},{id:4,photoUrl:"https://sun9-2.userapi.com/c850236/v850236646/c6772/d0B9HMKWPF4.jpg",followed:!0,fullName:"Raisa",status:"Hi, I am a boss too",location:{sity:"Krupki",country:"Belarus"}},{id:5,photoUrl:"https://cp16.nevsepic.com.ua/275/27599/thumbs/1475180253-31.png",followed:!0,fullName:"Oleg",status:"Hi, I am a boss too",location:{sity:"Krupki",country:"Belarus"}}]},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return Object(l.a)(Object(l.a)({},e),{},{users:e.users.map((function(e){if(e.id===t.userId)return Object(l.a)(Object(l.a)({},e),{},{followed:!0})}))});case Y:return Object(l.a)(Object(l.a)({},e),{},{users:e.users.map((function(e){if(e.id===t.userId)return Object(l.a)(Object(l.a)({},e),{},{followed:!1})}))});case Z:return Object(l.a)(Object(l.a)({},e),{},{users:[].concat(Object(d.a)(e.users),Object(d.a)(t.users))});default:return e}},ee=s(153),te=s.n(ee),se=function(e){return Object(a.jsx)("div",{children:e.users.map((function(t){return Object(a.jsx)("div",{children:Object(a.jsxs)("span",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:t.photoUrl,alt:"avatar",className:te.a.userPhoto}),t.followed?Object(a.jsx)("button",{onClick:function(){e.follow(t.id)},children:"Unfollow"}):Object(a.jsx)("button",{onClick:function(){e.unfollow(t.id)},children:"Follow"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:t.fullName}),Object(a.jsx)("div",{children:t.status}),Object(a.jsxs)("span",{children:[Object(a.jsx)("div",{children:t.location.country}),Object(a.jsx)("div",{children:t.location.city})]})]})]})},t.id)}))})},ae=Object(o.b)((function(e){return{users:e.usersPage.users}}),(function(e){return{follow:function(t){return e(function(e){return{type:"FOLLOW",userId:e}}(t))},unfollow:function(t){return e(function(e){return{type:"UNFOLLOW",userId:e}}(t))},setUsers:function(t){return e(function(e){return{type:"SET_USERS",users:e}}(t))}}}))(se),ne=function(e){return Object(a.jsxs)("div",{className:"appWrapper",children:[Object(a.jsx)(N,{}),Object(a.jsx)(E,{state:e.state.sidebar}),Object(a.jsxs)("div",{className:"appWrapperContent",children:[Object(a.jsx)(i.a,{path:"/profile",render:function(){return Object(a.jsx)(J,{})}}),Object(a.jsx)(i.a,{path:"/dialogs",render:function(){return Object(a.jsx)(v,{})}}),Object(a.jsx)(i.a,{path:"/users",render:function(){return Object(a.jsx)(ae,{})}}),Object(a.jsx)(i.a,{path:"/news",render:function(){return Object(a.jsx)(I,{})}}),Object(a.jsx)(i.a,{path:"/music",render:function(){return Object(a.jsx)(w,{})}}),Object(a.jsx)(i.a,{path:"/settings",render:function(){return Object(a.jsx)(q,{})}})]})]})},ie=(s(469),{friends:[{name:"Raisa"},{name:"Anna"},{name:"Oleg"}]}),ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie;return e},re=s(52),oe=Object(re.b)({profilePage:U,dialogsPage:b,sidebar:ce,usersPage:$}),de=Object(re.c)(oe),le=s(65);s.n(le).a.render(Object(a.jsx)(n.a,{children:Object(a.jsx)(o.a,{store:de,children:Object(a.jsx)(ne,{store:de,state:de.getState(),dispatch:de.dispatch.bind(de)})})}),document.getElementById("root"))},98:function(e,t,s){e.exports={myPost:"MyPosts_myPost__1KSJz"}},99:function(e,t,s){e.exports={item:"Post_item__3py1h",appWrapperContent:"Post_appWrapperContent__22S-F",myPost:"Post_myPost__2R1dd",imgMiniAvatar:"Post_imgMiniAvatar__2UnsR"}}},[[470,1,2]]]);
//# sourceMappingURL=main.5432232b.chunk.js.map