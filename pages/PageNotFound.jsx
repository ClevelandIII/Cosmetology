import React from "react";
import { Card, Grid, Icon, Image, Statistic, Message } from "semantic-ui-react";

//Very basic but better than normal 404 page.
//Once all the routes are set up we shouldnt need this, but if anyone wants to add to it just ask

const Playground = () => {
//Tester code for sort with js. Please do not delete

  //ascending.js
var mongo = require('mongodb');
var new_db = "mongodb://localhost:27017/demo_db"
//connecting to db
mongo.connect(new_db ,(error , db) => {
	if (error){
		throw error;
	}
	//condition "1" for sorting in Ascending order on the basis of "age"	
	var method = { age : 1 };
	
	//accessing the collection
	db.collection("new").find().sort(method).toArray( (err , collection) => {
		if(err) throw err;
		console.log(`collection: ${collection}`);
		db.close();
	});
});
}

// const PageNotFound = () => (
//   <>
//     <div
//       style={{
//         margin: "0",
//         position: "absolute",
//         top: "50%",
//         left: "50%",
//         transform: "translate(-50%, -50%)",
//         textAlign: "center",
//       }}
//     >
//       <h1>404 Page Not Found</h1>
//       <p>
//         This page doesn't exist. Try re-entering the page, or using the navbar,
//         which has all the pages.
//       </p>
//     </div>

//     {/* <Grid
//       verticalAlign="middle"
//       style={{ backgroundColor: "red", height: "100%", margin: "0" }}
//     >
//       <Grid.Column textAlign="center">
//         <Statistic inverted>
//           <Statistic.Value>404</Statistic.Value>
//           <Statistic.Label>Error</Statistic.Label>
//         </Statistic>

//         <Message color="red" inverted>
//           <Message.Header>Description</Message.Header>
//           <p>Not found</p>
//         </Message>
//       </Grid.Column>
//     </Grid> */}
//   </>
// );

export default PageNotFound;
