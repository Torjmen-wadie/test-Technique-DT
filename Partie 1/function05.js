function checkAnagrams(str1, str2) {
  // Convertir les chaînes en minuscules et en tableaux de caractères
  let arr1 = str1.toLowerCase().split('');
  let arr2 = str2.toLowerCase().split('');

  // Trier les tableaux de caractères par ordre alphabétique
  arr1.sort();
  arr2.sort();

  // Comparer les tableaux de caractères
  if (arr1.join('') === arr2.join('')) {
    return true;
  } else {
    return false;
  }
}

console.log(checkAnagrams("listen", "silent")); 
console.log(checkAnagrams("hello", "world")); 
console.log(checkAnagrams("rail safety", "fairy tales")); 