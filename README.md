# Infix Arithmetic Expression Problem

I have gotten this question in an interview before and wanted to work through
it to get it right. Let me know if you find a better way!

## Question

Write a function that given an infix arithmetic expression, outputs a prefix version (the output order is unimportant as long as it evaluates to the same result).

For example:
3                becomes     3
1 + 2            becomes     (+ 1 2)
3 + 1 - 2        becomes     (- (+ 3 1) 2)

1 + 2 * 5        becomes     (+ 1 (* 2 5))
2 + 3 * 4 / 5    becomes     (+ 2 (/ (* 3 4) 5)
1 + 3 * 4 - 8    becomes     (- (+ 1 (* 3 4) 8)

Quick notes:
- Parentheses in the output are not important - they are only in the examples for readability.
- You can assume input and output are given as arrays of strings, e.g. [“3”, “+”, “1”, … etc.]
- You can assume there are convenience functions such as isOperator.
