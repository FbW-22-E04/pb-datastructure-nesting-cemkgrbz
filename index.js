//1

let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
  ];

for (const key of board) {
  for (const i of key) {
    console.log(i);
  }
}

//or 

for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      console.log(board[i][j]);
    }
  }

//2.1-2

const doggo = {
    name: "Terry",
    breed: "Terrier",
    favFood: [
        "Beef",
        "Sausage",
        "Dog meal"
    ]
}

//2.3

console.log(doggo.favFood[1]);

//2.4

for(let key of doggo.favFood){
    console.log(key)
};

//3.1-2

const recipes = {
    nameOfRecipe: "Lemonade",
    ingredients: {
        ing1: "water",
        ing2: "lemon",
        ing3: "sugar",
   },
   printIngredients() {
    return Object.values(this.ingredients);
    }   
};

//3.3

recipes.ingredients.ing4 = "ginger"
console.log(recipes.ingredients);

//3.4

recipes.ingredients.ing3 = "brown sugar"
console.log(recipes.ingredients);

//3.5

for (let i in recipes.ingredients) {
    console.log(recipes.ingredients[i]);
  }