---
date: 2025-01-03
---

> [!theorem]
> Let $\Omega$ be a countable state space
> $P(\omega),\omega \in \Omega$
> For RV $\st$ $X(\omega)\leq Y(\omega) \fa\omega \in\Omega$ then
> $\ex[X]\leq \ex[Y]$

`\begin{proof}`
$$
\begin{align}

\ex[X] =\sum_{\omega \in\Omega}X(\omega)P(\omega) \leq  \sum_{\omega \in\Omega}Y(\omega)P(\omega)=\ex[Y]
\end{align}
$$

`\end{proof}`

### Markov's Inequality

> [!theorem]
> Let $X$ non-negative RV then for $a>0$

$$
\begin{align}
P(X>a)\leq \frac{\ex[X]}{a}
\end{align}
$$

`\begin{proof}`

$$
\begin{align}
I_{a} (\omega) & =\begin{cases}
1 \quad \if X(w)\geq a \\
0 \quad \text{o.w}
\end{cases} \\
I_{a(w)}  & \leq \frac{X(w)}{a } \\
E(I_{a} ) & \leq \frac{X(\omega)}{a} \\
P(x\geq a ) & \leq \frac{X(\omega)}{a} \\

\end{align}
$$

`\end{proof}`

> [!remark]
> A better bound would be
> $P(x\geq a)\leq \frac{E(X.1_{{x\geq a}})}{a}$

$X\sim N(0,1)$
$f(x)= \frac{1}{\sqrt{ 2\pi }}e^{-x^{2}/2}$

$$
\begin{align}
p(X>a) & =\int^{\infty}_{a}\frac{1}{\sqrt{ 2\pi }}\upvarepsilon^{-x^{2} /2}   dx \\
 & \leq  \int^{\infty} _{a} \frac{x}{a}e^{-x^{2} /2} dx \\
 & =\frac{1}{\sqrt{ 2\pi }a}(\left.-e^{x^{2} /2} \right|^{\infty}_{a}   )
\end{align}
$$

> [!theorem]
>
> let $X,Y$ be [Continuous Random Variable](https://sai-prabhav.github.io/bmath_notes/website/probability/7.-continuous-random-variable.html) > $0\leq x(\omega)\leq y(\omega)$
> show that $\ex[X]\leq \ex[Y]$

`\begin{proof}`

$$
\begin{align}
\ex[X] & =\int^{\infty}_{0}P(X>x)dx \\
\ex[Y] & =\int^{\infty}_{0}P(Y>y)dx \\
\left\{ X>x \right\} & \subseteq \left\{ Y>x \right\} \\
P(X>x) & \leq P(y>x)
\end{align}
$$

`\end{proof}`

### Chebyshev's inequality

> [!theorem] 
> $X$ RV with finite mean $\mu=\ex[X]$ and finite variance $\sigma^{2}=\var[X]$
> then for $a>0$  $P(\Mod[X-\mu]>a)\leq \frac{\var[X]}{a}$

`\begin{proof}`

$$
\begin{align}
P(\Mod[X-\mu]^{2} \geq a^{2}  ) & \leq E\left( \frac{\Mod[X-\mu]^{2}}{a^{2} }  \right)  \\
 & = \frac{\var[X]}{a^{2} }
\end{align}
$$

`\end{proof}`

> [!exercise]
> If $\var[X]=0$ then show $P(X=\ex[X])=1$

`\begin{proof}`
$\fa\upvarepsilon>0$

$$
\begin{align}
P(\Mod[X-\mu] >\upvarepsilon) & \leq \frac{\var[X]}{\upvarepsilon^{2} } \\
 & =0 \\
\let A_{n}  & =\left\{ \Mod[X-\mu]> \frac{1}{n}  \right\} \\
\lim_{n\to \infty} P(A_{n} ) & =0
\end{align}
$$

`\end{proof}`
