function vowelChecker(letter){
  const array =  ['a','e','i','o','u'];
  for(let i=0;i<5;i++){
    if(letter===array[i]){
      return true;
    }
  }
  return false;
}

function translator (word){
  const vowelSuffix = "way";
  let consonantSuffix = "ay";
  let newWord;
  let letter = "";
  if(vowelChecker(word.charAt(0))){
    newWord = word.concat(vowelSuffix);
    return newWord;
  } 
  else{
      for(let i = 0; i < word.length; i++) {
      letter += word.charAt(i);
      if(vowelChecker(word.charAt(i+1))){
        consonantSuffix=letter+consonantSuffix;
        word=word.slice(i+1,word.length)
        newWord=word.concat(consonantSuffix);
        return newWord;
        
      }
    }
  } 
}
  




$(document).ready(function(){
  $("form#translator").submit(function(event){
    event.preventDefault();
    const input = $("#text-passage").val();

  });
});