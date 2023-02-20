//Fetch locations list

var currentSelectedSiteID = "user2";

function fetchLocationsList() {
    //Get current user ID
    var user = firebase.auth().currentUser;
    if (user) {

        //Fetch products
        db.collection("stock-control").doc(currentSelectedSiteID).collection("locations").orderBy("name", "desc").limit(500)
        .get()
        .then(function(querySnapshot) {
          
            // console.log("Contacts count: " + querySnapshot.size);
          
            querySnapshot.forEach(function(doc) {
                //Extract Data
                const name = doc.data().name || "";
                console.log("Location name: " + name);
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    } else {
        //No user signed in
    }
}
