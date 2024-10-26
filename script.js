function del(arg){
    // alert(arg)

    let res = window.confirm("do you really want to delete information")
   
    if(res){
    fetch(`http://localhost:4000/product/${arg}`,{
        method:"DELETE"
    });
    }else{
        alert("invalid click")
    }
}

let uid = null;
async function updateform(id){
    let data = await fetch(`http://localhost:4000/product/${id}`);
    let res = await data.json();
    uid = id
    let selectform = document.querySelector('#upform');
    selectform.style.display = "block";

    document.querySelector('#imgurl').value = res.imageurl;
    document.querySelector('#pname').value = res.pname;
    document.querySelector('#bname').value = res.bname;
    document.querySelector('#pprice').value = res.pprice;
}

function finalupdate(){
    let imageurl =  document.querySelector('#imgurl').value;
    let pname = document.querySelector('#pname').value;
    let bname =  document.querySelector('#bname').value;
    let pprice = document.querySelector('#pprice').value;
    
    let obj = {
        "imageurl":imageurl,
        "pname":pname,
        "bname" : bname,
        "pprice" : pprice
    }

    console.log(obj)
    fetch(`http://localhost:4000/product/${uid}`,{
        method:"PUT",
        body:JSON.stringify(obj)
    })



}

function showaddform(){
   let selectform = document.querySelector('#addform');
   selectform.style.display = "block";
}
function add(){
    let imageurl =  document.querySelector('#imgurl').value;
    let pname = document.querySelector('#pname').value;
    let bname =  document.querySelector('#bname').value;
    let pprice = document.querySelector('#pprice').value;
    
    let obj = {
        "imageurl":imageurl,
        "pname":pname,
        "bname" : bname,
        "pprice" : pprice
    }

    console.log(obj)
    fetch(`http://localhost:4000/product/`,{
        method:"POST",
        body:JSON.stringify(obj)
    })



}

async function run(){
    let data =await fetch('https://p35data.vercel.app/data.json');
    let response =await data.json();
    console.log(data)
    console.log(response)

    let selecttable = document.querySelector('#tabledata');

    selecttable.innerHTML= response.map((items)=>`
        <tr>
           <td>${items.id}</td>
           <td><img width="100px" src="${items.imageurl}"></td>
           <td>${items.pname}</td>
           <td>${items.pprice}</td>
           <td>${items.bname}</td>
           <td><button onclick="del(${items.id})">delete</button></td>
           <td><button onclick="updateform(${items.id})">update</button></td>
        </tr>
    `).join(" ")
}


