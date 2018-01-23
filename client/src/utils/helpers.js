import axios from "axios";

export default {


    getEvents: function () {
        return axios.get("/api/event/")
        // .then(function (response) {
        //     console.log(response)
        //     return response.data._id
        // })
    },

 // Saves contact information from the footer contact form

    saveContactf: function (contactData) {         
          return axios.post("/api/contactfooter/", contactData)
        //   .then(function(response) {
        //     console.log("axios results", response.data);
        //     return response.data;
        //   });
 
      },


    //  saveEvents: function (Data) {         
    //     return axios.post("/api/event/", Data)


    // },


    saveEvents: function (contactDatav) {        
        // var newEvent ={ name: name, email: email} 
        return axios.post("/api/event/", contactDatav)
        // .then(function (response) {
        //     console.log("axios results", response.data);
        //     return response.data
        // })


    },



    getEvent: function(id) {
        console.log(id)
        return axios.get("/api/event/" + id);

        // .then(function (res) {
        //     console.log("axios results", res.data);
        //     return res.data
            
        // })
      }

};


