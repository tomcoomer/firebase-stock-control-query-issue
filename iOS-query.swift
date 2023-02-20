var currentSelectedSiteID = "user2"

func fetchLocationsList() {
  db.collection("stock-control").document(currentSelectedSiteID).collection("locations").order(by: "name").getDocuments() { (querySnapshot, err) in
      if let err = err {
          print("Error getting documents: \(err)")
      } else {
          for document in querySnapshot!.documents {
              print("\(document.documentID) => \(document.data())")
            
            let name = document.data()["name"] as? String ?? "Untitled Location"
            print("Location name: \(name)")
            
      }
  }
}
