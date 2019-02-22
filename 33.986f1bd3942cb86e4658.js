(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"/hGO":function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component, ViewChild, ViewContainerRef } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FieldWrapper } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-wrapper-panel\'</span>,\n  template: <span class="hljs-string">`\n    &lt;div class="card"&gt;\n      &lt;h3 class="card-header"&gt;{{ to.label }}&lt;/h3&gt;\n      &lt;div class="card-body"&gt;\n        &lt;ng-container #fieldComponent&gt;&lt;/ng-container&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n  `</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> PanelWrapperComponent <span class="hljs-keyword">extends</span> FieldWrapper {\n  <span class="hljs-meta">@ViewChild</span>(<span class="hljs-string">\'fieldComponent\'</span>, {read: ViewContainerRef}) fieldComponent: ViewContainerRef;\n}'},"374l":function(n,s,l){"use strict";l.r(s);var a=l("CcnG"),o=l("gIcY"),p=function(){function n(){this.form=new o.FormGroup({}),this.model={},this.options={},this.fields=[{key:"firstName",type:"input",templateOptions:{required:!0,type:"text",label:"First Name"}},{key:"address",wrappers:["panel"],templateOptions:{label:"Address"},fieldGroup:[{key:"town",type:"input",templateOptions:{required:!0,type:"text",label:"Town"}}]}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),e={examples:[{title:"Nested Forms (fieldGroup wrapper)",description:"\n              This example demonstrates how to nest formly-form's using custom templates\n            ",component:p,files:[{file:"app.component.html",content:l("Ek3l"),filecontent:l("fKml")},{file:"app.component.ts",content:l("L38x"),filecontent:l("qR/c")},{file:"panel-wrapper.component.ts",content:l("/hGO"),filecontent:l("DtOQ")},{file:"app.module.ts",content:l("SJ2N"),filecontent:l("kUCw")}]}]},t=function(){return function(){}}(),r=l("NcP4"),m=l("goW2"),i=l("htty"),c=l("LgGJ"),d=l("MT1c"),u=l("1Q/V"),f=l("9+aI"),h=l("haId"),g=l("LJsP"),y=l("yR2A"),j=l("UFMs"),w=l("mrSG"),b=function(n){function s(){return null!==n&&n.apply(this,arguments)||this}return Object(w.__extends)(s,n),s}(l("HkYz").c),C=a["\u0275crt"]({encapsulation:2,styles:[],data:{}});function k(n){return a["\u0275vid"](0,[a["\u0275qud"](402653184,1,{fieldComponent:0}),(n()(),a["\u0275eld"](1,0,null,null,4,"div",[["class","card"]],null,null,null,null,null)),(n()(),a["\u0275eld"](2,0,null,null,1,"h3",[["class","card-header"]],null,null,null,null,null)),(n()(),a["\u0275ted"](3,null,["",""])),(n()(),a["\u0275eld"](4,0,null,null,1,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),a["\u0275eld"](5,16777216,[[1,3],["fieldComponent",1]],null,0,null,null,null,null,null,null,null))],null,function(n,s){n(s,3,0,s.component.to.label)})}function F(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"formly-wrapper-panel",[],null,null,null,k,C)),a["\u0275did"](1,49152,null,0,b,[],null,null)],null,null)}var v=a["\u0275ccf"]("formly-wrapper-panel",b,F,{field:"field",model:"model",form:"form",options:"options"},{},[]),x=l("pMnS"),M=l("4o01"),_=l("Dl9q"),R=l("UcnZ"),N=l("DAbo"),G=l("9Glx"),O=a["\u0275crt"]({encapsulation:2,styles:[],data:{}});function S(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,l){var o=!0,p=n.component;return"submit"===s&&(o=!1!==a["\u0275nov"](n,2).onSubmit(l)&&o),"reset"===s&&(o=!1!==a["\u0275nov"](n,2).onReset()&&o),"ngSubmit"===s&&(o=!1!==p.submit()&&o),o},null,null)),a["\u0275did"](1,16384,null,0,o["\u0275angular_packages_forms_forms_bh"],[],null,null),a["\u0275did"](2,540672,null,0,o.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),a["\u0275prd"](2048,null,o.ControlContainer,null,[o.FormGroupDirective]),a["\u0275did"](4,16384,null,0,o.NgControlStatusGroup,[[4,o.ControlContainer]],null,null),(n()(),a["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,_.b,_.a)),a["\u0275prd"](512,null,R.a,R.a,[N.b,a.ComponentFactoryResolver,a.Injector]),a["\u0275did"](7,966656,null,0,G.a,[R.a,[8,null],[2,o.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),a["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),a["\u0275ted"](-1,null,["Submit"]))],function(n,s){var l=s.component;n(s,2,0,l.form),n(s,7,0,l.form,l.model,l.fields,l.options)},function(n,s){n(s,0,0,a["\u0275nov"](s,4).ngClassUntouched,a["\u0275nov"](s,4).ngClassTouched,a["\u0275nov"](s,4).ngClassPristine,a["\u0275nov"](s,4).ngClassDirty,a["\u0275nov"](s,4).ngClassValid,a["\u0275nov"](s,4).ngClassInvalid,a["\u0275nov"](s,4).ngClassPending)})}function A(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,S,O)),a["\u0275did"](1,49152,null,0,p,[],null,null)],null,null)}var W=a["\u0275ccf"]("formly-app-example",p,A,{},{},[]),L=l("Ip0R"),P=l("M2Lx"),q=l("eDkP"),D=l("Fzqc"),V=l("v9Dh"),I=l("ZYjt"),E=l("Wf4p"),J=l("6LlJ"),U=l("F6kA"),T=l("dWZg"),B=l("lLAP"),Q=l("4c35"),Y=l("qAlS"),Z=l("La40"),z=l("SMsm"),H=l("UodH"),K=l("5QwG"),X=l("qkla"),$=l("iZhS"),nn=l("XR12"),sn=l("me7w"),ln=l("N3PW"),an=l("l4pn"),on=l("Fv2i"),pn=l("wBYW"),en=l("IE48"),tn=l("Q4Tx"),rn=l("Nsh5"),mn=l("8mMr"),cn=l("LC5p"),dn=l("0/Q6"),un=l("mqvi"),fn=l("lYui"),hn=l("VGFS"),gn=l("1ey0"),yn=function(){return function(){}}(),jn=l("ZYCi"),wn=l("cIcG");l.d(s,"ConfigModuleNgFactory",function(){return bn});var bn=a["\u0275cmf"](t,[],function(n){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,m.a,i.a,c.a,d.a,u.a,f.a,h.a,g.a,y.a,j.a,v,x.a,M.a,W]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,L.NgLocalization,L.NgLocaleLocalization,[a.LOCALE_ID,[2,L["\u0275angular_packages_common_common_a"]]]),a["\u0275mpd"](4608,P.c,P.c,[]),a["\u0275mpd"](4608,q.c,q.c,[q.i,q.e,a.ComponentFactoryResolver,q.h,q.f,a.Injector,a.NgZone,L.DOCUMENT,D.b,[2,L.Location]]),a["\u0275mpd"](5120,q.j,q.k,[q.c]),a["\u0275mpd"](5120,V.b,V.c,[q.c]),a["\u0275mpd"](4608,I.HAMMER_GESTURE_CONFIG,E.c,[[2,E.g],[2,E.l]]),a["\u0275mpd"](4608,J.a,J.a,[]),a["\u0275mpd"](4608,U.a,U.a,[]),a["\u0275mpd"](4608,o.FormBuilder,o.FormBuilder,[]),a["\u0275mpd"](4608,o["\u0275angular_packages_forms_forms_j"],o["\u0275angular_packages_forms_forms_j"],[]),a["\u0275mpd"](4608,R.a,R.a,[N.b,a.ComponentFactoryResolver,a.Injector]),a["\u0275mpd"](1073742336,L.CommonModule,L.CommonModule,[]),a["\u0275mpd"](1073742336,T.b,T.b,[]),a["\u0275mpd"](1073742336,P.d,P.d,[]),a["\u0275mpd"](1073742336,B.a,B.a,[]),a["\u0275mpd"](1073742336,D.a,D.a,[]),a["\u0275mpd"](1073742336,Q.g,Q.g,[]),a["\u0275mpd"](1073742336,Y.c,Y.c,[]),a["\u0275mpd"](1073742336,q.g,q.g,[]),a["\u0275mpd"](1073742336,E.l,E.l,[[2,E.d],[2,I.HAMMER_LOADER]]),a["\u0275mpd"](1073742336,V.e,V.e,[]),a["\u0275mpd"](1073742336,E.v,E.v,[]),a["\u0275mpd"](1073742336,Z.j,Z.j,[]),a["\u0275mpd"](1073742336,z.c,z.c,[]),a["\u0275mpd"](1073742336,H.c,H.c,[]),a["\u0275mpd"](1073742336,K.b,K.b,[]),a["\u0275mpd"](512,N.b,N.b,[]),a["\u0275mpd"](1024,N.a,function(n,s){return[{wrappers:[{name:"addons",component:X.a}],extensions:[{name:"addons",extension:{postPopulate:$.a}}]},nn.b(n),{types:[{name:"input",component:sn.a,wrappers:["form-field"]},{name:"checkbox",component:ln.a,wrappers:["form-field"]},{name:"radio",component:an.a,wrappers:["form-field"]},{name:"select",component:on.a,wrappers:["form-field"]},{name:"textarea",component:pn.a,wrappers:["form-field"]},{name:"multicheckbox",component:en.a,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:tn.a}]},nn.b(s),{wrappers:[{name:"panel",component:b}]}]},[N.b,N.b]),a["\u0275mpd"](1073742336,nn.a,nn.a,[N.b,[2,N.a]]),a["\u0275mpd"](1073742336,rn.h,rn.h,[]),a["\u0275mpd"](1073742336,mn.b,mn.b,[]),a["\u0275mpd"](1073742336,E.m,E.m,[]),a["\u0275mpd"](1073742336,E.t,E.t,[]),a["\u0275mpd"](1073742336,cn.b,cn.b,[]),a["\u0275mpd"](1073742336,dn.c,dn.c,[]),a["\u0275mpd"](1073742336,un.a,un.a,[]),a["\u0275mpd"](1073742336,o["\u0275angular_packages_forms_forms_bc"],o["\u0275angular_packages_forms_forms_bc"],[]),a["\u0275mpd"](1073742336,o.ReactiveFormsModule,o.ReactiveFormsModule,[]),a["\u0275mpd"](1073742336,fn.a,fn.a,[]),a["\u0275mpd"](1073742336,hn.a,hn.a,[]),a["\u0275mpd"](1073742336,gn.a,gn.a,[]),a["\u0275mpd"](1073742336,yn,yn,[]),a["\u0275mpd"](1073742336,jn.s,jn.s,[[2,jn.y],[2,jn.p]]),a["\u0275mpd"](1073742336,t,t,[]),a["\u0275mpd"](1024,jn.n,function(){return[[{path:"",component:wn.a,data:e}]]},[])])})},DtOQ:function(n,s){n.exports="import { Component, ViewChild, ViewContainerRef } from '@angular/core';\nimport { FieldWrapper } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-wrapper-panel',\n  template: `\n    <div class=\"card\">\n      <h3 class=\"card-header\">{{ to.label }}</h3>\n      <div class=\"card-body\">\n        <ng-container #fieldComponent></ng-container>\n      </div>\n    </div>\n  `,\n})\nexport class PanelWrapperComponent extends FieldWrapper {\n  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;\n}"},Ek3l:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},L38x:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'firstName\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        required: <span class="hljs-literal">true</span>,\n        <span class="hljs-keyword">type</span>: <span class="hljs-string">\'text\'</span>,\n        label: <span class="hljs-string">\'First Name\'</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'address\'</span>,\n      wrappers: [<span class="hljs-string">\'panel\'</span>],\n      templateOptions: { label: <span class="hljs-string">\'Address\'</span> },\n      fieldGroup: [{\n        key: <span class="hljs-string">\'town\'</span>,\n        <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n        templateOptions: {\n          required: <span class="hljs-literal">true</span>,\n          <span class="hljs-keyword">type</span>: <span class="hljs-string">\'text\'</span>,\n          label: <span class="hljs-string">\'Town\'</span>,\n        },\n      }],\n    },\n  ];\n\n  submit() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.form.valid) {\n      alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n    }\n  }\n}\n'},SJ2N:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { PanelWrapperComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./panel-wrapper.component\'</span>;\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      wrappers: [\n        { name: <span class="hljs-string">\'panel\'</span>, component: PanelWrapperComponent },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    PanelWrapperComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},fKml:function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button">Submit</button>\n</form>\n'},kUCw:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { PanelWrapperComponent } from './panel-wrapper.component';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      wrappers: [\n        { name: 'panel', component: PanelWrapperComponent },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    PanelWrapperComponent,\n  ],\n})\nexport class AppModule { }\n"},"qR/c":function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'firstName',\n      type: 'input',\n      templateOptions: {\n        required: true,\n        type: 'text',\n        label: 'First Name',\n      },\n    },\n    {\n      key: 'address',\n      wrappers: ['panel'],\n      templateOptions: { label: 'Address' },\n      fieldGroup: [{\n        key: 'town',\n        type: 'input',\n        templateOptions: {\n          required: true,\n          type: 'text',\n          label: 'Town',\n        },\n      }],\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"}}]);