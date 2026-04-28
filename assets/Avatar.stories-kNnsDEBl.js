import{j as a}from"./jsx-runtime-CFY_2KVU.js";import"./index-Dq4ZvVuH.js";import"./_commonjsHelpers-CqkleIqs.js";const q="_img_1i02s_1",S="_fallback_1i02s_8",E="_group_1i02s_19",C="_groupItem_1i02s_23",F="_rest_1i02s_29",i={img:q,fallback:S,group:E,groupItem:C,rest:F},h=["#F59E0B","#10B981","#6366F1","#EC4899","#06B6D4","#84CC16","#F43F5E"];function G(r=""){let s=0;for(let e=0;e<r.length;e++)s=s*31+r.charCodeAt(e)>>>0;return h[s%h.length]}const t=({src:r,name:s,size:e=40,color:d,className:n})=>{const u=Math.round(e*.4),o=(s??"?").slice(0,1).toUpperCase(),k=d??G(s);return r?a.jsx("img",{src:r,alt:s,width:e,height:e,className:[i.img,n].filter(Boolean).join(" ")}):a.jsx("div",{className:[i.fallback,n].filter(Boolean).join(" "),style:{width:e,height:e,background:k,fontSize:u},children:o})};t.displayName="Avatar";const g=({avatars:r,max:s=3,size:e=32})=>{const d=r.slice(0,s),n=r.length-s;return a.jsxs("div",{className:i.group,children:[d.map((u,o)=>a.jsx("div",{className:i.groupItem,style:{marginLeft:o===0?0:-8},children:a.jsx(t,{...u,size:e})},o)),n>0&&a.jsxs("div",{className:i.rest,style:{marginLeft:-8,width:e,height:e,fontSize:Math.round(e*.35)},children:["+",n]})]})};g.displayName="AvatarGroup";t.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"40",computed:!1}},color:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};g.__docgenInfo={description:"",methods:[],displayName:"AvatarGroup",props:{avatars:{required:!0,tsType:{name:"Array",elements:[{name:"AvatarProps"}],raw:"AvatarProps[]"},description:""},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"32",computed:!1}}}};const L={title:"DataDisplay/Avatar",component:t,tags:["autodocs"]},c={render:()=>a.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[a.jsx(t,{name:"김찬호",size:32}),a.jsx(t,{name:"코리안심슨",size:40}),a.jsx(t,{name:"React",size:48})]})},m={render:()=>a.jsx(t,{src:"https://github.com/ninezerochan.png",name:"ninezerochan",size:48})},l={render:()=>a.jsx("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[24,32,40,48,64].map(r=>a.jsx(t,{name:"김찬호",size:r},r))})},p={render:()=>a.jsx(g,{size:36,max:4,avatars:[{name:"김찬호"},{name:"이지우"},{name:"박서연"},{name:"최민준"},{name:"정하은"},{name:"강도현"}]})};var f,v,y;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      <Avatar name="김찬호" size={32} />
      <Avatar name="코리안심슨" size={40} />
      <Avatar name="React" size={48} />
    </div>
}`,...(y=(v=c.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var x,_,j;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Avatar src="https://github.com/ninezerochan.png" name="ninezerochan" size={48} />
}`,...(j=(_=m.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var A,z,b;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      {[24, 32, 40, 48, 64].map(size => <Avatar key={size} name="김찬호" size={size} />)}
    </div>
}`,...(b=(z=l.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};var I,T,N;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <AvatarGroup size={36} max={4} avatars={[{
    name: '김찬호'
  }, {
    name: '이지우'
  }, {
    name: '박서연'
  }, {
    name: '최민준'
  }, {
    name: '정하은'
  }, {
    name: '강도현'
  }]} />
}`,...(N=(T=p.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};const P=["Fallback","WithImage","Sizes","Group"];export{c as Fallback,p as Group,l as Sizes,m as WithImage,P as __namedExportsOrder,L as default};
