M=Math,A=Array
R=_=>M.random()*y<<0
L=A(0,c=9,...A(30).fill(2))
P=[]
m=A(y=(a=90)*a).fill('.')
B=p=>{for(s=0;s<6;s+=.4)m[p+~~(M.sin(s)*5)*a+M.cos(s)*5<<0]='#'}
C=(p,o=F(p))=>L[o]?--L[o]:m[p]=='.'?P[i]=p:0
F=p=>P.findIndex(w=>w==p)
H=(p,d)=>C(p+(d%a-p%a>0?1:-1)+(~~d/a-p/a>0?a:-a))
for(i in L)P[i]=R(),B(R()),m[R()]='*'
m[P[0]]='.'
onkeyup=e=>{d=1-e.which%4
for(i in L)L[i]?i-1?H(P[i],P[1]):C(P[1]+(d%2?d*a:-d-1)):0
r=''
for(y=-c;y++<c;r+=`
`)for(x=-c;x++<c;r+=T+1?T?L[T]?T-1?'z':L[1]:',':'H':m[p]||'~')T=F(p=P[1]+y*a+x)
console.log(P[0]-P[1]?r:"escape!")}
