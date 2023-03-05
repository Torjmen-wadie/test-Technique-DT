function reverseString(str) {
  // Convertit la chaîne en un tableau de caractères
  const chars = str.split('');
  
  // Inverse l'ordre des caractères dans le tableau
  const reversedChars = chars.reverse();
  
  // Rejoindre les caractères inversés pour former une chaîne
  const reversedStr = reversedChars.join('');
  
  
  return reversedStr;
   
}
console.log(reverseString("Hello world"));