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

