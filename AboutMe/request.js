const request = new XMLHttpRequest();
var responseArray = []
//getting About me information and more specifically text of paragraphs(future <p> elemenets) as list
request.open("GET","https://mocki.io/v1/1d145899-0d75-479e-9274-e05f4515c725");
request.send()
request.onload = ()=>{
    console.log(request);
    if(request.status===200){
        responseArray = JSON.parse(request.response)
    }
    else {
        console.log(`error ${request.status}`);

    }
    var firstColumn = document.getElementById("par1");
    for(i=0; i<responseArray.length; i++){
        let myElm = document.createElement("p");
        myElm.textContent = responseArray[i].p1
        firstColumn.insertBefore(myElm,firstColumn.children[firstColumn.children.length-1])
    }
}