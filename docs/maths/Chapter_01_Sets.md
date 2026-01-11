# Chapter 1: Sets - Important Questions

## 1 Mark Questions (MCQ/VSA)
1. **Question:** Write the set {x : x is an integer and -3 < x < 7} in roster form.
   **Answer:** $\{-2, -1, 0, 1, 2, 3, 4, 5, 6\}$
2. **Question:** If A = {1, 2} and B = {3, 4}, find the number of subsets of A × B.
   **Answer:** $n(A)=2, n(B)=2 \implies n(A \times B) = 4$. Subsets = $2^4 = 16$.
3. **Question:** Define a Power Set.
   **Answer:** The collection of all subsets of a set A is called the power set of A. It is denoted by P(A).
4. **Question:** Given A = {a, b, c}, find P(A).
   **Answer:** $\{\phi, \{a\}, \{b\}, \{c\}, \{a,b\}, \{b,c\}, \{a,c\}, \{a,b,c\}\}$

## 2 Mark Questions
1. **Question:** If A = {3, 5, 7, 9, 11}, B = {7, 9, 11, 13}, C = {11, 13, 15}, find A ∩ (B ∪ C).
   **Answer:** $B \cup C = \{7, 9, 11, 13, 15\}$. $A \cap (B \cup C) = \{7, 9, 11\}$.
2. **Question:** Show that A ⊂ B implies C - B ⊂ C - A.
   **Answer:** Let $x \in C - B$. Then $x \in C$ and $x \notin B$. Since $A \subset B$, if $x \notin B$, then $x \notin A$. So $x \in C$ and $x \notin A \implies x \in C - A$.
3. **Question:** In a group of 400 people, 250 can speak Hindi and 200 can speak English. How many can speak both?
   **Answer:** $n(H)=250, n(E)=200, n(H \cup E)=400$. $n(H \cap E) = n(H) + n(E) - n(H \cup E) = 250 + 200 - 400 = 50$.

## 3 Mark Questions
1. **Question:** For any sets A and B, prove that A - B = A ∩ B'.
   **Answer:** Let $x \in A - B \iff x \in A \text{ and } x \notin B \iff x \in A \text{ and } x \in B' \iff x \in A \cap B'$.
2. **Question:** Prove that (A ∪ B)' = A' ∩ B' (De Morgan's Law).
   **Answer:** Let $x \in (A \cup B)' \iff x \notin (A \cup B) \iff x \notin A \text{ and } x \notin B \iff x \in A' \text{ and } x \in B' \iff x \in A' \cap B'$.

## 5 Mark Questions
1. **Question:** In a survey of 60 people, it was found that 25 people read newspaper H, 26 read newspaper T, 26 read newspaper I, 9 read both H and I, 11 read both H and T, 8 read both T and I, 3 read all three newspapers. Find:
   (i) The number of people who read at least one of the newspapers.
   (ii) The number of people who read exactly one newspaper.
   **Answer:** (i) $n(H \cup T \cup I) = 25+26+26 - (9+11+8) + 3 = 77 - 28 + 3 = 52$.
   (ii) Exactly one = $n(H)+n(T)+n(I) - 2(n(H \cap T) + n(T \cap I) + n(H \cap I)) + 3n(H \cap T \cap I) = 77 - 2(28) + 3(3) = 77 - 56 + 9 = 30$.
