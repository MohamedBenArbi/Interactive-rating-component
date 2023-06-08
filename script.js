function saveRating(id){
    
    for(let i = 1 ;i <= 5 ;i++){
        document.getElementById(i).style.backgroundColor = "#262f38" ; 
        document.getElementById(id).style.backgroundColor = "hsl(217, 12%, 63%)"
        document.getElementById(id).style.color = "white"

    }
     localStorage.setItem("Rating",id);
}