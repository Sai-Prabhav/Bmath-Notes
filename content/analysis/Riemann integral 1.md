## Assumptions
1. $[a,b]$ closed interval
2. $\NN=\left\{ 1,2,3\dots N \right\}$
3. $\ZZ_+$ = $\NN \cup \left\{ 0 \right\}$
4. $\mathcal{B}[a,b]=\left\{ f:[a,b]\to \RR \text{  bdd.} \right\}$



> [!definition] Partition
> A partition of $[a,b]$ 
> $p:a=x_{0}<x_1<x_{2}\dots<x_{n}=b$
> $n-1$ nodes
> $I_{j}=[x_{j-1},x_{j}] \ \fa j=1,2,3\dots n$

> [!definition] Length
> If $I=(a,b)\or[a,b]\or(a,b],\or[a,b)$
> then $\Mod[I]=b-a$
> $\Mod[I]$ is called the length

 $\mathcal{P}[a,b]=$ set of all partitions
 For $p \in \mathcal{P}[a,b]$ with n-1 nodes
 $$\Mod[{[a,b]}]=\sum_{j=1}^{n}\Mod[I_{j}]$$
$$
\begin{align}
\fa P, \widetilde{P} & \in \mathcal{P}[a,b] \\
P \cup  \widetilde{P}  & \in \mathcal{P}[a,b] 
\end{align}
$$

## Notation
Let $f \in \mathcal{B}[a,b], P\in \mathcal{P}[a,b]$

$$
\begin{align}
p:a=x_{0}<x_{1}<x_{2}\dots <x_{n}=b \\

\end{align}
$$
$$
\begin{align}
\fa j=1\dots n \quad m_{j} & :=\text{inf}_{x \in I_{j} } f(x) \\
 M_{j} &=\sup_{x \in I_{j} } f(x) \\
m & =\inf_{x \in [a,b]} f(x) \\
M & =\sup_{x \in [a,b]}  f(x)  
\end{align}
$$


Notice

$$
\begin{align}
m\leq m_{j} & \leq M_{j}\leq M \\
m\times \Mod[I_{j} ] \leq m_{j}\Mod[I_{j} ]  & \leq M_{j} \Mod[I_{j} ] \leq M\times \Mod[I_{j} ]  \\
\sum_{j=1}^{n} m\times \Mod[I_{j} ] \leq \sum_{j=1}^{n} m_{j} \Mod[I_{j} ]  & \leq \sum_{j=1}^{n} M_{j} \Mod[I_{j} ]  \leq \sum_{j=i}^{n} M\times \Mod[I_{j} ]  \\
m(b-a)\leq \dots & \leq\dots\leq M(b-a)
\end{align}
$$


> [!definition] Lower Riemann sum
> Let $f\in \mathcal{B}[a,b]$ for $p:=a=x_{0}<x_{2}\dots x_{n}=b$ in $\mathcal{P}[a,b]$,
> $L(f,p):=\sum_{j=1}^{n}m_{j}\Mod[I_{j}]$ this is Lower Riemann sum


>[!definition] Upper Riemann sum
> $U(f,p)=\sum_{j=1}^{n}M_{j}\Mod[I_{j}]$ this is Upper Riemann sum
> 

^6bd201

> [!theorem] 
> $m(b-a)\leq L(f,p)\leq U(f,p)\leq M(b-a) \fa P\in \mathcal{P}[a,b]$


> [!remark] 
> Clearly $L(f,P),U(f,P)\in[m(b-a),M(b-a)] \fa P \in \mathcal{P}(f,p)\& f\in\mathcal{B}$[a,b]


> [!theorem] Lower Riemann Integration 
> $\underline{\int^{b}_{a}}f=\sup \left\{ L(f,P)|p \in \mathcal{P}[a,b] \right\}$
> 


> [!theorem] Upper Riemann Integration 
> $\overline{\int^{b}_{a}}f=\inf \left\{ L(f,P)|p \in \mathcal{P}[a,b] \right\}$



> [!definition]  Riemann integral
> A bounded function $f$ is Riemann integral $f\in \mathcal{R}[a,b]$
> $\overline{\int^{b}_{a}}f=\underline{\int^{b}_{a}}f:={\int^{b}_{a}}f$

^d41959




