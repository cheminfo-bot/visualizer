$wnd.jsme.runAsyncCallback2('var lea=" (H\'s don\'t count.)",mea="!#6",nea="!@",oea="#15,",pea="#16,",qea="#6,",rea="#7,",sea="#8,",tea="4",uea="5",vea="6",wea=";!R",xea=";A",yea=";D",zea=";H",Aea=";R",Bea=";a",Cea="<SELECT>",v9="Any",Dea="Any except C",w9="Aromatic",Eea="Atom is :",Fea="Atom type :",Gea="Atom/Bond Query",Hea="Bond is :",Iea="Br,",Jea="C,",Kea="Cl,",Lea="F,",Mea="F,Cl,Br,I",Nea="Halogen",Oea="I,",Pea="Missing message: awt.103",Qea="N,",Rea="Nonaromatic",x9="Nonring",Sea="Number of connections :",Tea="Number of hydrogens :  ",\nUea="O,",Vea="Or select one or more from the list :",Wea="P,",y9="Reset",z9="Ring",Xea="S,",Yea="bidiwrapped",Zea="c,",$ea="gwt-ListBox",afa="n,",bfa="o,",cfa="p,",dfa="s,",efa="~";function A9(a,b){if(0>b||b>=a.pb.options.length)throw new KJ;}function B9(a,b){A9(a,b);return a.pb.options[b].value}function C9(){var a;this.pb=(a=Cea,$doc.createElement(a));this.pb[Bo]=$ea}t(380,357,Ax,C9);function D9(){D9=v}\nfunction E9(a,b){if(null==b)throw new uG(Pea);var c=-1,d,e,f;f=a.yc.a.pb;e=aD($s);e.text=b;e.removeAttribute(Yea);e.value=b;d=f.options.length;(0>c||c>d)&&(c=d);c==d?f.add(e):(c=f.options[c])?f.add(e,c.index):f.add(e)}function F9(){D9();OM.call(this);new fy;this.yc=new G9((PM(),this))}t(448,435,{53:1,55:1,62:1,74:1,82:1},F9);_.qe=function(){return TM(this.yc,this)};\n_.Fe=function(){return(null==this.vc&&(this.vc=AM(this)),this.vc)+nd+this.Gc+nd+this.Hc+nd+this.Dc+yw+this.tc+(this.Cc?l:",hidden")+",current="+B9(this.yc.a,this.yc.a.pb.selectedIndex)};function H9(){S1.call(this,7)}t(461,1,Cx,H9);function I9(a){T1.call(this,a,0)}t(466,435,tx,I9);function J9(a){var b=a.j;r2(a.yc.c,b.a,b.b);!CM(a)&&q1(a);k1(a)}\nfunction K9(a,b,c){o2.call(this);this.yc&&N1(this.yc.c,!1);K1(this,!1);aN(this,new S1(0));a=new T1(a,1);m1(this,a,null);a=new fN;m1(a,this.i,null);m1(this,a,null);b&&(this.j=DM(b),J1(this),n2(this.j,~~(iC(b.kc.pb,Is)/2)-~~(this.Dc/2),~~(iC(b.kc.pb,Hs)/2)-~~(this.tc/2)));c&&i1(this,c)}t(609,610,YX,K9);_.Fg=function(){return"OK"};t(619,618,ux);_.ad=function(){J9(new K9(this.b,this.a,(RP(),TP)))};t(621,618,ux);_.ad=function(){!this.a.Sb?this.a.Sb=new L9(this.a):this.a.Sb.yc.c.hb?f3(this.a.Sb.yc.c):J9(this.a.Sb)};\nfunction M9(a,b){f1(b)==a.a?i1(b,(CN(),LN)):i1(b,a.a)}\nfunction N9(a){var b,c,d,e;e=l;d=!1;f1(O9)!=a.a?(e=dd,d=!0):f1(P9)!=a.a?(e=mea,d=!0):f1(Q9)!=a.a?(i1(R9,(CN(),LN)),i1(S9,LN),i1(T9,LN),i1(U9,LN),e=Mea):(b=f1(V9)!=a.a,c=f1(W9)!=a.a,f1(X9)!=a.a&&(b?e+=Zea:c?e+=Jea:e+=qea),f1(Y9)!=a.a&&(b?e+=afa:c?e+=Qea:e+=rea),f1(Z9)!=a.a&&(b?e+=bfa:c?e+=Uea:e+=sea),f1($9)!=a.a&&(b?e+=dfa:c?e+=Xea:e+=pea),f1(a$)!=a.a&&(b?e+=cfa:c?e+=Wea:e+=oea),f1(R9)!=a.a&&(e+=Lea),f1(S9)!=a.a&&(e+=Kea),f1(T9)!=a.a&&(e+=Iea),f1(U9)!=a.a&&(e+=Oea),qU(e,nd)&&(e=e.substr(0,e.length-\n1-0)),1>e.length&&!a.b&&(b?e=jn:c?e=Nf:(i1(O9,(CN(),LN)),e=dd)));b=l;d&&f1(V9)!=a.a&&(b+=Bea);d&&f1(W9)!=a.a&&(b+=xea);f1(b$)!=a.a&&(b+=Aea);f1(c$)!=a.a&&(b+=wea);f1(O9)!=a.a&&0<b.length?e=b.substr(1,b.length-1):e+=b;d=d$.yc.a.pb.selectedIndex;0<d&&(--d,e+=zea+d);d=e$.yc.a.pb.selectedIndex;0<d&&(--d,e+=yea+d);f1(f$)!=a.a&&(e=efa);f1(g$)!=a.a&&(e=mf);f1(h$)!=a.a&&(e=Lf);f1(i$)!=a.a&&(e=nea);JO(a.e.yc,e)}\nfunction j$(a){k$(a);l$(a);var b=d$.yc.a;A9(b,0);b.pb.options[0].selected=!0;b=e$.yc.a;A9(b,0);b.pb.options[0].selected=!0;i1(V9,a.a);i1(W9,a.a);i1(b$,a.a);i1(c$,a.a);i1(d$,a.a);i1(e$,a.a);m$(a)}function k$(a){i1(X9,a.a);i1(Y9,a.a);i1(Z9,a.a);i1($9,a.a);i1(a$,a.a);i1(R9,a.a);i1(S9,a.a);i1(T9,a.a);i1(U9,a.a)}function l$(a){i1(O9,a.a);i1(P9,a.a);i1(Q9,a.a)}function m$(a){i1(f$,a.a);i1(g$,a.a);i1(h$,a.a);i1(i$,a.a);a.b=!1}\nfunction L9(a){L1.call(this,Gea);this.i=new E1(this.Fg());vN(this.q,new p2(this));this.a=(RP(),TP);this.c=a;this.d||(a=DM(a),this.d=new V1(a),n2(this.d,-150,10));this.j=this.d;aN(this,new H9);i1(this,this.a);a=new fN;aN(a,new bO(0,3,1));m1(a,new I9(Fea),null);O9=new E1(v9);P9=new E1(Dea);Q9=new E1(Nea);m1(a,O9,null);m1(a,P9,null);m1(a,Q9,null);m1(this,a,null);a=new fN;aN(a,new bO(0,3,1));m1(a,new T1(Vea,0),null);m1(this,a,null);a=new fN;aN(a,new bO(0,3,1));X9=new E1(Bg);Y9=new E1(Wj);Z9=new E1(hk);\n$9=new E1(tk);a$=new E1(jk);R9=new E1(Th);S9=new E1(Wg);T9=new E1(Ag);U9=new E1(ci);m1(a,X9,null);m1(a,Y9,null);m1(a,Z9,null);m1(a,$9,null);m1(a,a$,null);m1(a,R9,null);m1(a,S9,null);m1(a,T9,null);m1(a,U9,null);m1(this,a,null);a=new fN;aN(a,new bO(0,3,1));d$=new F9;E9(d$,v9);E9(d$,ze);E9(d$,Se);E9(d$,Xe);E9(d$,gf);m1(a,new I9(Tea),null);m1(a,d$,null);m1(this,a,null);a=new fN;aN(a,new bO(0,3,1));e$=new F9;E9(e$,v9);E9(e$,ze);E9(e$,Se);E9(e$,Xe);E9(e$,gf);E9(e$,tea);E9(e$,uea);E9(e$,vea);m1(a,new T1(Sea,\n0),null);m1(a,e$,null);m1(a,new T1(lea,0),null);m1(this,a,null);a=new fN;aN(a,new bO(0,3,1));m1(a,new I9(Eea),null);V9=new E1(w9);m1(a,V9,null);W9=new E1(Rea);m1(a,W9,null);b$=new E1(z9);m1(a,b$,null);c$=new E1(x9);m1(a,c$,null);m1(this,a,null);a=new fN;i1(a,SN(f1(this)));aN(a,new bO(0,3,1));m1(a,new I9(Hea),null);f$=new E1(v9);m1(a,f$,null);g$=new E1(w9);m1(a,g$,null);h$=new E1(z9);m1(a,h$,null);i$=new E1(x9);m1(a,i$,null);m1(this,a,null);a=new fN;aN(a,new bO(1,3,1));this.e=new IO(dd,20);m1(a,this.e,\nnull);m1(a,new E1(y9),null);m1(a,this.i,null);m1(this,a,null);this.yc&&N1(this.yc.c,!1);K1(this,!1);k$(this);l$(this);m$(this);i1(V9,this.a);i1(W9,this.a);i1(b$,this.a);i1(c$,this.a);i1(d$,this.a);i1(e$,this.a);M9(this,O9);J1(this);a=this.j;r2(this.yc.c,a.a,a.b);!CM(this)&&q1(this);k1(this)}t(635,610,YX,L9);\n_.Gg=function(a,b){var c;I(b,y9)?(j$(this),M9(this,O9),N9(this)):B(a.f,52)?(m$(this),aH(a.f)===aH(O9)?(k$(this),l$(this)):aH(a.f)===aH(P9)?(k$(this),l$(this)):aH(a.f)===aH(Q9)?(k$(this),l$(this)):aH(a.f)===aH(b$)?i1(c$,this.a):aH(a.f)===aH(c$)?(i1(b$,this.a),i1(V9,this.a)):aH(a.f)===aH(V9)?(i1(W9,this.a),i1(c$,this.a)):aH(a.f)===aH(W9)?i1(V9,this.a):aH(a.f)===aH(f$)||aH(a.f)===aH(g$)||aH(a.f)===aH(h$)||aH(a.f)===aH(i$)?(j$(this),this.b=!0):l$(this),M9(this,a.f),N9(this)):B(a.f,53)&&(m$(this),c=a.f,\n0==c.yc.a.pb.selectedIndex?i1(c,this.a):i1(c,(CN(),LN)),N9(this));107!=this.c.j&&(this.c.j=107,kN(this.c));return!0};_.b=!1;_.c=null;_.d=null;var O9=_.e=null,f$=null,P9=null,V9=null,g$=null,T9=null,X9=null,e$=null,d$=null,S9=null,R9=null,Q9=null,U9=null,Y9=null,W9=null,c$=null,i$=null,Z9=null,a$=null,b$=null,h$=null,$9=null;function G9(a){JW();LW.call(this);this.a=new C9;rJ(this.a,new n$(this,a),(G_(),G_(),H_))}t(680,678,{},G9);_.Ye=function(){return this.a};_.a=null;\nfunction n$(a,b){this.a=a;this.b=b}t(681,1,{},n$);_.jd=function(a){PM();s2(a,this.b,B9(this.a.a,this.a.a.pb.selectedIndex))};_.a=null;_.b=null;V(609);V(635);V(448);V(680);V(681);V(380);w(RX)(2);\n//@ sourceURL=2.js\n')
