(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"/9Ve":function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FieldType } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-field-button\'</span>,\n  template: <span class="hljs-string">`\n    &lt;div&gt;\n      &lt;button [type]="to.type" [ngClass]="\'btn btn-\' + to.btnType" (click)="onClick($event)"&gt;\n        {{ to.text }}\n      &lt;/button&gt;\n    &lt;/div&gt;\n  `</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> FormlyFieldButton <span class="hljs-keyword">extends</span> FieldType {\n  onClick($event) {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.to.onClick) {\n      <span class="hljs-keyword">this</span>.to.onClick($event);\n    }\n  }\n}\n'},BOZP:function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button">Submit</button>\n</form>\n'},"H//q":function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFieldButton } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./button-type.component\'</span>;\n\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      types: [\n        {\n          name: <span class="hljs-string">\'button\'</span>,\n          component: FormlyFieldButton,\n          wrappers: [<span class="hljs-string">\'form-field\'</span>],\n          defaultOptions: {\n            templateOptions: {\n              btnType: <span class="hljs-string">\'default\'</span>,\n              <span class="hljs-keyword">type</span>: <span class="hljs-string">\'button\'</span>,\n            },\n          },\n        },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    FormlyFieldButton,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},"Hb+O":function(n,s,l){"use strict";l.r(s);var o=l("CcnG"),t=l("gIcY"),a=function(){function n(){var n=this;this.form=new t.FormGroup({}),this.options={},this.model={someInput:""},this.fields=[{type:"button",templateOptions:{text:"With Function",onClick:function(n){return alert("You clicked me!")}}},{type:"button",templateOptions:{label:"Click this guy",text:"JSON Only",btnType:"info",onClick:function(s){n.form.get("someInput").setValue("clicked!")},description:"These can have labels and stuff too if you want...."}},{key:"someInput",type:"input",templateOptions:{label:"Some Input"}}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),p={examples:[{title:"Buttons",description:"\n              This demonstrates a type for buttons. Specifically using bootstrap but this could easily be adapted for other frameworks\n            ",component:a,files:[{file:"app.component.html",content:l("sGPl"),filecontent:l("BOZP")},{file:"app.component.ts",content:l("w+ZQ"),filecontent:l("T5oK")},{file:"button-type.component.ts",content:l("/9Ve"),filecontent:l("ZYvc")},{file:"app.module.ts",content:l("H//q"),filecontent:l("LERq")}]}]},e=function(){return function(){}}(),r=l("NcP4"),m=l("goW2"),i=l("htty"),c=l("LgGJ"),u=l("MT1c"),d=l("1Q/V"),f=l("9+aI"),h=l("haId"),y=l("LJsP"),g=l("yR2A"),b=l("UFMs"),j=l("Ip0R"),k=l("mrSG"),C=function(n){function s(){return null!==n&&n.apply(this,arguments)||this}return Object(k.__extends)(s,n),s.prototype.onClick=function(n){this.to.onClick&&this.to.onClick(n)},s}(l("HkYz").b),F=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function w(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),o["\u0275eld"](1,0,null,null,2,"button",[],[[8,"type",0]],[[null,"click"]],function(n,s,l){var o=!0;return"click"===s&&(o=!1!==n.component.onClick(l)&&o),o},null,null)),o["\u0275did"](2,278528,null,0,j.NgClass,[o.IterableDiffers,o.KeyValueDiffers,o.ElementRef,o.Renderer2],{ngClass:[0,"ngClass"]},null),(n()(),o["\u0275ted"](3,null,[" "," "]))],function(n,s){n(s,2,0,"btn btn-"+s.component.to.btnType)},function(n,s){var l=s.component;n(s,1,0,l.to.type),n(s,3,0,l.to.text)})}function v(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"formly-field-button",[],null,null,null,w,F)),o["\u0275did"](1,49152,null,0,C,[],null,null)],null,null)}var x=o["\u0275ccf"]("formly-field-button",C,v,{field:"field",model:"model",form:"form",options:"options"},{},[]),M=l("pMnS"),O=l("4o01"),_=l("Dl9q"),S=l("UcnZ"),R=l("DAbo"),I=l("9Glx"),T=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function G(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,l){var t=!0,a=n.component;return"submit"===s&&(t=!1!==o["\u0275nov"](n,2).onSubmit(l)&&t),"reset"===s&&(t=!1!==o["\u0275nov"](n,2).onReset()&&t),"ngSubmit"===s&&(t=!1!==a.submit()&&t),t},null,null)),o["\u0275did"](1,16384,null,0,t["\u0275angular_packages_forms_forms_bh"],[],null,null),o["\u0275did"](2,540672,null,0,t.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o["\u0275prd"](2048,null,t.ControlContainer,null,[t.FormGroupDirective]),o["\u0275did"](4,16384,null,0,t.NgControlStatusGroup,[[4,t.ControlContainer]],null,null),(n()(),o["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,_.b,_.a)),o["\u0275prd"](512,null,S.a,S.a,[R.b,o.ComponentFactoryResolver,o.Injector]),o["\u0275did"](7,966656,null,0,I.a,[S.a,[8,null],[2,t.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),o["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Submit"]))],function(n,s){var l=s.component;n(s,2,0,l.form),n(s,7,0,l.form,l.model,l.fields,l.options)},function(n,s){n(s,0,0,o["\u0275nov"](s,4).ngClassUntouched,o["\u0275nov"](s,4).ngClassTouched,o["\u0275nov"](s,4).ngClassPristine,o["\u0275nov"](s,4).ngClassDirty,o["\u0275nov"](s,4).ngClassValid,o["\u0275nov"](s,4).ngClassInvalid,o["\u0275nov"](s,4).ngClassPending)})}function N(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,G,T)),o["\u0275did"](1,49152,null,0,a,[],null,null)],null,null)}var B=o["\u0275ccf"]("formly-app-example",a,N,{},{},[]),A=l("M2Lx"),L=l("eDkP"),D=l("Fzqc"),P=l("v9Dh"),Z=l("ZYjt"),E=l("Wf4p"),J=l("6LlJ"),Y=l("F6kA"),$=l("dWZg"),q=l("lLAP"),V=l("4c35"),U=l("qAlS"),W=l("La40"),H=l("SMsm"),Q=l("UodH"),z=l("5QwG"),K=l("qkla"),X=l("iZhS"),nn=l("XR12"),sn=l("me7w"),ln=l("N3PW"),on=l("l4pn"),tn=l("Fv2i"),an=l("wBYW"),pn=l("IE48"),en=l("Q4Tx"),rn=l("Nsh5"),mn=l("8mMr"),cn=l("LC5p"),un=l("0/Q6"),dn=l("mqvi"),fn=l("lYui"),hn=l("VGFS"),yn=l("1ey0"),gn=function(){return function(){}}(),bn=l("ZYCi"),jn=l("cIcG");l.d(s,"ConfigModuleNgFactory",function(){return kn});var kn=o["\u0275cmf"](e,[],function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,m.a,i.a,c.a,u.a,d.a,f.a,h.a,y.a,g.a,b.a,x,M.a,O.a,B]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,j.NgLocalization,j.NgLocaleLocalization,[o.LOCALE_ID,[2,j["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,A.c,A.c,[]),o["\u0275mpd"](4608,L.c,L.c,[L.i,L.e,o.ComponentFactoryResolver,L.h,L.f,o.Injector,o.NgZone,j.DOCUMENT,D.b,[2,j.Location]]),o["\u0275mpd"](5120,L.j,L.k,[L.c]),o["\u0275mpd"](5120,P.b,P.c,[L.c]),o["\u0275mpd"](4608,Z.HAMMER_GESTURE_CONFIG,E.c,[[2,E.g],[2,E.l]]),o["\u0275mpd"](4608,J.a,J.a,[]),o["\u0275mpd"](4608,Y.a,Y.a,[]),o["\u0275mpd"](4608,t.FormBuilder,t.FormBuilder,[]),o["\u0275mpd"](4608,t["\u0275angular_packages_forms_forms_j"],t["\u0275angular_packages_forms_forms_j"],[]),o["\u0275mpd"](4608,S.a,S.a,[R.b,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](1073742336,j.CommonModule,j.CommonModule,[]),o["\u0275mpd"](1073742336,$.b,$.b,[]),o["\u0275mpd"](1073742336,A.d,A.d,[]),o["\u0275mpd"](1073742336,q.a,q.a,[]),o["\u0275mpd"](1073742336,D.a,D.a,[]),o["\u0275mpd"](1073742336,V.g,V.g,[]),o["\u0275mpd"](1073742336,U.c,U.c,[]),o["\u0275mpd"](1073742336,L.g,L.g,[]),o["\u0275mpd"](1073742336,E.l,E.l,[[2,E.d],[2,Z.HAMMER_LOADER]]),o["\u0275mpd"](1073742336,P.e,P.e,[]),o["\u0275mpd"](1073742336,E.v,E.v,[]),o["\u0275mpd"](1073742336,W.j,W.j,[]),o["\u0275mpd"](1073742336,H.c,H.c,[]),o["\u0275mpd"](1073742336,Q.c,Q.c,[]),o["\u0275mpd"](1073742336,z.b,z.b,[]),o["\u0275mpd"](512,R.b,R.b,[]),o["\u0275mpd"](1024,R.a,function(n,s){return[{wrappers:[{name:"addons",component:K.a}],extensions:[{name:"addons",extension:{postPopulate:X.a}}]},nn.b(n),{types:[{name:"input",component:sn.a,wrappers:["form-field"]},{name:"checkbox",component:ln.a,wrappers:["form-field"]},{name:"radio",component:on.a,wrappers:["form-field"]},{name:"select",component:tn.a,wrappers:["form-field"]},{name:"textarea",component:an.a,wrappers:["form-field"]},{name:"multicheckbox",component:pn.a,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:en.a}]},nn.b(s),{types:[{name:"button",component:C,wrappers:["form-field"],defaultOptions:{templateOptions:{btnType:"default",type:"button"}}}]}]},[R.b,R.b]),o["\u0275mpd"](1073742336,nn.a,nn.a,[R.b,[2,R.a]]),o["\u0275mpd"](1073742336,rn.h,rn.h,[]),o["\u0275mpd"](1073742336,mn.b,mn.b,[]),o["\u0275mpd"](1073742336,E.m,E.m,[]),o["\u0275mpd"](1073742336,E.t,E.t,[]),o["\u0275mpd"](1073742336,cn.b,cn.b,[]),o["\u0275mpd"](1073742336,un.c,un.c,[]),o["\u0275mpd"](1073742336,dn.a,dn.a,[]),o["\u0275mpd"](1073742336,t["\u0275angular_packages_forms_forms_bc"],t["\u0275angular_packages_forms_forms_bc"],[]),o["\u0275mpd"](1073742336,t.ReactiveFormsModule,t.ReactiveFormsModule,[]),o["\u0275mpd"](1073742336,fn.a,fn.a,[]),o["\u0275mpd"](1073742336,hn.a,hn.a,[]),o["\u0275mpd"](1073742336,yn.a,yn.a,[]),o["\u0275mpd"](1073742336,gn,gn,[]),o["\u0275mpd"](1073742336,bn.s,bn.s,[[2,bn.y],[2,bn.p]]),o["\u0275mpd"](1073742336,e,e,[]),o["\u0275mpd"](1024,bn.n,function(){return[[{path:"",component:jn.a,data:p}]]},[])])})},LERq:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\nimport { FormlyFieldButton } from './button-type.component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      types: [\n        {\n          name: 'button',\n          component: FormlyFieldButton,\n          wrappers: ['form-field'],\n          defaultOptions: {\n            templateOptions: {\n              btnType: 'default',\n              type: 'button',\n            },\n          },\n        },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    FormlyFieldButton,\n  ],\n})\nexport class AppModule { }\n"},T5oK:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  options: FormlyFormOptions = {};\n  model = { someInput: '' };\n\n  fields: FormlyFieldConfig[] = [\n    {\n      type: 'button',\n      templateOptions: {\n        text: 'With Function',\n        onClick: ($event) => alert('You clicked me!'),\n      },\n    },\n    {\n      type: 'button',\n      templateOptions: {\n        label: 'Click this guy',\n        text: 'JSON Only',\n        btnType: 'info',\n        onClick: ($event) => {\n          this.form.get('someInput').setValue('clicked!');\n        },\n        description: 'These can have labels and stuff too if you want....',\n      },\n    },\n    {\n      key: 'someInput',\n      type: 'input',\n      templateOptions: {\n        label: 'Some Input',\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},ZYvc:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FieldType } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-field-button',\n  template: `\n    <div>\n      <button [type]=\"to.type\" [ngClass]=\"'btn btn-' + to.btnType\" (click)=\"onClick($event)\">\n        {{ to.text }}\n      </button>\n    </div>\n  `,\n})\nexport class FormlyFieldButton extends FieldType {\n  onClick($event) {\n    if (this.to.onClick) {\n      this.to.onClick($event);\n    }\n  }\n}\n"},sGPl:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},"w+ZQ":function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  options: FormlyFormOptions = {};\n  model = { someInput: <span class="hljs-string">\'\'</span> };\n\n  fields: FormlyFieldConfig[] = [\n    {\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'button\'</span>,\n      templateOptions: {\n        text: <span class="hljs-string">\'With Function\'</span>,\n        onClick: <span class="hljs-function">(<span class="hljs-params">$event</span>) =&gt;</span> alert(<span class="hljs-string">\'You clicked me!\'</span>),\n      },\n    },\n    {\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'button\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Click this guy\'</span>,\n        text: <span class="hljs-string">\'JSON Only\'</span>,\n        btnType: <span class="hljs-string">\'info\'</span>,\n        onClick: <span class="hljs-function">(<span class="hljs-params">$event</span>) =&gt;</span> {\n          <span class="hljs-keyword">this</span>.form.get(<span class="hljs-string">\'someInput\'</span>).setValue(<span class="hljs-string">\'clicked!\'</span>);\n        },\n        description: <span class="hljs-string">\'These can have labels and stuff too if you want....\'</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'someInput\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Some Input\'</span>,\n      },\n    },\n  ];\n\n  submit() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.form.valid) {\n      alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n    }\n  }\n}\n'}}]);