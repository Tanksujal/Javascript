
let record = [
    {
        id: 1,
        name: "ASUS TUF Gaming F17 - AI Powered Gaming ",
        image: "./img/tuff.webp",
        price: 57900,
        qty: 1,
    },
    {
        id: 2,
        name: "Apple 2023 Macbook Air Apple M2",
        image: "./img/mac.webp",
        price: 141390,
        qty: 1,
    },
    {
        id: 3,
        name: "ASUS AiO A3 Series All in One Desktop",
        image: "./img/as.webp",
        price: 44990,
        qty: 1,
    },
    {
        id: 4,
        name: "Canon R100 Mirrorless Camera",
        image: "./img/ca.webp",
        price: 47990,
        qty: 1,
    },
    {
        id: 5,
        name: "PA Maxima Max Pro Velocity ",
        image: "./img/watch.webp",
        price: 1399,
        qty: 1,
    },
    {
        id: 6,
        name: "beatXP Flux 1.45 (3.6 cm) Bluetooth Calling",
        image: "./img/watch2.webp",
        price: 1099,
        qty: 1,
    },
    {
        id: 7,
        name: "Apple iPhone 15 (Blue, 128 GB)",
        image: "./img/i15.webp",
        price: 72999,
        qty: 1,
    },
    {
        id: 8,
        name: "EVOFOX Elite X Wireless Gamepad",
        image: "./img/game.webp",
        price: 1609,
        qty: 1,
    },


]

const viewlist = () => {
    let tbl = ""
    record.map((val) => {
        return tbl += `
       
<div class="col-3">
<div class="box mb-4" style="height:370px">
    <div class="box-img d-flex justify-content-center"style="border-radius:3px;overflow:hidden;height:240px">
        <img src="${val.image}"class="w-100 h-100" alt="" id="itemimg">
    </div>  
    <div class="box-name pt-2">
        <h4 style="font-size: 18px;color: #ff6348;font-weight: 600;"id="itemname">${val.name}</h4>
    </div>
    <div class="box-item">
        <div class="row align-items-center">
            <div class="col-6">
                <span style="font-weight: 600;">Rs.</span>
                <span style="font-weight: 600;"id="itemprice">${val.price}</span>
            </div>
            <div class="col-6 d-flex justify-content-end">
            <button type="button" class="btn btn-success"onclick="showitem(${val.id})">Add To Cart</button>
            </div>
        </div>
    </div>
</div>
</div>
        `
    })
    document.getElementById(`list`).innerHTML = tbl;
}
viewlist()
let cart = []
const showitem = (id) => {
    let old = JSON.parse(localStorage.getItem('item'))?JSON.parse(localStorage.getItem('item')):[];
    let repeat = old.find((val)=>{
       return val.id == id;
    })
    if(repeat)
    {
        alert(`Item Already Exists`);
        return false;
    }
    if(localStorage.getItem('item')===null||localStorage.getItem('item')===undefined)
    {
        record.map((val) => {
            if(val.id==id)
            {
                cart.push(val);
            }
        })
        localStorage.setItem('item', JSON.stringify(cart))
    }
    else
    {
        let olditem = JSON.parse(localStorage.getItem('item'));
        record.map((val) => {
            if(val.id==id)
            {
                olditem.push(val);
            }
        })
        localStorage.setItem('item', JSON.stringify(olditem))
    }
    viewlist()
   
}
