// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
// Yaşları tutmak üzere "ages" isminde boş bir array oluşturalım.
// Tür girmeyi unutmayalım.

// Kodu buraya yazalım...
let ages: number[] = [];

// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
// "gameBoard" isminde boş bir array oluşturalım. Bu array, stringlerden oluşan
// iki boyutlu bir array olmalı. Yani array'in içinde array'ler olacak ve bu
// array'lerin içinde string'ler olacak.

// Kodu buraya yazalım...

let gameboard: (number | string)[][] = [  //Array içinde array tür olarak bu şekilde ifade edilir.
  ["g", "a", "m"],
  ["e", "d", "e"],
  ["v", "o", "p"],
];

// **********************************************
// ******************* BÖLÜM 3 ******************
// **********************************************
// "Product" isminde bir type oluşturalım. Bu type, bir "name" ve bir "price"
// isimli iki property'ye sahip olsun. Örnek:
// {name: "coffee mug", price: 11.50}

// Kodu buraya yazalım...
type Product = {
  name: string;
  price: number;
};

// **********************************************
// ******************* BÖLÜM 4 ******************
// **********************************************
// "getTotal" isminde bir fonksiyon oluşturalım. Bu fonksiyon, bir önceki adımda
// yazdığımız "Product" türünden oluşan bir array alsın ve bu array'in içindeki
// ürünlerin fiyatlarının toplamını dönsün.

// Kodu buraya yazalım...

const mockproducts: Product[] = [];



let i;
for (i = 0; i < 10; i++) {
  mockproducts.push({
    name: "coffee",
    price: 10 + i,
  });
}

const getTotal = (p: Product[]) => {
  let total = 0;
  for (let i = 0; i < p.length; i++) {
    total += p[i].price;
  }
  return total;
};