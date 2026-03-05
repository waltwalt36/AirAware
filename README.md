# AirAware

A real-time air quality, weather, and wildfire monitoring web app built for NASA Space Apps 2025.

AirAware lets you explore environmental conditions at any location on an interactive map — showing AQI, PM2.5, temperature, humidity, and active wildfire hotspots pulled from NASA FIRMS satellite data.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, Tailwind CSS, Leaflet / React-Leaflet, Chart.js |
| Backend | Python 3, Flask, Flask-CORS, Gunicorn |
| Data Sources | OpenWeatherMap API, OpenAQ API, NASA FIRMS (VIIRS 375m) |
| Deployment | Railway (separate frontend + backend services) |

---

## Prerequisites

- Node.js v16+
- Python 3.8+
- API keys for OpenWeatherMap and NASA FIRMS (both have free tiers)

---

## Setup

### 1. Clone the repo

```bash
git clone https://github.com/RohitVummadi/nasa-spaceapps-2025.git
cd nasa-spaceapps-2025
```

### 2. Backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

Create `backend/.env`:

```env
OPENWEATHER_API_KEY=your_openweathermap_key
FIRMS_API_KEY=your_nasa_firms_key
```

Start the server:

```bash
python app.py
```

Backend runs at `http://localhost:5001`

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`

---

## API Keys

| Key | Where to get it |
|---|---|
| `OPENWEATHER_API_KEY` | https://openweathermap.org/api (free tier) |
| `FIRMS_API_KEY` | https://firms.modaps.eosdis.nasa.gov/api/area/ (free) |

---

## API Endpoints

| Endpoint | Description |
|---|---|
| `GET /health` | Health check |
| `GET /api/airquality?lat=&lon=` | AQI, PM2.5, temperature, humidity for a coordinate |
| `GET /api/pollutants?lat=&lon=` | Full pollutant breakdown (PM2.5, PM10, NO2, O3, SO2, CO) |
| `GET /api/fires?bbox=minLon,minLat,maxLon,maxLat&days=7` | Active wildfire hotspots as GeoJSON (NASA FIRMS) |
| `GET /api/fires/wms` | WMS tile layer info for FIRMS fire overlay |

---

## Features

- Interactive map centered on your location
- Color-coded AQI markers (Good → Hazardous)
- Real-time weather: temperature and humidity
- Full pollutant panel: PM2.5, PM10, NO2, O3, SO2, CO
- NASA FIRMS wildfire hotspot overlay (VIIRS 375m satellite data)
- FIRMS data cached locally for 3 hours to reduce API calls
- Auto-refresh every 5 minutes
- Mobile-friendly responsive layout

---

## Deployment

The app is split into two Railway services. Config files are at `backend/railway.json` and `frontend/railway.json`. The backend port is set via the `PORT` environment variable (injected by Railway automatically).

To build the frontend for production:

```bash
cd frontend
npm run build
```
