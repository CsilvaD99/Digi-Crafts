// fetch is the protocol we us for

//fetch()
//fetch(url, {object})
let options ={
    method:'Get'

}
const getValData = asyng() => {
    const data = await fetch(url, options) // pulling the data from url
    const dataJson = await data.json(); // then get the data then format it to json

}