import{u as x,ab as U,r as u,c as E,a,ac as y,o as I,b as m,d as s,e as S,i as F,E as p,ad as k,n as B,m as N,p as q,s as C}from"./index-BB3_t5sF.js";/* empty css                *//* empty css                     *//* empty css                  *//* empty css                 */import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";const T={__name:"UserPassword",setup(J){const i=x(),c=F(),w=localStorage.getItem("res")?JSON.parse(localStorage.getItem("res")):null,o=U({oldPassword:"",newPassword:"",confirmPassword:"",UserID:w}),n=u(null),f=u(!1),_={oldPassword:[{required:!0,message:"请输入旧密码",trigger:"blur"}],newPassword:[{required:!0,message:"请输入新密码",trigger:"blur"},{min:6,max:20,message:"密码长度在 6 到 20 个字符",trigger:"blur"}],confirmPassword:[{required:!0,message:"请确认新密码",trigger:"blur"},{validator:(t,e,r)=>{e!==o.newPassword?r(new Error("两次输入密码不一致")):r()},trigger:"blur"}]},g=()=>{n.value.validate(t=>{t?P():p.error("表单验证失败")})},P=async()=>{f.value=!0;const{oldPassword:t,newPassword:e,UserID:r}=o;await k({oldPassword:t,newPassword:e,UserID:r}),p.success("密码修改成功"),c.push("/login"),i.removeToken()};return(t,e)=>{const r=B,d=N,b=q,V=C,v=y;return I(),E(v,{class:"box-card"},{default:a(()=>[e[4]||(e[4]=m("div",{slot:"header",class:"clearfix"},[m("span",null,"修改密码")],-1)),s(V,{ref_key:"passwordForm",ref:n,model:o,rules:_,"label-width":"100px"},{default:a(()=>[s(d,{label:"旧密码",prop:"oldPassword"},{default:a(()=>[s(r,{type:"password",modelValue:o.oldPassword,"onUpdate:modelValue":e[0]||(e[0]=l=>o.oldPassword=l),autocomplete:"off"},null,8,["modelValue"])]),_:1}),s(d,{label:"新密码",prop:"newPassword"},{default:a(()=>[s(r,{type:"password",modelValue:o.newPassword,"onUpdate:modelValue":e[1]||(e[1]=l=>o.newPassword=l),autocomplete:"off"},null,8,["modelValue"])]),_:1}),s(d,{label:"确认新密码",prop:"confirmPassword"},{default:a(()=>[s(r,{type:"password",modelValue:o.confirmPassword,"onUpdate:modelValue":e[2]||(e[2]=l=>o.confirmPassword=l),autocomplete:"off"},null,8,["modelValue"])]),_:1}),s(d,null,{default:a(()=>[s(b,{type:"primary",onClick:g},{default:a(()=>e[3]||(e[3]=[S("提交")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1})}}},G=D(T,[["__scopeId","data-v-4bccaa29"]]);export{G as default};