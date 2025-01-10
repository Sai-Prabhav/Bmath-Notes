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
$a<a<b<1$

$$
\begin{align}
P\left(a_{n}   \leq M_{n} \leq b_{n}  \right)  & =\sum_{m=an}^{bn} P(M_{n} =m) \\
 & = \sum_{m=an}^{n} P(M_{n} =m) \\
 & = \sum_{k=av}^{v} u_{2k} u_{2v-2k} 
\end{align}
$$


