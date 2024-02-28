let record = [
   
]

const viewdata = () =>{
    let tbl = ""
    record.map((val)=>{
        return tbl += `
          
            <div style="border:1px solid #000;width:70%;padding:10px;border-radius:10px;margin-bottom:10px">${val.name}</div>
            <div>
             <button type="submit" class="submit" onclick="deletedata(${val.id})">Delete</button>
            </div>
                  
       `
    });
    document.getElementById(`do`).innerHTML = tbl;
}

const insertdata = () =>{
    let data = document.getElementById(`give`).value;
    if(!data)
    {
        alert(`Task Is Required..`)
        return false;
    }
    let obj = {
        id : Math.floor(Math.random()*10000),
        name : data,
    }
    record.push(obj)
    viewdata()
    document.getElementById(`give`).value = "";
} 
const deletedata = (id) => {
    let data = record.filter((val)=>{
        return val.id != id;
    })
    record = data;
    viewdata();
}
