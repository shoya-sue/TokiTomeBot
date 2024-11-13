# Telegram Mini App: Stopwatch

This project is a Telegram mini app that acts as a simple stopwatch, allowing users to start and stop a timer. The app is built using Node.js, Express.js, and Telegram Bot API, and it integrates with Telegram's Web App feature.

## Features

- Start/Stop Timer: Users can start and stop a timer using the bot.
- Web App Integration: The app runs as a Telegram Web App.
- Responsive Design: Designed for seamless use within the Telegram app on mobile devices.

## Prerequisites

Before running the app, ensure you have the following:

- Node.js: Install Node.js version 16 or higher.
- Telegram Bot Token: Create a bot via BotFather and obtain the token.
- Environment Variables: Use .env files to manage configurations.

## Installation

### Clone the Repository:

```
$ git clone https://github.com/yourusername/telegram-miniapp-stopwatch.git
$ cd telegram-miniapp-stopwatch
```

### Install Dependencies:

```
$ npm install
```

### Create Environment Files:

```
$ Create .env and .env.dev files in the project root.
```

## Example .env.dev:

```
TELEGRAM_TOKEN=your-telegram-bot-token
WEB_APP_URL=http://localhost:3000
PORT=3000
```

### Start the Development Server:

```
$ npm run dev
```

### For production:

```
$ npm start
```

### File Structure

```
telegram-miniapp-stopwatch/
├── index.js          # Main server file
├── public/           # Frontend files for the Web App
│   └── index.html    # Stopwatch UI
├── .env              # Production environment variables
├── .env.dev          # Development environment variables
├── package.json      # Project dependencies and scripts
└── README.md         # Documentation
```

## Telegram Bot Setup

### Create a Bot:

- Open BotFather.
- Run /newbot and follow the instructions to create a new bot.

### Set Web App Domain:

- Use /setdomain in BotFather to specify your web app's domain.
- Example: https://yourdomain.com

### Start the Bot:

- Send /start to your bot to initiate the app.

## Usage

1. Open the bot in Telegram.
1. Click the "▶️ Mini App" button to launch the stopwatch.
1. Use the Start and Stop buttons to control the timer.

## Development Notes

### Switching Environments: Use NODE_ENV to toggle between .env and .env.dev:
```
NODE_ENV=development npm run dev
NODE_ENV=production npm start
```

### Deploying to Production:

Ensure the Web App is hosted on a server with HTTPS, as Telegram requires secure connections.

## Dependencies

- Node.js
- Express.js
- node-telegram-bot-api
- dotenv

## License

This project is licensed under the MIT License.

## Contribution

Feel free to fork the repository and submit pull requests for improvements or bug fixes.

## Contact

For inquiries or support, reach out to yourname.