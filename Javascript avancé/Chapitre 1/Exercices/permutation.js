// Permutation 
console.log("Exercice de permutation");
let a = 1, b = 2, c = 4;
[a, b, c] = [b, c, a];
console.log(a, b, c);


// Assigner par décomposition 
console.log("Exercice d'assignation par décomposition");
let student = {  
    name : "Alan", 
    notes : [ 10, 16, 17], 
    average : null 
}

const {name, notes, average} = student;
console.log(name, notes, average);

// Itérer et décomposer
const students = [
    {
      name: "Alan",
      family: {
        mother: "Isa",
        father: "Philippe",
        sister: "Sylvie"
      },
      age: 35
    },
    {
      name: "Bernard",
       family: {
        mother: "Particia",
        father: "Cécile",
        sister: "Annie"
      },
      age: 55
    }
  ];

  // TODO : affichez le nom et le nom de la soeur de chaque étudiant en utilisant une boucle for of 
  console.log("Exercice d'itération et décomposition");
  for (const {name, family: {sister}} of students) {
      console.log("Nom : " + name, " | Soeur : " + sister);
  }
