(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{aCKd:function(n,l,o){"use strict";o.r(l);var e=o("CcnG"),t=function(){return function(){}}(),i=o("pMnS"),u=o("oBZk"),r=o("ZZ/e"),c=o("fNgX"),a=o("Hf/j"),s=o("ZYjt"),b=o("ZYCi"),p=o("Ip0R"),d=o("mrSG"),g=o("9sDO"),h=o("6YH3"),f=o("QIP1"),m=o("yYJu"),M=function(){function n(n,l,o,e,t,i,u){this.playlistService=n,this.deviceService=l,this.modalController=o,this.menu=e,this.playerService=t,this.navController=i,this.platform=u,this.isSidebar=!1}return n.prototype.ngOnInit=function(){var n=this;this.menu.enable(this.platform.width()<768),this.playlistService.subscribe(function(l){return n.playlists=l}),this.deviceService.subscribe(function(l){return n.devices=l})},n.prototype.closeMenu=function(){return this.menu.close()},n.prototype.addPlaylist=function(){return d.b(this,void 0,void 0,function(){var n=this;return d.e(this,function(l){return this.playlistService.create().then(function(l){n.navController.navigateForward("/playlist/"+l.id)}),[2]})})},n.prototype.ejectDevice=function(){},n.prototype.importDevice=function(){var n=this;this.closeMenu().then(function(){return d.b(n,void 0,void 0,function(){return d.e(this,function(n){switch(n.label){case 0:return[4,this.modalController.create({component:m.a,animated:!0,backdropDismiss:!1,keyboardClose:!1})];case 1:return[4,n.sent().present()];case 2:return[2,n.sent()]}})})})},n}(),v=e.nb({encapsulation:0,styles:[["[_nghost-%COMP%], [_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:contents}[_nghost-%COMP%]   .device[_ngcontent-%COMP%]{--border-radius:15px;margin:10px}[_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{margin-left:20px}[_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   fa-icon[slot=start][_ngcontent-%COMP%]{margin-right:15px}[_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:hover{opacity:.8}[_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item.active[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item.active[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:var(--ion-color-danger)!important}[_nghost-%COMP%]   .is-sidebar[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{margin-left:0}[_nghost-%COMP%]   .is-sidebar[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{height:calc(100% - 110px);right:-50px;width:calc(100% + 50px);left:0;overflow:hidden}[_nghost-%COMP%]   .is-sidebar[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{padding-right:50px}[_nghost-%COMP%]   .is-sidebar[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{font-size:.8em}[_nghost-%COMP%]   .is-sidebar[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%], [_nghost-%COMP%]   .is-sidebar[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   .is-sidebar[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], [_nghost-%COMP%]   .is-sidebar[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:var(--ion-color-light)}[_nghost-%COMP%]   .is-sidebar[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%]{cursor:pointer;margin:30px 0;position:absolute;height:auto}"]],data:{}});function P(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"fa-icon",[["class","ng-fa-icon"],["icon","volume-up"],["padding-horizontal",""],["size","small"]],[[8,"innerHTML",1]],null,null,c.b,c.a)),e.ob(1,573440,null,0,a.a,[s.b,a.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null)],function(n,l){n(l,1,0,"volume-up","small")},function(n,l){n(l,0,0,e.yb(l,1).renderedIconHTML)})}function C(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,11,"ion-item",[["no-padding",""],["routerLinkActive","active"]],null,[[null,"click"]],function(n,l,o){var t=!0,i=n.component;return"click"===l&&(t=!1!==e.yb(n,2).onClick()&&t),"click"===l&&(t=!1!==e.yb(n,3).onClick(o)&&t),"click"===l&&(t=!1!==i.closeMenu()&&t),t},u.S,u.p)),e.ob(1,49152,null,0,r.G,[e.h,e.k],null,null),e.ob(2,16384,[[5,4]],0,b.n,[b.m,b.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.ob(3,737280,null,0,r.Jb,[p.h,r.Gb,e.k,b.m,[2,b.n]],null,null),e.ob(4,1720320,null,2,b.o,[b.m,e.k,e.D,e.h],{routerLinkActive:[0,"routerLinkActive"]},null),e.Db(603979776,5,{links:1}),e.Db(603979776,6,{linksWithHrefs:1}),(n()(),e.pb(7,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["icon","list"],["slot","start"]],[[8,"innerHTML",1]],null,null,c.b,c.a)),e.ob(8,573440,null,0,a.a,[s.b,a.b],{iconProp:[0,"iconProp"]},null),(n()(),e.Fb(9,0,[" "," "])),(n()(),e.gb(16777216,null,0,1,null,P)),e.ob(11,16384,null,0,p.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var o=l.component;n(l,2,0,"/playlist/"+l.context.$implicit.id),n(l,3,0),n(l,4,0,"active"),n(l,8,0,"list"),n(l,11,0,o.playerService.isPlaylist(l.context.$implicit.id)&&o.playerService.isState("running"))},function(n,l){n(l,7,0,e.yb(l,8).renderedIconHTML),n(l,9,0,l.context.$implicit.name)})}function k(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,2,"small",[],null,null,null,null,null)),(n()(),e.Fb(1,null,["","GB"])),e.Bb(2,2)],null,function(n,l){var o=l.component,t=e.Gb(l,1,0,n(l,2,0,e.yb(l.parent.parent,0),o.devices[0].size/1024/1024/1024,"1.0-0"));n(l,1,0,t)})}function O(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"small",[],null,null,null,null,null)),(n()(),e.Fb(1,null,["And "," more..."]))],null,function(n,l){n(l,1,0,l.component.devices.length-1)})}function _(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,16,"ion-item",[["class","device"],["color","tertiary"]],null,null,null,u.S,u.p)),e.ob(1,49152,null,0,r.G,[e.h,e.k],{color:[0,"color"],lines:[1,"lines"]},null),(n()(),e.pb(2,0,null,0,2,"fa-icon",[["class","ng-fa-icon"],["slot","start"]],[[8,"innerHTML",1]],null,null,c.b,c.a)),e.ob(3,573440,null,0,a.a,[s.b,a.b],{iconProp:[0,"iconProp"]},null),e.zb(4,2),(n()(),e.pb(5,0,null,0,7,"ion-label",[["color","light"],["text-left",""]],null,[[null,"click"]],function(n,l,o){var e=!0;return"click"===l&&(e=!1!==n.component.importDevice()&&e),e},u.T,u.q)),e.ob(6,49152,null,0,r.M,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.pb(7,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),e.Fb(8,null,["",""])),(n()(),e.gb(16777216,null,0,1,null,k)),e.ob(10,16384,null,0,p.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,0,1,null,O)),e.ob(12,16384,null,0,p.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(13,0,null,0,3,"ion-button",[["color","light"],["fill","clear"],["slot","end"]],null,[[null,"click"]],function(n,l,o){var e=!0;return"click"===l&&(e=!1!==n.component.ejectDevice()&&e),e},u.G,u.d)),e.ob(14,49152,null,0,r.j,[e.h,e.k],{color:[0,"color"],fill:[1,"fill"]},null),(n()(),e.pb(15,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["icon","eject"]],[[8,"innerHTML",1]],null,null,c.b,c.a)),e.ob(16,573440,null,0,a.a,[s.b,a.b],{iconProp:[0,"iconProp"]},null)],function(n,l){var o=l.component;n(l,1,0,"tertiary","none");var e=n(l,4,0,"fab","usb");n(l,3,0,e),n(l,6,0,"light"),n(l,10,0,1===o.devices.length),n(l,12,0,o.devices.length>1),n(l,14,0,"light","clear"),n(l,16,0,"eject")},function(n,l){var o=l.component;n(l,2,0,e.yb(l,3).renderedIconHTML),n(l,8,0,o.devices[0].label),n(l,15,0,e.yb(l,16).renderedIconHTML)})}function y(n){return e.Hb(0,[e.Ab(0,p.d,[e.u]),(n()(),e.pb(1,0,null,null,38,"div",[["class","container"]],[[2,"is-sidebar",null]],null,null,null,null)),(n()(),e.pb(2,0,null,null,35,"ion-content",[],null,null,null,u.M,u.j)),e.ob(3,49152,null,0,r.t,[e.h,e.k],null,null),(n()(),e.pb(4,0,null,0,33,"ion-list",[["lines","none"]],null,null,null,u.V,u.r)),e.ob(5,49152,null,0,r.N,[e.h,e.k],{lines:[0,"lines"]},null),(n()(),e.pb(6,0,null,0,9,"ion-item",[["no-padding",""],["routerLink","/home"],["routerLinkActive","active"]],null,[[null,"click"]],function(n,l,o){var t=!0,i=n.component;return"click"===l&&(t=!1!==e.yb(n,8).onClick()&&t),"click"===l&&(t=!1!==e.yb(n,9).onClick(o)&&t),"click"===l&&(t=!1!==i.closeMenu()&&t),t},u.S,u.p)),e.ob(7,49152,null,0,r.G,[e.h,e.k],null,null),e.ob(8,16384,[[1,4]],0,b.n,[b.m,b.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.ob(9,737280,null,0,r.Jb,[p.h,r.Gb,e.k,b.m,[2,b.n]],null,null),e.ob(10,1720320,null,2,b.o,[b.m,e.k,e.D,e.h],{routerLinkActive:[0,"routerLinkActive"]},null),e.Db(603979776,1,{links:1}),e.Db(603979776,2,{linksWithHrefs:1}),(n()(),e.pb(13,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["icon","home"],["slot","start"]],[[8,"innerHTML",1]],null,null,c.b,c.a)),e.ob(14,573440,null,0,a.a,[s.b,a.b],{iconProp:[0,"iconProp"]},null),(n()(),e.Fb(-1,0,[" Home "])),(n()(),e.pb(16,0,null,0,9,"ion-item",[["no-padding",""],["routerLink","/files"],["routerLinkActive","active"]],null,[[null,"click"]],function(n,l,o){var t=!0,i=n.component;return"click"===l&&(t=!1!==e.yb(n,18).onClick()&&t),"click"===l&&(t=!1!==e.yb(n,19).onClick(o)&&t),"click"===l&&(t=!1!==i.closeMenu()&&t),t},u.S,u.p)),e.ob(17,49152,null,0,r.G,[e.h,e.k],null,null),e.ob(18,16384,[[3,4]],0,b.n,[b.m,b.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.ob(19,737280,null,0,r.Jb,[p.h,r.Gb,e.k,b.m,[2,b.n]],null,null),e.ob(20,1720320,null,2,b.o,[b.m,e.k,e.D,e.h],{routerLinkActive:[0,"routerLinkActive"]},null),e.Db(603979776,3,{links:1}),e.Db(603979776,4,{linksWithHrefs:1}),(n()(),e.pb(23,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["icon","folder"],["slot","start"]],[[8,"innerHTML",1]],null,null,c.b,c.a)),e.ob(24,573440,null,0,a.a,[s.b,a.b],{iconProp:[0,"iconProp"]},null),(n()(),e.Fb(-1,0,[" Files "])),(n()(),e.pb(26,0,null,0,4,"ion-list-header",[["no-padding",""]],null,null,null,u.U,u.s)),e.ob(27,49152,null,0,r.O,[e.h,e.k],null,null),(n()(),e.pb(28,0,null,0,2,"ion-label",[["align-items-baseline",""]],null,null,null,u.T,u.q)),e.ob(29,49152,null,0,r.M,[e.h,e.k],null,null),(n()(),e.Fb(-1,0,[" Playlists "])),(n()(),e.gb(16777216,null,0,1,null,C)),e.ob(32,278528,null,0,p.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.pb(33,0,null,0,4,"ion-item",[["no-padding",""]],null,[[null,"click"]],function(n,l,o){var e=!0;return"click"===l&&(e=!1!==n.component.addPlaylist()&&e),e},u.S,u.p)),e.ob(34,49152,null,0,r.G,[e.h,e.k],null,null),(n()(),e.pb(35,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["icon","plus"],["slot","start"]],[[8,"innerHTML",1]],null,null,c.b,c.a)),e.ob(36,573440,null,0,a.a,[s.b,a.b],{iconProp:[0,"iconProp"]},null),(n()(),e.Fb(-1,0,[" New Playlist "])),(n()(),e.gb(16777216,null,null,1,null,_)),e.ob(39,16384,null,0,p.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var o=l.component;n(l,5,0,"none"),n(l,8,0,"/home"),n(l,9,0),n(l,10,0,"active"),n(l,14,0,"home"),n(l,18,0,"/files"),n(l,19,0),n(l,20,0,"active"),n(l,24,0,"folder"),n(l,32,0,o.playlists),n(l,36,0,"plus"),n(l,39,0,(null==o.devices?null:o.devices.length)>0)},function(n,l){n(l,1,0,l.component.isSidebar),n(l,13,0,e.yb(l,14).renderedIconHTML),n(l,23,0,e.yb(l,24).renderedIconHTML),n(l,35,0,e.yb(l,36).renderedIconHTML)})}var w=o("gIcY"),L=function(){function n(n,l){this.platform=n,this.playerService=l,this.volumeSlider=!1}return n.prototype.ngOnInit=function(){},n}(),x=e.nb({encapsulation:0,styles:[["[_nghost-%COMP%]   .songTitle[_ngcontent-%COMP%]{width:180px;text-align:center;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}[_nghost-%COMP%]   .songTitle[_ngcontent-%COMP%]   .artist[_ngcontent-%COMP%]{font-size:12px;text-overflow:ellipsis;overflow:hidden}[_nghost-%COMP%]   .songTitle[_ngcontent-%COMP%]   .song[_ngcontent-%COMP%]{display:block;font-weight:700;text-overflow:ellipsis;overflow:hidden}[_nghost-%COMP%]   .songTitle[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .songTitle[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{height:48px;padding-bottom:10px}@media only screen and (max-width:768px){[_nghost-%COMP%]   .songTitle[_ngcontent-%COMP%]{margin-top:-8px;font-size:12px;width:100%;text-align:center}[_nghost-%COMP%]   .songTitle[_ngcontent-%COMP%]   .artist[_ngcontent-%COMP%], [_nghost-%COMP%]   .songTitle[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%], [_nghost-%COMP%]   .songTitle[_ngcontent-%COMP%]   .song[_ngcontent-%COMP%]{display:inline}[_nghost-%COMP%]   .controls[_ngcontent-%COMP%]{padding-top:10px}}[_nghost-%COMP%]   .time-slider[_ngcontent-%COMP%]{--knob-size:0;--bar-height:4px;--bar-border-radius:2px;margin-top:-20px}[_nghost-%COMP%]   .time-slider[_ngcontent-%COMP%]:hover{--knob-size:20px}[_nghost-%COMP%]   .list-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   .volume-icon[_ngcontent-%COMP%]{min-width:50px}[_nghost-%COMP%]   ion-button[_ngcontent-%COMP%]{outline:0}[_nghost-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{position:absolute;top:2px;right:5.5px;font-size:9px;border-radius:16px;padding:1px;width:12px;height:12px;text-align:center;color:var(--ion-color-tertiary)}[_nghost-%COMP%]   ion-button.active[_ngcontent-%COMP%]{color:var(--ion-color-success)}"]],data:{}});function S(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"ion-img",[],null,null,null,u.Q,u.n)),e.ob(1,49152,null,0,r.C,[e.h,e.k],{src:[0,"src"]},null)],function(n,l){var o=l.component;n(l,1,0,null==o.playerService.file?null:o.playerService.file.thumbnail)},null)}function H(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,53,"ion-toolbar",[["color","tertiary"]],null,null,null,u.fb,u.C)),e.ob(1,49152,null,0,r.Ab,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.pb(2,0,null,0,13,"ion-buttons",[["class","controls"],["justify-content-center",""],["padding",""]],null,null,null,u.H,u.e)),e.ob(3,49152,null,0,r.k,[e.h,e.k],null,null),(n()(),e.pb(4,0,null,0,3,"ion-button",[["shape","round"]],null,null,null,u.G,u.d)),e.ob(5,49152,null,0,r.j,[e.h,e.k],{shape:[0,"shape"]},null),(n()(),e.pb(6,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["icon","step-backward"],["size","1x"],["slot","icon-only"]],[[8,"innerHTML",1]],null,null,c.b,c.a)),e.ob(7,573440,null,0,a.a,[s.b,a.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),(n()(),e.pb(8,0,null,0,3,"ion-button",[["padding",""],["shape","round"]],null,[[null,"click"]],function(n,l,o){var e=!0;return"click"===l&&(e=!1!==n.component.playerService.toggleState()&&e),e},u.G,u.d)),e.ob(9,49152,null,0,r.j,[e.h,e.k],{shape:[0,"shape"]},null),(n()(),e.pb(10,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["size","2x"],["slot","icon-only"]],[[8,"innerHTML",1]],null,null,c.b,c.a)),e.ob(11,573440,null,0,a.a,[s.b,a.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),(n()(),e.pb(12,0,null,0,3,"ion-button",[["shape","round"]],null,null,null,u.G,u.d)),e.ob(13,49152,null,0,r.j,[e.h,e.k],{shape:[0,"shape"]},null),(n()(),e.pb(14,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["icon","step-forward"],["size","1x"],["slot","icon-only"]],[[8,"innerHTML",1]],null,null,c.b,c.a)),e.ob(15,573440,null,0,a.a,[s.b,a.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),(n()(),e.pb(16,0,null,0,8,"div",[["class","songTitle"]],[[8,"slot",0]],null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,S)),e.ob(18,16384,null,0,p.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(19,0,null,null,1,"span",[["class","song"]],null,null,null,null,null)),(n()(),e.Fb(20,null,["",""])),(n()(),e.pb(21,0,null,null,1,"span",[["class","sep"]],null,null,null,null,null)),(n()(),e.Fb(-1,null,[" - "])),(n()(),e.pb(23,0,null,null,1,"span",[["class","artist"]],null,null,null,null,null)),(n()(),e.Fb(24,null,["",""])),(n()(),e.pb(25,0,null,0,7,"ion-range",[["class","time-slider"],["color","danger"],["min","0"],["mode","md"]],[[8,"hidden",0]],[[null,"pointerup"],[null,"pointerdown"],[null,"ionChange"],[null,"contextmenu"],[null,"ionBlur"]],function(n,l,o){var t=!0,i=n.component;return"ionBlur"===l&&(t=!1!==e.yb(n,28)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.yb(n,28)._handleChangeEvent(o.target.value)&&t),"pointerup"===l&&(t=!1!==(1===o.which?i.playerService.toggleState():o.preventDefault())&&t),"pointerdown"===l&&(t=!1!==(1===o.which?i.playerService.toggleState():o.preventDefault())&&t),"ionChange"===l&&(t=!1!==(i.playerService.isState("paused")?i.playerService.setCurrentTime(o.detail.value):null)&&t),"contextmenu"===l&&(t=!1!==o.preventDefault()&&t),t},u.Y,u.v)),e.Cb(5120,null,w.d,function(n){return[n]},[r.Kb]),e.ob(27,49152,null,0,r.ab,[e.h,e.k],{color:[0,"color"],mode:[1,"mode"],min:[2,"min"],max:[3,"max"],value:[4,"value"]},null),e.ob(28,16384,null,0,r.Kb,[e.k],null,null),(n()(),e.pb(29,0,null,0,1,"span",[["slot","start"]],null,null,null,null,null)),(n()(),e.Fb(30,null,["",""])),(n()(),e.pb(31,0,null,0,1,"span",[["slot","end"]],null,null,null,null,null)),(n()(),e.Fb(32,null,["",""])),(n()(),e.pb(33,0,null,0,10,"ion-buttons",[["padding",""]],[[8,"slot",0]],null,null,u.H,u.e)),e.ob(34,49152,null,0,r.k,[e.h,e.k],null,null),(n()(),e.pb(35,0,null,0,8,"ion-button",[["class","list-icon"],["routerDirection","forward"],["routerLink","/queue"],["routerLinkActive","active"]],null,[[null,"click"]],function(n,l,o){var t=!0;return"click"===l&&(t=!1!==e.yb(n,37).onClick()&&t),"click"===l&&(t=!1!==e.yb(n,38).onClick(o)&&t),t},u.G,u.d)),e.ob(36,49152,null,0,r.j,[e.h,e.k],{routerDirection:[0,"routerDirection"]},null),e.ob(37,16384,[[1,4]],0,b.n,[b.m,b.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.ob(38,737280,null,0,r.Jb,[p.h,r.Gb,e.k,b.m,[2,b.n]],{routerDirection:[0,"routerDirection"]},null),e.ob(39,1720320,null,2,b.o,[b.m,e.k,e.D,e.h],{routerLinkActive:[0,"routerLinkActive"]},null),e.Db(603979776,1,{links:1}),e.Db(603979776,2,{linksWithHrefs:1}),(n()(),e.pb(42,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["icon","list"],["size","1x"],["slot","icon-only"]],[[8,"innerHTML",1]],null,null,c.b,c.a)),e.ob(43,573440,null,0,a.a,[s.b,a.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),(n()(),e.pb(44,0,null,0,9,"ion-buttons",[["padding",""]],[[8,"slot",0]],null,null,u.H,u.e)),e.ob(45,49152,null,0,r.k,[e.h,e.k],null,null),(n()(),e.pb(46,0,null,0,3,"ion-button",[["class","volume-icon"],["shape","round"],["size","large"],["slot","start"]],null,[[null,"click"]],function(n,l,o){var e=!0;return"click"===l&&(e=!1!==n.component.playerService.toggleMute()&&e),e},u.G,u.d)),e.ob(47,49152,null,0,r.j,[e.h,e.k],{shape:[0,"shape"],size:[1,"size"]},null),(n()(),e.pb(48,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["slot","icon-only"]],[[8,"innerHTML",1]],null,null,c.b,c.a)),e.ob(49,573440,null,0,a.a,[s.b,a.b],{iconProp:[0,"iconProp"]},null),(n()(),e.pb(50,0,null,0,3,"ion-range",[["color","light"],["max","100"],["min","0"],["snaps","true"],["step","2"],["style","min-width: 150px"]],[[8,"hidden",0]],[[null,"pointerup"],[null,"pointerdown"],[null,"contextmenu"],[null,"ionChange"],[null,"ionBlur"]],function(n,l,o){var t=!0,i=n.component;return"ionBlur"===l&&(t=!1!==e.yb(n,53)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.yb(n,53)._handleChangeEvent(o.target.value)&&t),"pointerup"===l&&(t=!1!==(1!==o.which?o.preventDefault():null)&&t),"pointerdown"===l&&(t=!1!==(1!==o.which?o.preventDefault():null)&&t),"contextmenu"===l&&(t=!1!==o.preventDefault()&&t),"ionChange"===l&&(t=!1!==i.playerService.setVolume(o.detail.value)&&t),t},u.Y,u.v)),e.Cb(5120,null,w.d,function(n){return[n]},[r.Kb]),e.ob(52,49152,null,0,r.ab,[e.h,e.k],{color:[0,"color"],min:[1,"min"],max:[2,"max"],snaps:[3,"snaps"],step:[4,"step"],value:[5,"value"]},null),e.ob(53,16384,null,0,r.Kb,[e.k],null,null)],function(n,l){var o=l.component;n(l,1,0,"tertiary"),n(l,5,0,"round"),n(l,7,0,"step-backward","1x"),n(l,9,0,"round"),n(l,11,0,o.playerService.isState("running")?"pause":"play","2x"),n(l,13,0,"round"),n(l,15,0,"step-forward","1x"),n(l,18,0,o.platform.width()>=768&&(null==o.playerService.file?null:o.playerService.file.thumbnail)),n(l,27,0,"danger","md","0",o.playerService.totalTime().time,o.playerService.currentTime().time),n(l,36,0,"forward"),n(l,37,0,"/queue"),n(l,38,0,"forward"),n(l,39,0,"active"),n(l,43,0,"list","1x"),n(l,47,0,"round","large"),n(l,49,0,o.playerService.isMuted()?"volume-mute":o.playerService.getVolume()<25?"volume-off":o.playerService.getVolume()<75?"volume-down":"volume-up"),n(l,52,0,"light","0","100","true","2",o.playerService.getVolume())},function(n,l){var o=l.component;n(l,6,0,e.yb(l,7).renderedIconHTML),n(l,10,0,e.yb(l,11).renderedIconHTML),n(l,14,0,e.yb(l,15).renderedIconHTML),n(l,16,0,o.platform.width()<768?"":"start"),n(l,20,0,o.playerService.file?o.playerService.file.title?o.playerService.file.title:o.playerService.file.filename:""),n(l,24,0,null!=o.playerService.file&&o.playerService.file.artist?o.playerService.file.artist:""),n(l,25,0,o.platform.width()<768),n(l,30,0,o.playerService.getTimecode("{m}:{ss}","current")),n(l,32,0,o.playerService.getTimecode("{m}:{ss}","total")),n(l,33,0,o.platform.width()>768?"start":"end"),n(l,42,0,e.yb(l,43).renderedIconHTML),n(l,44,0,o.platform.width()<768?"start":"end"),n(l,48,0,e.yb(l,49).renderedIconHTML),n(l,50,0,o.platform.width()<768)})}var z=o("8LIK"),T=function(){function n(n,l){this.platform=n,this.playerService=l}return n.prototype.ngAfterViewInit=function(){n.initialized||z.a.run([z.a.animate(this.header.el,z.a.fadeIn),z.a.animate(this.footer.el,z.a.fadeIn,{delay:50}),z.a.animate(this.content.el,z.a.fadeIn,{delay:300})]).then(function(){n.initialized=!0})},n.initialized=!1,n}(),I=e.nb({encapsulation:0,styles:[["[_nghost-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--color:var(--ion-color-light);--background:transparent}[_nghost-%COMP%]   ion-header[_ngcontent-%COMP%]::after{background-image:none}[_nghost-%COMP%]   ion-menu[_ngcontent-%COMP%]{--background:var(--ion-color-light);z-index:999999}[_nghost-%COMP%]   ion-grid[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-grid[_ngcontent-%COMP%] > ion-row[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-grid[_ngcontent-%COMP%] > ion-row[_ngcontent-%COMP%] > ion-col[_ngcontent-%COMP%]{height:100%}[_nghost-%COMP%]   .sidebar[_ngcontent-%COMP%]{overflow:hidden}[_nghost-%COMP%]   .volume-slider[_ngcontent-%COMP%]{position:absolute;left:10px;width:200px!important;bottom:80px;background:rgba(255,255,255,.3);z-index:999;border-radius:15px}[_nghost-%COMP%]   .volume-slider[_ngcontent-%COMP%]   ion-range[_ngcontent-%COMP%]{padding:0 20px}"]],data:{}});function D(n){return e.Hb(0,[e.Db(402653184,1,{header:0}),e.Db(402653184,2,{content:0}),e.Db(402653184,3,{footer:0}),(n()(),e.pb(3,0,null,null,17,"ion-header",[],null,null,null,u.P,u.m)),e.ob(4,49152,[[1,4],["header",4]],0,r.A,[e.h,e.k],null,null),(n()(),e.pb(5,0,null,0,15,"ion-toolbar",[],null,null,null,u.fb,u.C)),e.ob(6,49152,null,0,r.Ab,[e.h,e.k],null,null),(n()(),e.pb(7,0,null,0,3,"div",[["padding",""]],null,null,null,null,null)),(n()(),e.pb(8,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),e.Fb(-1,null,["Artist"])),(n()(),e.Fb(-1,null,["Player "])),(n()(),e.pb(11,0,null,0,5,"ion-menu-toggle",[["slot","start"]],[[8,"hidden",0]],null,null,u.W,u.u)),e.ob(12,49152,null,0,r.R,[e.h,e.k],null,null),(n()(),e.pb(13,0,null,0,3,"ion-button",[["color","light"],["fill","clear"]],null,null,null,u.G,u.d)),e.ob(14,49152,null,0,r.j,[e.h,e.k],{color:[0,"color"],fill:[1,"fill"]},null),(n()(),e.pb(15,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["icon","bars"]],[[8,"innerHTML",1]],null,null,c.b,c.a)),e.ob(16,573440,null,0,a.a,[s.b,a.b],{iconProp:[0,"iconProp"]},null),(n()(),e.pb(17,0,null,0,3,"ion-button",[["color","light"],["fill","clear"],["slot","end"]],null,null,null,u.G,u.d)),e.ob(18,49152,null,0,r.j,[e.h,e.k],{color:[0,"color"],fill:[1,"fill"]},null),(n()(),e.pb(19,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["icon","ellipsis-v"]],[[8,"innerHTML",1]],null,null,c.b,c.a)),e.ob(20,573440,null,0,a.a,[s.b,a.b],{iconProp:[0,"iconProp"]},null),(n()(),e.pb(21,0,null,null,16,"ion-menu",[["side","start"]],null,null,null,u.X,u.t)),e.ob(22,49152,null,0,r.P,[e.h,e.k],{side:[0,"side"]},null),(n()(),e.pb(23,0,null,0,12,"ion-header",[],null,null,null,u.P,u.m)),e.ob(24,49152,null,0,r.A,[e.h,e.k],null,null),(n()(),e.pb(25,0,null,0,10,"ion-toolbar",[["color","tertiary"]],null,null,null,u.fb,u.C)),e.ob(26,49152,null,0,r.Ab,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.pb(27,0,null,0,2,"ion-title",[],null,null,null,u.eb,u.B)),e.ob(28,49152,null,0,r.yb,[e.h,e.k],null,null),(n()(),e.Fb(-1,0,["Navigation"])),(n()(),e.pb(30,0,null,0,5,"ion-menu-toggle",[["slot","start"]],null,null,null,u.W,u.u)),e.ob(31,49152,null,0,r.R,[e.h,e.k],null,null),(n()(),e.pb(32,0,null,0,3,"ion-button",[["color","light"],["fill","clear"]],null,null,null,u.G,u.d)),e.ob(33,49152,null,0,r.j,[e.h,e.k],{color:[0,"color"],fill:[1,"fill"]},null),(n()(),e.pb(34,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["icon","times"]],[[8,"innerHTML",1]],null,null,c.b,c.a)),e.ob(35,573440,null,0,a.a,[s.b,a.b],{iconProp:[0,"iconProp"]},null),(n()(),e.pb(36,0,null,0,1,"app-sidemenu",[],null,null,null,y,v)),e.ob(37,114688,null,0,M,[g.a,h.a,r.Fb,r.Eb,f.a,r.Gb,r.Hb],null,null),(n()(),e.pb(38,0,null,null,13,"ion-content",[["main",""]],null,null,null,u.M,u.j)),e.ob(39,49152,null,0,r.t,[e.h,e.k],null,null),(n()(),e.pb(40,0,null,0,11,"ion-grid",[],null,null,null,u.O,u.l)),e.ob(41,49152,[[2,4],["content",4]],0,r.z,[e.h,e.k],null,null),(n()(),e.pb(42,0,null,0,9,"ion-row",[],null,null,null,u.bb,u.y)),e.ob(43,49152,null,0,r.hb,[e.h,e.k],null,null),(n()(),e.pb(44,0,null,0,3,"ion-col",[["class","sidebar"],["padding-horizontal",""]],[[8,"hidden",0]],null,null,u.L,u.i)),e.ob(45,49152,null,0,r.s,[e.h,e.k],{size:[0,"size"],sizeMd:[1,"sizeMd"],sizeLg:[2,"sizeLg"],sizeXl:[3,"sizeXl"]},null),(n()(),e.pb(46,0,null,0,1,"app-sidemenu",[],null,null,null,y,v)),e.ob(47,114688,null,0,M,[g.a,h.a,r.Fb,r.Eb,f.a,r.Gb,r.Hb],{isSidebar:[0,"isSidebar"]},null),(n()(),e.pb(48,0,null,0,3,"ion-col",[],null,null,null,u.L,u.i)),e.ob(49,49152,null,0,r.s,[e.h,e.k],{size:[0,"size"],sizeMd:[1,"sizeMd"],sizeLg:[2,"sizeLg"],sizeXl:[3,"sizeXl"]},null),(n()(),e.pb(50,16777216,null,0,1,"ion-router-outlet",[],null,null,null,null,null)),e.ob(51,212992,null,0,r.gb,[b.b,e.O,e.j,[8,null],[8,null],e.h,r.d,r.Gb,e.k,b.m,e.z,b.a,[3,r.gb]],null,null),(n()(),e.pb(52,0,null,null,3,"ion-footer",[],null,null,null,u.N,u.k)),e.ob(53,49152,[[3,4],["footer",4]],0,r.y,[e.h,e.k],null,null),(n()(),e.pb(54,0,null,0,1,"app-player",[],null,null,null,H,x)),e.ob(55,114688,null,0,L,[r.Hb,f.a],null,null)],function(n,l){n(l,14,0,"light","clear"),n(l,16,0,"bars"),n(l,18,0,"light","clear"),n(l,20,0,"ellipsis-v"),n(l,22,0,"start"),n(l,26,0,"tertiary"),n(l,33,0,"light","clear"),n(l,35,0,"times"),n(l,37,0),n(l,45,0,12,3,3,3),n(l,47,0,!0),n(l,49,0,12,9,8,7),n(l,51,0),n(l,55,0)},function(n,l){var o=l.component;n(l,11,0,o.platform.width()>768),n(l,15,0,e.yb(l,16).renderedIconHTML),n(l,19,0,e.yb(l,20).renderedIconHTML),n(l,34,0,e.yb(l,35).renderedIconHTML),n(l,44,0,o.platform.width()<768)})}function j(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"app-container",[],null,null,null,D,I)),e.ob(1,4243456,null,0,T,[r.Hb,f.a],null,null)],null,null)}var F=e.lb("app-container",T,j,{},{},[]),G=o("pOMB"),A=o("xjSJ"),B=o("3Wfy"),q=o("73Sr"),J=function(){return function(){}}(),Y=o("dvLv"),N=function(){return function(){}}(),V=o("mRNh"),W=o("VSlL"),E=o("+3c9"),K=o("YT5h"),X=function(){return function(){}}(),Z=o("9khA");o.d(l,"ContainerPageModuleNgFactory",function(){return R});var R=e.mb(t,[],function(n){return e.vb([e.wb(512,e.j,e.bb,[[8,[i.a,F,G.a,A.a,B.a,q.a]],[3,e.j],e.x]),e.wb(4608,p.l,p.k,[e.u,[2,p.r]]),e.wb(4608,w.m,w.m,[]),e.wb(4608,r.b,r.b,[e.z,e.g]),e.wb(4608,r.Fb,r.Fb,[r.b,e.j,e.q]),e.wb(4608,r.Ib,r.Ib,[r.b,e.j,e.q]),e.wb(1073742336,p.b,p.b,[]),e.wb(1073742336,w.k,w.k,[]),e.wb(1073742336,w.b,w.b,[]),e.wb(1073742336,r.Cb,r.Cb,[]),e.wb(1073742336,b.p,b.p,[[2,b.v],[2,b.m]]),e.wb(1073742336,J,J,[]),e.wb(1073742336,a.f,a.f,[]),e.wb(1073742336,Y.a,Y.a,[]),e.wb(1073742336,N,N,[]),e.wb(1073742336,V.a,V.a,[]),e.wb(1073742336,W.a,W.a,[]),e.wb(1073742336,E.a,E.a,[]),e.wb(1073742336,K.a,K.a,[]),e.wb(1073742336,X,X,[]),e.wb(1073742336,t,t,[]),e.wb(1024,b.k,function(){return[[{path:"",component:T,children:[{path:"home",loadChildren:"../home/home.module#HomePageModule"},{path:"files",loadChildren:"../files/files.module#FilesPageModule"},{path:"playlist/:id",loadChildren:"../playlist/playlist.module#PlaylistPageModule"},{path:"collection/:id",loadChildren:"../collection/collection.module#CollectionPageModule"},{path:"queue",loadChildren:"../queue/queue.module#QueuePageModule"},{path:"",redirectTo:"home",pathMatch:"full"}]}],[{path:"",component:Z.a}]]},[])])})}}]);