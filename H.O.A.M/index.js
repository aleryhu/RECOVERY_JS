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
    start: 1890,
    end: 1899,
  },
  {
    name: "Company Three",
    category: "Auto",
    start: 1860,
    end: 1890,
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
    name: "Company Seven",
    category: "Technology",
    start: 2015,
    end: 2023,
  },
  {
    name: "Company Eight",
    category: "Auto",
    start: 2000,
    end: 2015,
  },
];

const ages = [12, 32, 54, 23, 17, 19, 20, 16, 24, 35, 41, 52];
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

/* 

// Filter Method
let canDrink = []
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i])
  }
}
console.log(canDrink);

const canDrinkk = ages.filter( (age) => {
  if (age >= 21) {
    return true
  }
})
console.log(canDrinkk);

// Ecma Script
const canTake = ages.filter(age => age >= 21)
console.log(canTake);    
// Filtering retail companies
const retails = companies.filter((retail) => retail.category === 'Retail')
console.log(retails);

// Filtering 80's Companies
const oldCompanies = companies.filter((company) => {
return company.start >=1800 && company.end <= 1900
})
console.log(oldCompanies);
// Get Companies that lasted more than 10 years
const lastedTenYears = companies.filter(company => (company.end - company.start > 10))
console.log(lastedTenYears);
 */

// Map Method

const companyNames = companies.map((company) => {
  return company.name;
});
console.log(companyNames);

const testMap = companies.map(
  (company) => `${company.name} [${company.start} - ${company.end}]`
);
console.log(testMap);
// Squar of ages

const squaredAges = ages.map((age) => Math.sqrt(age));
console.log(squaredAges);

const agePlusTwo = ages.map(age => age + 2)
console.log(agePlusTwo);

