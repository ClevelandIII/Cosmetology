const defaultProfilePicURL = require("../util/defaultPic");
const ClientModel = require("../model/ClientModel");
const StylistModel = require("../model/StylistModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const isEmail = require("validator/lib/isEmail");
const axios = require("axios");

// let stylists = [];
const createClient = async (req, res) => {
  const {
    stylistName,
    firstName,
    lastName,
    email,
    age,
    appointmentDate,
    serviceRequest,
    medicalIssues,
    address,
    city,
    state,
    phoneNumber,
    zipCode,
    hairCondition,
    hairClassification,
    scalpClassification,
    hairTexture,
    hairDensity,
    growthPatterns,
    hairLength,
    hairPorosity,
    hairElasticity,
  } = req.body.client;

  if (!isEmail(email)) return res.status(401).send("Invalid Email");
  if (age.length > 3) return res.status(401).send("Realistic Age");

  try {
    let client;
    client = await ClientModel.findOne({ email: email.toLowerCase() });
    if (client) return res.status(401).send("Email Already in Use");

    client = new ClientModel({
      stylistName,
      firstName,
      lastName,
      email: email.toLowerCase(),
      age,
      appointmentDate,
      serviceRequest,
      medicalIssues,
      address,
      city,
      state,
      phoneNumber,
      zipCode,
      hairClassification,
      hairCondition,
      scalpClassification,
      hairTexture,
      hairDensity,
      growthPatterns,
      hairElasticity,
      hairPorosity,
      hairLength,
    });

    client = await client.save();

    const getStylists = async () => {
      try {
        const results = await axios.get(
          `http://localhost:3001/api/v1/stylists`
        );
        stylists = results.data;
        console.log(stylists);

        stylists.map((stylist) => {
          try {
            console.log(client.stylistName);
            // if (client.stylistName === stylist.email) {
            //   console.log(stylist.pastClients);
            //   console.log("break");
            //   console.log(client.stylistName);
            //   console.log("break");
            //   console.log(stylist.firstName);
            //   stylist.pastClients.push(client.stylistName);
            // }
          } catch (error) {
            return res.status(500).send("Server Error");
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    getStylists();
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error");
  }
};

const getAllClients = async (req, res) => {
  try {
    let clients;
    clients = await ClientModel.find();
    return res.status(200).json(clients);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ getAllClients");
  }
};

//WIP. IF anyone wants to help, this essentially is an attemp to take the stylist name from the client and use it to update past clients.
// what you need to do is make this run after create client
//then, if stylistName === stylist.firstname, add the client.firstName to the stylist.pastClients array.

// const addClient = async (req, res) => {
//   const [stylists, setStylists] = useState([]);
//   const [clients, setClients] = useState([]);
//   const getStylists = async () => {
//     try {
//       const results = await axios.get(`http://localhost:3001/api/v1/stylists`);
//       setStylists(results.data);
//       console.log(results);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getStylists();
//   }, []);

//   const getClients = async () => {
//     try {
//       const results = await axios.get(`http://localhost:3001/api/v1/clients`);
//       setClients(results.data);
//       console.log(results);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getClients();
//   }, []);

//   stylists.map(stylist) &&
//     clients.map((client) => {
//       try {
//         if (client.stylistName === stylist.email) {
//           stylist.pastClients += client.firstName;
//         }
//       } catch (error) {
//         return res.status(500).send("Server Error");
//       }
//     });
// };

module.exports = { createClient, getAllClients };
