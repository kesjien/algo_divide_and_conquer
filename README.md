# algo_divide_and_conquer
Stanford / Algorithms divide conquer

# Week 2

1. This question will give you further practice with the Master Method. Suppose the running time of an algorithm is governed by the recurrence T(n)=7∗T(n/3)+n2. What's the overall asymptotic running time (i.e., the value of T(n))?

a=7, b=3, f(n) = n*n
nlogb(a) = nlog3(7) > 1

nlogb(a) < f(n)

f(n) = O(n*n-e),
T(n) = O(nlogb(a)) = O(n*n)
Answer: n*n