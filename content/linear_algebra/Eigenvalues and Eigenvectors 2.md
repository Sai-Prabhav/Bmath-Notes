---
date: 2025-01-23
---

$T:V\to V$
Let $\lambda$ be an eigenvalue of $T$ that is $\lambda$ is a root of the char polynomial $\chi_{T}(x)=\det(xI_{n}-A)$ $n=\dim v$ and A is a matrix of $T$ wrt some basis 

Algebraic multiplicity of $\lambda$ is the highest power of $(x-\lambda)$ that divides $\chi_{T}(x)$

Geometric multiplicity of $\lambda$ is the dimension of eigenspace $E_{\lambda}=\left\{ v\in V:Tv=\lambda v \right\}$ (this is a subspace of $V$)  


> [!theorem] 
> Let $\lambda$ be  an eigenvalue of $T:V\to V$. then geometric multiplicity $\leq$ algebraic multiplicity of $\lambda$


`\begin{proof}` 

Let $k$ be the gm. of $\lambda$ let $(v_{1},v_{2}\dots v_{K})$ be an ordered basis of $E_{\lambda}$ 
Extend the basis to  basis $\mathcal{B}=(v_{1},\dots v_{k},u_{1},\dots,u_{n-k})$
Matrix of $T$ wrt $\mathcal{B}$ is of the form 

$$
\begin{align}
=\begin{bmatrix}\lambda I_{k}  & B \\ 0 & D\end{bmatrix} 
\end{align}
$$
 `\end{proof}`

$$
\begin{align}
\chi_{_{T}}(x) & =\det(xI_{n}-A) \\
 & = \begin{bmatrix}(x-\lambda) I_{k}   & -B \\ 0 & xI_{n-k} -D\end{bmatrix}  \\
 & = (x-\lambda)^{k} \det(xI_{n-k} -D)
\end{align}
$$
This shows that $(x-\lambda)^{k}$ divides $\chi_{_{_{T}}}(x)$ so $a.m\geq k$  


> [!exercise] 
> If a matrix is a triangular matrix then the diagonal elements are the eigenvalues 


> [!definition] 
> A linear operator $T:V\to V$ is said to be diagonalizable if $\exists$ a basis of $V$ consisting of eigenvectors of $T$ 


$A_{n\times n}\text{ over }F$ is said to be diagonalizable if A is similar to a diagonal matrix 

Suppose $T$ is diagonalizable let $\lambda_{1},\lambda_{2}\dots\lambda_{k}$ be distinct eigenvalues of $T$ and wrt this basis  matrix of $T$ is a diagonal matrix, the diagonal entries being $\lambda_{1},\lambda_{2}\dots\lambda_{k}$ 
> [!theorem] 
> If $\lambda_{1},\dots\lambda_{k}$ are distinct eigenvalues of $T:V\to V$ and if $v_{i}$ is an eigenvector corresponding to $\lambda_{i}m,1\leq i\leq k$ then $(v_{1},v_{2}\dots v_{k})$ is a linearly independent set of vector 
> 
> 


> [!proposition] 
> if $E_{\lambda_{1}},\dots E_{\lambda_{k}}$ are the eigenspace corresponding to the distinct eigenvalues of $T$, say $\lambda_{1},\dots\lambda_{k}$ then $E=E_{\lambda_{1}}+\dots+E_{\lambda_k}$ is direct sum 


> [!proposition] 
> If $T$ is a diagonalizable operator and if $\lambda_{1}\dots\lambda_{k}$ are the distinct eigencalues of $T$ then $V=E_{\lambda_{1}}\oplus\dots \oplus E_{\lambda_{k}}$ 

