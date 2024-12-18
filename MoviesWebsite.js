let trailerMovie=[
    {id:1,name:"Death On The Nile",path:"images/background.jpg"},
    {id:2,name:"The Maze Runner",path:"images/background_1.jpg"},
    {id:3,name:"The Avengers",path:"images/background_2.jpg"},
    {id:4,name:"Fullmetal Alchemist: Final Transmutation",path:"images/background_4.jpg"},
    {id:5,name:"Apocalypto",path:"images/background_5.jpg"}
]
let PopularMovie=[
    {id:"1",name:"gajaman",year:"2023",type:"animation/comedy",rank:"9.2",path:"images/gajaman.jpg"},
    {id:"2",name:"Black Panther",year:"2022",type:"action/adventure",rank:"5.9",path:"images/Black_Panther.webp"},
    {id:"3",name:"Interceptor",year:"2022",type:"action/adventure",rank:"3.1",path:"images/Interceptor.jpg"},
    {id:"4",name:"Thor",year:"2022",type:"action/adventure",rank:"8.3",path:"images/Thor.jpg"},
    {id:"5",name:"Black Adam",year:"2022",type:"action/adventure",rank:"6.4",path:"images/Black_Adam.jpg"},
]
let OpcomingMovie=[
    {id:"1",name:"Plane",year:"2023",type:"action/thriller",path:"images/plane.jpg"},
    {id:"2",name:"John Wick 4",year:"2023",type:"action/neo-noir",path:"images/john_wick.jfif"},
    {id:"3",name:"Meg 2",year:"2023",type:"adventure",path:"images/meg.jpg"},
    {id:"4",name:"aquaman",year:"2023",type:"action/afantasy",path:"images/aquaman.jpg"},
    {id:"5",name:"ant man",year:"2023",type:"action/adventure",path:"images/ant_man.jpg"},
]
let BestTv=[
    {id:"1",name:"Money Heist",year:"2017",type:"thriller",rank:"4.7",path:"images/money_heist.jpg"},
    {id:"2",name:"wednesday",year:"2022",type:"comedy",rank:"6.2",path:"images/wednesday.jpg"},
    {id:"3",name:"1899",year:"2022",type:"Mystery",rank:"7.4",path:"images/1899.jpg"},
    {id:"4",name:"game_of_thrones",year:"2011",type:"Drama",rank:"9.8",path:"images/game_of_thrones.jpg"},
    {id:"5",name:"Arrow",year:"2012",type:"Drama",rank:"7.2",path:"images/arrow.jpg"},
]
let nameMovie=document.querySelector(".movieName")
let changeBack=document.querySelector(".top")
let beforePic=document.querySelector(".beforePic")
let nextPic=document.querySelector(".nextPic")
let popularMovie=document.querySelector(".popularMovie")
let opcoming=document.querySelector(".Opcoming")
let bestTv=document.querySelector(".bestTv")
let choiseTrailer

beforePic.addEventListener("click",function(event){
    changeBack.style.animation=""
    choiseTrailer=(window.getComputedStyle(event.target.parentElement).backgroundImage.split("\""))[1].slice(39)
    let findIndexTrailer=trailerMovie.findIndex(function(any){
        return any.path==choiseTrailer
    })
    if(findIndexTrailer==0){
        changeBack.style.backgroundImage="url("+trailerMovie[trailerMovie.length-1].path+")"
        nameMovie.innerHTML=trailerMovie[trailerMovie.length-1].name
    }else{
        changeBack.style.backgroundImage="url("+trailerMovie[findIndexTrailer-1].path+")"
        nameMovie.innerHTML=trailerMovie[findIndexTrailer-1].name

    }
    changeBack.style.animation="transBackgroundBefore .1s forwards"
})
nextPic.addEventListener("click",function(event){
    changeBack.style.animation=""
    choiseTrailer=(window.getComputedStyle(event.target.parentElement).backgroundImage.split("\""))[1].slice(39)
    let findIndexTrailer=trailerMovie.findIndex(function(any){
        return any.path==choiseTrailer
    })
    if(findIndexTrailer==trailerMovie.length-1){
        changeBack.style.backgroundImage="url("+trailerMovie[0].path+")"
        nameMovie.innerHTML=trailerMovie[0].name
    }else{
        changeBack.style.backgroundImage="url("+trailerMovie[findIndexTrailer+1].path+")"
        nameMovie.innerHTML=trailerMovie[findIndexTrailer+1].name
    }
    changeBack.style.animation="transBackgroundNext .1s forwards"

})
function playanimation(event){ 
    event.target.firstChild.style.animation="animIcon forwards 0.5s"
    event.target.lastChild.style.animation="animIcon2 forwards 0.5s"
}
function stopanimation(event){
    event.target.firstChild.style.animation="animIcon1 0.5s"
    event.target.lastChild.style.animation="animIcon3 0.5s"


}


window.addEventListener("load",function(){
    PopularMovie.forEach(function(any){
        popularMovie.insertAdjacentHTML("beforeend",'<div class="popularMovies" onmouseenter="playanimation(event)" onmouseleave="stopanimation(event)"><div class="leftexplain"><p class="nameMovie">'+any.name+'</p><div class="productYear"><p>HD</p><p>'+any.year+'</p></div><p>'+any.type+'</p><div class="productTime"><i class="fa-solid fa-star"></i><p>'+any.rank+'</p><p class="minTime">120min</p></div></div><div class="rightexplain"><i class="fa-solid fa-play"></i></div></div>')

    })
    OpcomingMovie.forEach(function(any){
        opcoming.insertAdjacentHTML("beforeend",'<div class="popularMovies" onmouseenter="playanimation(event)" onmouseleave="stopanimation(event)"><div class="leftexplain"><p class="nameMovie">'+any.name+'</p><div class="productYear"><p>HD</p><p>'+any.year+'</p></div><p>'+any.type+'</p><div class="productTime"><i class="fa-solid fa-clock"></i><p class="minTime">120min</p></div></div><div class="rightexplain"><i class="fa-solid fa-play"></i></div></div>')

    })
    BestTv.forEach(function(any){
        bestTv.insertAdjacentHTML("beforeend",'<div class="popularMovies" onmouseenter="playanimation(event)" onmouseleave="stopanimation(event)"><div class="leftexplain"><p class="nameMovie">'+any.name+'</p><div class="productYear"><p>HD</p><p>'+any.year+'</p></div><p>'+any.type+'</p><div class="productTime"><i class="fa-solid fa-star"></i><p>'+any.rank+'</p><p class="minTime">120min</p></div></div><div class="rightexplain"><i class="fa-solid fa-play"></i></div></div>')

    })
    for(let i=0;i<PopularMovie.length;i++){
        popularMovie.children[i].style.backgroundImage="url("+PopularMovie[i].path+")"
        opcoming.children[i].style.backgroundImage="url("+OpcomingMovie[i].path+")"
        bestTv.children[i].style.backgroundImage="url("+BestTv[i].path+")"
    }

})