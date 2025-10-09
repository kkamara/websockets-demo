# websocket-demo

A WebSocket server with packages WebSocket and HTTP.

* [Installation](#installation)

* [Usage](#usage)

* [Usage](#testing)

* [Contributing](#contributing)

* [License](#license)

## Installation

* [NodeJS](https://nodejs.org/en/).

```bash
# Install our app dependencies.
npm install --global yarn
yarn install
```

## Usage

```bash
yarn start
```

#### Testing

Access the console window of your chosen browser. With this app's server running, enter the following.

```bash
let ws = new WebSocket("ws://localhost:8080");
ws.onmessage = message => console.log(`We received a message from the server ${message.data}`);
ws.send("Hello Server");
ws.close();
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[BSD](https://opensource.org/licenses/BSD-3-Clause)
