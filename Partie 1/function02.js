function isPalindrome(str) {
    // Supprimer les espaces et mettre tous les caractères en minuscules
    str = str.toLowerCase().replace(/\s/g, "");
    
    // Inverser la chaîne de caractères
    let reversed = str.split("").reverse().join("");
    
    // Vérifier si la chaîne inversée est égale à la chaîne d'origine
    return str === reversed;
  }

  console.log(isPalindrome("Radar"));
console.log(isPalindrome("Hello world")); 