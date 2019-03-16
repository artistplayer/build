(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"3n8g":function(t,n,e){"use strict";e.d(n,"a",function(){return s});var r=e("mrSG"),i=e("Ovi0"),l=e("vY5A"),o=e("CcnG"),u=e("t/Na"),s=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.name="stats",n.location=l.a.host+"v1/stats",n}return r.d(n,t),n.ngInjectableDef=o.S({factory:function(){return new n(o.W(u.c))},token:n,providedIn:"root"}),n}(i.b)},Ovi0:function(t,n,e){"use strict";var r,i=function(){function t(){}return t.where=function(n,e){var r=Object.keys(e);return!r.length||r.filter(function(r){return t.operatorFilter(n[r],e[r])}).length>0},t.operatorFilter=function(n,e){var r="=";if("object"==typeof e){if(e[0])return e.filter(function(e){if("object"==typeof e){var i=t.validOperator(e.operator),l=e.value?e.value:null;return null!==l&&t.matches(n,i,l)}return t.matches(n,r,e)}).length>0;e.operator&&(r=t.validOperator(e.operator)),e=e.value}return t.matches(n,r,e)},t.matches=function(n,e,r){switch("string"==typeof n&&(n=n.toLowerCase()),"string"==typeof r&&(r=r.toLowerCase()),"undefined"!==r&&"null"!==r||(r=""),e){case"neq":case"<>":case"!=":return n!==r;case"lt":case"<":return n<r;case"gt":case">":return n>r;case"lte":case"<=":return n<=r;case"gte":case">=":return n>=r;case"not like":case"!like":return!t.like(n,r);case"like":return t.like(n,r);case"!regexp":case"not regexp":return!new RegExp(r).test(n);case"regexp":return new RegExp(r).test(n);case"eq":case"<=>":default:return n===r}},t.validOperator=function(n){return t.validOperators.indexOf(n)?t.mapOperator(n):"="},t.mapOperator=function(n){return t.mappings[n]?t.mappings[n]:n},t.like=function(n,e){return"%"===e.substr(0,1)&&"%"===e.substr(e.length-1,1)?n.indexOf(t.clear(e.substring(1,e.length-1)))>-1:"%"===e.substr(0,1)?n.indexOf(t.clear(e.substring(1,e.length)))>0:"%"===e.substr(e.length-1,1)&&0===n.indexOf(t.clear(e.substring(0,e.length-1)))},t.clear=function(t){return"undefined"!==t&&"null"!==t||(t=""),t},t.validOperators=["eq","neq","lt","gt","lte","gte","!regexp","!like","<",">","<=",">=","<>","!=","<=>","like","not like","regexp","not regexp"],t.mappings={eq:"=",neq:"!=",lt:"<",gt:">",lte:"<=",gte:">=","!regexp":"not regexp","!like":"not like"},t}(),l=function(){function t(t){this.parent=t,this._listeners=[],this._isFullyload=!1}return t.prototype.addListener=function(t){console.log("Add listener: "+t.constructor.name),this._listeners.push(t)},t.prototype.validate=function(t){var n=this;return t.with.length===t.with.filter(function(t){return"string"!=typeof t&&n[t.name]}).length&&t.wheres.length===t.wheres.filter(function(t){return i.where(n,t)}).length&&(!t.full||this._isFullyload)},t.prototype.update=function(t){var n=this;return this.parent.call("patch",this.parent.location+"/"+this.id,{data:t}).then(function(t){return n.fill(t.data)}).catch(function(t){console.log(t)})},t.prototype.fill=function(t,n){var e=this,r=Object.assign(this,t);return n&&(n.full&&(this._isFullyload=!0),n.with.forEach(function(t){"string"!=typeof t&&r.hasOwnProperty(t.name)&&(r[t.name]=r[t.name].map(function(n){var r=t.findOrCreate(n);return r.addListener(e),r}))})),r},t.prototype.delete=function(){var t=this;return this.parent.call("delete",this.parent.location+"/"+this.id).then(function(n){t._listeners.forEach(function(n){n.cleanup(t.id,t.parent),n.parent.refresh()}),t.parent.delete(t.id),t.parent.refresh()}).catch(function(t){console.log(t)})},t.prototype.cleanup=function(t,n){this.hasOwnProperty(n.name)&&(this[n.name]=this[n.name].filter(function(n){return n.id!==t}))},t.prototype.attach=function(t){var n,e=this,r=t.parent.name;return this.parent.call("post",this.parent.location+"/"+this.id+"/"+r,{data:(n={},n[r]=[t.id],n)}).then(function(n){e[r]||(e[r]=[]),e[r].push(t),t.addListener(e)})},t.prototype.detach=function(t){var n=this,e=t.parent.name;return this.parent.call("delete",this.parent.location+"/"+this.id+"/"+e+"/"+t.id).then(function(r){n[e]&&(n[e]=n[e].filter(function(n){return n.id!==t.id}),t.addListener(n))})},t}(),o=e("K9Ia"),u=e("26FU"),s=e("CcnG"),a=e("t/Na");e.d(n,"a",function(){return r}),e.d(n,"b",function(){return c}),function(t){t.ASC="ASC",t.DESC="DESC"}(r||(r={}));var c=function(){function t(t){this.httpClient=t,this._searchWheres=new o.a,this.collection=new u.a([]),this.subscriptions=[],this.reset()}return t.prototype.where=function(t){return this._options.wheres.push(t),this},t.prototype.with=function(t){return this._options.with.push(t),this},t.prototype.find=function(t){var n=this,e=Object.assign({},this._options,{full:!0});return this.reset(),new Promise(function(r,i){var l=n.collection.getValue().find(function(n){return n.id===t});if(l&&l.validate(e))return r(l);n.call("get",n.location+"/"+t+n.params(e),e).then(function(t){return r(n.update([t.data],e).find(function(n){return n.id===t.data.id}))}).catch(function(t){return i(t)})})},t.prototype.orderBy=function(t,n){return this._options.sort=t,this._options.order=n,this},t.prototype.limit=function(t){return this._options.limit=t,this},t.prototype.page=function(t){return this._options.page=t,this},t.prototype.search=function(t){this._searchWheres.next(t)},t.prototype.subscribe=function(t,n){var e=this;void 0===n&&(n=function(t){return console.log(t)});var r=Object.assign({},this._options);this.reset();var i=[],l=function(){var n=i.filter(function(t){return t.validate(r)});return t(n.sort(function(t,n){return e.sort(t,n,r)}).slice(0,r.limit)),n},o=[];return o.push(this.collection.subscribe(function(t){i=t,l()})),o.push(this._searchWheres.subscribe(function(t){Object.assign(r,{wheres:t}),l().length<r.limit&&e.fetch(r).catch(function(t){return n(t)})})),this.collection.getValue().filter(function(t){return t.validate(r)}).length<r.limit&&this.fetch(r).catch(function(t){return n(t)}),Object.assign(this,{subscriptions:o})},t.prototype.unsubscribe=function(){this.subscriptions.forEach(function(t){return t.unsubscribe()})},t.prototype.create=function(t){var n=this,e=Object.assign({},this._options);return this.reset(),this.call("post",this.location,{data:t}).then(function(t){return n.update([t.data],e).find(function(n){return n.id===t.data.id})})},t.prototype.delete=function(t){this.collection.next(this.collection.getValue().filter(function(n){return n.id!==t}))},t.prototype.findOrCreate=function(t){return this.collection.getValue().find(function(n){return n.id===t.id})||this.update([t],null).find(function(n){return n.id===t.id})},t.prototype.call=function(t,n,e){var r={headers:{Accept:"application/json","Content-Type":"application/json"}};switch(t){case"get":case"delete":return this.httpClient[t](n,r).toPromise();case"post":case"put":case"patch":return this.httpClient[t](n,e.data,r).toPromise()}},t.prototype.refresh=function(){},t.prototype.fetch=function(t){var n,e=this;return t.wheres.length>0?(t.data={wheres:t.wheres},n=this.call("post",this.location+"/search"+this.params(t),t)):n=this.call("get",this.location+this.params(t)),n.then(function(n){e.update(n.data,t)})},t.prototype.reset=function(){this._options={sort:"id",order:r.ASC,limit:20,page:1,with:[],wheres:[],full:!1}},t.prototype.update=function(t,n){var e=this,r=this.collection.getValue();return t.forEach(function(t){var i=r.find(function(n){return n.id===t.id});if(i)return i.fill(t,n);r.push(new l(e).fill(t,n))}),this.collection.next(r),r},t.prototype.params=function(t){var n=[];return t.with.length&&(n.with=t.with.map(function(t){return"string"==typeof t?t:t.name}).join(",")),"?"+Object.keys(n).filter(function(t){return null!==n[t]}).map(function(t){return t+"="+n[t]}).join("&")},t.prototype.sort=function(t,n,e){var i=t[e.sort],l=n[e.sort];return+i==+i?e.order===r.DESC?l-i:i-l:i.localeCompare(l)>0?e.order===r.DESC?-1:1:i.localeCompare(l)<0?e.order===r.DESC?1:-1:void 0},t.ngInjectableDef=s.S({factory:function(){return new t(s.W(a.c))},token:t,providedIn:"root"}),t}()},"X7+6":function(t,n,e){"use strict";e.r(n);var r=e("CcnG"),i=e("3n8g"),l=e("Ovi0"),o=function(){function t(t){this.statsService=t}return t.prototype.ngOnInit=function(){var t=this;this.statsService.orderBy("id",l.a.DESC).limit(20).page(1).subscribe(function(n){t.recent=n})},t}(),u=function(){return function(){}}(),s=e("pMnS"),a=e("oBZk"),c=e("ZZ/e"),p=e("Ip0R"),h=r.nb({encapsulation:0,styles:[["[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]{border-radius:15px;overflow:hidden;cursor:pointer}[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]:hover{--ion-item-background:var(--ion-color-tertiary)}[_nghost-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--ion-color-light)}"]],data:{}});function f(t){return r.Hb(0,[(t()(),r.pb(0,0,null,null,4,"ion-row",[["margin-top",""],["padding-top",""]],null,null,null,a.bb,a.y)),r.ob(1,49152,null,0,c.hb,[r.h,r.k],null,null),(t()(),r.pb(2,0,null,0,2,"ion-title",[["color","light"],["text-center",""]],null,null,null,a.eb,a.B)),r.ob(3,49152,null,0,c.yb,[r.h,r.k],{color:[0,"color"]},null),(t()(),r.Fb(-1,0,["Recent played"]))],function(t,n){t(n,3,0,"light")},null)}function d(t){return r.Hb(0,[(t()(),r.pb(0,0,null,null,7,"ion-item",[],null,null,null,a.S,a.p)),r.ob(1,49152,null,0,c.G,[r.h,r.k],null,null),(t()(),r.pb(2,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,a.E,a.b)),r.ob(3,49152,null,0,c.f,[r.h,r.k],null,null),(t()(),r.pb(4,0,null,0,0,"img",[["src","data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw=="]],null,null,null,null,null)),(t()(),r.pb(5,0,null,0,2,"ion-label",[],null,null,null,a.T,a.q)),r.ob(6,49152,null,0,c.M,[r.h,r.k],null,null),(t()(),r.Fb(-1,0,[" Song 1 "]))],null,null)}function b(t){return r.Hb(0,[(t()(),r.pb(0,0,null,null,10,"ion-row",[],null,null,null,a.bb,a.y)),r.ob(1,49152,null,0,c.hb,[r.h,r.k],null,null),(t()(),r.pb(2,0,null,0,8,"ion-col",[["text-center",""]],null,null,null,a.L,a.i)),r.ob(3,49152,null,0,c.s,[r.h,r.k],null,null),(t()(),r.pb(4,0,null,0,2,"ion-label",[],null,null,null,a.T,a.q)),r.ob(5,49152,null,0,c.M,[r.h,r.k],null,null),(t()(),r.Fb(-1,0,[" No recent played songs found "])),(t()(),r.pb(7,0,null,0,3,"ion-list",[["class","filled"],["lines","none"]],null,null,null,a.V,a.r)),r.ob(8,49152,null,0,c.N,[r.h,r.k],{lines:[0,"lines"]},null),(t()(),r.gb(16777216,null,0,1,null,d)),r.ob(10,278528,null,0,p.i,[r.O,r.L,r.s],{ngForOf:[0,"ngForOf"]},null)],function(t,n){var e=n.component;t(n,8,0,"none"),t(n,10,0,e.recent)},null)}function g(t){return r.Hb(0,[(t()(),r.pb(0,0,null,null,5,"ion-grid",[],null,null,null,a.O,a.l)),r.ob(1,49152,null,0,c.z,[r.h,r.k],null,null),(t()(),r.gb(16777216,null,0,1,null,f)),r.ob(3,16384,null,0,p.j,[r.O,r.L],{ngIf:[0,"ngIf"]},null),(t()(),r.gb(16777216,null,0,1,null,b)),r.ob(5,16384,null,0,p.j,[r.O,r.L],{ngIf:[0,"ngIf"]},null)],function(t,n){var e=n.component;t(n,3,0,e.recent),t(n,5,0,e.recent)},null)}function v(t){return r.Hb(0,[(t()(),r.pb(0,0,null,null,1,"app-queue",[],null,null,null,g,h)),r.ob(1,114688,null,0,o,[i.a],null,null)],function(t,n){t(n,1,0)},null)}var w=r.lb("app-queue",o,v,{},{},[]),y=e("gIcY"),m=e("ZYCi");e.d(n,"QueuePageModuleNgFactory",function(){return O});var O=r.mb(u,[],function(t){return r.vb([r.wb(512,r.j,r.bb,[[8,[s.a,w]],[3,r.j],r.x]),r.wb(4608,p.l,p.k,[r.u,[2,p.r]]),r.wb(4608,y.m,y.m,[]),r.wb(4608,c.b,c.b,[r.z,r.g]),r.wb(4608,c.Fb,c.Fb,[c.b,r.j,r.q]),r.wb(4608,c.Ib,c.Ib,[c.b,r.j,r.q]),r.wb(1073742336,p.b,p.b,[]),r.wb(1073742336,y.k,y.k,[]),r.wb(1073742336,y.b,y.b,[]),r.wb(1073742336,c.Cb,c.Cb,[]),r.wb(1073742336,m.p,m.p,[[2,m.v],[2,m.m]]),r.wb(1073742336,u,u,[]),r.wb(1024,m.k,function(){return[[{path:"",component:o}]]},[])])})}}]);