const form = document.querySelector('#input-form')
const outputDiv = document.querySelector('#output')

form.addEventListener('submit', handleSubmit)


//let colorArr = []
function renderColorDivs(arr){
    let html=``
    
    for (color of arr){
        html += `
        <div>
            <div class="eachColor" style="background-color: ${color};"></div>
            <div class="color-name" data-color="${color}" >${color}</div>
        </div>`
    }

    
    outputDiv.innerHTML = html
    document.body.addEventListener('click', copyName)
    
}

function handleSubmit(e){
    e.preventDefault()
    
    const formInfo = new FormData(form)
    let color = formInfo.get('color-pick')
    color = color.slice(1,color.length)
    const schemeMode = formInfo.get('scheme-select')
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${schemeMode}&count=6`)
        .then(res=>res.json())
        .then(data=>{
            let colorArr = []
            for(let obj of data.colors){
                colorArr.push(obj.hex.value)
            }
            renderColorDivs(colorArr )
    })
}

function copyName(e) {
    if(e.target.dataset.color){
    navigator.clipboard.writeText(e.target.dataset.color)
    alert("hex value copied to clipboard") 
    }  
}