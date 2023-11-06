# Avarice - Discord Bot

Welcome to the Avarice Discord Bot repository! This bot is designed to integrate Discord with a Project Zomboid server and provide enhanced functionality through GPT AI interactions.

![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

## Prerequisites

Before you begin, ensure you have the following requirements met:

- Node.js (Download and installation instructions: [Node.js](https://nodejs.org/))
- A Discord Bot Token (Guide on creating a bot and getting a token: [Discord Developer Portal](https://discord.com/developers/docs/intro))
- Access to your Project Zomboid server's RCON
- An OpenAI API key (Obtain from [OpenAI](https://openai.com/api/))

## Installation

To set up the bot, follow these steps:

1. Clone the repository to your local machine or server.
2. Navigate to the project directory and create a `.env` file.

```sh
cd path/to/Avarice
touch .env
```

3. Open the `.env` file in a text editor and insert your credentials (replace the placeholders with your actual data):

```env
TOKEN=<Your-Discord-Bot-Token>
RCON_PASSWORD=<Your-RCON-Password>
OPENAI_KEY=<Your-OpenAI-Key>
```

4. Install the dependencies.

```sh
npm install
```

## Running the Bot

To start the bot, simply run:

```sh
npm start
```

The bot should now be running and ready to connect to both your Discord and Project Zomboid server.

## Usage

- `!help` - To get all commands registered.

## Contributing

If you would like to contribute to the bot's development, please consider the following guidelines:

- Fork the repository and create a new branch for your feature or fix.
- Write clear and descriptive commit messages.
- Ensure that your code adheres to the existing style to maintain consistency.
- Open a pull request with a comprehensive description of your changes.

## Security

Your `.env` file contains sensitive information that should never be shared or committed to version control. Ensure that your `.env` file is listed in your `.gitignore`.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
