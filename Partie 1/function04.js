function countVowels(str) {
    // Convertir la chaîne en minuscules pour faciliter la comparaison des voyelles
    str = str.toLowerCase();
  
    // Définir un tableau contenant les voyelles
    let vowels = ['a', 'e', 'i', 'o', 'u'];
  
    // Initialiser un compteur pour le nombre de voyelles
    let vowelCount = 0;
  
    // Parcourir chaque caractère de la chaîne et vérifier s'il s'agit d'une voyelle
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (vowels.includes(char)) {
        vowelCount++;
      }
    }
  
    // Renvoyer le nombre total de voyelles trouvées
    return vowelCount;
  }

console.log(countVowels("hello world")); 
console.log(countVowels("The quick brown fox jumps over the lazy dog."));
console.log(countVowels("")); 