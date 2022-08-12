const cont = document.getElementById("cont");


document.getElementById("btn").addEventListener( "click" , call )


async function call() {
  let x = document.getElementById("text")
  let text = x.value
  console.log(text);
  fetch(`https://animechan.vercel.app/api/quotes/anime?title=${text}`)
    .then((res) => {
      return res.json();
    })
    .then((json) => {

      creatHtml(json);
    })
    .catch((err) => {
      console.log(err);
      cont.innerHTML = `
      <br>
<h1> somthing went wrong .sorry </h1> <br>
      `
    });
}


function creatHtml(animes){
    console.log(animes);
    let html = ""
let i = animes.length
 let random = Math.floor( Math.random() * i )

 let character = animes[random].character
let quote = animes[random].quote
 html = `
<br>
<h1 id="character" > ${character} </h1> <br>
<h1 id="quote" >"${quote}"</h1>

`
cont.innerHTML = html


}
/* for( let anime of animes ){
        console.log(anime);
    }*/