M=Math,A=Array
a=49,Z=10,c=9
y=a*a+a
R=()=>M.random()*y<<0
L=A(Z).fill(2)
P=[]
m=A(y).fill('.')
B=(p,s,e,r)=>{for(i=s;i<e;i+=.05)m[p+(M.sin(i)*r<<0)*a+M.cos(i)*r<<0]='#'}
C=(i,p)=>(o=F(p))&&L[o]?--L[o]:m[p]=='.'?P[i]=p:0
F=(p)=>P.findIndex(w=>w==p)
H=(i,p,d)=>{
h=(d%a-p%a)>=0?1:-1,v=M.round(d/a-p/a)>=0?a:-a;
C(i,p+h+v)
console.log(i)
console.log(h+'v'+v+": "+u)
return ""
}

for(z in L)P[z]=R(),B(R(),1,M.PI*2,5),m[R()]='*'
L[0]=c

onkeyup=e=>{
d=1-e.which%4
C(0,P[0]+(d%2?d*a:-d-1))
r=L[0]+"hp\n"
for(y=-c;y<c;y++){for(x=-c;x<c;x++){
p=P[0]+y*a+x,T=F(p),T>=0?r+=L[T]?T==0?'@':'z'+(H(T,p,P[0])):',':r+=m[p]||' '
}r+='\n'}
console.log(r)
}
