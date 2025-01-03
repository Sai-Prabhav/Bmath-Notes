---
date: 3-Jan-2025
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

> [!example] 
> $(1\ 2 \ 3)\in S_{3}$ ($S_{3}$ is the only non-abelion group of order 6)


> [!exercise] 
> Show that group of order $p$ has only 1 group up to isomorphism that is ${\ZZ}/{p\ZZ}$ 


> [!remark] 
> There are 2 groups of order 4 
> $\ZZ/4\ZZ,\ \ \ \ZZ/2\ZZ \times\ZZ/2\ZZ$

$S_{3}=\left\{ 1,\sigma=(1\ 2 \ 3),\sigma^{2}=(1 \ 3\ 2), \tau=(1 \ 2), \sigma \tau=(1 \ 3), \tau\sigma=(2\ 3) \right\}$
> [!remark] 
> A  cycle with contains $K$ integers is said to be of length $K$ 
> A $K$ - Cycle $\sigma=(i_{1},i_{2}..i_{k})$ is of order $K$ ie, $\sigma^{k}=1$ 

> [!definition] 
> Two cycles in $S_{n}$ are called disjoint if they have no integer in common.
>

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
 & =(1\ 2\ 6)(3\ 4)(5)(7\ 10 \ 9)(8)(11\ 12 )
\end{align}
$$