import{j as l}from"./jsx-runtime-CFY_2KVU.js";import{R as v}from"./index-Dq4ZvVuH.js";import"./_commonjsHelpers-CqkleIqs.js";const y="_root_gmev3_1",S="_item_gmev3_10",_="_active_gmev3_40",o={root:y,item:S,active:_},n=({value:t,onChange:e,options:g,className:b})=>l.jsx("div",{className:[o.root,b].filter(Boolean).join(" "),role:"group",children:g.map(a=>l.jsx("button",{type:"button",disabled:a.disabled,onClick:()=>!a.disabled&&(e==null?void 0:e(a.value)),className:[o.item,t===a.value?o.active:""].filter(Boolean).join(" "),"aria-pressed":t===a.value,children:a.label},a.value))});n.displayName="Segmented";n.__docgenInfo={description:"",methods:[],displayName:"Segmented",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"SegmentedOption"}],raw:"SegmentedOption[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const x={title:"DataEntry/Segmented",component:n,tags:["autodocs"]},s={render:()=>{const[t,e]=v.useState("day");return l.jsx(n,{value:t,onChange:e,options:[{value:"day",label:"일간"},{value:"week",label:"주간"},{value:"month",label:"월간"}]})}},r={render:()=>{const[t,e]=v.useState("list");return l.jsx(n,{value:t,onChange:e,options:[{value:"list",label:"목록"},{value:"grid",label:"그리드"},{value:"map",label:"지도 (준비 중)",disabled:!0}]})}};var i,u,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState('day');
    return <Segmented value={value} onChange={setValue} options={[{
      value: 'day',
      label: '일간'
    }, {
      value: 'week',
      label: '주간'
    }, {
      value: 'month',
      label: '월간'
    }]} />;
  }
}`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,c,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState('list');
    return <Segmented value={value} onChange={setValue} options={[{
      value: 'list',
      label: '목록'
    }, {
      value: 'grid',
      label: '그리드'
    }, {
      value: 'map',
      label: '지도 (준비 중)',
      disabled: true
    }]} />;
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const V=["Default","WithDisabled"];export{s as Default,r as WithDisabled,V as __namedExportsOrder,x as default};
