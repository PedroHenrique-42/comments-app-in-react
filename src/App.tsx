import { useState } from "react";
import { Comment } from "./Components/Comments";
import "./index.css"

function App() {
    const [comments, setComments] = useState<string[]>([])

  function createTweet() {
    const newComment = document.getElementById('newComment') as HTMLInputElement
    const value = newComment?.value
    console.log(value)
    if(value == ''){
      alert('[ERRO] Valor inválido.')
    }else{
      setComments([...comments, value])
    }
  }

  function clearField(){
    const inputs = document.querySelectorAll('input')
    const btnClear = document.getElementById('btnClear')

    btnClear?.addEventListener('click', () =>{
      inputs.forEach(input => input.value = '')
    })
  }

  return(
    <div id="content">
      <h2>Faça seu comentário logo abaixo: </h2>
      {comments.map(comments =>{
        return <Comment text={'- ' + comments} />
      })}

      <div id="input">
          <span>
            <input type="text" name="newComment" id="newComment" placeholder="Digite aqui" /><br></br>
            <button id="btnClear" onClick={clearField}>Clear field</button>
          </span>
            <button id="btn" onClick={createTweet}>Add comment</button>
      </div>
        
    </div>
   )
}

export default App
