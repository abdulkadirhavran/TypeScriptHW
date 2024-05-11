"use strict";
// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
// Yaşları tutmak üzere "ages" isminde boş bir array oluşturalım.
// Tür girmeyi unutmayalım.
// Kodu buraya yazalım...
let ages = [];
// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
// "gameBoard" isminde boş bir array oluşturalım. Bu array, stringlerden oluşan
// iki boyutlu bir array olmalı. Yani array'in içinde array'ler olacak ve bu
// array'lerin içinde string'ler olacak.
// Kodu buraya yazalım...
let gameboard = [
    ["g", "a", "m"],
    ["e", "d", "e"],
    ["v", "o", "p"],
];
// **********************************************
// ******************* BÖLÜM 4 ******************
// **********************************************
// "getTotal" isminde bir fonksiyon oluşturalım. Bu fonksiyon, bir önceki adımda
// yazdığımız "Product" türünden oluşan bir array alsın ve bu array'in içindeki
// ürünlerin fiyatlarının toplamını dönsün.
// Kodu buraya yazalım...
const mockproducts = [];
let i;
for (i = 0; i < 10; i++) {
    mockproducts.push({
        name: "coffe",
        price: 10 + i,
    });
}
