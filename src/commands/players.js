const Gamedig = require("gamedig");

module.exports = {
  name: "players",
  description: "Players command",
  async execute(message, args) {
    try {
      const queryOptions = {
        type: "protocol-valve",
        host: "45.179.91.168", // Replace with your server's IP
        port: "16261", // Replace with your server's query port
      };

      const data = await Gamedig.query(queryOptions);
      message.channel.send(
        `There are currently ${data.players.length} players connected to the server.`
      );
    } catch (error) {
      console.error(`Failed to query server: ${error}`);
      message.channel.send(
        "Sorry, I could not get the player count at this time."
      );
    }
  },
};
