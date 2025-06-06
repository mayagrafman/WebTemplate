import { send } from "../utilities";
import { Hotel } from "./types";

let query = new URLSearchParams(location.search);
let cityId = parseInt(query.get("cityId")!);

let hotelsDiv = document.querySelector("#hotelsDiv") as HTMLDivElement;

let hotels = await send("getHotels", cityId) as Hotel[];
for (let i = 0; i < hotels.length; i++) {
    let hotel = hotels[i];
    
    let a = document.createElement("a");
    a.href = "hotel.html?hotelId=" + hotel.Id;
    hotelsDiv.appendChild(a);

    let img = document.createElement("img");
    img.src = hotel.Image;
    img.width = 300;   
    img.height = 200;
    a.appendChild(img);

    let div = document.createElement("div");
    div.innerText = hotel.Name;
    div.classList.add("hotel-name"); // ✅ הוספת קלאס לעיצוב שם האולם
    a.appendChild(div);
}