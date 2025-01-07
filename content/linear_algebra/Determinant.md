
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
\det A & =\sum_{\sigma \in S_{n}}^{ }\upvarepsilon(\sigma)a_{1\sigma(1)}a_{2\sigma(2) }\dots a_{n\sigma(n)} \\
\det B & = \sum_{\sigma \in S_{n}}^{ }\upvarepsilon(\sigma)b_{1\sigma(1)}b_{2\sigma(2) }\dots b_{n\sigma(n)} \\ \\
\det B & = \sum_{\sigma \in S_{n}}^{ }\upvarepsilon(\sigma)a_{1\sigma(1)}a_{2\sigma(2) }\dots a_{l\sigma(m)}\dots a_{m\sigma(l)}\dots a_{n\sigma(n)} \\
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
$$
\begin{align}
\det A & =\sum_{\sigma \in S_{n}}^{ }\upvarepsilon(\sigma)a_{1\sigma(1)}\dots (x_{\sigma(k)}+y_{\sigma(k)}  )\dots a_{n\sigma(n)}  \\
 & =\sum_{\sigma \in S_{n}}^{ }\upvarepsilon(\sigma)a_{1\sigma(1)}\dots (x_{\sigma(k)}  )\dots a_{n\sigma(n)}+\sum_{\sigma \in S_{n}}^{ }\upvarepsilon(\sigma)a_{1\sigma(1)}\dots (y_{\sigma(k)}  )\dots a_{n\sigma(n)} \\
 & = \det B \ \ + \ \  \det C
\end{align}
$$



 `\end{proof}`

> [!corollary] 
> If a scalar multiple of a row (or column ) is added to a row (or column)
>  determinant remains unchanged

Previous: [[linear_algebra/Symmetric Group|Symmetric Group]]
