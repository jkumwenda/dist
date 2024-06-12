"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[982],{981:function(e,s,o){o.d(s,{iD:function(){return a}});o(4603),o(7566),o(8721);var t=o(4373);const r=t.A.create({baseURL:"https://185.135.137.170:8080"});const a=async(e,s)=>{try{const o=new URLSearchParams;o.append("grant_type",""),o.append("username",s.username),o.append("password",s.password),o.append("scope",""),o.append("client_id",""),o.append("client_secret","");const t=await r.post(e,o,{headers:{"Content-Type":"application/x-www-form-urlencoded"}});return t.data}catch(o){throw console.error("Login error:",o),o}}},2521:function(e,s,o){o.d(s,{A:function(){return p}});var t=o(6768);const r=e=>((0,t.Qi)("data-v-218fa1a2"),e=e(),(0,t.jt)(),e),a={class:"spinner"},n=r((()=>(0,t.Lk)("div",{class:"w-16 h-16 border-t-4 border-bondi-blue-500 border-solid rounded-full animate-spin"},null,-1))),i=[n];function l(e,s,o,r,n,l){return(0,t.uX)(),(0,t.CE)("div",a,i)}var d={name:"SpinnerComponent"},c=o(1241);const u=(0,c.A)(d,[["render",l],["__scopeId","data-v-218fa1a2"]]);var p=u},3982:function(e,s,o){o.r(s),o.d(s,{default:function(){return D}});var t=o(6768),r=o(4232),a=o(5130);const n={class:"sm:flex sm:flex-row flex flex-col flex-1 justify-center items-center"},i={class:"w-5/12 flex flex-col sm:space-y-4 space-y-2 rounded-2xl p-8 bg-ghost-300 drop-shadow-md"},l=(0,t.Lk)("div",{class:"font-bold font-archivo text-ghost-900 text-3xl"},"Sign in",-1),d=(0,t.Lk)("div",{class:"p-4 text-md border border-solid border-great-blue-400 bg-great-blue-50 text-great-blue rounded-xl font-roboto"}," Sign in to Confirm Attendance or Register for Event Participation",-1),c={key:0,class:"text-flamingo-500"},u={class:"block"},p={class:"block"},b=(0,t.Fv)('<div class="flex flex-row space-x-4"><button type="submit" class="flex-1 px-8 py-4 text-white-50 font-bold rounded-xl bg-bondi-blue text-stone-100 hover:bg-bondi-blue-600"> Sign in </button></div><div class="flex flex-row space-x-4 justify-center"><p class=""> Forgot your password? </p><p>|</p><p class="">Need help? </p></div>',2),m={class:"flex flex-row space-x-4 justify-center"},f={class:""};function g(e,s,o,g,h,w){const x=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)("div",n,[(0,t.Lk)("div",i,[l,d,h.message?((0,t.uX)(),(0,t.CE)("div",c,(0,r.v_)(h.message),1)):(0,t.Q3)("",!0),(0,t.Lk)("form",{class:"flex flex-col space-y-4",onSubmit:s[2]||(s[2]=(0,a.D$)(((...e)=>w.submitLoginForm&&w.submitLoginForm(...e)),["prevent"])),method:"POST"},[(0,t.Lk)("label",u,[(0,t.bo)((0,t.Lk)("input",{type:"email",name:"email","onUpdate:modelValue":s[0]||(s[0]=e=>h.userData.username=e),class:"mt-2 p-4 bg-white border shadow-sm border-ghost-600 placeholder-slate-400 focus:outline-none focus:border-athens-gray-500 focus:border-athens-gray-500 block w-full rounded-xl sm:text-sm focus:ring-1",placeholder:"Email",required:""},null,512),[[a.Jo,h.userData.username]])]),(0,t.Lk)("label",p,[(0,t.bo)((0,t.Lk)("input",{type:"password",name:"password","onUpdate:modelValue":s[1]||(s[1]=e=>h.userData.password=e),class:"mt-2 p-4 bg-white border shadow-sm border-ghost-600 placeholder-slate-400 focus:outline-none focus:border-athens-gray-500 focus:border-athens-gray-500 block w-full rounded-xl sm:text-sm focus:ring-1",placeholder:"Password",required:""},null,512),[[a.Jo,h.userData.password]])]),b,(0,t.Lk)("div",m,[(0,t.Lk)("p",f,[(0,t.eW)(" New to this website "),(0,t.bF)(x,{to:{name:"Register"}},{default:(0,t.k6)((()=>[(0,t.eW)("Register")])),_:1})])])],32)])])}o(4114);var h=o(981),w=o(2521),x=o(2612),v=o(6826),k=o(133),y={name:"LoginView",data(){return{userData:{username:"",password:""},SpinnerComponent:w.A,message:null,isLoading:!1}},methods:{async submitLoginForm(){this.isLoading=!0;try{const e=await(0,h.iD)("auth/login",this.userData),s=(0,v.n)();s.setUser(e.user),s.setPermissions(e.permissions),s.setAccessToken(e.access_token),(0,k.O5)(),this.isLoading=!1,this.$nextTick((()=>{x.A.push("/dashboard")}))}catch(e){this.message="Invalid username or password!",this.isLoading=!1}}}},L=o(1241);const C=(0,L.A)(y,[["render",g]]);var D=C}}]);
//# sourceMappingURL=982.5509eacd.js.map