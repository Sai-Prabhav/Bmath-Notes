> [!theorem] MVT
> if $f\in C(a,b), \then   \ 	\exists \ 	c\in[a,b] \st f(c)=\frac{1}{b-a}\int^{b}_{a}f$

`\begin{proof}` 
$$
\begin{align}
m(b-a) & \leq \int^{b}_{a}f  \leq M(b-a) \\
\implies m & \leq \frac{1}{b-a}\int^{b} _{a} f  \leq M \\
\implies f(\eta_{1} ) & \leq \frac{1}{b-a}\int^{b} _{a} f  \leq f(\eta_{2} ) \\

\end{align}

$$
as $f\in C(a,b)$  $f(c)=\frac{1}{b-a}\int^{b}_{a}f$ exist



 `\end{proof}`

> [!theorem] 
> Let $[a,b] \stackrel{f}{\to}[c,d]\stackrel{g}{\to}\RR$ 
> $f\in R[a,b],g\in c[c,d]$
> then $g of\in R[a,b]$


`\begin{proof}` 
Let $\upvarepsilon>0$ clearly $gof\in B[a,b]$
By uniform continuty $\exists \ 	\delta>0\st \Mod[g(x)-g(y)]< \frac{\upvarepsilon}{2(b-a)}\fa \Mod[x-y]<\delta$
Also $\exists \ 	P\in \CP[a,b] \ 	\exists \ 	U(f,P)-L(f,P)< \frac{\upvarepsilon\delta}{4M}$


> [!claim] 
> $U(gof,P)-L(gof,P)<\upvarepsilon$
> $M:=\sup g(y)$

Let # of sub intervals of $P$ is $n$ write 

$J=\left\{ 1,\dots,n \right\}=J_{1}\sqcup J_{2}$ where 
$J_{1}=\left\{ j\in J;M_{j}-m_{j}<\delta \right\},J_{2}=\left\{ j\in J:M_{j}-m_{j}=osc_{I_{j}}f\geq\delta \right\}$
Now if $j\in J_{1}\then \Mod[f(x)-f(y)]<\delta \fa x,y\in J$
$\implies \Mod[g(f(x))-g(f(y))]< \frac{\upvarepsilon}{2(b-a)}\fa x,y\in I_{j}$
$\implies \underbrace{ \sup_{X,Y\in I_{j}}\Mod[\qquad] }_{ =osc_{I_{j}}gof }\leq \frac{\upvarepsilon}{2(b-a)}$



 `\end{proof}`