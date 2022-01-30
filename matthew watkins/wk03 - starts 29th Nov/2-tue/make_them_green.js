divVar = document.querySelector(`div`)
divList1 = document.querySelectorAll(`div`)[0]
divList2 = document.querySelectorAll(`div`)[1]
divList3 = document.querySelectorAll(`div`)[2]

function makeRed(event){
    console.log(event.target)

    var theOneTheUserClickedOn = event.target;

    if (theOneTheUserClickedOn.style.backgroundColor == `green`) {
        return 
    } 
    
    theOneTheUserClickedOn.style.backgroundColor = `red`
    console.log(event.target)

    if (divList1.style.backgroundColor == `red` &&
        divList2.style.backgroundColor == `red` &&
        divList3.style.backgroundColor == `red`) {
            divList1.style.backgroundColor = `green`
            divList2.style.backgroundColor = `green`
            divList3.style.backgroundColor = `green`
    }
}



divVar.addEventListener(`click`, makeRed)
divList2.addEventListener(`click`, makeRed)
divList3.addEventListener(`click`, makeRed)

