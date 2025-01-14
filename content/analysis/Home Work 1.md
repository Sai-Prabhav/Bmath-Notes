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
 & =0\left( \frac{1}{2}-\upvarepsilon \right)+1(2\upvarepsilon) + 
\end{align}
$$








$\begin{array}{r l}\\ {(2)}&{{\mathrm{Define~}}f:[0,1]\to\mathbb{R}{\mathrm{~by~}}f(x)=1{\mathrm{~if~}}x=1/2{\mathrm{~and~}}f(x)=0{\mathrm{~otherwise.}}}\\ {{f\in R[0,1]}{\mathrm{~and~}}\int_{1}^{0}f=0.}\\ {(3)}&{{\mathrm{Let~}}f\in B[a,b].{\mathrm{~Prove~that~}}f\mathrm{~is~a~constant~function~if~and~only~if~there~exists~}P\in P[a,b]}\\ {{P[a,b]}{\mathrm{~such~that~}}L(P,f)=U(P,f).}\\ {(4)}&{{\mathrm{Let~}}f\in R[a,b]{\mathrm{~and~let~}}\alpha\in\mathbb{R}.{\mathrm{~If~}}L(f,P)\leq\alpha\leq U(f,P){\mathrm{~for~all~}}P\in P[a,b],{\mathrm{~then~prove~that~}}\int_{a}^{b}f=\alpha.}\\ {(5)}&{{\mathrm{Give~an~example~of~a~function~}}f\in B[0,1]{\mathrm{~that~is~not~Riemann~integrable~but~}}f^{2}\in R[0,1].}\end{array}$
