# Question 1

Let $T_{n}(a_{1},a_{2}\dots, a_{n})$ denote the path from
$0\to a_{1}\to a_{1}\pm a_{2}\to a_1\pm a_{2}\pm a_{3}\to\dots\to a_{1}\pm\dots\pm a_{k}$ the path ends at $a_{1}\pm\dots\pm a_{k}$ at time $n$ 
this means first we visit $a_1$ then move $a_{2}$ steps away from $a_{1}$ then move $a_3$ steps from $a_{1}\pm a_{2}$ 
note the $\pm$ part is fixed 
then $T_{n}(a_{1},a_{2},\dots, a_{k})=N_{n,a_{1}+\dots+a_{k}}$
$$
\begin{align}
T_{n} (a_{1} ,\dots a_{k} )  & = \sum_{n=d_{k} >d_{k-1} >\dots d_{2} >d_{1} >0 }^{} N_{d_{1}} (a_{1})N_{d_{2}-d_{1}} (a_{2})\dots N_{d_{k}-d_{k-1}  } (a_{k} ) \\
 & = \sum_{n=d_{k} >d_{k-1} >\dots d_{2} >d_{1} >0 }^{} \begin{pmatrix}d_{1} \\ \frac{a_{1}+d_{1} }{2}\end{pmatrix} \begin{pmatrix}d_{2}-d_1 \\ \frac{\left(a_{2}+d_{2}-d_{1} \right)}{2}\end{pmatrix} \dots \begin{pmatrix}d_{k} -d_{k-1}  \\ \frac{a_{k} +d_{k} -d_{k-1}}{2}\end{pmatrix}  \\
 & = \begin{pmatrix}n \\ \frac{a_{1}+\dots a_{n}+n}{2}  \end{pmatrix}  \\
 & = N_{n} (a_{1}+a_{2}\dots a_{n} )
\end{align}
$$

Now to our question 

that number of paths that reaches a then $c$ at time $n$ is $T_{n}(a,a-c)=N_{n}(2a-c)$
the number of path that reach $a$ then $-b$ and finally $c$ at time $n$ is $T_{n}(a,a+b,b+c)=N_{n}(2a+2b+c)$
so the number of that reach $a$ then $c$ without touching $-b$ in between is $N_{n}(2a-c)-N_{n}(2a+2b+c)$


# Question 2

let $F(k)$ be the paths that touch atleast $a$,$b$ $k$ times  
$F(k)$ include the path $0\to\underbrace{  a\to b }_{ k \text{ times} }\dots c$ and $0\to \underbrace{ b\to a }_{ k \text{ times} }\to b\to a\dots b\to c$ 
the total paths from 0 to $c$ without touching a or -$b$ is 
so $F(k)=N_{n}(2k(a+b)-c)+N_{n}(2k(a+b)+c)$
$$
\begin{align}
 & = N_{n}(c) -N_{n}(2a-c) -N_{n}(2b+c)  + F(1)-F(2)\dots \\
 & = \sum_{}^{} N_{n}(2k(a+b )-c) -N_{n} (2k(a+b)+2a-c)
\end{align}
$$
