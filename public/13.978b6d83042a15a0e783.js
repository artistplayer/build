(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"6YH3":function(n,l,t){"use strict";t.d(l,"a",function(){return r});var e=t("mrSG"),u=t("Ovi0"),o=t("CcnG"),i=t("t/Na"),r=function(n){function l(){var l=null!==n&&n.apply(this,arguments)||this;return l.name="devices",l.location="/api/v1/devices",l}return e.d(l,n),l.ngInjectableDef=o.S({factory:function(){return new l(o.W(i.c))},token:l,providedIn:"root"}),l}(u.b)},dvLv:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){return function(){}}()},pOMB:function(n,l,t){"use strict";var e=t("CcnG"),u=t("oBZk"),o=t("ZZ/e"),i=t("gIcY"),r=t("fNgX"),c=t("Hf/j"),s=t("ZYjt"),a=t("Ip0R"),b=t("yYJu"),h=t("6YH3"),d=t("gRba");t.d(l,"a",function(){return w});var p=e.nb({encapsulation:0,styles:[["[_nghost-%COMP%]{background:#fff;border-radius:25px}[_nghost-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--color:var(--ion-color-light);--background:transparent}[_nghost-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{padding:0 10px!important}[_nghost-%COMP%]   ion-header[_ngcontent-%COMP%]::after{background-image:none}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{border-radius:15px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{min-width:50px;text-align:center}[_nghost-%COMP%]   ion-footer[_ngcontent-%COMP%]::before{background-image:none}[_nghost-%COMP%]   .importCompleted[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;position:absolute;width:100%;height:100%}[_nghost-%COMP%]   .importCompleted[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{box-shadow:none;-webkit-box-shadow:none}"]],data:{}});function g(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,12,"ion-toolbar",[],null,null,null,u.hb,u.D)),e.ob(1,49152,null,0,o.Ab,[e.h,e.k],null,null),(n()(),e.pb(2,0,null,0,3,"ion-checkbox",[["margin",""],["slot","start"]],null,[[null,"click"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==e.zb(n,5)._handleBlurEvent()&&u),"ionChange"===l&&(u=!1!==e.zb(n,5)._handleIonChange(t.target.checked)&&u),"click"===l&&(u=!1!==o.select(!0)&&u),u},u.L,u.h)),e.Db(5120,null,i.d,function(n){return[n]},[o.c]),e.ob(4,49152,null,0,o.q,[e.h,e.k],{checked:[0,"checked"]},null),e.ob(5,16384,null,0,o.c,[e.k],null,null),(n()(),e.pb(6,0,null,0,6,"ion-searchbar",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==e.zb(n,7)._handleBlurEvent()&&u),"ionChange"===l&&(u=!1!==e.zb(n,7)._handleInputEvent(t.target.value)&&u),"ngModelChange"===l&&(u=!1!==(o.searchTerm=t)&&u),"ngModelChange"===l&&(u=!1!==o.search()&&u),u},u.eb,u.A)),e.ob(7,16384,null,0,o.Lb,[e.k],null,null),e.Db(1024,null,i.d,function(n){return[n]},[o.Lb]),e.ob(9,671744,null,0,i.i,[[8,null],[8,null],[8,null],[6,i.d]],{model:[0,"model"]},{update:"ngModelChange"}),e.Db(2048,null,i.e,null,[i.i]),e.ob(11,16384,null,0,i.f,[[4,i.e]],null,null),e.ob(12,49152,null,0,o.ib,[e.h,e.k],null,null)],function(n,l){var t=l.component;n(l,4,0,t.allSelected),n(l,9,0,t.searchTerm)},function(n,l){n(l,6,0,e.zb(l,11).ngClassUntouched,e.zb(l,11).ngClassTouched,e.zb(l,11).ngClassPristine,e.zb(l,11).ngClassDirty,e.zb(l,11).ngClassValid,e.zb(l,11).ngClassInvalid,e.zb(l,11).ngClassPending)})}function f(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,14,"ion-col",[["no-padding",""]],null,null,null,u.M,u.i)),e.ob(1,49152,null,0,o.s,[e.h,e.k],{size:[0,"size"],sizeSm:[1,"sizeSm"]},null),(n()(),e.pb(2,0,null,0,12,"ion-card",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.openDevice(n.context.$implicit.id)&&e),e},u.K,u.f)),e.ob(3,49152,null,0,o.l,[e.h,e.k],null,null),(n()(),e.pb(4,0,null,0,10,"ion-item",[["color","tertiary"],["text-center",""]],null,null,null,u.U,u.q)),e.ob(5,49152,null,0,o.G,[e.h,e.k],{color:[0,"color"],button:[1,"button"]},null),(n()(),e.pb(6,0,null,0,2,"fa-icon",[["class","ng-fa-icon"],["size","2x"],["slot","start"]],[[8,"innerHTML",1]],null,null,r.b,r.a)),e.ob(7,573440,null,0,c.a,[s.b,c.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),e.Ab(8,2),(n()(),e.pb(9,0,null,0,1,"div",[["padding-vertical",""],["text-center",""]],null,null,null,null,null)),(n()(),e.Gb(10,null,[" "," "])),(n()(),e.pb(11,0,null,0,3,"ion-badge",[["color","light"],["slot","end"]],null,null,null,u.G,u.c)),e.ob(12,49152,null,0,o.i,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.Gb(13,0,[" ","GB "])),e.Cb(14,2)],function(n,l){n(l,1,0,12,6),n(l,5,0,"tertiary",!0);var t=n(l,8,0,"fab","usb");n(l,7,0,t,"2x"),n(l,12,0,"light")},function(n,l){n(l,6,0,e.zb(l,7).renderedIconHTML),n(l,10,0,l.context.$implicit.label);var t=e.Hb(l,13,0,n(l,14,0,e.zb(l.parent.parent,0),l.context.$implicit.size/1024/1024/1024,"1.2-2"));n(l,13,0,t)})}function m(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,5,"ion-grid",[],null,null,null,u.P,u.l)),e.ob(1,49152,null,0,o.z,[e.h,e.k],null,null),(n()(),e.pb(2,0,null,0,3,"ion-row",[["align-items-baseline",""],["justify-content-center",""]],null,null,null,u.db,u.z)),e.ob(3,49152,null,0,o.hb,[e.h,e.k],null,null),(n()(),e.gb(16777216,null,0,1,null,f)),e.ob(5,278528,null,0,a.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,5,0,l.component.devices)},null)}function v(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,4,"ion-item",[],null,null,null,u.U,u.q)),e.ob(1,49152,null,0,o.G,[e.h,e.k],null,null),(n()(),e.pb(2,0,null,0,2,"ion-label",[["text-center",""]],null,null,null,u.V,u.r)),e.ob(3,49152,null,0,o.M,[e.h,e.k],null,null),(n()(),e.Gb(-1,0,[" No new files to import. "]))],null,null)}function C(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,16,"ion-item",[],null,null,null,u.U,u.q)),e.ob(1,49152,null,0,o.G,[e.h,e.k],null,null),(n()(),e.pb(2,0,null,0,6,"ion-checkbox",[["slot","start"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"click"],[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==e.zb(n,3)._handleBlurEvent()&&u),"ionChange"===l&&(u=!1!==e.zb(n,3)._handleIonChange(t.target.checked)&&u),"click"===l&&(u=!1!==o.select()&&u),"ngModelChange"===l&&(u=!1!==(o.selected[n.context.$implicit.integrity_hash]=t)&&u),u},u.L,u.h)),e.ob(3,16384,null,0,o.c,[e.k],null,null),e.Db(1024,null,i.d,function(n){return[n]},[o.c]),e.ob(5,671744,null,0,i.i,[[8,null],[8,null],[8,null],[6,i.d]],{model:[0,"model"]},{update:"ngModelChange"}),e.Db(2048,null,i.e,null,[i.i]),e.ob(7,16384,null,0,i.f,[[4,i.e]],null,null),e.ob(8,49152,null,0,o.q,[e.h,e.k],null,null),(n()(),e.pb(9,0,null,0,3,"ion-label",[],null,null,null,u.V,u.r)),e.ob(10,49152,null,0,o.M,[e.h,e.k],null,null),(n()(),e.pb(11,0,null,0,1,"small",[],null,null,null,null,null)),(n()(),e.Gb(12,null,["",""])),(n()(),e.pb(13,0,null,0,3,"ion-badge",[["slot","end"]],null,null,null,u.G,u.c)),e.ob(14,49152,null,0,o.i,[e.h,e.k],null,null),(n()(),e.Gb(15,0,[" "," MB "])),e.Cb(16,2)],function(n,l){n(l,5,0,l.component.selected[l.context.$implicit.integrity_hash])},function(n,l){n(l,2,0,e.zb(l,7).ngClassUntouched,e.zb(l,7).ngClassTouched,e.zb(l,7).ngClassPristine,e.zb(l,7).ngClassDirty,e.zb(l,7).ngClassValid,e.zb(l,7).ngClassInvalid,e.zb(l,7).ngClassPending),n(l,12,0,l.context.$implicit.filename);var t=e.Hb(l,15,0,n(l,16,0,e.zb(l.parent.parent,0),l.context.$implicit.filesize/1024/1024,"1.0-0"));n(l,15,0,t)})}function I(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,5,"ion-list",[],null,null,null,u.X,u.s)),e.ob(1,49152,null,0,o.N,[e.h,e.k],null,null),(n()(),e.gb(16777216,null,0,1,null,v)),e.ob(3,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,0,1,null,C)),e.ob(5,278528,null,0,a.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,3,0,t.result.length<1),n(l,5,0,t.result)},null)}function k(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,3,"ion-badge",[["color","success"],["slot","end"]],null,null,null,u.G,u.c)),e.ob(1,49152,null,0,o.i,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.pb(2,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["icon","check"]],[[8,"innerHTML",1]],null,null,r.b,r.a)),e.ob(3,573440,null,0,c.a,[s.b,c.b],{iconProp:[0,"iconProp"]},null)],function(n,l){n(l,1,0,"success"),n(l,3,0,"check")},function(n,l){n(l,2,0,e.zb(l,3).renderedIconHTML)})}function O(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,3,"ion-badge",[["color","danger"],["slot","end"]],null,null,null,u.G,u.c)),e.ob(1,49152,null,0,o.i,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.pb(2,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["icon","times"]],[[8,"innerHTML",1]],null,null,r.b,r.a)),e.ob(3,573440,null,0,c.a,[s.b,c.b],{iconProp:[0,"iconProp"]},null)],function(n,l){n(l,1,0,"danger"),n(l,3,0,"times")},function(n,l){n(l,2,0,e.zb(l,3).renderedIconHTML)})}function M(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,1,"ion-spinner",[["slot","end"]],null,null,null,u.fb,u.B)),e.ob(1,49152,null,0,o.qb,[e.h,e.k],null,null)],null,null)}function _(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,10,"ion-item",[],null,null,null,u.U,u.q)),e.ob(1,49152,null,0,o.G,[e.h,e.k],null,null),(n()(),e.gb(16777216,null,0,1,null,k)),e.ob(3,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,0,1,null,O)),e.ob(5,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(6,0,null,0,2,"ion-label",[],null,null,null,u.V,u.r)),e.ob(7,49152,null,0,o.M,[e.h,e.k],null,null),(n()(),e.Gb(8,0,["",""])),(n()(),e.gb(16777216,null,0,1,null,M)),e.ob(10,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,3,0,t.processed[l.context.$implicit.integrity_hash]),n(l,5,0,t.processed.hasOwnProperty(l.context.$implicit.integrity_hash)&&!t.processed[l.context.$implicit.integrity_hash]),n(l,10,0,!t.processed.hasOwnProperty(l.context.$implicit.integrity_hash))},function(n,l){n(l,8,0,l.context.$implicit.filename)})}function P(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,3,"ion-list",[],null,null,null,u.X,u.s)),e.ob(1,49152,null,0,o.N,[e.h,e.k],null,null),(n()(),e.gb(16777216,null,0,1,null,_)),e.ob(3,278528,null,0,a.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,3,0,l.component.importItems)},null)}function y(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,6,"div",[["class","importCompleted"]],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,5,"ion-card",[],null,null,null,u.K,u.f)),e.ob(2,49152,null,0,o.l,[e.h,e.k],null,null),(n()(),e.pb(3,0,null,0,3,"ion-card-content",[["text-center",""]],null,null,null,u.J,u.g)),e.ob(4,49152,null,0,o.m,[e.h,e.k],null,null),(n()(),e.pb(5,0,null,0,1,"h1",[],null,null,null,null,null)),(n()(),e.Gb(-1,null,["Import completed"]))],null,null)}function z(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,6,"ion-footer",[],null,null,null,u.O,u.k)),e.ob(1,49152,null,0,o.y,[e.h,e.k],null,null),(n()(),e.pb(2,0,null,0,4,"ion-toolbar",[["color","success"]],null,null,null,u.hb,u.D)),e.ob(3,49152,null,0,o.Ab,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.pb(4,0,null,0,2,"ion-button",[["color","light"],["expand","block"],["fill","clear"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.startImport()&&e),e},u.H,u.d)),e.ob(5,49152,null,0,o.j,[e.h,e.k],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(n()(),e.Gb(-1,0,[" Start Import "]))],function(n,l){n(l,3,0,"success"),n(l,5,0,"light","block","clear")},null)}function x(n){return e.Ib(0,[e.Bb(0,a.d,[e.u]),e.Eb(402653184,1,{content:0}),(n()(),e.pb(2,0,null,null,16,"ion-header",[],null,null,null,u.Q,u.m)),e.ob(3,49152,null,0,o.A,[e.h,e.k],null,null),(n()(),e.pb(4,0,null,0,12,"ion-toolbar",[["color","tertiary"]],null,null,null,u.hb,u.D)),e.ob(5,49152,null,0,o.Ab,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.pb(6,0,null,0,3,"ion-button",[["fill","clear"],["no-padding",""],["shape","round"],["slot","start"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.reset()&&e),e},u.H,u.d)),e.ob(7,49152,null,0,o.j,[e.h,e.k],{color:[0,"color"],fill:[1,"fill"],shape:[2,"shape"]},null),(n()(),e.pb(8,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["icon","chevron-left"],["margin",""]],[[8,"innerHTML",1]],null,null,r.b,r.a)),e.ob(9,573440,null,0,c.a,[s.b,c.b],{iconProp:[0,"iconProp"]},null),(n()(),e.pb(10,0,null,0,2,"ion-title",[["text-center",""]],null,null,null,u.gb,u.C)),e.ob(11,49152,null,0,o.yb,[e.h,e.k],null,null),(n()(),e.Gb(-1,0,["Import from Device"])),(n()(),e.pb(13,0,null,0,3,"ion-button",[["color","light"],["fill","clear"],["no-padding",""],["shape","round"],["slot","end"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.close()&&e),e},u.H,u.d)),e.ob(14,49152,null,0,o.j,[e.h,e.k],{color:[0,"color"],fill:[1,"fill"],shape:[2,"shape"]},null),(n()(),e.pb(15,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["icon","times-circle"],["margin",""]],[[8,"innerHTML",1]],null,null,r.b,r.a)),e.ob(16,573440,null,0,c.a,[s.b,c.b],{iconProp:[0,"iconProp"]},null),(n()(),e.gb(16777216,null,0,1,null,g)),e.ob(18,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(19,0,null,null,9,"ion-content",[],null,null,null,u.N,u.j)),e.ob(20,49152,[[1,4],["content",4]],0,o.t,[e.h,e.k],null,null),(n()(),e.gb(16777216,null,0,1,null,m)),e.ob(22,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,0,1,null,I)),e.ob(24,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,0,1,null,P)),e.ob(26,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,0,1,null,y)),e.ob(28,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,z)),e.ob(30,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,5,0,"tertiary"),n(l,7,0,!t.deviceId||t.devices.length<2?"tertiary":"light","clear","round"),n(l,9,0,"chevron-left"),n(l,14,0,"light","clear","round"),n(l,16,0,"times-circle"),n(l,18,0,!t.importItems&&t.deviceId),n(l,22,0,!t.importItems&&!t.deviceId),n(l,24,0,!t.importItems&&t.result),n(l,26,0,!t.importCompleted&&t.importItems),n(l,28,0,t.importCompleted),n(l,30,0,!t.importItems&&t.canImport)},function(n,l){n(l,8,0,e.zb(l,9).renderedIconHTML),n(l,15,0,e.zb(l,16).renderedIconHTML)})}function L(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,1,"app-import",[],null,null,null,x,p)),e.ob(1,114688,null,0,b.a,[o.a,o.Fb,h.a,d.a],null,null)],function(n,l){n(l,1,0)},null)}var w=e.lb("app-import",b.a,L,{deviceId:"deviceId"},{},[])},yYJu:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var e=t("mrSG"),u=(t("ZZ/e"),t("6YH3"),t("gRba"),function(){function n(n,l,t,e){this.alertController=n,this.modalController=l,this.deviceService=t,this.fileService=e,this.selected=[],this.allSelected=!1,this.processed=[],this.importCompleted=!1}return n.prototype.ngOnInit=function(){var n=this;this.deviceService.subscribe(function(l){n.devices=l})},n.prototype.close=function(){return e.b(this,void 0,void 0,function(){var n=this;return e.e(this,function(l){switch(l.label){case 0:return!this.importItems||this.importCompleted?[3,3]:[4,this.alertController.create({header:"Are you sure?",message:"Are you sure you want to stop importing the files?",buttons:[{text:"Cancel",role:"cancel"},{text:"Stop Import",handler:function(){n.modalController.dismiss()}}]})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[3,4];case 3:this.modalController.dismiss(),l.label=4;case 4:return[2]}})})},n.prototype.reset=function(){this.deviceId=null,this.files=null,this.result=null,this.selected=[]},n.prototype.openDevice=function(n){var l=this;this.selected=[],this.deviceService.with("files").find(n).then(function(t){l.files=t.files,l.deviceId=n,l.selected=[],l.search()})},n.prototype.search=function(){var n=this;this.result=this.files.filter(function(l){return!n.searchTerm||l.filename.toLowerCase().indexOf(n.searchTerm.toLowerCase())>-1})},n.prototype.select=function(n){var l=this;if(void 0===n&&(n=!1),n){var t=this.result.map(function(n){return!!l.selected[n.integrity_hash]&&l.selected[n.integrity_hash]}),e=t.length===t.filter(function(n){return n}).length;this.files.forEach(function(n){l.selected[n.integrity_hash]=!e})}setTimeout(function(){var n=l.result.map(function(n){return!!l.selected[n.integrity_hash]&&l.selected[n.integrity_hash]});l.allSelected=n.length===n.filter(function(n){return n}).length,l.canImport=n.filter(function(n){return n}).length>0},100)},n.prototype.startImport=function(){return e.b(this,void 0,void 0,function(){var n,l,t,u,o,i,r=this;return e.e(this,function(c){switch(c.label){case 0:this.importItems=this.result.map(function(n){return!!r.selected[n.integrity_hash]&&n}).filter(function(n){return n}),n=0,l=function(l){return e.e(this,function(e){switch(e.label){case 0:return[4,t.fileService.create({filepath:l.filepath,filename:l.filename}).then(function(){return r.processed[l.integrity_hash]=!0}).catch(function(){return r.processed[l.integrity_hash]=!1})];case 1:return e.sent(),t.content.scrollToPoint(null,50*n,300),n++,[2]}})},t=this,u=0,o=this.importItems,c.label=1;case 1:return u<o.length?[5,l(o[u])]:[3,4];case 2:c.sent(),c.label=3;case 3:return u++,[3,1];case 4:return i=this,setTimeout(function(){i.importCompleted=!0,setTimeout(function(){i.modalController.dismiss()},1500)},1500),[2]}})})},n}())}}]);