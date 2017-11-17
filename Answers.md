##Answers
1. Stacks use the LIFO implementation (last in, first out).  Queues use an implementation that goes by FIFO (first in first out.)
2. 

- Linked list  **O(n)**
- Hash Table   **O(1)**
- Binary Search Trees **O(log(n))**

3. Hashtables are much more optimal from a performance point of view.  Unlike arrays, they do not require that you begin at the beginning and loop through every element in order to retrieve a certain value.  This can only be avoided if you know ahead of time the index of the element you are looking for in the array, which in most instances you wouldn't, especially if inserting entries, and deleting them, since this causes their locations to change.  With hashing, you don't need to be so concerned about indexes, since all you have to do is provide a key, which allows almost instantaneous retrieval of its value.  Hashtables are overall more efficient than arrays. 
