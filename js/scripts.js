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
  let newWord;
  
  for(let i = 0; i < word.length; i++) {
    if(vowelChecker(word.charAt(i))){
      newWord = word.concat(vowelSuffix);
    }
  }
  return newWord;

}


$(document).ready(function(){
  $("form#translator").submit(function(event){
    event.preventDefault();
    const input = $("#text-passage").val();

  });
});