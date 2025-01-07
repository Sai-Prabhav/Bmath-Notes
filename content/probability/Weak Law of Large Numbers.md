---
date: 2025-01-03
---

Let $\left\{ X_{k} \right\}_{k\geq1}$ be a sequence of iid RVs with $\ex[\left|X_{1}\right|]<\infty$
Let $\mu=\ex[X_{i}]$
Then for any $a>0$
$$P \left(\Mod[ \frac{X_{1}+X_{2}+\dots+X_{n}}{n} -\mu ]>a\right)\stackrel{n\to \infty}{\to}0$$

`\begin{proof}`
Assume $\Omega$ is countable
$a>0$ is fixed
Case 1: $\sigma^{2}=\var[X_{1}]<\infty$
from [[probability/Some Inequality#Chebyshev's inequality|Chebyshev's inequality]]

$$
\begin{align}
P\left( \left|\frac{S_{n}}{n}-\mu  \right|>a \right) & =P(\Mod[S_{n} -n\mu]>na ) \\
 & \leq \frac{\var[S_{n} ]}{n^{2} a^{2} }  \\
 & =\frac{n\sigma^{2} }{n^{2} a^{2} }\to0
\end{align}
$$

Case II: $\sigma^{2}=\infty$
Assume $\mu=\ex[X_{1}]=0$
Let $\delta>0$ (to be fixed later)
for each $n$ define $n$ pairs of RVs
$U_{1},V_{1},U_{2},V_{2}\dots U_{n},V_{n}$

$$
\begin{align}
U_{k} & =X_{k}   & V_{k} & =0  & \quad\if   \Mod[X_ k]  & \geq\delta{n} \\
U_{k} & =0 &  V_{k} & =X_{k}  & \quad\if    \Mod[X_ k]  & <\delta {n}
\end{align}
$$


$X_{k}=U_{k}+V_{k}$ 

$$
\begin{align}
\left\{ \Mod[X_{1}+X_{2}+\dots X_{n}  ]\geq na  \right\}  & \subseteq \left\{ |U_{1}+\dots U_{n}  | >\frac{na}{2}\right\} \cup \left\{ \Mod[V_{1}+\dots V_{n} ]  > \frac{na}{2}\right\} \\
P(\Mod[X_{1}+X_{2}+\dots X_{n}  ]\geq na  ) & \leq \underbrace{ P\left( |U_{1}+\dots U_{n}  | >\frac{na}{2} \right) }_{ \Large{ I } }+\underbrace{ P\left( \Mod[V_{1}+\dots V_{n} ]  > \frac{na}{2} \right) }_{ \Large{ II } }
\end{align}
$$

Solving ${ I }$  

$$
\begin{align} 
P\left( \Mod[U_{1}+\dots U_{n} ]  > \frac{na}{2} \right)  & =P\left( \Mod[U_{1}+\dots U_{n} ] ^{2}  > \frac{n^{2} a^{2} }{2^{2} } \right)  \\

P\left( \Mod[U_{1}+\dots U_{n} ]^{2}  > \frac{n^{2} a^{2} }{4} \right)  & \leq \frac{4\ex[{\Mod[U_{1}+\dots+U_{n} ]^{2}  }]}{n^{2} a^{2} }  \\
 & = \frac{4}{a^{2} n^{2} }[\var[U_{1}+\dots+U_{n} ]+(n\ex[U_{1}] )^{2}  ] \\
\ex[U^{2} _{1} ] & \leq \ex[{\Mod[U_{1}] \Mod[U_{1}] }]   \\
 & \leq\delta n\ex[{\Mod[U_{1}] }]   \\
\var[U_{1}+\dots+U_{n} ]  & = n\var[U_{1}] \leq nE(U^{2} _{1} )\leq\delta n^{2} \ex[{\Mod[U_{1}] }] \\
\Large{ I } & = \frac{1}{a^{2} n^{2} }[\delta n^{2} E[{\Mod[U_{1}] }]+(n\ex[U_{1}])^{2}  ] \\
\ex[U_{1} ] & =\ex[{\Mod[X_{1}] .1_{\left\{ X_{1}\leq\delta n  \right\}} }]   \\
\ex[U_{1}] &  =\ex[X_{1}1_{\left\{ \Mod[X_{1}]\leq\delta n   \right\}} ]
\end{align}
$$


> [!lemma]
 > $\ex[{\Mod[U_{1}]}]\stackrel{n\to \infty}{\to} \ex[|X_{1}|]$

$\ex[{\Mod[U_{1}]}]$
solving ${ II }$ 

$$
\begin{align}
P(V_{1}+V_{2}\dots V_{n} \neq0) & \leq P(\left\{ V_{1}\neq0 \right\}\cup \dots \cup \left\{ V_{n} \neq0 \right\} ) \\
& = nP(V\neq0) \\
& =nP(\Mod[X_{1}]>\delta n  ) \\
& = n \sum_{|x|>\delta n  }^{ } P(X_{1}=x ) \\
& \leq n \sum_{\Mod[x]  >\delta {n} } \frac{\Mod[x]}{\delta n }  P(X_{1}=x ) \\
& = \frac{1}{\delta}\ex[{\Mod[X_{1}]>\delta n } ]\to0 \ (\text{ Lemma *})
\end{align}


$$


Let $\delta= \frac{\upvarepsilon a^{2}}{16 \ex[X_{1}]}$


Chose $N$ large such that $\ex[U_{1}]\leq \frac{\upvarepsilon a }{4}$ then for $n>N_{1}$ chose $N_{2}$ large such that $*$ $\implies \frac{\upvarepsilon}{2}$

`\end{proof}`


Previous:[[probability/Some Inequality|Some Inequality]]
Next:
