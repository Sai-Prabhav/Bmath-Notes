---
date: 2025-01-03
---

Let $S_{n}$ denote the set of all bijections on the set $\left\{ 1,2,3,4\dots n \right\}$
if $\sigma, tao \in S_{n}$ define $\sigma \theta$ to be the bijection

$$
\begin{align}
\sigma \theta(i)=\sigma(\theta(i)); \ \ 1\leq i\leq n
\end{align}
$$

This gives us a binary operation on $S_{n}$ which is associative, the identity permutation $1$ is such that $1\sigma=\sigma1\fa\sigma \in S_{n}$ and is such that for every $\sigma \in S_{n} \exists$ the inverse bijection denoted by $\sigma^{-1}$ such that $\sigma\sigma^{-1}=1=\sigma^{-1}\sigma$  
$S_{n}$ is a group $\fa n\geq1$
$\Mod[S_{n}]=n!$
$S_{n}$ is called the symmetric group of degree n

> [!definition]
> A cycle is a string of positive integers say, $(1,i_{2},i_{3}\dots i_{k})$ which represents the permutation $\sigma \in S_{n}$ $k\leq n$ such that $\sigma(i_{j})=i_{j+1},1\leq j\leq k\text{ and}$ $\sigma(i_{k})=1$ and fixes all other integers

> [!example] > $(1\ 2 \ 3)\in S_{3}$ ($S_{3}$ is the only non-abelion group of order 6)

> [!exercise]
> Show that group of order $p$ has only 1 group up to isomorphism that is ${\ZZ}/{p\ZZ}$

> [!remark]
> There are 2 groups of order 4
> $\ZZ/4\ZZ,\ \ \ \ZZ/2\ZZ \times\ZZ/2\ZZ$

$S_{3}=\left\{ 1,\sigma=(1\ 2 \ 3),\sigma^{2}=(1 \ 3\ 2), \tau=(1 \ 2), \sigma \tau=(1 \ 3), \tau\sigma=(2\ 3) \right\}$

> [!remark]
>
> A cycle with contains $K$ integers is said to be of length $K$
> A $K$ - Cycle $\sigma=(i_{1},i_{2}..i_{k})$ is of order $K$ ie, $\sigma^{k}=1$

> [!definition]
> Two cycles in $S_{n}$ are called disjoint if they have no integer in common.

> [!remark]
> If $\sigma$ and $\tau$ are two disjoint cycles in $S_{n}$ then $\sigma$ and $\tau$ commute, that is $\sigma$ $\tau$ =$\tau$ $\sigma$

> [!claim]
> Every $\sigma \in S_{n}$ can be write uniquely as a product of disjoint cycles

example:
let $\sigma \in S_{n}$

$$
\begin{align}
S_{n} & =\begin{pmatrix}
1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 & 13 & 14 \\
2 & 6 & 4 & 3 & 5 & 1 & 10 &   8 & 7 & 9 & 12 & 13 & 14 & 11
\end{pmatrix}     \\
 & =(1\ 2\ 6)\ (3\ 4)\ (5) \ (7\ 10 \ 9)\ (8)\ (11\ 12\ 13\ 14) \\
 & =(1\ 2\ 6)\ (3\ 4)\   (7\ 10 \ 9)\  (11\ 12\ 13\ 14) \\
\end{align}
$$

> [!remark]
> 2-cycles are also called transpositions

> [!remark]
> Every cycle can be written as a product of 2 cycles
> $(a_{1},a_{2},a_{3}\dots a_{n})=(a_{1},a_{n})(a_{1}\ a_{n-1})\dots(a_{1}\ a_{3})(a_{1}\ a_{2})$ > $(a_{1},a_{2},a_{3}\dots a_{n})=(a_{1}\ a_{2})(a_{2}\ a_{3})\dots(a_{n-2}\ a_{n-1})(a_{n-1}\ a_{n})$

> [!exercise]
> If a cycle can be expressed as a product of an even number of transpositions, it is always an even permutation. Similarly, if it is expressed as a product of an odd number of transpositions, all the transpositions will be odd.

Let $x_{1},x_{2}\dots x_{n}$ be indeterminates

$$
\begin{align}
\Delta=\prod_{1\leq i<j\leq n}^{} (x_{i}-x_{j})
\end{align}
$$

Let $\sigma \in S_{n}$

$$
\begin{align}
\sigma(\Delta) & =\prod_{1\leq i<j\leq n}^{} (x_{\sigma(i)}-x_{\sigma(j)}  ) \\
 & = \pm\Delta
\end{align}
$$

> [!definition]
> A permutation is said to be even if $\sigma(\Delta)=\Delta$ and is said to be odd if $\sigma(\Delta)=-\Delta$
> Sign of a permutation $\sigma$ denoted by $\upvarepsilon(\sigma)$ is +1 if $\sigma$ is even, -1 if $\sigma$ is odd so
> $\sigma(\Delta)=\upvarepsilon(\sigma)\Delta$

The map $\upvarepsilon:S_{n}\to\pm1,\upvarepsilon(\sigma)$ is the sign of $\sigma$ satifies the following
satisfies $\upvarepsilon(\tau\sigma)=\upvarepsilon(\tau\sigma)$
$\tau(\Delta)=\prod_{1\leq i<j\leq n}^{ }(x_{i}-x_{j})$
Let there be $K$ factors such that $\tau(i)>\tau(j)$ and $i<j$
$\tau(\Delta)=-1^{k}\Delta\implies\upvarepsilon(\tau)=-1^{k}$

Now, $\sigma \tau(\Delta)$ has excatly $k$ factors of the form
$x_{\sigma(j)}-x_{\sigma(i)},j>i$
Bring out a factor of $(-1)^{k}$ we have $\sigma \tau(\Delta)$ has all factor of the form $x_{\sigma(i)}-x_{\sigma(j)},i<j$ ,

$$
\begin{align}
(\sigma \tau)(\Delta) & =-1^{k}\prod_{p<q}^{}x_{\sigma(p)}-x_{\sigma(q)} \\
 & =-1^{k} \Delta(\sigma) \\
 & =-1^{k} \upvarepsilon(\sigma)\Delta \\
 & =\upvarepsilon(\tau)\upvarepsilon(\sigma)\Delta
\end{align}
$$

> [!remark]
> A cycle $\sigma$ of length $k$ is a even permutation iff $k$ is odd. This is because $\sigma$ can be written as the product of odd permutaion that is k-1 permutation
> [!proposition]
> If $\lambda=(i\ j)$ a transposition, then $\upvarepsilon(\lambda)=-1$

`\begin{proof}`
Let $\lambda=(1,2)\in S_{n}$
$\lambda(\Delta)=-1\Delta$
if $\sigma=(i,j)\neq(1,2)$
then $\sigma=\lambda(1,2)\lambda$
where $\lambda$ interchanges 1,$i$ and 2,$j$
using that $\upvarepsilon$ is homomorhism $\upvarepsilon(ij)=1$

`\end{proof}`

> [!proposition]
> if $\sigma=\sigma_{1}\sigma_{2}\sigma_{3}\dots\sigma_{k}$
> if $\sigma_{i}$ is a $m_{i}$ -cycle then $\upvarepsilon(\sigma_{i})=-1^{m_{i}-1}$ > $\upvarepsilon(\sigma)=(-1)^{({\sum m_{i}})-k}$
