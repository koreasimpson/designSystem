import{j as e}from"./jsx-runtime-CFY_2KVU.js";import{I as r}from"./Icon-CAy9nyKQ.js";import"./index-Dq4ZvVuH.js";import"./_commonjsHelpers-CqkleIqs.js";const j={title:"General/Icon",component:r,tags:["autodocs"],args:{name:"star",size:24},argTypes:{name:{control:"select",options:["home","search","settings","user","bell","mail","heart","star","arrow-right","arrow-left","arrow-up","arrow-down","check","x","plus","minus","edit","trash","download","upload","share","link","copy","eye","eye-off","calendar","clock","filter","chevron-down","chevron-up","chevron-left","chevron-right","more-horizontal","more-vertical","log-out","github","refresh","alert-circle","info","check-circle","x-circle"]},size:{control:"range",min:12,max:48,step:4},strokeWidth:{control:"range",min:1,max:3,step:.25}}},a={},n={render:()=>{const o=["home","search","settings","user","bell","mail","heart","star","arrow-right","arrow-left","arrow-up","arrow-down","check","x","plus","minus","edit","trash","download","upload","share","link","copy","eye","eye-off","calendar","clock","filter","chevron-down","chevron-up","chevron-left","chevron-right","more-horizontal","more-vertical","log-out","github","refresh","alert-circle","info","check-circle","x-circle"];return e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:16},children:o.map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6,width:72},children:[e.jsx(r,{name:t,size:22}),e.jsx("span",{style:{fontSize:10,color:"var(--fg-3)",textAlign:"center",lineHeight:1.3,fontFamily:"var(--font-mono)"},children:t})]},t))})}},s={render:()=>e.jsx("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[14,18,22,28,36].map(o=>e.jsx(r,{name:"star",size:o},o))})},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(r,{name:"heart",size:24,color:"var(--error)"}),e.jsx(r,{name:"star",size:24,color:"var(--primary-500)"}),e.jsx(r,{name:"check-circle",size:24,color:"var(--success)"}),e.jsx(r,{name:"info",size:24,color:"var(--info)"})]})};var i,l,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,p,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const icons: IconName[] = ['home', 'search', 'settings', 'user', 'bell', 'mail', 'heart', 'star', 'arrow-right', 'arrow-left', 'arrow-up', 'arrow-down', 'check', 'x', 'plus', 'minus', 'edit', 'trash', 'download', 'upload', 'share', 'link', 'copy', 'eye', 'eye-off', 'calendar', 'clock', 'filter', 'chevron-down', 'chevron-up', 'chevron-left', 'chevron-right', 'more-horizontal', 'more-vertical', 'log-out', 'github', 'refresh', 'alert-circle', 'info', 'check-circle', 'x-circle'];
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16
    }}>
        {icons.map(name => <div key={name} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        width: 72
      }}>
            <Icon name={name} size={22} />
            <span style={{
          fontSize: 10,
          color: 'var(--fg-3)',
          textAlign: 'center',
          lineHeight: 1.3,
          fontFamily: 'var(--font-mono)'
        }}>{name}</span>
          </div>)}
      </div>;
  }
}`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var f,u,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      {[14, 18, 22, 28, 36].map(size => <Icon key={size} name="star" size={size} />)}
    </div>
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,x,y;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      <Icon name="heart" size={24} color="var(--error)" />
      <Icon name="star" size={24} color="var(--primary-500)" />
      <Icon name="check-circle" size={24} color="var(--success)" />
      <Icon name="info" size={24} color="var(--info)" />
    </div>
}`,...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const S=["Default","AllIcons","Sizes","Colored"];export{n as AllIcons,c as Colored,a as Default,s as Sizes,S as __namedExportsOrder,j as default};
