# algo_divide_and_conquer
Stanford / Algorithms divide conquer

# Week 2

*1. This question will give you further practice with the Master Method. Suppose the running time of an algorithm is governed by the recurrence T(n)=7∗T(n/3)+n2. What's the overall asymptotic running time (i.e., the value of T(n))?

a=7, b=3, f(n) = n*n
nlogb(a) = nlog3(7) > 1

nlogb(a) < f(n) => Case 1 of Master's Method

f(n) = O(n*n-e),
T(n) = O(nlogb(a)) = f(n)
Answer: n*n

*2. This question will give you further practice with the Master Method. Suppose the running time of an algorithm is governed by the recurrence T(n)=9∗T(n/3)+n2. What's the overall asymptotic running time (i.e., the value of T(n))?

a=9, b=3, f(n)=n*n
nlogb(a) = n*n
f(n) == nlogb(a) => Case 2 of Master's Method
T(n) = O(nlogb(a)log(n)) = O(n * nlog(n)) = O(n * nlog(n))
Answer: O(n * nlog(n))

*3. This question will give you further practice with the Master Method. Suppose the running time of an algorithm is governed by the recurrence T(n)=5∗T(n/3)+4n. What's the overall asymptotic running time (i.e., the value of T(n))?

a=5, b=3, f(n)=4(n)
nlogb(a) = nlog3(5) > 1
f(n) > nlogb(a) => Case 1 of Master's Method

f(n) = O(n2-e),
T(n)=O(nlogb(a)) = O(nlog3(5))
Answer: O(nlog3(5))

*4. Consider the following pseudocode for calculating ab (where a and b are positive integers)
FastPower(a,b) :
  if b = 1
    return a
  else
    c := a*a
    ans := FastPower(c,[b/2])
  if b is odd
    return a*ans
  else return ans
end


T(n)=T([n/2])+O(1)T(n)=T([n/2])+O(1)
a=1, b=2, f(n) = 0
o < nlog2(1) => Case 1 of Master's Method
T(n)=O(nlogb(a)) = O(nlog2(1)) = O(log * n)
Answer: O(log * n)
