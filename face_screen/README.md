James Facial Expression App

Made with `Electron` and `rosnodejs`

## Dependencies

* Nodejs (>= v10.0.0 - for ElectronJS)

> Install through `nvm` Recommended

* Yarn

> Nvidia Jetson doesn't support nvrm

```bash
curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh -o install_nvm.sh
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt install nodejs
sudo apt install yarn
```

## Installation

After cloning the repository,

```bash
cd james-face
yarn install
```

or

```bash
npm install 
```

## Start

```bash
yarn start
```
or
```bash
npm start
```

## Usage

1. turn on the terminal and type `roscore`
2. `cd james-face` then start electron App `yarn start`
3. publish to rosnodejs topic `rostopic pub /set_emotion std_msgs/String `<emotion>` then check the console window

## Emotion Lists

* boot_up (basic emotion)
* blink
* dead
* delivered_1
* delivered_2
* eat_box
* elevator
* looking_left
* moving
* normal
* sad
* sad_more
* sleep
* surprised
