---
date: 2025-01-22
---

A non-zero vector $v\in V$ is an eigenvector of $T$ if $Tv=\lambda v$ for some $\lambda \in F$ 

Let $A_{n\times m}$ over $F$ then the column vector $X\in F^{n}$ is said to be an eigenvector of A if $AX=\lambda X$ for some $\lambda \in F$  $i$,$e$. $X$ is an eigenvector of The corresponding linear map $T_{A}:F^{n}\to F^{n}$
the $\lambda$ is called the eigenvalue of A

> [!proposition] 
> 
> if $\lambda$ is an eigenvalue of a linear map $T:V\to V$ the $\lambda$ is also an eigenvalue of the matrix of $T$  wrt some basis of $V$ 



Let $\mathcal{B}=(v_{1},v_{2}\dots v_{n})$ be a basis of $V$ 
The matrix of $T$ wrt $\mathcal{B}$ is a diagonal matrix ifff each of the basis elements all eigenvectors.

Matrix Version:

$A$ $n \times n$ matrix A is similar to a diagonal matrix iff $F^n$ admits a basis consisting of eigenvectors.

If A is similar to a diagonal matrix then $P^{-1}AP$ is a diagonal matrix and $\left\{ e_{1},e_{2}\dots e_{n} \right\}$ are the eigenvectors of $P^{-1}AP\implies Pe_{1},Pe_{2},\dots Pe_{n}$ are eigenvalues of $A$ if we choose $\left\{ Pe_{1},Pe_{2},\dots Pe_{n} \right\}$ as the basis of $T_{A}$  
other direction is trivial 


$\lambda$ is a eigenvalue of $T$ iff there exist a non-zero vector $v$ such that $Tv=\lambda v$ 
$(\lambda I_{v}-T)(v)=0$
if A is the associated matrix of $T$ wrt to some basis $\mathcal{B}$ 
so $\lambda I_{n}-A$ is singular $i$,$e$, det$\lambda I_{n}-A=0$  
The equation $\det(xI_{n}-A)$ is the characteristic polynomial of A (also $T$?)
and roots of $\det(xI_{n}-A)$ which lies in $F$ are called the eigenvalues

> [!claim] 
> $\det(\lambda I_{n}-P^{-1}AP)=\det(\lambda I_{n}-A)$

> [!proposition] 
> Let $\lambda_{1},\dots\lambda_{r}$ be distinct eigenvalues of $T:V\to V$ and let $V_{1},\dots V_{n}$ be the corresponding eigenvectors of $T$ then $(v_{1},v_{2},\dots V_{r})$ is a linear independent set in $V$ 

$tr(A)=tr(P^{-1}AP)=tr(APP^{-1})=tr(A)$
so we define $tr(T)=tr(A)$ 
$\det T=\det A$ 
where A is a matrix associated with $T$ wrt some basis $\mathcal{B}$ 


The constant term of $\det(xI_{A })$ is the values at $x=0$ $i$,$e$. $\det(-A)=(-1)^{n}\det A$ 
the coeff of $x^{n-1}$ is $\det(xI-A)$ is -trace (A) 


sum of eigenvalues is the trace of A and product is the $\det A$ 


> [!theorem] 
> Let $T$ be a linear operator on a finite dim vector space $V$ let $\lambda_{1}\dots\lambda_{k}$ be the distinct eigenvalues of $T$  let $E_{\lambda_{1}},\dots E_{\lambda_{k}}$ be the eigenspace of $\lambda_{1},\dots,\lambda_{k}$ 
> TFAE
> - $T$ is diagonalizable
> - $\chi_{_{_{T}}}(x)=(x-\lambda_{1})^{d_{1}}\dots(x-\lambda_{k})^{d_{k}}$ and $\dim E_{\lambda_{i}}=d_{i}\fa i$
> - $V=E_{\lambda_{1}}\oplus \dots \oplus E_{\lambda_{k}}$


