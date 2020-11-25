let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body;

        messages.push({id, text, time});
        id++;
        res.status(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        const {text} = req.body;
        const {msg_id} = req.params;
        const index = messages.findIndex((element) => element.id === +msg_id);

        if(index === -1) {
            return res.status(404).send("User does not exist");
        }

        const message = messages[index];

        messages[index] = {
            id: message.id,
            text: text || message.text,
            time: message.time,
        }

        res.status(200).send(messages);
    },
    delete: (req, res) => {
        const {msg_id} = req.params.id;
        const index = messages.findIndex((element) => element.id === +msg_id);

        if(index === -1) {
            return res.stats(404).send("User does not exist");
        }

        messages.splice(index, 1);
        res.status(200).send(messages);
    },
}