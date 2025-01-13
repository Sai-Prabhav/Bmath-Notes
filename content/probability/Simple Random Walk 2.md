---
date: 2025-01-03
---
$M_{n}$ Index at which $s_{0}s_{1}\dots s_{n}$ attains maximum value for the first time 
$P(M_{n}=m)=\frac{1}{2}u_{2k}u_{2v-2k}$ when $m=2k\or2k+1$ 
$P(M_{n}=0)=P(S_{1}\leq0,\dots S_{2v}\leq0)=u_{2v}$


$$
\begin{align}
u_{2k} =P(s_{2k} =0) & =\frac{ \begin{pmatrix}2k \\ k\end{pmatrix} }{2^{2k} } \\
 &  =\frac{2k!}{(k!)^{2} 2^{2k} }  \\
 &  \simeq\frac{(2k)^{2k+1/2} e^{-2k} \sqrt{ 2\pi } }{\left(\sqrt{ 2\pi }k^{k+1/2} e^{-k} \right)^{2} 2^{2k} } \\
 & = \frac{1}{\sqrt{ \pi k }}
\end{align}
$$
$0<a<b<1$

$$
\begin{align}
P\left(a_{n}   \leq M_{n} \leq b_{n}  \right)  & =\sum_{m=an}^{bn} P(M_{n} =m) \\
 & = \sum_{m=an}^{n} P(M_{n} =m) \\
 & = \sum_{k=av}^{v} u_{2k} u_{2v-2k}  \\
 & \simeq \sum_{k=av}^{bv} \frac{1}{ \sqrt{ \pi k }\sqrt{ \pi(v-k) }}  \\
 & = \frac{1}{v}\sum_{k=av}^{bv} \frac{1}{\sqrt{ \frac{\pi k}{v} }\sqrt{ 1-\frac{k}{v} }}\stackrel{v\to \infty}{\to} \frac{1}{\pi}\int^{b} _{a} \frac{dx}{\sqrt{ x(1-x) }} \\
 & = \frac{1}{\pi} \int^{\sqrt{ b }} _{\sqrt{ a }} \frac{2udu}{\sqrt{ u^{2} -u^{4}  }} \\
 & = \frac{2}{\pi}(\arcsin \sqrt{ b }-\arcsin \sqrt{ a }) \\

\end{align}
$$

### Arcsin Law for Maxima
For each $0\leq t\leq1$

$$
\begin{align}
P\left( \frac{M_{n}}{n}\leq t  \right)  & \stackrel{n\to \infty}{\to} \frac{2}{\pi}\arcsin(\sqrt{ t }) \\
\frac{d}{dx}\arcsin \sqrt{ x } & =\frac{1}{2} \frac{1}{\sqrt{ x(1-x) }}
\end{align}
$$



$Q_n$ Probability RW of $n=2v$ steps last visits 0 at time $2k$ 
$K_{n}:$ Location of last return to 0 in a walk of $n$ steps 