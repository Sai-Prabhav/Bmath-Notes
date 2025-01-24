Generating function of $\left\{a_n \right\}_{n \in \NN}$ is 
$$
\begin{align}
A(s)=\sum_{i=1}^{\infty} a_{n} s^{n} \quad -s_{0} <s<s_{0} 
\end{align}
$$
$X$ takes value $1,2\dots$ 
then we are interested in 
$$
\begin{align}
\sum_{k=1}^{\infty} P(X=k)s^{k} 
\end{align}
$$


$\left\{a_n \right\}_{n \in \NN}\to A(s),\left\{b_n \right\}_{n \in \NN}\to B(s)$ 
$$
\begin{align}
c_{n}  & =a_{0}b_{n}+a_{1} b_{n-1} \dots a_{n} b_{0}  
\end{align}
$$
$\left\{x_n \right\}_{n \in \NN}$ is the convolution of $\left\{a_n \right\}_{n \in \NN}$ and $\left\{b_n \right\}_{n \in \NN}$ 
$$
\begin{align}
\left\{c_n \right\}_{n \in \NN} =\left\{a_n \right\}_{n \in \NN} *\left\{b_n \right\}_{n \in \NN} 
\end{align}
$$
Generating function of $\left\{c_n \right\}_{n \in \NN}$  is $C(s)$
$$
\begin{align}
C(s) & =\sum_{i=0}^{\infty} c_{i} s^{i 
}  \\
 & = \sum_{n=0}^{\infty} \left\{ \sum_{k=0}^{n} a_{k} b_{n-k}  \right\}s^{n}  \\
 & =\sum_{n=0}^{\infty} \sum_{k=0}^{n} a_{k} s^{k} b_{n-k} s^{n-k}  \\
 & = \sum_{k=0}^{\infty} \sum_{m=1}^{\infty} a_{k }s^{k} b_{m} s^{ m}   \\
 & = A(s)B(s)
\end{align}
$$



> [!theorem] 
> $C(s)=A(s)B(s)$ when $\left\{ c_{n} \right\}=\left\{ a_{n} \right\}*\left\{ b_{n} \right\}$
> $X$ takes values in $\ZZ_{+}$
> $P(s)=\sum_{i=0}^{\infty}s^{i}P_{i}=E[s^{x}]$




$$
\begin{align}
E[X^{2} ]=\sum_{k=0}^{\infty} k^{2} P_{k} &  =\sum_{}^{} k(k-1)P_{k} -\sum_{}^{} kP_{k}  \\
 & = P''(1)+P'(1) \\
\var[X]  & =P''(1)+P'(1)-\left( P'(1) \right) ^{2} 
\end{align}
$$
$$
\begin{align}
P(X=k )=\frac{1}{k!}  \frac{d^{k}}{ds^{k} } p(s)
\end{align}
$$
let $X,Y$ take values in $\ZZ_{+}$ 
$Z=X+Y$

$$
\begin{align}
P(Z=k) & =\sum_{m=0}^{k} P(X=m,Y=k-m) \\
 & = \sum_{m=0}^{k} P(x=m)P(X =k-m) \\
\text{Hence, } \\
\left\{ P^{Z} _{k}  \right\} & =\left\{ P^{X} _{k}  \right\}*\left\{ P^{Y} _{k}  \right\}  \\
\ex[s^{Z} ] &  =\ex[s^{X}s^{Y}  ] =\ex[s^{X}  ]\ex[s^{Y} ]  
\end{align}
$$



let $S_{n}=X_{1}+\dots+X_{n}$ where $X_{i}$ iid $\ZZ_{+}$ valued

pmf of $S_{n}=\left\{ P_{k}^{\left\{ s_{n} \right\}} \right\}=\left\{ P^{\left( x \right)}_{k} \right\}^{n*}$


### Examples 

1. Generating fintion of $X\sim Bin(n,p)$


$$
\begin{align}
P(s) & =\sum_{k=0}^{\infty} P(X=k)s^{k}  \\
 & = \sum_{k=0 }^{n} \begin{pmatrix}n \\ k\end{pmatrix} p^{k} (1-p)^{n-k} s^{k }  \\
 & = \underbrace{ (1-p+ps)^{n}  }_{ G.F \text{ of } Ber(p) }
\end{align}
$$



2. Poisson($\lambda$)

$$
\begin{align}
\sum_{k=0}^{\infty } \frac{e^{ \lambda }\lambda^{k}}{k!}s^{k}  & = e^{ -\lambda }\sum_{k=0}^{\infty} \frac{(\lambda s )^{k}}{k!}=e^{-\lambda+\lambda s }    
\end{align}
$$



3. $X \sim Gem(p)$
$$
\begin{align}
P(X=k) & =q^{k} p,k=0,1,2\dots \\
 X:\# & \text{ Failures before first success}
\end{align}
$$

$$
\begin{align}
P(s)=\sum_{k=0}^{\infty} pq^{k} s^{k} = \frac{p}{1-qs}
\end{align}
$$


4. $S_{r}\sim \text{negativeBin}(p,r)$
$S_{r}:\#\text{ number of  failures before r success}$ 
$$
\begin{align}
P(S_{r} =k) & =\begin{pmatrix}r+k-1 \\ k\end{pmatrix} q^{k} p^{r}\quad k =0,1,\dots \\
 
\end{align}
$$


$$
\begin{align}
S_{r}  & =X_{1}+\dots +X_{r}   \\
P^{S_{r} } (s)  & =\left( \frac{p}{1-qs} \right) ^{r } \\
 & = p^{r}  \sum_{k=0}^{\infty} \begin{pmatrix}-r \\ k \end{pmatrix} (-qs)^{k} 
\end{align}
$$



