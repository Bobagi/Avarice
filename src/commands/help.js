const { EmbedBuilder, AttachmentBuilder } = require("discord.js");
const path = require("path");

module.exports = {
  name: "help",
  description: "List all of my commands or info about a specific command.",
  execute(message) {
    const imagePath = path.join(__dirname, "../../public/icon-llhama-alt.jpg");

    const attachment = new AttachmentBuilder(imagePath, {
      name: "icon-llhama-alt.jpg",
    });

    const imageUrl = `attachment://${path.basename(imagePath)}`;

    const helpEmbed = new EmbedBuilder()
      .setColor("#FFFF00") // You can choose whatever color you like
      .setThumbnail(imageUrl)
      .setTitle("List of Commands")
      .addFields(
        { name: "!gpt", value: "Get a response from GPT-4." },
        { name: "!gpt3", value: "Get a response from GPT-3.5-turbo." },
        { name: "!ping", value: 'Makes the bot return "pong!"' },
        {
          name: "!players",
          value:
            "Shows the players connected in the Olimpo Project Zomboid server.",
        },
        {
          name: "!serverstatus",
          value: "Shows the status of the Olimpo Project Zomboid server.",
        }
      )
      .setTimestamp()
      .setFooter({ text: "Type !command to use any of the commands." });

    message.channel.send({ embeds: [helpEmbed], files: [attachment] });
  },
};
