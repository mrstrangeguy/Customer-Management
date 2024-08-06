import{d as B,o as _,b as I,e as i,n as m,t as A,f as N}from"./vue.esm-bundler-CkLrPmcS.js";var c=(e=>(e.PRIMARY="Primary",e.SECONDARY="Secondary",e.ICON="Icon",e))(c||{});const O={class:"text-style"},S=B({__name:"Button",props:{text:{type:String,default:""},icon:{type:String,default:""},variant:{type:String,default:""},bgColor:String},setup(e){const t=e,n=()=>t.variant===c.SECONDARY?"common-secondary":t.variant===c.ICON?"icon":"common-primary";return(u,d)=>(_(),I("button",{class:m(`button-default ${n()}`),style:N({backgroundColor:e.bgColor})},[i("i",{class:m(`default-icon ${e.icon}`)},null,2),i("span",O,A(e.text),1)],6))}}),k=(e,t)=>{const n=e.__vccOpts||e;for(const[u,d]of t)n[u]=d;return n},s=k(S,[["__scopeId","data-v-d9230bf2"]]);S.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"text",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"bgColor",type:{name:"string"}}],sourceFiles:["/home/vidhu/Desktop/Vue Projects/Customer Management/customer-management/src/components/Button.vue"]};const V={component:s},r={render:e=>({components:{Button:s},setup(){return{args:e}},template:'<Button v-bind="args" />'}),args:{text:"Add Contact",icon:"dx-icon dx-icon-plus",bgColor:"#03a9f4"}},o={render:e=>({components:{Button:s},setup(){return{args:e}},template:'<Button v-bind="args"/>'}),args:{text:"details",variant:"Secondary"}},a={render:e=>({components:{Button:s},setup(){return{args:e}},template:'<Button v-bind="args"/>'}),args:{icon:"dx-icon dx-icon-moon",variant:"Icon"}};var l,p,g;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: buttonArgs) => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args" />'
  }),
  args: {
    text: "Add Contact",
    icon: "dx-icon dx-icon-plus",
    bgColor: "#03a9f4"
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,y,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args: buttonArgs) => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args"/>'
  }),
  args: {
    text: "details",
    variant: "Secondary"
  }
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,b,C;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: buttonArgs) => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args"/>'
  }),
  args: {
    icon: "dx-icon dx-icon-moon",
    variant: "Icon"
  }
}`,...(C=(b=a.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const h=["Primary","Secondary","Icon"];export{a as Icon,r as Primary,o as Secondary,h as __namedExportsOrder,V as default};
