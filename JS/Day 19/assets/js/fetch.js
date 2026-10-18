 const fetchApi = async () => {
    const product = await fetch("https://dummyjson.com/products")

    const objs = await product.json()

    const data = objs.products

    const showProduct = document.getElementById("showproducts")

    let getshow = ""

    data.forEach((e)=>{
        getshow += `<tr>
        <td>${e.title}</td>
        <td>${e.price}</td>
        <td>${e.rating}</td>
        </tr>`
    })

    showProduct.innerHTML = getshow



 }
 fetchApi()