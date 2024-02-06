var p1 = [];
var p2 = [1980, 1981, 1982, 1983];

// Empilhar (push) elementos em nossa pilha:
p2.push(1991);

console.log('Elementos: ' + p2);

// Elemento no topo (top)
var elementoNoTopo = p2[p2.length-1];

console.log('Elemento no topo: ' + elementoNoTopo);

// Desempilhar um elemento
p2.pop();

console.log('Elementos sem 1991: ' + p2);

console.log('Tamanho da pilha: ' + p2.length);

console.log('Posição de um elemento dentro da pilha: ' + p2.indexOf(1981));
// se não estiver na pilha, deverá retornar -1

