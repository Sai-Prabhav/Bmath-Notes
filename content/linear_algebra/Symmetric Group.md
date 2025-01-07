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

> [!example] 
>  $(1\ 2 \ 3)\in S_{3}$ ($S_{3}$ is the only non-abelion group of order 6)

> [!exercise]
> Show that group of order $p$ has only 1 group up to isomorphism that is ${\ZZ}/{p\ZZ}$

> [!remark]
> There are 2 groups of order 4
> $\ZZ/4\ZZ,\ \ \ \ZZ/2\ZZ \times\ZZ/2\ZZ$

$S_{3}=\left\{ 1,\sigma=(1\ 2 \ 3),\sigma^{2}=(1 \ 3\ 2), \tau=(1 \ 2), \sigma \tau=(1 \ 3), \tau\sigma=(2\ 3) \right\}$

> [!remark]
>
> A cycle with contains $K$ integers is said to be of length $K$
> A $K$ - Cycle $\sigma=(i_{1},i_{2}..i_{k})$ is of order $K$ $i$.$e$., $\sigma^{k}=1$

> [!definition]
> Two cycles in $S_{n}$ are called disjoint if they have no integer in common.

> [!remark]
> If $\sigma$ and $\tau$ are two disjoint cycles in $S_{n}$ then $\sigma$ and $\tau$ commute, that is $\sigma$ $\tau$ =$\tau$ $\sigma$

> [!claim]
> Every $\sigma \in S_{n}$ can be written uniquely as a product of disjoint cycles

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

The map $\upvarepsilon:S_{n}\to\pm1,\upvarepsilon(\sigma)$ is the sign of $\sigma$ satisfies the following
satisfies $\upvarepsilon(\tau\sigma)=\upvarepsilon(\tau\sigma)$
$\tau(\Delta)=\prod_{1\leq i<j\leq n}^{ }(x_{i}-x_{j})$
Let there be $K$ factors such that $\tau(i)>\tau(j)$ and $i<j$
$\tau(\Delta)=-1^{k}\Delta\implies\upvarepsilon(\tau)=-1^{k}$

Now, $\sigma \tau(\Delta)$ has exactly $k$ factors of the form
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
> A cycle $\sigma$ of length $k$ is an even permutation IFF $k$ is odd. This is because $\sigma$ can be written as the product of odd permutation that is k-1 permutation

> [!proposition]
> If $\lambda=(i\ j)$ a transposition, then $\upvarepsilon(\lambda)=-1$

`\begin{proof}`
Let $\lambda=(1,2)\in S_{n}$
$\lambda(\Delta)=-1\Delta$
if $\sigma=(i,j)\neq(1,2)$
then $\lambda=\alpha(1,2)\alpha$
where $\alpha$ interchanges 1,$i$ and 2,$j$
$\upvarepsilon(\lambda)=\upvarepsilon(\alpha)\upvarepsilon(1,2)e(\alpha)=\upvarepsilon(\alpha)^{2}\upvarepsilon(1,2)=\upvarepsilon(1,2)=-1$

using that $\upvarepsilon$ is homomorphism $\upvarepsilon(ij)=-1$

`\end{proof}`

> [!proposition]
> if $\sigma=\sigma_{1}\sigma_{2}\sigma_{3}\dots\sigma_{k}$
> if $\sigma_{i}$ is an $m_{i}$ -cycle then $\upvarepsilon(\sigma_{i})=-1^{m_{i}-1}$ 
> $\upvarepsilon(\sigma)=(-1)^{({\sum m_{i}})-k}$ 



> [!definition] Determinant
> $$\det A=\sum_{\sigma \in S_{n}}^{ }a_{1\sigma(1)}a_{2\sigma(2)\dots a_{n\sigma(n)}}$$


> [!remark] 
> If A contains a row or column of zeros the det is 0 as each term in the sum has a 0 term

> [!exercise] 
> Prove that the determinant of a diagonal matrix is the product of the diagonal



`\begin{proof}` 

if $\sigma\neq I$ then 
the product $a_{1\sigma(1)}\dots a_{n\sigma(n)}$ has atleast one term such that $a_{ij}$ where $i\neq j$ as $i\neq\sigma(i)$ for some $i$ 
hence the product is zero and the only non-zero term in the determinant is when $!s=I$ that is $a_{11}\dots a_{nn}$


 `\end{proof}`
> [!corollary] 
> If A is an upper triangle then $\det A$ is the product of diagonal entries

`\begin{proof}` 

If $a_{1\sigma(1)}\dots a_{n\sigma(n)}\neq0$ 
then $a_{n\sigma(n)}\neq0$ $i$.$e$ $\sigma(n)=n$    
$a_{n-1\sigma(n-1)}\neq0\implies n-1\leq\sigma(n-1)$ but $\sigma(n-1)\neq n$ as $\sigma(n)=n$ hence $\sigma(n-1)=n$
similarly 
$a_{i\sigma(i)}\neq0\implies i\leq\sigma(i)$ and $i>i-1$ $a_{j\sigma(j)}\neq0\implies\sigma(j)=j$ hence $\sigma(i)=i$
 `\end{proof}`
> [!theorem] 
> $\det A=\det(A^{t})$

`\begin{proof}` 
$$
\begin{align}
\det A & = \sum_{\sigma \in S_{n} }^{}\upvarepsilon(\sigma)a_{1\sigma(1)} \dots a_{n\sigma(n)}   \\
\det A^{t} & = \sum_{\sigma \in S_{n} }^{}\upvarepsilon(\sigma)a_{\sigma(1)1} \dots a_{\sigma(n)n} \\
 &=\sum_{\sigma \in S_{n} }^{}\upvarepsilon(\sigma^{-1} )a_{1\sigma^{-1} (1)} \dots a_{n\sigma^{-1} (n)}  \\
&=\sum_{\sigma \in S_{n} }^{}\upvarepsilon(\sigma^{} )a_{1\sigma (1)} \dots a_{n\sigma^{} (n)} \text{ as if } \sigma \in S_{n}\implies\sigma^{-1}  \in S_{n} 

\end{align}
$$




 `\end{proof}`
> [!proposition] 
> Let $B$ be obtained from A by multplying a row (or colum) of A by a scalar $\alpha$ then $\det B= \det A \alpha$

`\begin{proof}` 
(::todo)
 `\end{proof}`
 > [!proposition] 
 > If $B$ is obtained from A by interchanging two rows (or columns) then $\det A=-\det B$
 
`\begin{proof}` 
Let $B$ be obtained from A by inter changing rows $l$ and $m$ $l<m$

$$
\begin{align}
\det A & =\sum_{\sigma \in S_{n}}^{ }a_{1\sigma(1)}a_{2\sigma(2) }\dots a_{n\sigma(n)} \\
\det B & = \sum_{\sigma \in S_{n}}^{ }b_{1\sigma(1)}b_{2\sigma(2) }\dots b_{n\sigma(n)} \\ \\
\det B & = \sum_{\sigma \in S_{n}}^{ }a_{1\sigma(1)}a_{2\sigma(2) }\dots a_{l\sigma(m)}\dots a_{m\sigma(l)}\dots a_{n\sigma(n)} \\
\end{align}
$$
as $\sigma$ runs over $S_{n}$ $\tau=\sigma(i\ j)$
$$
\begin{align}
\det B & = \sum_{\tau \in S_{n}}^{ }\upvarepsilon(\tau)a_{1\tau(1)}a_{2\tau(2) }\dots a_{l\tau(m)}\dots a_{m\tau(l)}\dots a_{n\tau(n)} \\ \\
\det B & = \sum_{\tau \in S_{n}}^{ }-\upvarepsilon(\sigma)a_{1\sigma(1)}a_{2\sigma(2) }\dots a_{l\sigma(l)}\dots a_{m\sigma(m)}\dots a_{n\sigma(n)} \\ \\
 \det B & = -\det A
\end{align}
$$

 `\end{proof}`


> [!proposition] 
> If two rows and columns of A are equal than det $A=0$ 


`\begin{proof}` 
Suppose $k$ th and $l$ th rows of A are equal interchanging will alter the det by -1 so
$\det A=-\det A\implies2\det A=0$ if $2\neq0$ in $F$ 
if $2=0$ in $F$ $i$,$e$ $F$ is of char 2 we pair the $\sigma$ term in the expression of det A with the term $i$.$e$ so that
the addup to 0
 `\end{proof}`
 > [!theorem] 
 > For a fixed $K$ let the kth row of A be the sum of 2 rows $X^{t}$ and $Y^{t}$ 
 > $a_{kj}=x_{j}+y_{j} \fa 1\leq j\leq n$
 > Then $\det A=\det B+\det C$
 > $B$ is obtained from A by replacing the kth row of A with $X$ and $C$ is obtained by replacing $k$ th row of A with $Y$ 
 
`\begin{proof}` 


 `\end{proof}`
> 