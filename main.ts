{
  const word = document.getElementById("word")
  const words:string[] = ["pink","blue","red"]
  let idx = 0

  word?.addEventListener("click",()=>{
    // gameProcess()
    if(word)
      word.textContent = words[idx]
  })
  let wordArray = words[idx].split("")
  let loc = 0
    // console.log(words[idx])
  
  
  document.addEventListener("keydown",(e)=>{
    console.log(e.key)
    console.log(wordArray[loc])
    if(e.key === wordArray[loc]){
      wordArray[loc] = "_"
      if(word)
        word.innerHTML = wordArray.join('')

      loc ++
      if(loc === wordArray.length){
        idx ++
        if(word)
          word.textContent = words[idx]
        wordArray = words[idx].split("")
        loc = 0
      }
    }
  })

  
}