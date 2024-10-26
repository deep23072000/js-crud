async function fil(){
    let data = await fetch('http://localhost:4000/product');
    let res = await data.json();

    let selectopt = document.querySelector('#filvalue').value;
    let selectsearchbox = document.querySelector('#searchbox').value;

    console.log(selectopt,selectsearchbox)
    console.log(res)

    
    if(selectopt === 'pname'){
    let filterdata =  res.filter((items)=> items.pname === selectsearchbox);
    console.log(filterdata);
    let selecttable = document.querySelector('#tabledata');

    selecttable.innerHTML= filterdata.map((items)=>`
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
    else if(selectopt === 'bname'){
        let filterdata =  res.filter((items)=> items.bname ===  selectsearchbox);
        console.log(filterdata)
    let selecttable = document.querySelector('#tabledata');

        selecttable.innerHTML= filterdata.map((items)=>`
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
    else if(selectopt === 'pprice'){
        let parsedata = parseInt(selectsearchbox) 
        let filterdata =  res.filter((items)=> items.pprice <= parsedata);
        console.log(filterdata)
    let selecttable = document.querySelector('#tabledata');

        selecttable.innerHTML= filterdata.map((items)=>`
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
}

