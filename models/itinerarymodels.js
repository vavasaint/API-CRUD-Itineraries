const mongoose=require("mongoose")

const itinerarySchema= new mongoose.Schema({
    nameItinerary:{type:String, required:true},
    nameUser: {type:String, required:true},
    userImage: {type:String, required:true},
    price: {type:String, required:false},
    duration: {type:String, required:true},
    hashtag: {type:String, required:true},
    imageItinerary: {type:String, required:true},
    description:{type:String, required:true}
})

const itinerary= mongoose.model("itineraries",itinerarySchema)




module.exports=itinerary