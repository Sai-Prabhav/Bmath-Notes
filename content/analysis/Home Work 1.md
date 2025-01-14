$\begin{array}{l}\\ \mathrm{Q_n} \ 1:\ {{\mathrm{Define~}}f:[0,1]\to\mathbb{R}{\mathrm{~by~}}f(x)=n{\mathrm{~if~}}x=1/n{\mathrm{~for~some~}}n\in\mathbb{N},{\mathrm{~and~}}f(x)=0{\mathrm{~otherwise.}}}\\ {{\mathrm{  ~Prove~that~}}f\not\in R[0,1].}\end{array}$
$\mathrm{Answer:}$

Clearly $f$ has no upper bound  

so, [[analysis/Riemann integral 1#^6bd201|Upper Riemann Sum]] is not defined 

Hence, $f\not\in \CR[0,1]$

$\begin{array}{l}\\ \mathrm{Q_n} \ 2:\ {{\mathrm{Define~}}f:[0,1]\to\mathbb{R}{\mathrm{~by~}}f(x)=1{\mathrm{~if~}}x=1/2{\mathrm{~and~}}f(x)=0{\mathrm{~otherwise.}}}\\ {{f\in R[0,1]}{\mathrm{~and~}}\int_{1}^{0}f=0.}\end{array}$

$\mathrm{Answer:}$
$f$ is bounded as range of $f$ is $\left\{ 1,0 \right\}$
First we need to show that $f\in \CR[0,1]$
$\let P\in \CP[0,1]\st x_{0}=0<x_{1}=\frac{1}{2}-\upvarepsilon<x_{3}=\frac{1}{2}+\upvarepsilon<x_{4}=1$
$$
\begin{align}
L(f,P) & =m_{1}\Mod[I_1] +m_{2}\Mod[I_{2}] +m_{3}\Mod[I_{3}]  \\
 & =0+0+0 \\
 & =0 \\
U(f,P) & = M_{1}\Mod[I_{1}] +M_{2}\Mod[I_{2}] +M_{3}\Mod[I_{3}]  \\
 & =0\left( \frac{1}{2}-\upvarepsilon \right)+1(2\upvarepsilon) + 0\left( \frac{1}{2}-\upvarepsilon \right) \\
 & = 2\upvarepsilon
\end{align}
$$

$$
\begin{align}
U(f,P)-L(f,P) & =2\upvarepsilon \\
 & =\upvarepsilon'\quad(\let \upvarepsilon'=2\upvarepsilon) \\
\end{align}
$$
Hence for every $\upvarepsilon'$ we can construct $P$ $\st U(f,P)<L(f,P)<\upvarepsilon'\implies f\in \CR[0,1]$
$\overline{\int^{1}_{0}}f=\inf{U(f,P)}=\inf\left\{ 2\upvarepsilon \right\}=0$
$\underline{\int^{1}_{0}}f=\sup L(f,P)=0$
hence $\underline{\int^{1}_{0}}f=\overline{\int^{1}_{0}}f=0=\int^{1}_{0}f$

$\begin{array}{l}\\ \mathrm{Q_n} \ 3:\ {{\mathrm{Let~}}f\in B[a,b].{\mathrm{~Prove~that~}}f\mathrm{~is~a~constant~function~if~and~only~if~there~exists~} }\\{ P\in P[a,b]{\mathrm{~such~that~}}L(P,f)=U(P,f).}\end{array}$

$\mathrm{Answer:}$
if $f$ is constant than any $P$ will satisfy $L(P,f)=U(P,f)$ as $M_{i}=m_{i}\fa i$
so lets show the other way that is if there exist $P\st L(P,f)=U(P,f)\then$ we need to show that $f$ is constant
say $P:x_{0}=a<x_{1}<\dots <x_{n}=b$
$$
\begin{align}
  \quad L(P,f) & = U(P,f) \\
  0  & = L(P,f)-U(P,f) \\
 & =m_{1} \left|I_{1}\right|+m_{2}\left|I_{2}\right|\dots m_{n} \left|I_{n} \right|-\left[M_{1}\Mod[I_{1}] +M_{2}\Mod[I_{2}] \dots M_{n} \Mod[I_{n} ] \right] \\
 & =\underbrace{ \underbrace{ (m_{1}-M_{1}) }_{ \leq0 }\underbrace{ \left|I_{1}\right| }_{ >0 } }_{ \leq0 }+\cdots+(m_{n}-M_{n}  )\Mod[I_{n} ]  
\end{align}
$$
sum of non-positive terms is 0 iff all the terms are 0 
$$
\begin{align}
\implies \left(m_{i} -M_{i}\right)\Mod[I_{i} ]  & =0 \\
 m_{i} -M_{i}   &  =0 \\
\implies m_{i} &  =M_{i}  \\

\end{align}
$$
this shows that $f(I_{i})$ has the same supremum and infimum hence $f$ is constant in $I_{i}\fa 1\leq i\leq n$ 
hence $f$ is constant in $\bigcup^{n}_{j=1}I_{j}=[a,b]$



$\begin{array}{l}\\ \mathrm{Q_n} \ 4:\ {{\mathrm{Let~}}f\in R[a,b]{\mathrm{~and~let~}}\alpha\in\mathbb{R}.{\mathrm{~If~}}L(f,P)\leq\alpha\leq U(f,P)}\\{{\mathrm{~for~all~}}P\in P[a,b],{\mathrm{~then~prove~that~}}\int_{a}^{b}f=\alpha.} \end{array}$

$\mathrm{Answer:}$
let $\alpha'=\int^{b}_{a}f$ (we are not claiming $\alpha=\alpha'$)
$\alpha'=\underline{\int^{b}_{a}}f\implies  \ 	\exists \ {P_{1}} \in \CP[a,b]\st\alpha'\geq L({P_{1}},f)>\alpha'-\upvarepsilon$ for a small $\upvarepsilon>0$
$\equiv^{ly}$
$\exists \ 	P_{2}\in \CP(a,b)\st \alpha'+\upvarepsilon>U(P_{2},f)\geq \alpha'$
we are using the infimum and supriemum property to find $P_{1},P_{2}$
$$
\begin{align}
L(P_{1},f) & <\alpha<U(P_{2},f) \\
\alpha'-\upvarepsilon & <\alpha<\alpha'+\upvarepsilon
\end{align}
$$
as $\upvarepsilon$ is arbitrary $\alpha'=\alpha\implies \int^{a}_{b}f=\alpha$ 


$\begin{array}{l}\\ \mathrm{Q_n} \ 5:\ {{\mathrm{Give~an~example~of~a~function~}}f\in B[0,1]}\\{{\mathrm{~that~is~not~Riemann~integrable~but~}}f^{2}\in R[0,1].}\end{array}$

$\mathrm{Answer:}$
$$
\begin{align}
f(x)=\begin{cases}
\sqrt{ 2 }-1 \if x=\frac{1}{n}n\in \NN \\
\sqrt{ 3 }-1 \if \text{Other wise}
\end{cases} \\
\end{align}
$$
$\text{range}(f)=\left\{ \sqrt{ 2 }-1,\sqrt{ 3 }-1 \right\}$
$f\left(\left\{ \sqrt{ 2 }-1,\sqrt{ 3 }-1 \right\}\right)=\sqrt{ 3 }-1\implies f(f(x))=\sqrt{ 3 }-1\fa x \in \RR$
here $f$ is not integrable but $f^{2}$ is [[analysis/Riemann integral 1#^d41959|Riemann integrable]] 


$\begin{array}{l} \mathrm{Q_n} \ 6: \ {\mathrm{Let~}}f,g\in B(a,b),\;\mathrm{and let}\ f(x)\leq g(x)\quad{\mathrm{for~all~}}x\in[a,b]\\ \mathrm{Prove~that}\end{array}$

$${{\underline{\int_{b}^{a}}f\leq \underline{\int_{b}^{a}}g}\text{~and~}{\overline\int_{a}^{a}f\leq\overline \int_{a}^{a}g}}.$$


$\mathrm{Answer:}$
Fix $P$ then Let $M_{i}$ be sup in $f(I_{i})$ $M'_{i}$ in $g(I_{i})$ and $m_{i}$ be inf in $f(I_{i})$ and $m'_{i}$ be inf in $g(I_{i})$
clearly $M_{i}\leq M'_{i}$ and $m_{i}\leq m'_{i}$ 


$$
\begin{align} 
\implies U(f,P) & \leq U(g,P) \\
L(f,P) & \leq L(g,P)\fa P\in \CP[a,b]\\
\implies \inf(U(f,P)) & \leq\inf(U(g,P)) \\
\sup(L(f,P)) & \leq\sup(U(g,P)) \\
 \ \overline{\int^{b}_{a}}f  & \leq\overline{\int^{b}_{a}}g  \\
\underline{\int^{b}_{a}}f  & \leq \underline{\int^{b}_{a}}g 
\end{align}
$$


$${\mathrm{Let~}}f,g\in{\mathcal{R}}[a,b],{\mathrm{~and~let~}}f(x)\leq g(x){\mathrm{~for~all~}}x\in[a,b].{\mathrm{~Prove~that~}}\int_{a}^{b}f\leq\int_{a}^{b}g.{\mathrm{~}}$$

$\begin{array}{l} \mathrm{Q_n} \ 7: {\mathrm{Let~}}f,g\in{\mathcal{R}}[a,b],{\mathrm{~and~let~}}f(x)\leq g(x){\mathrm{~for~all~}}x\in[a,b].\\{\mathrm{~Prove~that~}}\int_{a}^{b}f\leq\int_{a}^{b}g.{\mathrm{~}}\end{array}$

$\mathrm{Answer:}$
from the previous question we have seen $\overline{\int^{b}_{a}}f\leq \overline{\int^{b}_{a}}g$
if $f,g\in \CR[a,b]\implies \overline{\int^{b}_{a}}f={\int^{b}_{a}}f$ and $\overline{\int^{b}_{a}}g={\int^{b}_{a}}g$
hence ${\int^{b}_{a}}f\leq {\int^{b}_{a}}g$

$\begin{array}{l} \mathrm{Q_n} \ 8:{\mathrm{True/False~(with~explanation).~if~}}f(x)\leq g(x)\leq h(x){\mathrm{~for~all~}}x\in[a,b],\\{\mathrm{~and~}}f,h\in\mathcal{R}[a,b],\text{~then~} g\in \CR{a,b} \end{array}$

$\mathrm{Answer:}$
No, Let $g$ be any bounded function which is not [[analysis/Riemann integral 1#^d41959|Riemann integrable]] 
let $f$ be a constant $\inf$  $g$ and $h$ be a constant sup $g$ 
$g$ can be Dirichlet function
This is a counter example proving the statement false 


$\begin{array}{l} \mathrm{Q_n} \ 9: {{\mathrm{Consider~the~characteristic~function~}\chi_{[1,3]}~{\mathrm{on}}~[0,5].~}}\\ {{\mathrm{Prove~that~}\chi_{[1,3]}\in\mathcal{R}[0,5],~\mathrm{and~then}}{\mathrm{compute~}\int_{0}^{5}\chi_{[1,3]}.}}\end{array}$

$\mathrm{Answer:}$
$\let P:x_{0}=0<x_{1}=1-\upvarepsilon<x_{2}=1+\upvarepsilon<x_{3}=3-\upvarepsilon<x_{4}=3+\upvarepsilon<x_{5}=5$
$$
\begin{align}
U(P,f)-L(P,f) & =M_{1}\Mod[I_{1}]+\dots+M_{5}\Mod[I_{5}]-\left( m_{1}\Mod[I_{1}]+\dots+m_{5}\Mod[I_{5}] \right) \\
 & = (M_{1}-m_{1}  ) \Mod[I_{1} ] +\dots + (M_{5} -m_{1})\Mod[I_5]  \\
 & = (0)(1-\upvarepsilon)+(1-0)2\upvarepsilon+(1-1) (2-2\upvarepsilon)+(1-0) (2e)+(0)(2-\upvarepsilon) \\
 & = 4\upvarepsilon \\
 & =\upvarepsilon'(\text{say~~~} \upvarepsilon'=4\upvarepsilon)
\end{align}
$$

As $\exists$ a $P$ for every $\upvarepsilon'>0$ $\st U(P,f)-L(P,f)<\upvarepsilon$ 
Hence $f$ is [[analysis/Riemann integral 1#^d41959|Riemann integrable]] 
$\implies\overline{\int^{5}_{0}}f={\int^{5}_{0}}f$
$$
\begin{align}
\overline{\int^{5}_{0}}f  & = \inf \left\{ U(f,P) \right\} \\
 & =\inf(2\upvarepsilon+\left( 2-2\upvarepsilon \right)+2\upvarepsilon ) \\
 & =  \inf(2+2\upvarepsilon) \\
 & =2 \text{~as~}\upvarepsilon \text{ is arbitory >0} 
\end{align}
$$
$\overline{\int^{5}_{0}}f=2={\int^{5}_{0}}f$



$\begin{array}{l} \mathrm{Q_n} \ 10: \end{array}$
