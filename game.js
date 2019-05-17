M=Math,A=Array
a=70,c=9
y=a*a+a
R=()=>M.random()*y<<0
L=A(20).fill(2)
P=[]
m=A(y).fill('.')
B=p=>{for(s=0;s<6;s+=.4)m[p+~~(M.sin(s)*5)*a+M.cos(s)*5<<0]='#'}
C=(i,p,o=F(p))=>L[o]?--L[o]:m[p]=='.'?P[i]=p:0
F=p=>P.findIndex(w=>w==p)
H=(i,p,d)=>C(i,p+((d%a-p%a)>=0?1:-1)+(~~d/a-p/a>=0?a:-a))
for(z in L)P[z]=R(),B(R()),m[R()]='*'
m[R()]='H'
L[0]=c
onkeyup=e=>{d=1-e.which%4
C(0,P[0]+(d%2?d*a:-d-1))
for(z in L)L[++z]?H(z,P[z],P[0]):0
r=''
for(y=-c;y++<c;){for(x=-c;x++<c;){
p=P[0]+y*a+x
T=F(p)
r+=T>=0?L[T]?T==0?L[0]:'z':',':m[p]||'~'}r+=`
`}console.log(r)}
