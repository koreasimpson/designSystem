import{j as e}from"./jsx-runtime-CFY_2KVU.js";import{R as E}from"./index-Dq4ZvVuH.js";import{B as m}from"./Button-GSIhNJ6G.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spin-DtEH56VJ.js";const D="_root_rqbiq_1",F="_hoverable_rqbiq_9",H="_header_rqbiq_17",O="_title_rqbiq_29",G="_extra_rqbiq_36",I="_body_rqbiq_41",V="_footer_rqbiq_45",r={root:D,hoverable:F,"padding-sm":"_padding-sm_rqbiq_13","padding-md":"_padding-md_rqbiq_14","padding-lg":"_padding-lg_rqbiq_15",header:H,title:O,extra:G,body:I,footer:V},c=E.forwardRef(({title:d,extra:n,footer:l,hoverable:B,padding:S="md",children:z,className:C,...W},w)=>e.jsxs("div",{ref:w,className:[r.root,B?r.hoverable:"",r[`padding-${S}`],C].filter(Boolean).join(" "),...W,children:[(d||n)&&e.jsxs("div",{className:r.header,children:[d&&e.jsx("div",{className:r.title,children:d}),n&&e.jsx("div",{className:r.extra,children:n})]}),e.jsx("div",{className:r.body,children:z}),l&&e.jsx("div",{className:r.footer,children:l})]}));c.displayName="Card";c.__docgenInfo={description:"",methods:[],displayName:"Card",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},extra:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},hoverable:{required:!1,tsType:{name:"boolean"},description:""},padding:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}},composes:["Omit"]};const L={title:"General/Card",component:c,tags:["autodocs"],args:{padding:"md"},argTypes:{padding:{control:"select",options:["sm","md","lg"]}}},a={args:{children:"카드 본문 영역입니다. 어떤 컨텐츠든 들어갈 수 있어요."}},t={args:{title:"프로젝트 설정",children:"프로젝트 기본 정보를 관리해요."}},s={args:{title:"최근 활동",extra:e.jsx("a",{href:"#",style:{fontSize:13,color:"var(--fg-3)"},children:"전체 보기"}),children:"최근 7일간의 활동 내역이 표시돼요."}},o={args:{title:"변경 사항",children:"저장하지 않은 변경 사항이 있어요.",footer:e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8},children:[e.jsx(m,{size:"sm",variant:"secondary",children:"취소"}),e.jsx(m,{size:"sm",children:"저장하기"})]})}},i={args:{title:"호버 카드",children:"마우스를 올려보세요.",hoverable:!0}};var p,u,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: '카드 본문 영역입니다. 어떤 컨텐츠든 들어갈 수 있어요.'
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,f,_;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: '프로젝트 설정',
    children: '프로젝트 기본 정보를 관리해요.'
  }
}`,...(_=(f=t.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var v,q,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: '최근 활동',
    extra: <a href="#" style={{
      fontSize: 13,
      color: 'var(--fg-3)'
    }}>전체 보기</a>,
    children: '최근 7일간의 활동 내역이 표시돼요.'
  }
}`,...(x=(q=s.parameters)==null?void 0:q.docs)==null?void 0:x.source}}};var b,y,R;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: '변경 사항',
    children: '저장하지 않은 변경 사항이 있어요.',
    footer: <div style={{
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8
    }}>
        <Button size="sm" variant="secondary">취소</Button>
        <Button size="sm">저장하기</Button>
      </div>
  }
}`,...(R=(y=o.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var j,N,T;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: '호버 카드',
    children: '마우스를 올려보세요.',
    hoverable: true
  }
}`,...(T=(N=i.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};const M=["Default","WithTitle","WithExtra","WithFooter","Hoverable"];export{a as Default,i as Hoverable,s as WithExtra,o as WithFooter,t as WithTitle,M as __namedExportsOrder,L as default};
