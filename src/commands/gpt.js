// Assuming you're using CommonJS modules elsewhere in your bot
const { EmbedBuilder } = require("discord.js");

// This function dynamically imports node-fetch and uses it to make a fetch request
async function fetchWithNodeFetch(url, options) {
  const { default: fetch } = await import("node-fetch");
  return fetch(url, options);
}

module.exports = {
  name: "gpt",
  description: "Get a response from GPT-4",
  async execute(message, args) {
    // Join the arguments to create the prompt for GPT-4
    const prompt = args.join(" ");

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OpenAIKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    };

    const apiEndpoint = "https://api.openai.com/v1/chat/completions";

    try {
      // Use the dynamically imported fetch function
      const response = await fetchWithNodeFetch(apiEndpoint, requestOptions);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "Unknown error occurred.");
      }

      // Send the GPT-4 response back as a message in the Discord channel
      const reply = data.choices[0].message.content.trim();
      message.channel.send(reply);
    } catch (error) {
      console.error("Error fetching GPT-4 response:", error);
      message.channel.send("There was an error getting a response from GPT-4.");
    }
  },
};
