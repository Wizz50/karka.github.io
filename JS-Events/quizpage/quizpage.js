function handleClick(e)
{
    e.preventDefault()
let a=["Itanagar","waterlily","Meghalaya","Karnataka","Rajasthan","Meghalaya","Aizawl","Haryana","Karnataka","feni"]
let x=document.querySelectorAll(".quiz")
let form=document.getElementById("form")
let receivedAns=[]
for(i=0;i<x.length;i++)
    {
        if(x[i].checked)
            {
                receivedAns.push(x[i].value)
            }
    }
    console.log(receivedAns)
if(a.length==receivedAns.length)
    {
      var count=0  
     let j=0
    for(i=0;i<a.length;i++)
        {
                    if(a[i]==receivedAns[i])
                    {
                        count+=1
                        if(x[j].checked){
                                x[j].nextElementSibling.style.color="green"
                            }
                        else if(x[j+1].checked){
                            x[j+1].nextElementSibling.style.color="green"
                        }
                        else{
                            x[j+2].nextElementSibling.style.color="green"
                        }
                    }
                    else{
                        if(x[j].checked){
                            x[j].nextElementSibling.style.color="red"
                        }
                        else if(x[j+1].checked){
                            x[j+1].nextElementSibling.style.color="red"
                        }
                        else{
                            x[j+2].nextSibling.style.color="red"
                        }
                        if(x[j].value==a[i]){
                            x[j].nextElementSibling.style.color="green"
                        }
                        else if(x[j+1].value==a[i]){
                            x[j+1].nextElementSibling.style.color="green"
                        }
                        else{
                            x[j+2].nextElementSibling.style.color="green"
                        }
                    }
           j=j+3
        }  
        footer=document.getElementById("footer")
        scoreBox=document.createElement("h3") 
        scoreBox.innerHTML="Your Score: "
        footer.appendChild(scoreBox)
        score=document.createElement("span")
        score.innerHTML=count
        scoreBox.appendChild(score)
        totalScore=document.createElement("span")
        totalScore.innerHTML="/10"
        scoreBox.appendChild(totalScore)
        score.style.color="red"
        totalScore.style.color="red"
    }
    else
    {
        alert("Answer all question")
        form.reset()
    }
}

