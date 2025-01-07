$X_{1},X_{2}\dots$ iid RV 

$$
\begin{align}
X_{i}&=\begin{cases}
1 &\text{ $w$.p } 0.5\\
-1 &\text{ $w$.p } 0.5\\
\end{cases}
\end{align}
$$
$S_{n}=X_{1}\dots X_{n}$
$S_{0}=0,S_{1}=k_{1}\dots S_{n}=k_{n}$ can occur iff $\Mod[k_{i}-k_{i+1}]=1 \fa i=0\dots n-1$

The sequence of $k_{0},k_{1},k_{2}\dots k_n\dots$
is a sample path of the [[probability/Simple Random Walk|Simple Random Walk]] 

$\left\{ S_{n}=k \right\}$ is RW visits $k$ at step $n$ 

$$
\begin{align} \\  \\
H & \to+1  \\
T  &  \to-1 \\
p(S_{n} & =k) \\
 H+T & =n \\
H-T & =k \\
\implies2*H & =k+n \\
\implies H & =\frac{k+n}{2} \\
T & =\frac{n-k}{2} \\
\implies p(S_{n}=k) & =\frac{\begin{pmatrix}n \\ \frac{n-k}{2}\end{pmatrix}}{2^{n} }
\end{align}
$$

$P(S_{n}=k)=\frac{N_{n}(k)}{2^{n}}$ 
where $N_{n}(k)$ is the number of distinct paths that starts at 0 and end at $k$ at time $n$ 
where $N_{n}^{-}(k)$ is the number of distinct paths that starts at 0 and end at $k$ at time $n$ and stays above $x$ axis up to time n-1 

Convention: $\begin{pmatrix}n \\ t\end{pmatrix}=0$ if $t$ is not an integer 

> [!lemma] The method of images 
> 
> $0<a<a'$ and $b,b'>0$ Then # of paths  from $(a,b)$ to $(a',b')$ that intersecting the $x$ axis= # paths from $(a,-b)$ and $(a',b')$

`\begin{proof}` 
Consider any path $b=k_{0},\dots k_{n}=b'$ from $(a,b)$ to $(a',b')$  that intersects the x-axis 
$j$:=smallest index for which $k_{j}=0$ 
$A=(a,b),A'=(a',b'),C=(a+j,c),A''=(a,-b)$
Reflect the segment from A to $B$ about the $x$ axis to obtain a mirror path from A to $B$. 
to get a path from $A''$ to $A'$ 
 `\end{proof}`

> [!corollary] 
> $N_{n}^{+}(k)=\frac{k}{n}\begin{pmatrix}n \\ \frac{n+k}{2}\end{pmatrix}$



$$
\begin{align}
N_{n}^{+}(k) & =\#\text{Path from (1,1) to (n,k)}-\#\text{ passing throught 0 from }(1,1)\to(n,k) \\
 & =N_{n-1}(k-1)-N_{n-1}(k+1)   \\
 & = \begin{pmatrix}n-1 \\ \frac{n+k}{2}-1\end{pmatrix} - \begin{pmatrix}n-1 \\ \frac{n+k}{2}\end{pmatrix}  \\
 & =\frac{k}{n}\begin{pmatrix}n \\ \frac{n+k}{2}\end{pmatrix} 
\end{align}
$$
$u_{2v}$ :=p($S_{2v}$ =0)=$\frac{\begin{pmatrix}2v \\ v\end{pmatrix}}{2^{2r}}$

$A:$ Even where 1st return to 0 occurs after step $n$ and 
$2v=n$

$$
\begin{align}
p(A) & =P(S_{i}\neq0\fa i\leq2v) \\
 & =p(s_{1}>0,\dots s_{2v}>0 )+p(s_{1}<0,\dots s_{2v}<0 ) \\
 & =2p(s_{1}>0\dots s_{2v}>0 ) \\
 & = 2 \sum_{k>0\text{even}}^{} p(s_{i}>0 \fa i\leq2v ) \\
 & = \frac{2}{2^{2v} } \sum_{k>0}^{} N^{+}_{2v}(k) \\
 & = \frac{2}{2^{2v}  } \sum_{k>0}^{} N^{+}_{2v} (k)  \\
  & =\frac{2}{2^{2v} }N_{2v-1} (1) \\ \\
 & = u_{2v} 
 
\end{align}
$$



$Q_{n}$ : Fix $n$ where does the RW achieve its first max up to time $n$ 
$M_{n}:$ index $m$ at which the walk over $n$ steps achieve its maximum for 1 sth time 
Let the even in $Q_{n}$ be $A$
for $0<m<n$
$M_{n}=m$
$S_{m}>S_{0}, S_{m}>S_{1}\dots S_{m}>S_{m-1}\to*$
$S_{m}\geq S_{m+1},S_{m}\geq S_{m+2}\dots S_{m}\geq S_{n}\to**$

1. $*$ only depends on $X_{1},\dots X_{m}$

2. $**$ only depends on $X_{m+1}\dots X_{n}$


## Key Idea 
Consider reversed random walk from X_m
let $X_1'=X_m\dots X'_m=X_1$
$S_k'=X'_1+\dots+X_k$

$P(S_m>S_0,S_m>S_1,\dots,S_m>S_{m-1})=P(S'_{i}>0 \fa i\leq m)$
$P(S'_{i}>0 \fa i\leq m)=P(S_{i}>0 \fa i\leq m)$ as $X_{i}$ are iids 
$S''_{k}=X_{m+1}\dots X_{m+k}$
$$
\begin{align}
P(A) & =P(S'_{i}>0\fa i<m)P(S''_{j}\geq0\fa m<j\leq m)\\
&=P(S_{i}>0\fa i<m)P(S_{j}\geq0\fa m<j\leq m)\\
\end{align}
$$
$$
\begin{align}
P(S_{j}\geq0 \ j\leq n-m) & =P(\dot{X}+S_{j}>0 \fa j |\dot{X}=1) \\

\end{align}
$$
$P(M_{n}=m)=\frac{1}{2}u_{2k}u_{2v-2k}$ if $m=2k$ or $m=2k+1$ 