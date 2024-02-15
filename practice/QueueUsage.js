let queue = [];

queue.push(4);
queue.push(14);
queue.push(34);
queue.push(5);
queue.push(8);

console.log(queue);

console.log("Polled : " + queue.shift());
console.log("Polled : " + queue.shift());

console.log(queue);

queue.push(100);
queue.push(105);

console.log(queue);
