function handleClick()
{
    let list=document.getElementById("list")
   let item=document.getElementById("item")
   let doList= documet.createElement("div")
   doList.innerHTML=item.value 
   doList.appendChild(list)
    document.getElementById("item").value=""
}