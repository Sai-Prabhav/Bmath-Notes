> [!theorem] Recal
> if $f\in \mathcal{B}[a,b]$ TFAE
> 1. $f\in \CR[a,b]$
> 2. $\upvarepsilon>0\ \exists \ 	P\in \CP[a,b]\st0\leq u(f,P)-l(f,P)<\upvarepsilon$
> 3. $\upvarepsilon>0\ \exists \ 	\delta >0\st0\leq u(f,P)-L(f,P)<\upvarepsilon \fa P\in \CP[a,b]\text{ with }\norm[P]$
> 

$C[a,b]$ continuous in $[a,b]$
> [!theorem] 
> $C[a,b]\subseteq \CR[a,b]$

`\begin{proof}` 
Fix $f\in C[a,b]\implies f:[a,b]\to \RR$ is uniformly continuous 
$$
\begin{align}
\Mod[f(x)-f(y)] < \frac{\upvarepsilon}{b-a} \fa \Mod[x-y] <\delta
\end{align}
$$
Pick $P\in \CP[a,b] \ \exists \ 	\norm[P]<\delta$

and fix such a $P:a=x_{0}<x_{1}<\dots<x_{n}<b$

$\therefore u(f,P)-L(f,P)=\sum_{j=1}^{N}(M_{j}-m_{j})\Mod[I_{j}]$

now $\res[f]{I_{j}}:I_{j}\to \RR$ a continuous function for all $j$ 

$\exists \ \eta_{j},\zeta_{j}\in I_{j}.\st f(\eta_{j})=M_{j},f(\zeta_{j})=m_{j}$


$M_{j}-m_{j}=f(\eta_{j})-f(\zeta_{j})$

as $\Mod[\eta_{j}-\zeta_{j}]<\delta$ it follows that $M_{j}-m_{j}< \frac{\upvarepsilon}{b-a}\fa j$

$\implies(M_{j}-m_{j})\Mod[I_{j}]< \frac{\upvarepsilon}{b-a}\Mod[I_{j}]$

$\implies \sum_{j=1}^{N}--"--<\upvarepsilon$




 `\end{proof}`


$Q_{n}:$ How to compute? Below we will see one of the first attempts to compute integral

> [!theorem] 
> Let $f\in \mathcal{B}[a,b]$ Then $f\in \CR[a,b]\iff  \ 	\exists \ 	\left\{ P_{n} \right\}\subseteq \CP[a,b]$
> $\st \lim_{n\to \infty}[U(f,P_{n})-L(f,P_{n})]=0$ 
> Moreover in this case:
> $\int^{a}_{b}f=\lim_{n\to \infty}U(f,P_{n})=\lim_{n\to \infty}L(f,P_{n})$
> $a_{n}-b_{n}\to0\implies \lim a_{n}=\lim b_{n}=\int f$

`\begin{proof}` 
$\implies$
$\implies$ Let $f\in \CR[a,b]$ for $\upvarepsilon=\frac{1}{n}, \ 	\exists \ 	P_{n}\in \CP[a,b]\st(0\leq)U(f,P_{n})-L(f,P_{n})< \frac{1}{n}$
$\implies U(f,P_{n})-L(f,P_{n})\to0$
$\impliedby$
For the final part
$$
\begin{align}
0 & \leq U(f,P_{n} )-\overline{\int^{b}_{a}}f =U(f,P_{n} ) -\underline{\int^{b}_{a}}f  \\
 & \leq U(f,P_{n} )-L(f,P_{n} )\to0 \\
\implies  & U(f,P_{n} ) \to \int^{b} _{a} f
\end{align}
$$

 `\end{proof}`

> [!example] 
> 
> $\int^{1}_{0}f$ when $f(x)=x^{2}$ 

$\fa n\in \NN$ consider
$P_{n}:x_{i}=\frac{i}{n}$
$I_j=\left[ \frac{{j-1}}{n}, {\frac{i}{n} } \right] \fa j$
$M_{j}=\left( \frac{j}{n} \right)^{2}$
$m_{j}=\frac{j-1}{n}^{2}$
$$
\begin{align}
U(f,P_{n} ) & =\sum_{i=1}^{N} \frac{1}{n}\times \frac{i^{2}}{n^{2} } \\
 & =\frac{1}{n^{3} }  \sum_{i=1}^{N} i^{2}   \\
 & =\frac{1}{n^{3} } \frac{1}{6}n (n+1)(2n+1) \\
 & = \frac{\left( 1+\frac{1}{n} \right)\left( 2+\frac{1}{n} \right)}{6} \\
 & \to \frac{2}{6} \\
 & =\frac{1}{3}
\end{align}
$$
$$
\begin{align}
L(f,P_{n} ) & =\sum_{i=1}^{N} \frac{1}{n}\frac{(j-1)^{2} }{n^{2} } \\
 & = \frac{1}{n^{3} } \frac{1}{6 } (n-1)(n)(2n-1)\to \frac{1}{3}
\end{align}
$$

> [!example]  $\CR[a,b]\supsetneq C[a,b]$
> function given below



$$
\begin{align}
f(x)=\begin{cases}
1 \if x \in[0, \frac{1}{2}) \\
\frac{1}{2} \if x=\frac{1}{2 \\
} \\
0 \if x \in(\frac{1}{2},1]
\end{cases}
\end{align}
$$
