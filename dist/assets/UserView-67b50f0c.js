import{o as a,c,a as e,t as s,u as d,i as u,j as i,b as h,k as g,f as l,l as r}from"./index-68239073.js";const _={class:""},m={class:"flex flex-col gap-4 items-center justify-center relative mt-16"},f=e("div",{class:"flex justify-center items-center mt-4"},[e("span",{class:"w-32 h-32 border-8 border-gray-200 bg-gray-500 rounded-full absolute -top-8"})],-1),p={class:"container pt-24 pb-8 flex flex-col place-items-center gap-4 bg-white rounded-lg shadow-md"},b=e("p",null,"User bio",-1),x={__name:"UserHeader",props:{user:Object},setup(t){return(n,o)=>(a(),c("div",_,[e("header",m,[f,e("div",p,[e("h1",null,s(t.user.email),1),e("p",null,s(t.user.id),1),b,e("p",null,s(t.user.created_at.slice(0,10)),1)])])]))}},U={class:"min-w-[13rem] min-h-[13rem] p-4 bg-white rounded-lg shadow-md"},w={__name:"UserInfoMenu",props:{todosLength:Number,todosDoneLength:Number},setup(t){return(n,o)=>(a(),c("div",U,[e("p",null,"Todos: "+s(t.todosLength),1),e("p",null,"Todos done: "+s(t.todosDoneLength),1),e("p",null,"Todos in progress: "+s(t.todosLength-t.todosDoneLength),1)]))}},L={class:"flex flex-col gap-4"},D={__name:"UserView",setup(t){const n=d(),o=u();return i(),h(),g(async()=>{await o.fetchTodoDataByUser(n.currentUser.id)}),(y,T)=>(a(),c("div",L,[l(x,{user:r(n).currentUser},null,8,["user"]),l(w,{"todos-length":r(o).getUserTodosLength,"todos-done-length":r(o).getUserDoneTodosLength},null,8,["todos-length","todos-done-length"])]))}};export{D as default};
