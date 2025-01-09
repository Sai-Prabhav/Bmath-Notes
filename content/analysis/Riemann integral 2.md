---
date: 2025-01-08
---
Example 1
$$
\begin{align}
\CR[a,b]\subset\neq \mathcal{B}[a,b]
\end{align}
$$
Dirichlet fn. $f:[0,1]\to \RR$ defined by
$$
\begin{align}
f(X) & =\begin{cases}
1 \if x \in \phi \cap[0,1]  \\
0 \if x \in \phi^{c} \cap[0,1]
\end{cases}
\end{align}
$$
Clearly $f$ $\in \mathcal{B}[0,1]$ and $f\not\in C[0,1]$
Pick a partition $P:x_{0}=0<x_{2}<\dots <x_{n}=1$
Now $m_{j}$ =0 $\fa j\implies L(f,P)=0 \fa P\implies \underline{\int^{1}_{0}}f=0$
and $M_{j}=1\fa j\implies \overline{\int^{1}_{0}}f=1$

> [!example|2] 
> $\CR[a,b]\neq \phi$
> Let $f(x)=c\fa x \in [a,b]$
> $\fa P\in \CP[a,b],m_{j}=c=M_{j}\fa j$
> $\implies L(f,P)=c(b-a)=\cup (f,p)\fa P\in \CP[a,b]$
> $\implies \underline{\int^{b}_{a}}f=\overline{\int^{b}_{a}}f=\int^{a}_{b}f=c\times(b-a)$
> $\implies f\in \CR[a,b]$

 > [!example|3]
 > 
 >$\exists \ f \in \mathcal{B}[a,b]\st \Mod[f]\in \CR[a,b]$ but $f\not\in \CR[a,b]$

  $$
\begin{align}
f(x)=\begin{cases}

\end{cases}
\end{align}
$$
(::todo)



> [!definition] 
> 
> Let $P, \hat{P}\in \CP[a,b]$ we say $\hat{P}\supset P$ or $\hat{p}$is a refinement of $P$ in nodes of $\hat{p}\supseteq$ nodes of $P$ 



> [!proposition] 
>
>Let $f\in \mathcal{B}[a,b],p,\hat{p}\in \CP[a,b]$ suppose $P\subset \hat{P}$ Then 
>$L(f,P)\leq L(f,\hat{P})\leq U(f,\hat{P}),\leq U(f,P)$
>



`\begin{proof}` 

Enough to prove 
Set $\hat{P}=P \cup \left\{ \hat{x} \right\}$ with $\hat{x}\not\in P$
set $P:a=X_{0}<x_{1}<x_{2}\dots <x_{n}=b$
$\exists \ j\in{1,2,3\dots n}\st x_{j-1}<\hat{x}<x_{j}$
let $\inf f[x_{j-1}\hat{x}] =\hat{m}_{j-1}$
let $\inf f[\hat{x},x_{j}]=\hat{m}_{j}$

$$
\begin{align}
L(f,\hat{p})-L(f,P) & =\hat{m}_{j-1}(\hat{x}-x_{j-1})+\hat{m}_{j}(x_{j}-\hat{x}) -m_{j}(xj-x_{j-1}) \\
 & =\hat{m}_{j-1}(\hat{x}-x_{j-1})+\hat{m}_{j}(x_{j}-\hat{x}) - {m}_{j}(x_{j}-\hat{x} ) -m_{j} (\hat{x}-x_{j-1} )  \\
 & =\underbrace{ (\hat{m}_{j} -m_{j} ) }_{ \geq0 }(x_{j} -\hat{x}) +\underbrace{ (\hat{m}_{j-1} -m_{j} ) }_{ \geq0 } (\hat{x}-x_{j-1} )  \\
\implies L(f,\hat{p})-L(f,P) &  \geq0

\end{align}
$$
> [!exercise] 
> Complete the exercies for U($f$,$p$ )
> and induction 






 `\end{proof}`
> [!corollary] 
> Let $f\in \mathcal{B}[a,b]$ then 
> $L(f,P)\leq U(f,Q)\fa P,Q\in \CP[a,b]$


`\begin{proof}` 

$$
\begin{align}
L(f,p) & \leq L(f,P\cup Q) \\
 & \leq U(F,Q) \\

\end{align}
$$
> [!corollary] 
> $\fa f\in \mathcal{B}[a,b]\overline{\int^{b}_{a}}f\leq \underline{\int^{b}_{a}}f$



 `\end{proof}`

> [!theorem] 
> 
> Let $f\in \mathcal{B}[a,b]$ then $f\in \CR[a,b]\iff \underline{\int^{b}_{a}}f\geq \overline{\int^{b}_{a}}f$
> 



> [!theorem] 
> Let $f\in \mathcal{B}[a,b]$ then $f\in \CR[a,b]\iff$ for $\upvarepsilon>0\exists \ P\in \CP[a,b]\st U(f,P)-L(f,P)<\upvarepsilon$

`\begin{proof}` 

$<=$ Let $\upvarepsilon>0$ $U(f,P)-L(f,P)>\upvarepsilon$


Now $L(f,P)\leq \underline{\int^{ }_{ }}f\leq U(f,P)<\upvarepsilon+L(f,p)\leq\upvarepsilon+\underline{\int^{ }_{ }}f$  

$$
\begin{align}
\implies \overline{\int^{ }_{ }}f-\underline{\int^{ }_{ }}f & <\upvarepsilon \\
\implies \overline{\int^{ }_{ }}f  =\underline{\int^{ }_{ }}f & \implies f\in \CR[a,b]
\end{align}
$$


$\implies$ Let $f\in \CR[a,b],\upvarepsilon>0$ 
$\exists \ P_{1}\in \CP[a,b]\exists \ L(f,P_{1})>\int f-\frac{\upvarepsilon}{2}$
$\exists \  P_{2}\CP[a,b]\exists \ U(f,P_{2})<\int f+\frac{\upvarepsilon}{2}$

$P=P_{1}\cup P_{2}\supset P_{1},P_{2}$

$U(f,P)\leq u(f,P_{2})<\int f+\frac{\upvarepsilon}{2}<L(f,P_{2})+\frac{e}{2}+\frac{\upvarepsilon}{2}\leq L(f,P)+\upvarepsilon$ 

 `\end{proof}`

> [!definition] 
> Let $P:a=x_{0}<x_{1}<\dots x_{n}=b-\CP[a,b]$
> define $||P||=\max\left\{ x_{j}-x_{j-1} \right\}$
> 


> [!theorem] Darboux 
>
>let $f\in \mathcal{B}[a,b]$ then $f\in \CR[a,b]\iff$ for $\upvarepsilon>0\exists \ \delta>0 \exists \ U(f,P)-L(f,P)<\upvarepsilon$ $\fa P\in \CP[a,b]$ with $\norm[P]<\delta$ 


> [!definition] 
> $\eta:\CP[a,b]\to \RR\geq0$
> by $\eta(p)=u(f,P)-L(f,P)\fa P\in \CP[a,b]$ 


`\begin{proof}` 
$<=$ is trivial so let's do $\implies$ Let $f\in \CR[a,b],\upvarepsilon>0$ 
$\exists \ P\in \CP[a,b]\exists \ U(f,P)\leq\frac{\upvarepsilon}{2}$

Let # nodes $\hat{P}=P$
set $\delta=\frac{\upvarepsilon}{8\times P \times M}$ 
pick $P\in \CP[a,b]$  and assume $\norm[P]<\delta$ 
set $\hat{P}=P\cup \tilde{P}$

$\hat{P}$ has at most $p$ point that are not in $P$ 
Let $\hat{P}=P\cup \left\{ \hat{x} \right\},\hat{x}\not\in P$ 
$$
\begin{align}
L(f,\hat{P})-L(f,P) & =\underbrace{ (\hat{M}_{j-1}-m_{j}) }_{ \leq2M }\underbrace{ (\hat{x}-x_{j-1}) }_{ <\delta }+(\hat{m}_{j}-m_{j})(x_{j}-\hat{x}) \\
 & =4M\delta
\end{align}
$$
$\so\text{ In general } L(f,\hat{p})-L(f,p)<4pM\delta=\frac{\upvarepsilon}{2}$

$\equiv^{\text{ly}}$ $U(f,P)-U(f,\hat{P})<\frac{\upvarepsilon}{2}$ 

$\implies U(f,P)-L(f,P)<\upvarepsilon+U(f,\hat{P})-L(f,\hat{P})<\upvarepsilon+U(f,\tilde{P})-\frac{L(f,\tilde{P})<\upvarepsilon}{2}$  


 `\end{proof}`
 