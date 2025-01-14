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

