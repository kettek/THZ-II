M=Math,A=Array
a=99,Z=20,c=9
y=a*a+a
R=()=>M.random()*y<<0
L=A(Z).fill(1)
P=[],H=[]
m=A(y).fill('.')
S=(p,c)=>(p=p<<0,m[p]?m[p]=c:0)
B=(p,s,e,r)=>{for(i=s;i<e;i+=0.05)S(p+(M.sin(i)*r<<0)*a+M.cos(i)*r<<0,'#')}
D=(i,o)=>--H[o]<1?L[o]=0:0
C=(i,p)=>o=P.findIndex(w=>w==p&&w!=i)>0?D(i,o):m[p]=='.'?P[i]=p:0

for(z in L)P[z]=R(),H[z]=2,B(R(),1,M.PI*2,5),S(R(),'*')
H[0]=Z

onkeyup=e=>{
d=1-e.which%4
d=d%2?d*a:-d-1
C(0,P[0]+d)
r=H[0]+"hp\n"
for(y=-c;y<c;y++){for(x=-c;x<c;x++){t=P[0]+y*a+x,T=P.findIndex(e=>e==t),T>=0?r+=T:r+=m[t]||' '}r+='\n'}
console.log(r)
}
