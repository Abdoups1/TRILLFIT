import hoodie from "../assets/HD.jpg"
import tshirt from "../assets/TS.jpg"
import dress from "../assets/DRS.jpg"
import Wristband from "../assets/WB.jpg"
import cap  from "../assets/CAP.jpg"
import pants from "../assets/PTS.jpg"

export const products = [ { id: 1, name: "TRILL Hoodie", image: hoodie, price: 3500, views: 0, sold: 12,
     reviews: [ { rating: 5, comment: "Super comfy and stylish!" }, { rating: 4, comment: "Nice quality." }, ], }, 
     { id: 2, name: "TRILL T-shirt", image: tshirt, price: 2000, views: 0, sold: 20, reviews: 
        [ { rating: 5, comment: "Love the design!" }, ], }, 
        { id: 3, name: "TRILL Cap", image: cap, price: 1800, views: 0, sold: 8, reviews: [], }, 
        { id: 4, name: "TRILL Joggers", image: pants, price: 2500, views: 0, sold: 5, reviews: [], }, 
{ id: 5, name: "TRILL Wristband", image: Wristband, price: 600, views: 0, sold: 3, reviews: [], }, 
{ id: 5, name: "TRILL Dress", image: dress, price: 5400, views: 0, sold: 3, reviews: [], },];