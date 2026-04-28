import{j as e}from"./jsx-runtime-CFY_2KVU.js";import{R as q}from"./index-Dq4ZvVuH.js";import"./_commonjsHelpers-CqkleIqs.js";const I="_root_sfe8a_1",N="_on_sfe8a_17",R="_disabled_sfe8a_21",D="_sm_sfe8a_27",E="_md_sfe8a_28",B="_knob_sfe8a_30",C="_knobOn_sfe8a_43",s={root:I,on:N,disabled:R,sm:D,md:E,knob:B,knobOn:C},r=({checked:a,onChange:t,disabled:d,size:w="md",className:z,"aria-label":T})=>e.jsx("button",{type:"button",role:"switch","aria-checked":a,"aria-label":T,disabled:d,onClick:()=>t==null?void 0:t(!a),className:[s.root,s[w],a?s.on:"",d?s.disabled:"",z].filter(Boolean).join(" "),children:e.jsx("span",{className:[s.knob,a?s.knobOn:""].filter(Boolean).join(" ")})});r.displayName="Switch";r.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""}}};const G={title:"DataEntry/Switch",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md"]}}},n={args:{checked:!1,"aria-label":"알림 끄기"}},o={args:{checked:!0,"aria-label":"알림 켜기"}},i={args:{checked:!0,disabled:!0,"aria-label":"알림"}},c={render:()=>{const[a,t]=q.useState(!1);return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,fontFamily:"var(--font-sans)",fontSize:14},children:[e.jsx(r,{checked:a,onChange:t,"aria-label":"알림 설정"}),e.jsx("span",{children:a?"알림 켜짐":"알림 꺼짐"})]})}},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(r,{size:"sm",checked:!0,"aria-label":"sm"}),e.jsx(r,{size:"md",checked:!0,"aria-label":"md"})]})};var m,p,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    checked: false,
    'aria-label': '알림 끄기'
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,b,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: true,
    'aria-label': '알림 켜기'
  }
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,_,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true,
    'aria-label': '알림'
  }
}`,...(y=(_=i.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var k,S,x;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [on, setOn] = React.useState(false);
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: 'var(--font-sans)',
      fontSize: 14
    }}>
        <Switch checked={on} onChange={setOn} aria-label="알림 설정" />
        <span>{on ? '알림 켜짐' : '알림 꺼짐'}</span>
      </div>;
  }
}`,...(x=(S=c.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var v,j,O;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      <Switch size="sm" checked={true} aria-label="sm" />
      <Switch size="md" checked={true} aria-label="md" />
    </div>
}`,...(O=(j=l.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};const H=["Off","On","Disabled","Controlled","Sizes"];export{c as Controlled,i as Disabled,n as Off,o as On,l as Sizes,H as __namedExportsOrder,G as default};
