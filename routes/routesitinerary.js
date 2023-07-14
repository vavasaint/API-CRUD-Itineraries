const Router= require("express").Router()

const itineraryControllers = require("../controllers/itinerarycontrollers")
const {getItinerary,getOneItinerary,removeItinerary, modifyItinerary, addItinerary,addMultiplesItineraries} = itineraryControllers  


Router.route("/itinerary")
 .get(getItinerary)
 .post(addItinerary)


 Router.route("/itinerary/:id")
.get(getOneItinerary)
.delete(removeItinerary)
.put(modifyItinerary)
 
 
  Router.route("/multiplesitineraries")
.post(addMultiplesItineraries)
 


module.exports = Router;