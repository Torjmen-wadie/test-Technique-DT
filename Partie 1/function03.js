function printMostComChar(str) {
    // Créer un objet pour stocker le nombre d'occurrences de chaque caractère
    let charCounts = {};
    str = str.toLowerCase().replace(/\s/g, "");
    // Parcourir la chaîne et compter le nombre d'occurrences de chaque caractère
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      charCounts[char] = (charCounts[char] || 0) + 1;
    }
    
    // Trouver le caractère avec le nombre d'occurrences le plus élevé
    let mostCommonChar = null;
    let mostCommonCharCount = 0;
    for (let char in charCounts) {
      if (charCounts[char] > mostCommonCharCount) {
        mostCommonChar = char;
        mostCommonCharCount = charCounts[char];
      }
    }
    
    // Renvoyer le caractère le plus fréquent
    return mostCommonChar;
  }

  console.log(printMostComChar("hellOOo")); 
console.log(printMostComChar("misSSissiippi")); 