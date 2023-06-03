(function(){"use strict";var t={6495:function(t,e,a){var i=a(9242),r=a(3396);const o={key:0,class:"layouts"};function n(t,e,a,i,n,s){const l=(0,r.up)("GlobalHeader"),u=(0,r.up)("GlobalTabBar"),c=(0,r.up)("FloatButton"),d=(0,r.up)("RouterView"),p=(0,r.up)("Join");return(0,r.wg)(),(0,r.iD)("div",null,[null!=n.userInfo?((0,r.wg)(),(0,r.iD)("div",o,[(0,r.Wm)(l,{onCopyUrl:s.copyUrl,onEditPost:s.editPost,onDeletePost:s.deletePost,onToggleHeaderMenu:s.toggleHeaderMenu,onSaveMyInfo:s.saveMyInfo,HeaderMenuIsShow:n.HeaderMenuIsShow,userInfo:n.userInfo},null,8,["onCopyUrl","onEditPost","onDeletePost","onToggleHeaderMenu","onSaveMyInfo","HeaderMenuIsShow","userInfo"]),"/"==t.$route.path||"/mypage"==t.$route.path||"/chat"==t.$route.path?((0,r.wg)(),(0,r.j4)(u,{key:0})):(0,r.kq)("",!0),"/"==t.$route.path?((0,r.wg)(),(0,r.j4)(c,{key:1})):(0,r.kq)("",!0),(0,r.Wm)(d,{productListData:n.productListData,userInfo:n.userInfo,onToggleWish:s.toggleWish,onToggleHeaderMenu:s.toggleHeaderMenu,onGetUserImage:e[0]||(e[0]=t=>s.getUserImage(t)),onGetUserNickName:e[1]||(e[1]=t=>s.getUserNickName(t))},null,8,["productListData","userInfo","onToggleWish","onToggleHeaderMenu"])])):((0,r.wg)(),(0,r.j4)(p,{key:1,onGetUserName:e[2]||(e[2]=t=>s.getUserName(t)),onGetUserId:e[3]||(e[3]=t=>s.getUserId(t)),onJoin:s.join},null,8,["onJoin"]))])}a(2062),a(7658);var s=a(7139);const l={key:0,class:"global-header"},u=(0,r._)("h1",{class:"visually-hidden"},"애플마켓",-1),c={class:"left-menu"},d=(0,r._)("i",{class:"xi-angle-left"},null,-1),p=[d],m=(0,r._)("i",{class:"xi-home-o"},null,-1),g=[m],h={class:"right-menu"},f=(0,r._)("i",{class:"xi-share-alt-o","aria-hidden":"true"},null,-1),w=[f],b={type:"button","aria-label":"메뉴 더보기"},I={key:0,class:"detail-menu"},y={key:1},v={key:2,class:"global-header"},_=(0,r._)("h1",{class:"visually-hidden"},"애플마켓",-1),D={class:"left-menu"},k=(0,r._)("i",{class:"xi-angle-left"},null,-1),L=[k],S={class:"title"},$={class:"right-menu"},U={key:0},C={key:3,class:"global-header"},N=(0,r._)("h1",{class:"visually-hidden"},"애플마켓",-1),M={class:"left-menu"},A={"arial-lable":"내 동네",class:"button-local"},x=(0,r._)("i",{class:"xi-angle-down"},null,-1),P=(0,r.uE)('<ul class="right-menu"><li><button aria-label="검색"><i class="xi-search" aria-hidden="true"></i></button></li><li><button aria-label="메뉴"><i class="xi-bars" aria-hidden="true"></i></button></li><li><button aria-label="알람"><i class="xi-bell-o" aria-hidden="true"></i></button></li></ul>',1);function O(t,e,a,i,o,n){return(0,r.wg)(),(0,r.iD)("div",null,[t.$route.path==`/view/${t.$route.params.id}`?((0,r.wg)(),(0,r.iD)("header",l,[u,(0,r._)("ul",c,[(0,r._)("li",null,[(0,r._)("button",{onClick:e[0]||(e[0]=e=>t.$router.go(-1)),"arial-lable":"뒤로가기",class:"button-back"},p)]),(0,r._)("li",null,[(0,r._)("button",{onClick:e[1]||(e[1]=e=>t.$router.push("/")),"arial-lable":"메인으로 가기",class:"button-home"},g)])]),(0,r._)("ul",h,[(0,r._)("li",null,[(0,r._)("button",{type:"button","aria-label":"공유하기",onClick:e[2]||(e[2]=e=>t.$emit("copyUrl"))},w)]),(0,r._)("li",null,[(0,r._)("button",b,[(0,r._)("i",{class:"xi-ellipsis-v","aria-hidden":"true",onClick:e[3]||(e[3]=e=>t.$emit("toggleHeaderMenu"))})]),a.HeaderMenuIsShow?((0,r.wg)(),(0,r.iD)("div",I,[(0,r._)("button",{type:"button",onClick:e[4]||(e[4]=e=>t.$emit("editPost",t.$route.params.id))}," 수정하기 "),(0,r._)("button",{type:"button",onClick:e[5]||(e[5]=e=>t.$emit("deletePost",t.$route.params.id))}," 삭제하기 ")])):(0,r.kq)("",!0)])])])):"/write"==t.$route.path||t.$route.path==`/write/${t.$route.params.id}`?((0,r.wg)(),(0,r.iD)("div",y)):t.$route.name?((0,r.wg)(),(0,r.iD)("header",v,[_,(0,r._)("ul",D,[(0,r._)("li",null,[(0,r._)("button",{onClick:e[6]||(e[6]=e=>t.$router.go(-1)),"arial-lable":"뒤로가기",class:"button-back"},L)]),(0,r._)("li",null,[(0,r._)("h2",S,(0,s.zw)(t.$route.name),1)])]),(0,r._)("ul",$,["/myinfo"==t.$route.path?((0,r.wg)(),(0,r.iD)("li",U,[(0,r._)("button",{onClick:e[7]||(e[7]=e=>t.$emit("saveMyInfo")),class:"button-submit","aria-label":"정보수정 완료"}," 완료 ")])):(0,r.kq)("",!0)])])):((0,r.wg)(),(0,r.iD)("header",C,[N,(0,r._)("ul",M,[(0,r._)("li",null,[(0,r._)("button",A,[(0,r.Uk)((0,s.zw)(a.userInfo.locationDong)+" ",1),x])])]),P]))])}var j={name:"GlobalHeader",props:{HeaderMenuIsShow:Boolean,userInfo:Object},data(){return{}}},H=a(89);const W=(0,H.Z)(j,[["render",O]]);var Z=W;const z={class:"global-tab-bar"},G=(0,r._)("h1",{class:"visually-hidden"},"탭바",-1),T={class:"tab-bar-list"},q={class:"tab-bar-item"},J={key:0,class:"xi-home-o"},B={key:1,class:"xi-home"},R=(0,r._)("span",{class:"txt"},"홈",-1),E={class:"tab-bar-item"},K={key:0,class:"xi-forum-o"},Y={key:1,class:"xi-forum"},F=(0,r._)("span",{class:"txt"},"채팅",-1),V={class:"tab-bar-item"},Q={key:0,class:"xi-user-o"},X={key:1,class:"xi-user"},tt=(0,r._)("span",{class:"txt"},"나의사과",-1);function et(t,e,a,i,o,n){return(0,r.wg)(),(0,r.iD)("nav",z,[G,(0,r._)("ul",T,[(0,r._)("li",q,[(0,r._)("button",{"aria-label":"홈",class:"tab-bar-button",onClick:e[0]||(e[0]=e=>t.$router.push("/"))},["/"!=t.$route.path?((0,r.wg)(),(0,r.iD)("i",J)):((0,r.wg)(),(0,r.iD)("i",B)),R])]),(0,r._)("li",E,[(0,r._)("button",{"aria-label":"채팅",class:"tab-bar-button",onClick:e[1]||(e[1]=e=>t.$router.push("/chat"))},["/chat"!=t.$route.path?((0,r.wg)(),(0,r.iD)("i",K)):((0,r.wg)(),(0,r.iD)("i",Y)),F])]),(0,r._)("li",V,[(0,r._)("button",{"aria-label":"나의사과",class:"tab-bar-button",onClick:e[2]||(e[2]=e=>t.$router.push("/mypage"))},["/mypage"!=t.$route.path?((0,r.wg)(),(0,r.iD)("i",Q)):((0,r.wg)(),(0,r.iD)("i",X)),tt])])])])}var at={name:"GlobalTabBar"};const it=(0,H.Z)(at,[["render",et]]);var rt=it;const ot=(0,r._)("i",{class:"xi-plus","aria-hidden":"true"},null,-1),nt=[ot];function st(t,e){return(0,r.wg)(),(0,r.iD)("button",{onClick:e[0]||(e[0]=e=>t.$router.push("/write")),"aria-label":"글쓰기",class:"float-button"},nt)}const lt={},ut=(0,H.Z)(lt,[["render",st]]);var ct=ut;const dt={class:"join"},pt=(0,r._)("label",{for:"userId",class:"label-title"},"아이디",-1),mt=(0,r._)("label",{for:"nickName",class:"label-title"},"닉네임",-1);function gt(t,e,a,i,o,n){const s=(0,r.up)("Logo");return(0,r.wg)(),(0,r.iD)("div",dt,[(0,r.Wm)(s),pt,(0,r._)("input",{type:"text",id:"userId",class:"input-basic h50",onInput:e[0]||(e[0]=e=>t.$emit("getUserId",e.target.value)),placeholder:"사용하실 아이디를 입력해주세요"},null,32),mt,(0,r._)("input",{type:"text",id:"nickName",class:"input-basic h50",onInput:e[1]||(e[1]=e=>t.$emit("getUserName",e.target.value)),placeholder:"사용하실 닉네임을 입력해주세요"},null,32),(0,r._)("button",{type:"button",class:"button-primary h50",onClick:e[2]||(e[2]=e=>t.$emit("join"))}," 완료 ")])}var ht=a.p+"img/logo.9f2607f6.svg";const ft={class:"logo"},wt=(0,r._)("img",{src:ht,alt:"사과마켓"},null,-1),bt=(0,r._)("span",null,"사과마켓",-1),It=[wt,bt];function yt(t,e){return(0,r.wg)(),(0,r.iD)("h1",ft,It)}const vt={},_t=(0,H.Z)(vt,[["render",yt]]);var Dt=_t,kt={name:"join",components:{Logo:Dt}};const Lt=(0,H.Z)(kt,[["render",gt]]);var St=Lt,$t={name:"App",data(){return{productListData:[],HeaderMenuIsShow:!1,userName:"",userId:"",userInfo:null}},components:{GlobalHeader:Z,GlobalTabBar:rt,FloatButton:ct,Join:St},mounted(){this.productListData=JSON.parse(window.localStorage.getItem("productListData")),this.userInfo=JSON.parse(window.localStorage.getItem("userInfo"))},updated(){this.productListData=JSON.parse(window.localStorage.getItem("productListData"))},methods:{getUserId(t){this.userId=t},getUserName(t){this.userName=t},join(){""==this.userId?alert("아이디를 입력해주세요."):""==this.userName?alert("닉네임을 입력해주세요."):(this.userInfo={id:this.userId,nickName:this.userName,location:"노원구 공릉동",locationDong:"공릉동",liked:[],image:null},window.localStorage.setItem("userInfo",JSON.stringify(this.userInfo)))},getUserImage(t){if(void 0!=t){const e=t.files[0],a=URL.createObjectURL(e);this.userInfo.image=a}},getUserNickName(t){this.userInfo.nickName=t},saveMyInfo(){""==this.userInfo.nickName?alert("닉네임을 입력해주세요"):(window.localStorage.setItem("userInfo",JSON.stringify(this.userInfo)),alert("정보수정이 완료되었습니다."),this.$router.push("/mypage"))},toggleWish(){const t=Number(this.$route.params.id);let e=this.userInfo.liked;const a=e.find((e=>{if(e==t)return!0})),i=e.indexOf(a);e.includes(t)?e.splice(i,1):e.push(t)},editPost(){this.$router.push(`/write/${this.$route.params.id}`)},deletePost(t){if(1==this.productListData.length)window.localStorage.removeItem("productListData");else{const e=this.productListData.filter((e=>e.id!=t));this.productListData=e,window.localStorage.setItem("productListData",JSON.stringify(this.productListData))}this.$router.push("/"),this.HeaderMenuIsShow=!1},toggleHeaderMenu(){0==this.HeaderMenuIsShow?this.HeaderMenuIsShow=!0:this.HeaderMenuIsShow=!1},copyUrl(){const t=document.createElement("textarea");document.body.appendChild(t),t.value=window.document.location.href,t.select(),document.execCommand("copy"),document.body.removeChild(t),alert("URL이 복사되었습니다.")}}};const Ut=(0,H.Z)($t,[["render",n]]);var Ct=Ut,Nt=a(2483);function Mt(t,e,a,i,o,n){const s=(0,r.up)("ProductList");return(0,r.wg)(),(0,r.j4)(s)}const At={class:"product-list"},xt={key:0,class:"product-empty"},Pt={class:"product-item-img"},Ot=["src","alt"],jt={class:"product-item-info"},Ht={class:"product-item-info-title"};function Wt(t,e,a,i,o,n){const l=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("ul",At,[null===a.productListData?((0,r.wg)(),(0,r.iD)("li",xt," 등록된 상품이 없습니다. ")):((0,r.wg)(!0),(0,r.iD)(r.HY,{key:1},(0,r.Ko)(a.productListData,((t,e)=>((0,r.wg)(),(0,r.iD)("li",{class:"product-item",key:e},[(0,r.Wm)(l,{to:`/view/${t.id}`,class:"product-item-links"},{default:(0,r.w5)((()=>[(0,r._)("div",Pt,[(0,r._)("img",{src:`${t.productMainImage}`,alt:`${t.title}`},null,8,Ot)]),(0,r._)("div",jt,[(0,r._)("p",Ht,(0,s.zw)(t.title),1),(0,r._)("ul",null,[(0,r._)("li",null,(0,s.zw)(t.userLocation),1),(0,r._)("li",null,(0,s.zw)(t.datetime),1)]),(0,r._)("strong",null,(0,s.zw)(t.price),1)])])),_:2},1032,["to"])])))),128))])])}var Zt={name:"ProductList",props:{productListData:Array}};const zt=(0,H.Z)(Zt,[["render",Wt]]);var Gt=zt,Tt={name:"Home",components:{ProductList:Gt}};const qt=(0,H.Z)(Tt,[["render",Mt]]);var Jt=qt;const Bt=(0,r._)("h1",{class:"visually-hidden"},"상품상세 페이지",-1);function Rt(t,e,a,i,o,n){const l=(0,r.up)("ProductCarousel"),u=(0,r.up)("UserInfo"),c=(0,r.up)("ProductInfo"),d=(0,r.up)("ProductImgModal"),p=(0,r.up)("ProductCta");return(0,r.wg)(),(0,r.iD)("div",null,[Bt,(0,r.Wm)(l,{data:o.data,productImgModalIsShow:o.productImgModalIsShow,onOpenModal:n.openModal},null,8,["data","productImgModalIsShow","onOpenModal"]),(0,r.Wm)(u,{userImage:`${o.data.userImage}`,userId:`${o.data.userId}`,userNickName:`${o.data.userNickName}`,userLocation:`${o.data.userLocation}`},null,8,["userImage","userId","userNickName","userLocation"]),(0,r.Uk)(" "+(0,s.zw)(t.userNickName)+" ",1),(0,r.Wm)(c,{data:o.data},null,8,["data"]),(0,r.Wm)(d,{data:o.data,productImgModalIsShow:o.productImgModalIsShow,onCloseModal:n.closeModal},null,8,["data","productImgModalIsShow","onCloseModal"]),(0,r.Wm)(p,{data:o.data,userInfo:a.userInfo,onToggleWish:e[0]||(e[0]=e=>t.$emit("toggleWish"))},null,8,["data","userInfo"])])}var Et=a.p+"img/img-user-default.3f1a45bd.png";const Kt={class:"user-info-group"},Yt={class:"avatar"},Ft={key:0,src:Et,alt:""},Vt=["src","alt"],Qt={class:"user-info"},Xt={class:"name"},te={class:"address"};function ee(t,e,a,i,o,n){return(0,r.wg)(),(0,r.iD)("div",Kt,[(0,r._)("div",Yt,[null==a.userImage?((0,r.wg)(),(0,r.iD)("img",Ft)):((0,r.wg)(),(0,r.iD)("img",{key:1,src:a.userImage,alt:a.userNickName},null,8,Vt))]),(0,r._)("div",Qt,[(0,r._)("strong",Xt,(0,s.zw)(a.userNickName),1),(0,r._)("div",te,(0,s.zw)(a.userLocation),1)]),a.editButton?((0,r.wg)(),(0,r.iD)("button",{key:0,type:"buton",class:"button-primary h38",onClick:e[0]||(e[0]=e=>t.$router.push("/myinfo"))}," 정보수정 ")):(0,r.kq)("",!0)])}var ae={name:"UserInfo",props:{userImage:String,userId:String,userNickName:String,userLocation:String,editButton:{type:Boolean,default:!1}}};const ie=(0,H.Z)(ae,[["render",ee]]);var re=ie;const oe={class:"product-info"},ne={class:"product-info-title"},se={class:"product-info-cate"},le={class:"cate"},ue={class:"product-content"},ce={class:"product-info-popular"};function de(t,e,a,i,o,n){return(0,r.wg)(),(0,r.iD)("div",oe,[(0,r._)("h3",ne,(0,s.zw)(a.data.title),1),(0,r._)("ul",se,[(0,r._)("li",le,(0,s.zw)(a.data.category),1),(0,r._)("li",null,(0,s.zw)(a.data.datetime),1)]),(0,r._)("div",ue,[(0,r._)("p",null,(0,s.zw)(a.data.content),1)]),(0,r._)("ul",ce,[(0,r._)("li",null,"채팅 "+(0,s.zw)(a.data.chatCnt),1),(0,r._)("li",null,"관심 "+(0,s.zw)(a.data.likeCnt),1),(0,r._)("li",null,"조회 "+(0,s.zw)(a.data.viewCnt),1)])])}var pe={name:"ProductInfo",props:{data:Object}};const me=(0,H.Z)(pe,[["render",de]]);var ge=me;const he={class:"product-cta"},fe={class:"left"},we={key:0,class:"xi-heart-o","aria-hidden":"true"},be={key:1,class:"xi-heart","aria-hidden":"true"},Ie=(0,r._)("div",{class:"divider","aria-hidden":"true"},null,-1),ye={class:"price"},ve=(0,r._)("button",{class:"button-chat h38 button-primary","aria-label":"채팅하기 버튼"}," 채팅하기 ",-1);function _e(t,e,a,i,o,n){return(0,r.wg)(),(0,r.iD)("div",he,[(0,r._)("div",fe,[(0,r._)("button",{class:"button-wish","aria-label":"위시리스트에 추가",onClick:e[0]||(e[0]=e=>t.$emit("toggleWish"))},[0==a.userInfo.liked.includes(Number(t.$route.params.id))?((0,r.wg)(),(0,r.iD)("i",we)):((0,r.wg)(),(0,r.iD)("i",be))]),Ie,(0,r._)("strong",ye,(0,s.zw)(Number(a.data.price).toLocaleString())+"원",1)]),ve])}var De={name:"ProductCta",data(){return{}},props:{data:Object,userInfo:Object},methods:{}};const ke=(0,H.Z)(De,[["render",_e]]);var Le=ke;const Se={class:"product-carousel"},$e=["src"];function Ue(t,e,a,i,o,n){const s=(0,r.up)("swiper-slide"),l=(0,r.up)("swiper");return(0,r.wg)(),(0,r.iD)("div",Se,[(0,r.Wm)(l,{modules:i.modules,"slides-per-view":1,pagination:{clickable:!0},onSwiper:i.onSwiper,onSlideChange:i.onSlideChange},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.data.productImages,((a,i)=>((0,r.wg)(),(0,r.j4)(s,{key:i,onClick:e[0]||(e[0]=e=>t.$emit("openModal"))},{default:(0,r.w5)((()=>[(0,r._)("img",{src:`${a}`,alt:""},null,8,$e)])),_:2},1024)))),128))])),_:1},8,["modules","onSwiper","onSlideChange"])])}var Ce=a(9477),Ne=a(8040),Me={name:"ProductCarousel",components:{Swiper:Ne.tq,SwiperSlide:Ne.o5},props:{data:Object,productImgModalIsShow:Boolean},setup(){const t=()=>{},e=()=>{};return{onSwiper:t,onSlideChange:e,modules:[Ce.tl]}}};const Ae=(0,H.Z)(Me,[["render",Ue]]);var xe=Ae;const Pe={key:0,class:"product-img-modal"},Oe={class:"modal"},je=(0,r._)("i",{class:"xi-close"},null,-1),He=[je],We=["src"];function Ze(t,e,a,i,o,n){const s=(0,r.up)("swiper-slide"),l=(0,r.up)("swiper");return a.productImgModalIsShow?((0,r.wg)(),(0,r.iD)("div",Pe,[(0,r._)("div",{class:"modal-bg",onClick:e[0]||(e[0]=e=>t.$emit("closeModal"))}),(0,r._)("div",Oe,[(0,r._)("button",{type:"button",class:"button-close","aria-label":"팝업 닫기",onClick:e[1]||(e[1]=e=>t.$emit("closeModal"))},He),(0,r.Wm)(l,{modules:i.modules,"slides-per-view":1,"auto-height":!0,pagination:{clickable:!0},onSwiper:i.onSwiper,onSlideChange:i.onSlideChange},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.data.productImages,((t,e)=>((0,r.wg)(),(0,r.j4)(s,{key:e},{default:(0,r.w5)((()=>[(0,r._)("img",{src:`${t}`,alt:""},null,8,We)])),_:2},1024)))),128))])),_:1},8,["modules","onSwiper","onSlideChange"])])])):(0,r.kq)("",!0)}var ze={name:"ProductImgPopUp",components:{Swiper:Ne.tq,SwiperSlide:Ne.o5},props:{data:Object,productImgModalIsShow:Boolean},setup(){const t=()=>{},e=()=>{};return{onSwiper:t,onSlideChange:e,modules:[Ce.tl]}}};const Ge=(0,H.Z)(ze,[["render",Ze]]);var Te=Ge,qe={name:"ProductView",data(){return{data:{},productImgModalIsShow:!1}},components:{UserInfo:re,ProductInfo:ge,ProductCta:Le,ProductCarousel:xe,ProductImgModal:Te},props:{productListData:Array,userInfo:Object},methods:{openModal(){this.productImgModalIsShow=!0},closeModal(){this.productImgModalIsShow=!1}},mounted(){const t=(0,Nt.yj)();this.productListData.find(((e,a)=>{e.id===Number(t.params.id)&&(this.data=this.productListData[a])}))}};const Je=(0,H.Z)(qe,[["render",Rt]]);var Be=Je;const Re={action:""};function Ee(t,e,a,i,o,n){const s=(0,r.up)("WriteHeader"),l=(0,r.up)("AttachPhoto"),u=(0,r.up)("InputGroup");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(s,{onSaveData:e[0]||(e[0]=t=>n.saveData()),onSaveCustomData:e[1]||(e[1]=t=>n.saveCustomData())}),(0,r._)("form",Re,[(0,r.Wm)(l,{imgUrlArray:o.imgUrlArray,imgUrlArrayLength:o.imgUrlArrayLength,isAttached:o.isAttached,onGetImageUrl:e[2]||(e[2]=t=>n.getImageUrl(t)),onDeletePhoto:e[3]||(e[3]=t=>n.deletePhoto(t))},null,8,["imgUrlArray","imgUrlArrayLength","isAttached"]),(0,r.Wm)(u,{onGetTitle:e[4]||(e[4]=t=>n.getTitle(t)),onGetPrice:e[5]||(e[5]=t=>n.getPrice(t)),onGetContent:e[6]||(e[6]=t=>n.getContent(t)),title:o.title,price:o.price,content:o.content},null,8,["title","price","content"])])])}const Ke={class:"global-header"},Ye=(0,r._)("h1",{class:"visually-hidden"},"애플마켓",-1),Fe={class:"left-menu"},Ve=(0,r._)("i",{class:"xi-angle-left"},null,-1),Qe=[Ve],Xe=(0,r._)("li",null,[(0,r._)("h2",{class:"title"},"중고거래 글쓰기")],-1),ta={class:"right-menu"};function ea(t,e,a,i,o,n){return(0,r.wg)(),(0,r.iD)("header",Ke,[Ye,(0,r._)("ul",Fe,[(0,r._)("li",null,[(0,r._)("button",{onClick:e[0]||(e[0]=e=>t.$router.go(-1)),"arial-lable":"뒤로가기",class:"button-back"},Qe)]),Xe]),(0,r._)("ul",ta,[(0,r._)("li",null,[t.$route.params.id?((0,r.wg)(),(0,r.iD)("button",{key:0,onClick:e[1]||(e[1]=e=>t.$emit("saveCustomData")),class:"button-submit","aria-label":"수정 완료"}," 수정완료 ")):((0,r.wg)(),(0,r.iD)("button",{key:1,onClick:e[2]||(e[2]=e=>t.$emit("saveData")),class:"button-submit","aria-label":"글쓰기 작성완료"}," 완료 "))])])])}var aa={name:"WriteHeader"};const ia=(0,H.Z)(aa,[["render",ea]]);var ra=ia;const oa={class:"attach-photo"},na={class:"attach-photo-list"},sa={for:"buttonAttach",class:"button-attach","aria-label":"사진 첨부하기"},la=(0,r._)("i",{class:"xi-camera"},null,-1),ua={key:0},ca={key:1},da=["onClick"],pa=(0,r._)("i",{class:"xi-close"},null,-1),ma=[pa],ga=["src"],ha={key:0,class:"badge"};function fa(t,e,a,i,o,n){return(0,r.wg)(),(0,r.iD)("div",oa,[(0,r._)("ul",na,[(0,r._)("li",null,[(0,r._)("label",sa,[la,!1===a.isAttached?((0,r.wg)(),(0,r.iD)("span",ua,"사진 첨부하기")):((0,r.wg)(),(0,r.iD)("span",ca,(0,s.zw)(a.imgUrlArrayLength)+" / 10",1))]),(0,r._)("input",{type:"file",multiple:"",id:"buttonAttach",onChange:e[0]||(e[0]=e=>t.$emit("getImageUrl",e.target)),required:"true"},null,32)]),a.isAttached||a.imgUrlArray!=[]?((0,r.wg)(!0),(0,r.iD)(r.HY,{key:0},(0,r.Ko)(a.imgUrlArray,((e,a)=>((0,r.wg)(),(0,r.iD)("li",{key:a},[(0,r._)("button",{type:"button",class:"button-delete",onClick:e=>t.$emit("deletePhoto",a)},ma,8,da),(0,r._)("img",{src:`${e}`,alt:""},null,8,ga),0==a?((0,r.wg)(),(0,r.iD)("span",ha,"대표")):(0,r.kq)("",!0)])))),128)):(0,r.kq)("",!0)])])}var wa={name:"AttachPhoto",data(){return{}},props:{imgUrlArray:Array,imgUrlArrayLength:Number,isAttached:Boolean}};const ba=(0,H.Z)(wa,[["render",fa]]);var Ia=ba;const ya={class:"input-group"},va=["value"],_a={class:"price-input"},Da=["value"],ka={key:0,class:"won color-gray"},La={key:1,class:"won"},Sa=["value"];function $a(t,e,a,i,o,n){return(0,r.wg)(),(0,r.iD)("div",ya,[null!=t.$route.params.id?((0,r.wg)(),(0,r.iD)("input",{key:0,onInput:e[0]||(e[0]=e=>t.$emit("getTitle",e.target.value)),class:"",type:"text",placeholder:"제목",value:a.title,required:""},null,40,va)):(0,r.kq)("",!0),(0,r._)("div",_a,[(0,r._)("input",{onInput:e[1]||(e[1]=e=>t.$emit("getPrice",e.target.value)),type:"number",placeholder:"가격",value:a.price,required:""},null,40,Da),null==a.price||""==a.price?((0,r.wg)(),(0,r.iD)("span",ka,"￦")):((0,r.wg)(),(0,r.iD)("span",La,"￦"))]),(0,r._)("textarea",{onInput:e[2]||(e[2]=e=>t.$emit("getContent",e.target.value)),name:"",cols:"30",rows:"10",value:a.content,placeholder:"게시글 내용을 작성해주세요(가품 및 판매 금지 물품은 게시가 제한될 수 있어요)",required:""},null,40,Sa)])}var Ua={name:"InputGroup",props:{title:String,price:String,content:String}};const Ca=(0,H.Z)(Ua,[["render",$a]]);var Na=Ca,Ma={name:"ProductWrite",data(){return{id:0,title:"",price:null,content:"",imgUrlArray:[],imgUrlArrayLength:0,isAttached:!1,customIdx:null,definedData:null}},components:{WriteHeader:ra,AttachPhoto:Ia,InputGroup:Na},props:{productListData:Array,userInfo:Object},methods:{getTitle(t){this.title=t},getPrice(t){this.price=t},getContent(t){this.content=t},getImageUrl(t){const e=t.files;if(e.length<=10&&this.imgUrlArray.length+e.length<=10)for(const[a,i]of Object.entries(e)){const t=URL.createObjectURL(i);this.imgUrlArray.push(t),this.imgUrlArrayLength=this.imgUrlArray.length}else alert("사진은 최대 10장까지 첨부할 수 있습니다.");null!=this.imgUrlArray&&(this.isAttached=!0)},deletePhoto(t){this.imgUrlArray.splice(t,1),this.imgUrlArrayLength=this.imgUrlArray.length,0==this.imgUrlArray&&(this.isAttached=!1,this.imgUrlArray=[])},defineData(){const t=new Date;this.definedData={id:this.id,title:this.title,price:this.price,content:this.content,category:"전자기기",productMainImage:this.imgUrlArray[0],productImages:this.imgUrlArray,userId:this.userInfo.id,userNickName:this.userInfo.nickName,userLocation:this.userInfo.location,userImage:this.userInfo.image,chatCnt:2,likeCnt:1,viewCnt:100,datetime:t.toLocaleTimeString()}},saveData(){let t=[],e=JSON.parse(window.localStorage.getItem("productListData"));null===e?e=[]:t=e,0==this.imgUrlArrayLength?alert("사진을 첨부해주세요."):""==this.title?alert("제목을 입력해주세요."):""==this.price?alert("가격을 입력해주세요."):""==this.content?alert("내용을 입력해주세요."):(this.defineData(),t.unshift(this.definedData),window.localStorage.setItem("productListData",JSON.stringify(t)),this.$router.push("/"))},getCustomData(){let t=JSON.parse(window.localStorage.getItem("productListData"));const e=t.find((t=>{if(t.id==this.id)return!0}));this.customIdx=t.indexOf(e),this.title=t[this.customIdx].title,this.price=t[this.customIdx].price,this.content=t[this.customIdx].content,this.imgUrlArray=t[this.customIdx].productImages,this.imgUrlArrayLength=t[this.customIdx].productImages},saveCustomData(){let t=[],e=JSON.parse(window.localStorage.getItem("productListData"));null===e?e=[]:t=e,0==this.imgUrlArrayLength?alert("사진을 첨부해주세요."):""==this.title?alert("제목을 입력해주세요."):""==this.price?alert("가격을 입력해주세요."):""==this.content?alert("내용을 입력해주세요."):(this.defineData(),t.splice(this.customIdx,1,this.definedData),window.localStorage.setItem("productListData",JSON.stringify(t)),this.$router.push(`/view/${this.id}`),this.$emit("toggleHeaderMenu"))}},mounted(){if(this.$route.params.id)this.id=Number(this.$route.params.id),this.getCustomData();else if(null===this.productListData)this.id=0;else{const t=this.productListData[0].id;this.id=t+1}}};const Aa=(0,H.Z)(Ma,[["render",Ee]]);var xa=Aa;const Pa={class:"mypage-menu-list"},Oa=(0,r._)("i",{class:"xi-heart-o"},null,-1),ja=(0,r._)("i",{class:"xi-paper-o"},null,-1);function Ha(t,e,a,i,o,n){const s=(0,r.up)("UserInfo"),l=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(s,{userImage:a.userInfo.image,userId:a.userInfo.id,userNickName:a.userInfo.nickName,userLocation:a.userInfo.location,editButton:!0},null,8,["userImage","userId","userNickName","userLocation"]),(0,r._)("ul",Pa,[(0,r._)("li",null,[(0,r.Wm)(l,{to:"/mywish"},{default:(0,r.w5)((()=>[Oa,(0,r.Uk)("관심상품")])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(l,{to:"/mypost"},{default:(0,r.w5)((()=>[ja,(0,r.Uk)("내가쓴글")])),_:1})])])])}var Wa={name:"Mypage",data(){return{}},components:{UserInfo:re,RouterLink:Nt.rH},props:{userInfo:Object}};const Za=(0,H.Z)(Wa,[["render",Ha]]);var za=Za;function Ga(t,e){return(0,r.wg)(),(0,r.iD)("div",null,"채팅")}const Ta={},qa=(0,H.Z)(Ta,[["render",Ga]]);var Ja=qa;function Ba(t,e,a,i,o,n){const s=(0,r.up)("ProductList");return(0,r.wg)(),(0,r.j4)(s,{productListData:o.wishListData},null,8,["productListData"])}var Ra={name:"MyWish",data(){return{wishListData:Array}},components:{ProductList:Gt},props:{productListData:null,userInfo:Object},mounted(){let t=this.userInfo.liked;null!=this.productListData?this.wishListData=this.productListData.filter((e=>t.includes(e.id))):this.wishListData=null}};const Ea=(0,H.Z)(Ra,[["render",Ba]]);var Ka=Ea;function Ya(t,e,a,i,o,n){const s=(0,r.up)("ProductList");return(0,r.wg)(),(0,r.j4)(s,{productListData:o.myPostData},null,8,["productListData"])}var Fa={name:"MyWish",data(){return{myPostData:Array}},components:{ProductList:Gt},props:{productListData:Array,userInfo:Object},mounted(){const t=this.userInfo.id;null!=this.productListData?this.myPostData=this.productListData.filter((e=>t.includes(e.userId))):this.myPostData=null}};const Va=(0,H.Z)(Fa,[["render",Ya]]);var Qa=Va;const Xa={class:"my-info"},ti={class:"editable-avatar"},ei={for:"editable-avatar"},ai=(0,r._)("i",{class:"xi-camera","aria-hidden":"true"},null,-1),ii={key:0,src:Et,alt:""},ri=["src"],oi={class:"editable-inputs"},ni=(0,r._)("label",{for:"nickName",class:"label-title"},"닉네임",-1),si=["value"];function li(t,e,a,i,o,n){return(0,r.wg)(),(0,r.iD)("div",Xa,[(0,r._)("div",ti,[(0,r._)("label",ei,[ai,null==a.userInfo.image?((0,r.wg)(),(0,r.iD)("img",ii)):((0,r.wg)(),(0,r.iD)("img",{key:1,src:`${a.userInfo.image}`,alt:""},null,8,ri))]),(0,r._)("input",{type:"file",id:"editable-avatar",class:"visually-hidden",onChange:e[0]||(e[0]=e=>t.$emit("getUserImage",e.target))},null,32)]),(0,r._)("div",oi,[ni,(0,r._)("input",{class:"input-basic h50",id:"nickName",type:"text",value:a.userInfo.nickName,onInput:e[1]||(e[1]=e=>t.$emit("getUserNickName",e.target.value))},null,40,si)])])}var ui={Name:"MyInfo",props:{userInfo:Object}};const ci=(0,H.Z)(ui,[["render",li]]);var di=ci;const pi=[{path:"/",component:Jt},{path:"/view/:id",component:Be},{path:"/write/:id?",component:xa},{path:"/mypage",component:za,name:"마이페이지"},{path:"/chat",component:Ja,name:"채팅"},{path:"/mywish",component:Ka,name:"관심상품"},{path:"/mypost",component:Qa,name:"내가쓴글"},{path:"/myinfo",component:di,name:"정보수정"}],mi=(0,Nt.p7)({history:(0,Nt.PO)(),routes:pi});var gi=mi;(0,i.ri)(Ct).use(gi).mount("#app")}},e={};function a(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i].call(o.exports,o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,i,r,o){if(!i){var n=1/0;for(c=0;c<t.length;c++){i=t[c][0],r=t[c][1],o=t[c][2];for(var s=!0,l=0;l<i.length;l++)(!1&o||n>=o)&&Object.keys(a.O).every((function(t){return a.O[t](i[l])}))?i.splice(l--,1):(s=!1,o<n&&(n=o));if(s){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[i,r,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,o,n=i[0],s=i[1],l=i[2],u=0;if(n.some((function(e){return 0!==t[e]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(l)var c=l(a)}for(e&&e(i);u<n.length;u++)o=n[u],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(c)},i=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(6495)}));i=a.O(i)})();
//# sourceMappingURL=app.4ffa32bc.js.map