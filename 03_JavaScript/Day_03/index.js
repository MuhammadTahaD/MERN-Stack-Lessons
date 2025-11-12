// Very Important Lecture

// Memory Management
// Ram Management

// Stack And Heap
// Stack and Heap are both the memory types.


// Stack : Memory Type which have low memory.
// Stack Uses the concept of LIFO means data is stored in the ram as a Stack (One on another data)
// It stores data in continous memory locations like on data another.
// We can put data of fixed size in stack.


// Heap: Memory Type which have higher memory than Stack
// Heap store data where it find the memory location in the memory.
// It stored data unorderly that is why it has larger Memory than the Stack.




// Memory Allocation in JavaScript
// Research: Why our Operating System are 32-bit or 64-bit or even 86-bits? /Research krni through 1 thought principle

// 32 bit: address size fix: 4 bytes
// 64 bit: address size fix: 8 bytes

// We store the variables in the Stack and thier Crsosponding Data in the Heap. Then the memory address of Heap of that data is stored in that memory of stack which is basically another memory location which also has address and location which refers to the origional variable.

// Fun Fact when program start some Data Values are automatically created like (undefine, null, true, false) are created in the Heap and when the variable in Stack is created it refers to these Data Values in the Heap.


// Garbage Collector : In JavaScript Specially comes the concept of the garbage collecter it collects the values or data those have not been pointed to any variable.


// Basic Formula to find the element in the memory:
// Element : BaseAddress + index * sizeofdata 

