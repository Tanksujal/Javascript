let record = [
   
]

const viewdata = () =>{
    let tbl = ""
    record.map((val)=>{
        return tbl += `
          
            <div style="border:1px solid #000;width:70%;padding:10px;border-radius:10px;margin-bottom:10px">${val.name}</div>
            <div>
             <button type="submit" class="submit" onclick="deletedata(${val.name})">Delete</button>
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
        name : data,
    }
    record.push(obj)
    viewdata()
    document.getElementById(`give`).value = "";
} 
const deletedata = (id) => {
    let data = record.map((val)=>{
        return val.name != id;
    })
    record = data;
    viewdata();
}