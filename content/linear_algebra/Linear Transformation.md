---
date: 2025-01-10
---

$$
\begin{align} & 
T:V\to W \\ & 
\ker\ T \subseteq V \\ & 
\im \ T \subseteq W \\ & 
\mathcal{B}=(v_{1},\dots v_{n} \ \ ) \text{ Be a basis in V} \\ & 
\mathcal{C} = (w_{1},\dots w_{m} ) \text{ Be a basis in W} \\
 & \text{Given } v\in V \ \exists \ 	\text{ a unique} X\in F^{n}   \\
 & \st  \\
 & v\in(v_{1},\dots v_{n})\begin{bmatrix}x_{1} \\ \vdots  \\ x_{n}\end{bmatrix}  \\
 & v\in \mathcal{B}X \\
 & \text{let } Y \text{ be the co-ordinate vector of } Tv \text{ w.r.t}\mathcal{C} 
\end{align}
$$




> [!theorem] 
> a. Vector space form
> Let $T:V\to W$ $V,W$ are finite dimensional spaces $V$ and $W$. There are bases $\mathcal{B},\mathcal{C}$ of $V$ and $W$ respectively such that the matrix of $T$ $wrt$ $\mathcal{B},\mathcal C$ looks like
> $\begin{bmatrix}I_{r} & 0_{r\times n-r} \\ 0_{n-r\times r} & 0_{n-r\times n-r}\end{bmatrix}_{n\times n}$ , $r=\text{rank}(T)$  

^e78495

`\begin{proof}` 

Let $(u_{1},\dots u_{n-r})$ is a basis for kerT we can extend this to a basis $\mathcal{B}=(v_{1},\dots v_{r},u_{1}\dots u_{n-r})$ 
let $Tv_{1},\dots Tv_{r}$ is a basis for $\im T$ extend this to a basis of $W$ say $\mathcal{C}=(w_{1},\dots w_{r,w_{r+1}\dots w_{m}})$



 `\end{proof}`
 > [!theorem] 
 > 
> $b$. Matrix form: if $A_{m\times n}$ matrix then $\exists$ invertable $Q_{m\times m}$ and $P_{n\times n}$
> Such that $Q^{-1}AP$ is of the form $\begin{bmatrix}I_{r} & 0 \\ 0 & 0\end{bmatrix}$
> $r=\text{rank }A$

^71b964

`\begin{proof}` 
$P$ is a sequence of column operations and $Q^{-1}$ a sequence of row operations 

 `\end{proof}`
> [!remark] 
> [[#^e78495]] and [[#^71b964]] are equivalent.

`\begin{proof}` 
[[#^e78495]] $\implies$ [[#^71b964]] 
If $a$ holds
Let $A$ be a $m \times n$  matrix over $F$ 
$A:F^{n}\to F^{m}$
[[#^71b964]]$\implies$[[#^e78495]]
If $b$ holds
Let A be the matrix associated with $T$  with basis $\mathcal{B}$ and $\mathcal{C}$ 
we get $Q^{-1}AP=\begin{bmatrix}I_{r} & 0 \\ 0 & 0\end{bmatrix}$ 
let $\mathcal{B}'=BQ$ and $\mathcal{C}'=CP$  

 `\end{proof}`


