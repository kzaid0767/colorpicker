const form = document.querySelector('#input-form')

form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    const formInfo = new FormData(form)
    const color = formInfo.get('color-pick')
    schemeMode = formInfo.get('scheme-select')
    fetch(`https://www.thecolorapi.com/scheme?hex=0047AB`)
        .then(res=>res.json())
        .then(data=>console.log(data ))
}

