# The Go Game Todo Test Mobile App

## Before run app

It's important to create a .env file to set the API URL

```
cp .env.example .env
```

Put into this file the, API URL. If you want to run the API in a local machine, you must replace localhost for your current LAN Ipv4 address, if you don't do this, it's possible to get an error when the app tries to fetch data from API.

Here's an example

```
API_URL=http://<YOUR_IP_ADDRESS>:<API_PORT>/api
```

If you want to know your current LAN IP Address, execute this command in your terminal:

```
ipconfig
```

## Install dependencies

```
npm install
```

## Run the app

```
npm start
```