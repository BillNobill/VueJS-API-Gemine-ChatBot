const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000; // Escolha a porta que preferir

// Substitua com sua URI de conexão
const uri =
  "mongodb+srv://billnobill:<Lu1zH3r1qu3>@cluster0.pdxwupv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.get("/databases", async (req, res) => {
  try {
    await client.connect();
    const databasesList = await client.db().admin().listDatabases();
    res.json(databasesList.databases);
  } catch (e) {
    res.status(500).json({ error: e.message });
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
