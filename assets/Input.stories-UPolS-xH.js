import{j as e}from"./jsx-runtime-CFY_2KVU.js";import{R as P}from"./index-Dq4ZvVuH.js";import{I as D}from"./Icon-CAy9nyKQ.js";import"./_commonjsHelpers-CqkleIqs.js";const B="_wrapper_3akvw_1",V="_error_3akvw_18",A="_disabled_3akvw_26",C="_sm_3akvw_33",F="_md_3akvw_34",G="_lg_3akvw_35",H="_input_3akvw_37",J="_affix_3akvw_59",r={wrapper:B,error:V,disabled:A,sm:C,md:F,lg:G,input:H,affix:J},s=P.forwardRef(({size:W="md",error:E,prefix:l,suffix:d,disabled:p,className:T,...q},O)=>e.jsxs("div",{className:[r.wrapper,r[W],E?r.error:"",p?r.disabled:"",T].filter(Boolean).join(" "),children:[l&&e.jsx("span",{className:r.affix,children:l}),e.jsx("input",{ref:O,disabled:p,className:r.input,...q}),d&&e.jsx("span",{className:r.affix,children:d})]}));s.displayName="Input";s.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:""},prefix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},suffix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};const U={title:"DataEntry/Input",component:s,tags:["autodocs"],args:{placeholder:"입력해 주세요",size:"md"},argTypes:{size:{control:"select",options:["sm","md","lg"]}}},a={},o={args:{prefix:e.jsx(D,{name:"search",size:16})}},t={args:{suffix:e.jsx(D,{name:"x",size:16})}},c={args:{error:!0,placeholder:"비밀번호가 일치하지 않아요"}},i={args:{disabled:!0,placeholder:"사용 불가"}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,maxWidth:320},children:[e.jsx(s,{size:"sm",placeholder:"작게"}),e.jsx(s,{size:"md",placeholder:"보통"}),e.jsx(s,{size:"lg",placeholder:"크게"})]})};var m,u,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var x,g,_;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    prefix: <Icon name="search" size={16} />
  }
}`,...(_=(g=o.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var h,v,w;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    suffix: <Icon name="x" size={16} />
  }
}`,...(w=(v=t.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var z,j,y;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    error: true,
    placeholder: '비밀번호가 일치하지 않아요'
  }
}`,...(y=(j=c.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var I,R,N;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: '사용 불가'
  }
}`,...(N=(R=i.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var S,b,k;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    maxWidth: 320
  }}>
      <Input size="sm" placeholder="작게" />
      <Input size="md" placeholder="보통" />
      <Input size="lg" placeholder="크게" />
    </div>
}`,...(k=(b=n.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const X=["Default","WithPrefix","WithSuffix","Error","Disabled","Sizes"];export{a as Default,i as Disabled,c as Error,n as Sizes,o as WithPrefix,t as WithSuffix,X as __namedExportsOrder,U as default};
