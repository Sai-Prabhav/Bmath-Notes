> [!definition]  Cofactor
> 
>For $a_{ij}\in A$ the cofactor of $a_{ij}$ is $A_{ij}=-1^{i+j}\det M_{ij}$ where $M_{ij}$ is the $(n-1)\times(n-1)$ matrix obtained from A by deleting the $i^{\text{th}}$ row and the $j^{\text{th}}$ column of A

> [!lemma] 
> 
> Fix $k,j$ if $a_{kl}=0\fa l\neq j$ then $\det A=a_{kj}A_{kj}$


`\begin{proof}` 

$\det A=\sum_{\sigma \in S_{n}}^{}\upvarepsilon(\sigma)a_{1\sigma(1)}\dots a_{n\sigma(n)}$
Case I:$(k,j)=(n,n)$
only those $\sigma$ survive where $\sigma(n)=n$
these $\sigma$ can be thought of a permutation of as permutation of $S_{n-1}$   
Sign of $\sigma \in S_{n}$ and m$\sigma \in S_{n-1}$ is the same as $n$ is fixed 
hence $\det A=\sum_{i=1}^{n-1} \upvarepsilon(\sigma)a_{1\sigma(1)}\dots a_{n-1\sigma(n-1)} a_{nn}$


Case II
$k,j\neq n,n$
We can intr change the $n-k$ row and n-$j$ columns to bring $a_{ij}$ to the $n,n$ th position.
$\det B=(-1)^{n-k+n-j}\det A=(-1)^{k+j}\det A$
$\det A=a_{kj}A_{kj}$
`\end{proof}`

> [!theorem] 
>
>Let A be a $n\times n$ matrix and $1\leq k\leq n$ 
>$\det A=\sum_{j=1}^{N}a_{kj}A_{kj}$ 

`\begin{proof}` 

write out the kth row os A as $X_{1}^{T}+\dots +X_{n}^{T}$
$\where X_{i}^{T}=(0,\dots,a_{ki},\dots0)$ and all other rows remain the same 

$A_{i}=\begin{bmatrix}| \\ X_{i}^{T} \\ |\end{bmatrix}$
$$
\begin{align}
\det A & =\sum_{i=1}^{n} \det A_{i}  \\
 & = \sum_{j=1}^{n} a_{kj} A_{ kj}
\end{align}
$$

 `\end{proof}`

Example
let $n\geq1$ 

$$
\begin{align}
A_{n} =\begin{bmatrix}
a_{1}^{n-1}  & a_{1}^{n-2}  & \dots & a_{1}  & 1\\
a_{2} ^{n-1}  & a_{2}^{n-2}  & \dots & a_{2}  & 1 \\
\vdots & \vdots  & \ddots  & \vdots  & \vdots \\
a_{n} ^{n-1}   & a_{n} ^{n-2}   & \cdots & a_{n}  & 1
\end{bmatrix}   
\end{align}
$$

$$\det A_{n}=\prod_{1\leq i\leq j\leq n}^{N}(a_{i})-a_{j}$$
`\begin{proof}` 

$\if a_{i}=a_{j},i\neq j$ then the $\det A_{n}=0$ 
Let $a_{1},\dots,a_{n}$ be distinct 
(::todo)


 `\end{proof}`
> [!exercise] 
> Show that $\exists$ a unique polynomial $p(x)$ of deg $n$ that takes arbitrary prescribed value at $n+1$ points $x_{0},\dots x_{n}$


`\begin{proof}`
let $p(x)=b_{0}+b_{1}x+\dots+d_{n}x^{n}$
$p(x_{i})=p(a_{i})$
$$
\begin{align}
\begin{bmatrix}
x_{0}^{n-1}  & \cdots  & x_{0} & 1 \\
\vdots & \vdots & \ddots & \vdots \\
x_{n} ^{n}   & \dots &x_{n} &1
\end{bmatrix}   
\end{align}\begin{bmatrix}b_{n}   \\ \vdots \\ b_{0} \end{bmatrix} =\begin{bmatrix}a_{0}  \\ \vdots  \\ a_{n} \end{bmatrix} 
$$
as the matrix is invertible $x_{i}'$$s$ being distinct $\exists$ a unique solution
 
 `\end{proof}`
