// write your code here
const form = document.getElementById("new-ramen")
let imageDetail = document.querySelector(".detail-image")



fetch("  http://localhost:3000/ramens")
.then(function(res){
    return res.json()
})
.then(function(ramens){
    console.log(ramens);
    ramens.map(function(ramen){
        const menu = document.getElementById("ramen-menu")
        image = document.createElement("img")
        menu.appendChild(image)
        image.src = ramen.image
        
image.addEventListener("click", function(){
   let imageDetail = document.querySelector(".detail-image")
   let namee = document.querySelector(".name")
   let restaurant = document.querySelector(".restaurant")
   let rating = document.querySelector("#rating-display")
   let comment = document.querySelector("#comment-display")

   imageDetail.src = ramen.image
   namee.textContent = ramen.name
   restaurant.textContent = ramen.restaurant
   rating.textContent = ramen.rating
   comment.textContent = ramen.comment

})


    })

// let btn = document.querySelector("#btn")


})


form.addEventListener("submit", submitBtn)

function submitBtn(e){

    const menu = document.getElementById("ramen-menu")

    e.preventDefault()
    let newName = document.getElementById("new-name")
    let newRestaurant = document.getElementById("new-restaurant")
    let newImage = document.getElementById("new-image")
    let newRating = document.getElementById("new-rating")
    let newComment = document.getElementById("new-comment")

    newName.textContent = e.target.value
    newRestaurant.textContent = e.target.value
    newImage.textContent=  e.target.value
    newRating.textContent = e.target.value
    newComment.textContent = e.target.value

    // form = e.target.mwnu.value
    imageDetail.src = newImage.value
  

   




    
}

