let countEL =document.getElementById("count-lbl")
let count = 0
let saveEL= document.getElementById("save-el")
let firstname = "Uma"
let lastname = "Thileepan"
let fullname = firstname + " " + lastname
let myPoints = 3

function add3Points()
{
    myPoints += 3
}

function remove1Point()
{
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()
console.log(myPoints)

document.getElementById("myName").textContent = fullname



function increment()
{
    count += 1
    countEL.textContent = count
}

function save()
{
    let countStr = count + " - "
    saveEL.textContent += countStr
    countEL.textContent = 0
    count = 0
}

console.log("LEt's count people on the subway!")

