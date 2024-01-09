const companies = [
  {
    name: "Company One",
    category: "Finance",
    start: 1890,
    end: 1980,
  },
  {
    name: "Company Two",
    category: "Retail",
    start: 1990,
    end: 2010,
  },
  {
    name: "Company Three",
    category: "Auto",
    start: 1860,
    end: 1920,
  },
  {
    name: "Company Four",
    category: "Technology",
    start: 1800,
    end: 1900,
  },
  {
    name: "Company Five",
    category: "Retail",
    start: 1950,
    end: 1990,
  },
  {
    name: "Company Six",
    category: "Finance",
    start: 1940,
    end: 1980,
  },
  {
    name: "Company One",
    category: "Technology",
    start: 2009,
    end: 2023,
  },
  {
    name: "Company Eight",
    category: "Auto",
    start: 2000,
    end: 2015,
  },
];

// FOR-EACH Method
/* 
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}
// Using the For each method
 
companies.forEach((company) => {
  console.log(company);
})
*/

// Filter Method

let canDrink = []
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i])
  }
}
console.log(canDrink);

// With the Filter Method

const ages = [12, 32, 54, 23, 17, 19, 20, 16, 24, 35, 41, 52];
const canDrinkk = ages.filter( (age) => {
  if (age >= 21) {
    return true
  }
})
console.log(canDrinkk);