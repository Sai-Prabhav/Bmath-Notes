Date:15-jan


> [!definition] 
> Let $P:a=x_{0}<x_{1}<x_{2}\dots<x_{n}=b$ be a partion of $[a,b]$
> A tag of $P$ is a function $T_{P}:\left\{I_j \right\}_{j=i}\to[a,b]$
> $\st T_{P}(I_{j})\in I_{j}\fa j=1,2\dots n$
> $T_{P}=\left\{\zeta_j \right\}_{1\leq j\leq n}$ 

> [!definition]  $\mathrm{Riemmann~Sum}$
> 
> Let $f\in \mathcal{B}[a,b],P\in \CP[a,b]\&T_{P}$ a tag set
> The $\mathrm{Riemmann~Sum}$ of $f$ $w$.$r$.$t$ $(P,T_{P})$ is $\mathcal{S}(f,P)=\sum_{i=1}^{N}f(\zeta_{j})\Mod[I_{j}]$

__The good:__
$$
\begin{align}
m_{j}  & \leq f(\zeta_{j} )  \leq M_{j}  \\
m_{j} \Mod[I_{j} ]  & \leq f(\zeta_{j} )\Mod[I_{j} ]   \leq M_{j} \Mod[I_{j} ]   \\
\sum_{i=1}^{n} m_{j} \Mod[I_{j} ]   &  \leq \sum_{i=1}^{n} f(\zeta_{j} )\Mod[I_{j} ]   \leq\sum_{i=1}^{n}  M_{j} \Mod[I_{j} ]    \\
L(f,P) & \leq \CS(f,P)\leq U(f,P)


\end{align}
$$

__Hope:__
$$
\begin{align}
\CS(f,P) & \to\lambda \\
\text{as } \norm[P]  & \to 0
\end{align}
$$


> [!definition] 
> 
> $f\in \mathcal{B}[a,b],\lambda \in \RR$ we say 

$$
\begin{align} & 
\lim_{\norm[P] \to0} \CS(f,P)=\lambda \if \fa\upvarepsilon>0  \ 	\exists \ 	 \delta>0 \\ & 
\st  \Mod[\CS(f,P)-\lambda] <\upvarepsilon \fa P\in \CP[a,b] \text{ with }  \norm[P] <\delta \ \& \ \fa T_{P} 
\end{align}
$$


> [!theorem] 
> 
> Let $f\in \mathcal{B}[a,b]$ then $f\in \CR[a,b]\iff  \ 	\exists \ 	\lambda \in \RR \st \lim_{\norm[P]\to0} \CS(f,P)=\lambda$
> also in this case $\int^{b}_{a}f=\lambda$

`\begin{proof}` 

"$\implies$" 

set $\lambda=\int^{b}_{a}f$ Fix $\upvarepsilon>0 \ 	\exists \ 	\delta>0\st U(f,P)-L(f,P)<\upvarepsilon\fa \norm[P]<\delta$
$$
\begin{align}
U(f,P)-L(f,P) & <\upvarepsilon\fa \norm[P] <\delta \\
U(f,P)-\CS(f,P) & <\upvarepsilon \fa \norm[P] <\delta \\
\implies \CS(f,P) & \to U(f,P) \text{ for } \upvarepsilon \text{ small} \\
\implies U(f,P) & \to \overline{\int^{b}_{a}}f \text{ for $\delta$ small}
\\
\implies \CS(f,P)&\to \overline{\int^{b}_{a}}f ={\int^{b}_{a}}f 
\end{align}
$$
$\impliedby$

$$
\begin{align}
\lambda-\frac{\upvarepsilon}{2} & \leq \CS(f,P)  \leq\lambda+\frac{\upvarepsilon}{2} \\
\lambda-\frac{\upvarepsilon}{2} & \leq \sum_{j=1}^{n} f(\zeta_{j} )\Mod[I_{j} ] \leq\lambda+\frac{\upvarepsilon}{2}  \\


\end{align}
$$
by taking inf and sup for a fixed $P$ 

$$
\begin{align}
\lambda-\frac{\upvarepsilon}{2 } \leq L(f,P)\leq\lambda+\upvarepsilon \\
\lambda-\frac{\upvarepsilon}{2 } \leq U(f,P)\leq\lambda+\upvarepsilon \\

\end{align}
$$
$$
\begin{align}
U(f,P)-L(f,P)\leq\delta+\frac{\upvarepsilon}{2 }-\delta +\frac{\upvarepsilon}{2}=\upvarepsilon \fa \norm[P] <\delta
\end{align}
$$
$\implies f\in \CR[a,b]$ 
Finally $\fa \norm[P]<\delta$ we have 

$$
\begin{align}
\lambda-\frac{\upvarepsilon}{2 }\leq L(f,P)\leq \underline{\int^{}_{}}f  & =\overline{\int^{ }_{ }}f \leq U(f,P)\leq\lambda+\frac{\upvarepsilon}{2 } \\
\lambda & =\int f
\end{align}
$$



 `\end{proof}`



> [!theorem] 
> 
> Let $f\in \CR[a,b]\&\left\{ P_{n} \right\}\subseteq \CP[a,b]\st \norm[P_{n}]\to0$
> then $\lim_{n\to \infty}\CS(f,P_{n})=\int^{b}_{a}f\fa T_{P_{n}}$

`\begin{proof}` 

Let $\upvarepsilon>0 \ 	\exists \ 	\delta>0 \st \fa \norm[P]<\delta \ \  U(f,P)-L(f,P)<\upvarepsilon$ 
$\exists \  N\in \NN \st \norm[P_{n}]<\delta \fa n\geq N$
$\implies U(f,P_{n})-L(f,P_{n})<\upvarepsilon\fa n\geq N$

$$
\begin{align}
U\left( f,P_{n} -\int f  \right) + \left( \int f-L(f,P_{n} ) \right)<\upvarepsilon\fa n\geq N
\end{align}
$$
$$
\begin{align}
\implies U(f,P)-\int(f) & <\upvarepsilon \\
\int f-L(f,P) & <\upvarepsilon \\
\implies\int f-\CS(f,P) & <\upvarepsilon
\end{align}
$$


 `\end{proof}`




