const Itineraries = require("../models/itinerarymodels")


const itineraryControllers = {
    getItinerary: async (req, res) => {
        let itineraries
        let error = null

        try {
            itineraries = await Itineraries.find()
        }
        catch
        (err) { error = err }

        res.json({
            response: error ? "Error" : { itineraries } ,
            success: error ? false : true,
            error: error
        })
    },



    getOneItinerary: async (req, res) => {
        const id = req.params.id
        let itinerary
        let error = null

        try {
            itinerary = await Itineraries.findOne({ _id: id })
        }
        catch (err) { error = err }

        res.json({
            response: error ? "Error" : { itinerary },
            success: error ? false : true,
            error: error
        })
    },

   
    addItinerary: async (req, res) => {
        const { nameItinerary,nameUser,userImage,price,duration,hashtag,imageItinerary, description } = req.body.data
        let itinerary
        let error = null

        try {
            itinerary = await new Itineraries({
                
                        nameItinerary: nameItinerary,
                        nameUser: nameUser,
                        userImage: userImage,
                        price: price,
                        duration: duration,
                        hashtag: hashtag,
                        imageItinerary:imageItinerary,
                        description: description,
            }).save()
        }
        catch
        (err) { error = err }

        res.json({
            response: error ? "Error" : itinerary,
            success: error ? false : true,
            error: error
        })

    },

    modifyItinerary: async (req, res) => {
        const id = req.params.id;
        const itinerary = req.body.data;
        let itinerarydb
        let error = null

        try {
            itinerarydb = await Itineraries.findOneAndUpdate({ _id: id }, itinerary, { new: true })
        }
        catch (err) { error = err }

        res.json({
            response: error ? "Error" : itinerary,
            success: error ? false : true,
            error: error
        })
    },

    removeItinerary: async (req, res) => {
        const id = req.params.id
        let itinerary
        let error = null

        try {
            itinerary = await Itineraries.findOneAndDelete({ _id: id })


        } catch
        (err) { error = err }

        res.json({
            response: error ? "Error" : { itinerary },
            success: error ? false : true,
            error: error
        })
    },
    addMultiplesItineraries: async (req, res) => {
        let error = []
        let itineraries = []
        for (let itinerary of req.body.data) {
        try {
                let verifyItinerary = await Itineraries.find({ name: { $regex: itinerary.name, $options: "i" } })
                if (verifyCity.length == 0) {
                    let dataItinerary = {
                        nameItinerary: itinerary.nameItinerary,
                        nameUser: itinerary.nameUser,
                        userImage: itinerary.userImage,
                        price: itinerary.price,
                        duration: itinerary.duration,
                        hashtag: itinerary.hashtag,
                        imageItinerary:itinerary.imageItinerary,
                        description:itinerary.description,
                    }
                    await new Itineraries({
                        ...dataItinerary
                    }).save()
                    itineraries.push(dataItinerary)
                } else {
                    error.push({
                        name: itinerary.name,
                        result: "Ya existe en la base de datos con el Id: " + verifyItinerary[0]._id
                    })
                }

            }
         catch (err) { error.push({name: itinerary.name, err})}
        }
        res.json({
            response: error.length > 0 && itineraries.length === 0 ? "Error" : itineraries,
            success: error.length > 0 ? (itineraries.length > 0 ? "Warning" : false) : true,
            error: error
        })

    },


}

module.exports = itineraryControllers
