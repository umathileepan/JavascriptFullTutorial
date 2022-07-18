let count = 0
let saveEL=document.getElementById("save-el")
let countSep = saveEL.innerText

function increment()
{
    count += 1
    document.getElementById("count-lbl").innerText = count
}

function save()
{
    countSep.saveEL.innerText = count + " - "
}