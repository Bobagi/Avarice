const Gamedig = require("gamedig");

module.exports = {
  name: "players",
  description:
    "List all players currently connected to the Project Zomboid server",
  async execute(message, args) {
    try {
      const queryOptions = {
        type: "protocol-valve",
        host: "45.179.91.168", // Replace with your server's IP
        port: "16261", // Replace with your server's query port
      };

      const data = await Gamedig.query(queryOptions);
      if (data.players.length > 0) {
        let response = "Current Players:\n";
        data.players.forEach((player, index) => {
          // Accessing score and time from the 'raw' object of each player
          const playerScore = player.raw.score;
          const playerTime = player.raw.time;
          // Converting time played from seconds to a more readable format, if needed
          const timePlayed = new Date(playerTime * 1000)
            .toISOString()
            .substr(11, 8);

          response += `${index + 1}. ${
            player.name
          }, Score: ${playerScore}, Current Session: ${timePlayed}\n`;
        });
        message.channel.send(response);
      } else {
        message.channel.send(
          "There are no players currently connected to the server."
        );
      }
    } catch (error) {
      console.error(`Failed to query server: ${error}`);
      message.channel.send(
        "Sorry, I could not retrieve the list of players at this time."
      );
    }
  },
};
