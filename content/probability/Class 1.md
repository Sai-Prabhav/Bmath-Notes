Let $\Omega$ be a countable state space 
$P(\omega),\omega \in \Omega$ 
> [!lemma] 
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
> [!thm] 
>Let $X$ non-negative RV then for $a>0$ 
>
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

