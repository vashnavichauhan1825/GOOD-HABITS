import React,{useState} from "react";
import "./styles.css";

var emojiGood ={
"🛀":"HAVE A DAILY BATH ! ",
"🥬":"EAT GREEN VEGETABLES.",
"🛌🏼":"GO TO BED EARLY.",
"💻":"DO CODE DAILY ! ",
"🙏🏻":"PRAY TO GOD.",
"💸":"START INVESTING IN YOUR GROWTH ! ",
"🗑️":"THROW WASTE IN THE DUSTBIN.",
"😊":"SMILE PLEASE ! ",
};
 
var emojiWeKnow= Object.keys(emojiGood);

export default function App() {

  const [meaning,setMeaning]=useState("");

  function emoticonsHabits(event){
   var userInput =event.target.value;
   var meaning = emojiGood[userInput];
   
  
  if(meaning===undefined){
meaning="we don't have that emoji in our database !"

  }
setMeaning(meaning);
  }

  function emoticonsHandler(emoji){
  var meaning=emojiGood[emoji];
  setMeaning(meaning)
  }
  
  return (
    <div className="App">
      <h1 className="heading">Good habits with emoticons ! </h1>
      <input onChange = {emoticonsHabits}/>
      <h3 className="meaning">{meaning}</h3>
      
<h4 className="habits">some good habits 👇 </h4>
  {emojiWeKnow.map(function(emoji){
  return(

<span className="emojis"
onClick ={()=>emoticonsHandler(emoji)}
   key={emoji}>
          {emoji}
        </span>
  );
  })};
    </div>
  );
}
