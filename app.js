const box = document.querySelector("body > div.box")
const nap = document.querySelector("body > div > div.nap")
const thu = document.querySelector("body > div > div.thu")
const heart = document.querySelector("body > div.heart")
const bia = document.querySelector("body > div.box > div.bia")
const view = document.querySelector(".view")
const song = document.getElementById("song")
const text = ['Gửi','MyLove','của','anh','❤❤❤',':','Anh','biết','hiện','tại','anh','chưa','có','gì','hết','nhưng','anh','lại','có','một','trái','tim','chân','thành','dành','cho','em','!','Mong','rằng','em','sẽ','biết','trân','trọng','nó','vì','ngoài','em','ra','thì','anh','chẳng','thể','yêu','một','ai','khác','.','Mong','rằng','sau','tất','cả',',','chúng','ta','vẫn','là','của','nhau','.','Chúc','em','năm','mới','vui','vẻ','và','mãi','hạnh','phúc','bên','anh','❤❤❤']

nap.addEventListener("click",open)
function open(){
    song.play()
    song.currentTime = 3*60 + 37
    song.loop = true
    nap.style.animation = "monap linear 3s forwards"
    setTimeout(function(){box.style.animation = "moveEnvelope 5s ease-in-out forwards"
        nap.style.zIndex=0
        thu.style.animation= "moveLetter ease-in-out 5s forwards "
        heart.style.animation="hientraitim linear 5s forwards 5s"
        setTimeout(function(){    
            thu.style.top = "-700px"
            thu.style.animation= "bigletter 2s linear forwards" 
            setTimeout(() => {
                for (let i = 0; i < text.length; i++){
                    setTimeout(() => {
                        thu.innerHTML += text[i]+" "
                
                    }, i*450);
                } 
                }, 3000)
          setTimeout(() => {
            thu.style.animation="hientraitim reverse 3s forwards"
          },40000);
            },4000 )
        setTimeout(function(){nap.style.visibility="hidden"
            bia.style.visibility="hidden"
            box.style.backgroundColor = "transparent"
        },4000)
     },4000)

    

    
    }
   


