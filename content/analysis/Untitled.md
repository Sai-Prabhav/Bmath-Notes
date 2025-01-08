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
> Complete the exercies for USP
> 





 `\end{proof}`