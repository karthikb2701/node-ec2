import { MongoClient } from "mongodb";
//const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
//const connectionString = `mongodb+srv://integrationninjas:${password}@devcluster.hu5pjmi.mongodb.net/?retryWrites=true&w=majority`; // cluster url
const connectionString = `mongodb+srv://karthikb2701:Karthikb2701@cluster0.gcwvkms.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("connection successful");
} catch (e) {
  console.error(e);
}
let db = conn.db("integration_ninjas");
export default db;
