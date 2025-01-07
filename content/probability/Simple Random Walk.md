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
