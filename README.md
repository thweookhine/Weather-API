# Weather Api

Simple Weather API built with NodeJS that fetches weather data from the Visual Crossing Weather API. The application implements caching and Rate limiting using Redis.

## Prerequisites

- Node.js installed on your system.
- Redis

## Installation Setup

### 1. Clone the Repository

```bash
git clone https://github.com/thweookhine/Weather-API.git

# Navigate to the project Directory
cd Weather-API
```

### 2. Install Packages

```
npm install
```

### 3. Set up Environment variables

```
touch .env
Note: refer env_sample for environment variables
```

### 4. Run Application

```
npm start
```

## Usage

### With curl

```
curl "http://127.0.0.1:3000?city=Yangon"
```

### With Postman

```
call "http://127.0.0.1:3000?city=Yangon" with get method
```

For More information about this project, visit the [Weather API Roadmap](https://roadmap.sh/projects/weather-api-wrapper-service)
