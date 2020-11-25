const express = require("express");
const messagesCtrl = require("./controllers/messages_controller");
const app = express();
const PORT_NUM = 3001;

app.use(express.json());
app.use(express.static(__dirname + "/../public/build"));

app.get("/api/messages", messagesCtrl.read);
app.post("/api/messages", messagesCtrl.create);
app.put("/api/messages/:msg_id", messagesCtrl.update);
app.delete("/api/messages/:msg_id", messagesCtrl.delete);

app.listen(PORT_NUM, () => {
    console.log(`Server listening on port ${PORT_NUM}`);
})