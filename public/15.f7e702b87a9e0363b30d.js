(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"9sDO":function(n,l,t){"use strict";t.d(l,"a",function(){return a});var e=t("mrSG"),i=t("Ovi0"),u=t("ZZ/e"),r=t("CcnG"),o=t("t/Na"),a=function(n){function l(l,t){var e=n.call(this,l)||this;return e.httpClient=l,e.alertController=t,e.name="playlists",e.location="/api/v1/playlists",e}return e.d(l,n),l.prototype.create=function(){var l=this;return new Promise(function(t,i){return e.b(l,void 0,void 0,function(){var l=this;return e.e(this,function(u){switch(u.label){case 0:return[4,this.alertController.create({header:"New Playlist",inputs:[{name:"name",type:"text",placeholder:"Enter Playlist Name...",value:""}],buttons:[{text:"Cancel",role:"cancel"},{text:"Create",handler:function(u){u&&n.prototype.create.call(l,{name:u.name}).then(function(n){return e.b(l,void 0,void 0,function(){return e.e(this,function(l){return t(n),[2]})})}).catch(function(n){return i(n)})}}]})];case 1:return[4,u.sent().present()];case 2:return u.sent(),[2]}})})})},l.ngInjectableDef=r.S({factory:function(){return new l(r.W(o.c),r.W(u.a))},token:l,providedIn:"root"}),l}(i.b)},BcDN:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){return function(){}}()},L7MN:function(n,l,t){"use strict";t.d(l,"a",function(){return e}),t("ZZ/e"),t("QIP1");var e=function(){function n(n,l){this.platform=n,this.playerService=l,this.playonResume=!1}return n.prototype.ngOnInit=function(){this.playerService.currentTime()},n.prototype.resume=function(n){this.playerService.setCurrentTime(this.timeSlider.value)},n.prototype.pause=function(n){this.playerService.totalTime().time<1&&n.preventDefault()},n.prototype.openPlaylist=function(n){},n}()},QIP1:function(n,l,t){"use strict";var e=t("gRba"),i=t("9sDO"),u=t("3n8g"),r=t("vY5A"),o=t("K9Ia"),a=t("CcnG"),c=function(){function n(){this.stream=new o.a,this.create()}return n.prototype.create=function(){var n=this;return new Promise(function(l){n.socket=new WebSocket(r.a.socket),n.socket.addEventListener("connect",function(n){l()}),n.socket.addEventListener("message",function(l){n.stream.next(JSON.parse(l.data))})})},n.prototype.on=function(n,l){return this.stream.subscribe(function(t){t.event===n&&l(t.data,t.sender?t.sender:null)}),this},n.prototype.subscribe=function(n,l){return this.stream.subscribe(function(t){t.channel===n&&l(t.data,t.sender?t.sender:null)}),this},n.prototype.publish=function(n,l){var t=this,e=function(){t.socket.send(JSON.stringify({channel:n,event:"message",data:l}))};this.socket.readyState===this.socket.CLOSED||this.socket.readyState===this.socket.CLOSING?this.create().then(function(){return e()}):e()},n.prototype.send=function(n){var l=this,t=function(){l.socket.send(JSON.stringify({event:"message",data:n}))};this.socket.readyState===this.socket.CLOSED||this.socket.readyState===this.socket.CLOSING?this.create().then(function(){t()}):t()},n.ngInjectableDef=a.S({factory:function(){return new n},token:n,providedIn:"root"}),n}();t.d(l,"a",function(){return s});var s=function(){function n(n,l,t,e){var i=this;this.fileService=n,this.playlistService=l,this.statsService=t,this.socketService=e,this.status="Paused",this.position=0,this.socketService.subscribe("mplayer",function(n,l){Object.keys(n).forEach(function(l){i.hasOwnProperty(l)&&(i[l]=n[l]),!n.file||!n.file.id||i.file&&i.file.id===n.file.id||(i.file=n.file,i.fileService.find(n.file.id).then(function(n){return i.file=n})),!n.playlist||!n.playlist.id||i.playlist&&i.playlist.id===n.playlist.id||(i.playlist=n.playlist,i.playlistService.find(n.playlist.id).then(function(n){return i.playlist=n}))})})}return n.prototype.setSong=function(n,l){var t=this;this.fileService.find(n).then(function(n){return t.file=n}),this.playlistService.find(l).then(function(n){return t.playlist=n}),this.socketService.publish("mplayer",{file:n,playlist:l})},n.prototype.isSong=function(n,l){return!!this.file&&n===this.file.id&&(!l||this.isState(l))},n.prototype.totalTime=function(){return this.convertTime(this.file?this.file.playtime:0)},n.prototype.isPlaylist=function(n){var l=this.getPlaylist();return!!l&&l.id===n},n.prototype.getPlaylist=function(){return this.playlist},n.prototype.toggleState=function(){this.file&&(this.status="Playing"===this.status?"Paused":"Playing"),this.setState(this.status)},n.prototype.setState=function(n){this.socketService.publish("mplayer",{status:n})},n.prototype.isState=function(n){return this.status===n},n.prototype.currentTime=function(){return this.convertTime(this.position)},n.prototype.getTimecode=function(n,l){var t="current"===l?this.currentTime():this.totalTime();return Object.keys(t).forEach(function(l){n=n.replace("{"+l+"}",t[l])}),n},n.prototype.setCurrentTime=function(n){this.socketService.publish("mplayer",{position:n})},n.prototype.convertTime=function(n){var l={h:0,m:0,s:0,hh:null,mm:null,ss:null,i:0,time:n};return n>0&&(l.h=Math.floor(n/60/60),l.m=Math.floor(n/60-60*l.h),l.s=Math.round(n-60*l.m-60*l.h)),l.hh=(l.h.toString().length<2?"0":null)+l.h,l.mm=(l.m.toString().length<2?"0":null)+l.m,l.ss=(l.s.toString().length<2?"0":null)+l.s,l},n.ngInjectableDef=a.S({factory:function(){return new n(a.W(e.a),a.W(i.a),a.W(u.a),a.W(c))},token:n,providedIn:"root"}),n}()},gRba:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var e=t("mrSG"),i=t("Ovi0"),u=t("CcnG"),r=t("t/Na"),o=function(n){function l(){var l=null!==n&&n.apply(this,arguments)||this;return l.name="files",l.location="/api/v1/files",l}return e.d(l,n),l.ngInjectableDef=u.S({factory:function(){return new l(u.W(r.c))},token:l,providedIn:"root"}),l}(i.b)},mhqm:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),i=t("mrSG"),u=t("9sDO"),r=t("ZZ/e"),o=function(){function n(n,l){this.playlistService=n,this.navController=l}return n.prototype.ngOnInit=function(){var n=this;this.playlistService.subscribe(function(l){return n.playlists=l})},n.prototype.addPlaylist=function(){return i.b(this,void 0,void 0,function(){var n=this;return i.e(this,function(l){return this.playlistService.create().then(function(l){n.navController.navigateForward("/playlist/"+l.id)}),[2]})})},n}(),a=function(){return function(){}}(),c=t("pMnS"),s=t("ZYCi"),p=t("Ip0R"),f=t("oBZk"),b=t("fNgX"),h=t("Hf/j"),d=t("ZYjt"),v=t("oKJH"),y=t("L7MN"),m=t("QIP1"),g=e.nb({encapsulation:0,styles:[["[_nghost-%COMP%]   .square-container[_ngcontent-%COMP%]{padding:8px;max-width:1200px;margin:0 auto}[_nghost-%COMP%]   .square[_ngcontent-%COMP%]{cursor:pointer;width:calc(100% / 2);float:left;position:relative;padding-bottom:calc(100% / 2.5)}@media screen and (min-width:768px){[_nghost-%COMP%]   .square[_ngcontent-%COMP%]{width:calc(100% / 4);padding-bottom:calc(100% / 5)}}[_nghost-%COMP%]   .square[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:calc(100% - 16px);height:calc(100% - 16px);position:absolute;padding-top:calc(100% / 2.5 - 24px);font-size:24px;color:#fff;border-radius:20px;text-align:center}"]],data:{}});function k(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,7,"div",[["class","square"],["routerLinkActive","active"]],[[1,"data-index",0]],[[null,"click"]],function(n,l,t){var i=!0;return"click"===l&&(i=!1!==e.zb(n,1).onClick()&&i),"click"===l&&(i=!1!==e.zb(n,2).onClick(t)&&i),i},null,null)),e.ob(1,16384,[[1,4]],0,s.n,[s.m,s.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.ob(2,737280,null,0,r.Lb,[p.h,r.Ib,e.k,s.m,[2,s.n]],null,null),e.ob(3,1720320,null,2,s.o,[s.m,e.k,e.D,e.h],{routerLinkActive:[0,"routerLinkActive"]},null),e.Db(603979776,1,{links:1}),e.Db(603979776,2,{linksWithHrefs:1}),(n()(),e.pb(6,0,null,null,1,"div",[["class","content"]],null,null,null,null,null)),(n()(),e.Fb(7,null,[" "," "]))],function(n,l){n(l,1,0,"/playlist/"+l.context.$implicit.id),n(l,2,0),n(l,3,0,"active")},function(n,l){n(l,0,0,l.context.index%10),n(l,7,0,l.context.$implicit.name)})}function S(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,11,"ion-header",[],null,null,null,f.J,f.k)),e.ob(1,49152,null,0,r.B,[e.h,e.k,e.z],null,null),(n()(),e.pb(2,0,null,0,9,"ion-toolbar",[["padding-top",""],["text-left",""]],null,null,null,f.X,f.y)),e.ob(3,49152,null,0,r.Cb,[e.h,e.k,e.z],null,null),e.ob(4,16384,null,0,r.e,[e.k],null,null),(n()(),e.pb(5,0,null,0,2,"div",[["padding-start",""]],null,null,null,null,null)),e.ob(6,16384,null,0,r.e,[e.k],null,null),(n()(),e.Fb(-1,null,[" Playlists "])),(n()(),e.pb(8,0,null,0,3,"ion-button",[["size","large"],["slot","end"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.addPlaylist()&&e),e},f.C,f.d)),e.ob(9,49152,null,0,r.k,[e.h,e.k,e.z],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),(n()(),e.pb(10,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["icon","plus"]],[[8,"innerHTML",1]],null,null,b.b,b.a)),e.ob(11,573440,null,0,h.a,[d.b,h.b],{iconProp:[0,"iconProp"]},null),(n()(),e.pb(12,0,null,null,5,"ion-content",[["padding-start",""]],null,null,null,f.H,f.i)),e.ob(13,49152,null,0,r.u,[e.h,e.k,e.z],null,null),e.ob(14,16384,null,0,r.e,[e.k],null,null),(n()(),e.pb(15,0,null,0,2,"div",[["class","square-container"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,k)),e.ob(17,278528,null,0,p.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.pb(18,0,null,null,3,"ion-footer",[],null,null,null,f.I,f.j)),e.ob(19,49152,null,0,r.z,[e.h,e.k,e.z],null,null),(n()(),e.pb(20,0,null,0,1,"app-player",[],null,null,null,v.b,v.a)),e.ob(21,114688,null,0,y.a,[r.Jb,m.a],null,null)],function(n,l){var t=l.component;n(l,9,0,"light","clear","large"),n(l,11,0,"plus"),n(l,17,0,t.playlists),n(l,21,0)},function(n,l){n(l,10,0,e.zb(l,11).renderedIconHTML)})}function C(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"app-dashboard",[],null,null,null,S,g)),e.ob(1,114688,null,0,o,[u.a,r.Ib],null,null)],function(n,l){n(l,1,0)},null)}var x=e.lb("app-dashboard",o,C,{},{},[]),P=t("gIcY"),O=t("BcDN");t.d(l,"DashboardPageModuleNgFactory",function(){return z});var z=e.mb(a,[],function(n){return e.wb([e.xb(512,e.j,e.bb,[[8,[c.a,x]],[3,e.j],e.x]),e.xb(4608,p.l,p.k,[e.u,[2,p.r]]),e.xb(4608,P.g,P.g,[]),e.xb(4608,r.b,r.b,[e.z,e.g]),e.xb(4608,r.Hb,r.Hb,[r.b,e.j,e.q]),e.xb(4608,r.Kb,r.Kb,[r.b,e.j,e.q]),e.xb(1073742336,p.b,p.b,[]),e.xb(1073742336,P.f,P.f,[]),e.xb(1073742336,P.a,P.a,[]),e.xb(1073742336,r.Eb,r.Eb,[]),e.xb(1073742336,h.f,h.f,[]),e.xb(1073742336,s.p,s.p,[[2,s.v],[2,s.m]]),e.xb(1073742336,O.a,O.a,[]),e.xb(1073742336,a,a,[]),e.xb(1024,s.k,function(){return[[{path:"",component:o}]]},[])])})},oKJH:function(n,l,t){"use strict";var e=t("CcnG"),i=t("oBZk"),u=t("ZZ/e"),r=t("ZYCi"),o=t("Ip0R"),a=t("fNgX"),c=t("Hf/j"),s=t("ZYjt"),p=t("gIcY");t("L7MN"),t("QIP1"),t.d(l,"a",function(){return f}),t.d(l,"b",function(){return h});var f=e.nb({encapsulation:0,styles:[["[_nghost-%COMP%]   ion-range[_ngcontent-%COMP%]{padding:0;height:4px}[_nghost-%COMP%]   .time-slider[_ngcontent-%COMP%]{--knob-size:0;--bar-height:4px;--bar-border-radius:2px;--bar-background:transparent}[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--padding-bottom:0}"]],data:{}});function b(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,29,"div",[],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,24,"ion-toolbar",[["class","ion-padding"],["color","tertiary"]],null,null,null,i.X,i.y)),e.ob(2,49152,null,0,u.Cb,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.pb(3,0,null,0,4,"div",[["no-margin",""],["slot","start"],["style","cursor: pointer;"]],null,[[null,"click"]],function(n,l,t){var i=!0;return"click"===l&&(i=!1!==e.zb(n,4).onClick()&&i),"click"===l&&(i=!1!==e.zb(n,5).onClick(t)&&i),i},null,null)),e.ob(4,16384,null,0,r.n,[r.m,r.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.ob(5,737280,null,0,u.Lb,[o.h,u.Ib,e.k,r.m,[2,r.n]],null,null),e.ob(6,16384,null,0,u.e,[e.k],null,null),(n()(),e.pb(7,0,null,null,0,"img",[["height","50"]],[[8,"src",4]],null,null,null,null)),(n()(),e.pb(8,0,null,0,8,"ion-title",[["style","cursor: pointer;"],["text-left",""]],null,[[null,"click"]],function(n,l,t){var i=!0;return"click"===l&&(i=!1!==e.zb(n,10).onClick()&&i),"click"===l&&(i=!1!==e.zb(n,11).onClick(t)&&i),i},i.W,i.x)),e.ob(9,49152,null,0,u.Ab,[e.h,e.k,e.z],null,null),e.ob(10,16384,null,0,r.n,[r.m,r.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.ob(11,737280,null,0,u.Lb,[o.h,u.Ib,e.k,r.m,[2,r.n]],null,null),e.ob(12,16384,null,0,u.e,[e.k],null,null),(n()(),e.pb(13,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),e.Fb(14,null,["",""])),(n()(),e.pb(15,0,null,0,1,"small",[],null,null,null,null,null)),(n()(),e.Fb(16,null,["",""])),(n()(),e.pb(17,0,null,0,8,"ion-buttons",[["slot","end"]],null,null,null,i.D,i.e)),e.ob(18,49152,null,0,u.l,[e.h,e.k,e.z],null,null),(n()(),e.pb(19,0,null,0,1,"small",[],null,null,null,null,null)),(n()(),e.Fb(20,null,[""," / ",""])),(n()(),e.pb(21,0,null,0,4,"ion-button",[["padding-end",""],["shape","round"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.playerService.toggleState()&&e),e},i.C,i.d)),e.ob(22,49152,null,0,u.k,[e.h,e.k,e.z],{shape:[0,"shape"]},null),e.ob(23,16384,null,0,u.e,[e.k],null,null),(n()(),e.pb(24,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["size","2x"],["slot","icon-only"]],[[8,"innerHTML",1]],null,null,a.b,a.a)),e.ob(25,573440,null,0,c.a,[s.b,c.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),(n()(),e.pb(26,0,null,null,3,"ion-range",[["class","time-slider"],["color","danger"],["min","0"]],null,[[null,"pointerup"],[null,"pointerdown"],[null,"contextmenu"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var i=!0,u=n.component;return"ionBlur"===l&&(i=!1!==e.zb(n,29)._handleBlurEvent(t.target)&&i),"ionChange"===l&&(i=!1!==e.zb(n,29)._handleChangeEvent(t.target)&&i),"pointerup"===l&&(i=!1!==(1===t.which?u.resume(t):t.preventDefault())&&i),"pointerdown"===l&&(i=!1!==(1===t.which?u.pause(t):t.preventDefault())&&i),"contextmenu"===l&&(i=!1!==t.preventDefault()&&i),i},i.O,i.p)),e.Cb(5120,null,p.b,function(n){return[n]},[u.Mb]),e.ob(28,49152,[[1,4],["timeSlider",4]],0,u.cb,[e.h,e.k,e.z],{color:[0,"color"],max:[1,"max"],min:[2,"min"],value:[3,"value"]},null),e.ob(29,16384,null,0,u.Mb,[e.k],null,null)],function(n,l){var t=l.component;n(l,2,0,"tertiary"),n(l,4,0,"/playlist/"+t.playerService.playlist.id),n(l,5,0),n(l,10,0,"/playlist/"+t.playerService.playlist.id),n(l,11,0),n(l,22,0,"round"),n(l,25,0,t.playerService.isState("Playing")?"pause":"play","2x"),n(l,28,0,"danger",t.playerService.totalTime().time+1e-18,0,t.playerService.currentTime().time)},function(n,l){var t=l.component;n(l,7,0,null!=t.playerService.file&&t.playerService.file.thumbnail?null==t.playerService.file?null:t.playerService.file.thumbnail:"https://via.placeholder.com/50"),n(l,14,0,t.playerService.file?t.playerService.file.title?t.playerService.file.title:t.playerService.file.filename:""),n(l,16,0,null!=t.playerService.file&&t.playerService.file.artist?t.playerService.file.artist:""),n(l,20,0,t.playerService.getTimecode("{m}:{ss}","current"),t.playerService.getTimecode("{m}:{ss}","total")),n(l,24,0,e.zb(l,25).renderedIconHTML)})}function h(n){return e.Hb(0,[e.Db(671088640,1,{timeSlider:0}),(n()(),e.gb(16777216,null,null,1,null,b)),e.ob(2,16384,null,0,o.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,2,0,t.playerService.file&&t.playerService.playlist)},null)}}}]);