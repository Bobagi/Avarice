const Gamedig = require("gamedig");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "serverstatus",
  description: "Get the status of the Project Zomboid server",
  async execute(message, args) {
    try {
      const queryOptions = {
        type: "protocol-valve",
        host: "45.179.91.168", // Replace with your server's IP
        port: "16261", // Replace with your server's query port
      };

      const data = await Gamedig.query(queryOptions);

      // https://discordjs.guide/popular-topics/embeds.html#embed-preview
      const serverEmbed = new EmbedBuilder()
        .setColor(0x800080) // Choose an appropriate color
        .setAuthor({
          name: "Project Zomboid Server Status",
          iconURL:
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/d6wyyuu-48d534e8-0a80-48b4-b7dc-0471c3581b02.png/v1/fill/w_256,h_256/project_zomboid___icon_by_blagoicons_d6wyyuu-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjU2IiwicGF0aCI6IlwvZlwvNDZiNjNkM2MtYWU2Ny00NjRjLTlhMzctNjcwODI5YjJhMTU3XC9kNnd5eXV1LTQ4ZDUzNGU4LTBhODAtNDhiNC1iN2RjLTA0NzFjMzU4MWIwMi5wbmciLCJ3aWR0aCI6Ijw9MjU2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.mXJPD2gdV4qMthHTAaMGKiTF5oPnKniw6WbPrcnRT5U",
          url: "https://pzwiki.net/wiki/Main_Page",
        })
        .setTitle(data.name)
        .addFields(
          { name: "Server IP", value: queryOptions.host, inline: true },
          { name: "Map", value: data.map || "Not available", inline: true },
          { name: "\u200B", value: "\u200B", inline: true }, // This will ensure that the next fields will start on a new line.
          {
            name: "Players",
            value: `${data.players.length}/${data.maxplayers}`,
            inline: true,
          },
          {
            name: "Ping",
            value: `${data.ping} ms` || "Not available",
            inline: true,
          }
        )
        .setTimestamp()
        .setFooter({ text: "Server status updated" });

      message.channel.send({ embeds: [serverEmbed] });
    } catch (error) {
      console.error(`Failed to query server: ${error}`);
      message.channel.send(
        "Sorry, the server status is currently unavailable."
      );
    }
  },
};
