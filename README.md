# firebase-stock-control-query-issue
This repo contains the sample data, security rules and queries being used to recreate the server side security inconsistency issue


The error occurs when trying to read the locstions list from the record "user2", while authenticated as the user with user ID "user1" and should return LocationA and LocationB.

<img width="1272" alt="Screenshot 2023-02-20 at 07 46 20" src="https://user-images.githubusercontent.com/7302717/220044326-76f1c13c-78dc-4ce4-8dc4-e4a6efb98843.png">

<img width="1268" alt="Screenshot 2023-02-20 at 07 46 28" src="https://user-images.githubusercontent.com/7302717/220044343-7148ff5c-7c24-4e93-8283-eb59ce2e2133.png">
