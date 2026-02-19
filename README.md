# Stellar-Micro-Donation-API

A Node.js REST API for processing micro-donations using the Stellar blockchain network with comprehensive stats aggregation.

## Features

- ✓ Donation management (create, retrieve)
- ✓ Daily and weekly stats aggregation
- ✓ Summary statistics (total volume, averages, min/max)
- ✓ Donor and recipient analytics
- ✓ JSON-based database
- ✓ Comprehensive error handling
- ✓ Production-ready code

## Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Initialize database
```bash
npm run init-db
```

### 3. Start the server
```bash
npm start
```

The API will be available at `http://localhost:3000`

## API Endpoints

### Donations
- `POST /donations` - Create a new donation
- `GET /donations` - Get all donations
- `GET /donations/:id` - Get a specific donation

### Stats
- `GET /stats/daily?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD` - Daily aggregated volume
- `GET /stats/weekly?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD` - Weekly aggregated volume
- `GET /stats/summary?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD` - Overall summary statistics
- `GET /stats/donors?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD` - Stats grouped by donor
- `GET /stats/recipients?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD` - Stats grouped by recipient

## Example Usage

### Create a donation
```bash
curl -X POST http://localhost:3000/donations \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 100,
    "donor": "John Doe",
    "recipient": "Red Cross"
  }'
```

### Get daily stats
```bash
curl "http://localhost:3000/stats/daily?startDate=2024-02-12&endDate=2024-02-22"
```

### Get weekly stats
```bash
curl "http://localhost:3000/stats/weekly?startDate=2024-02-12&endDate=2024-02-22"
```

## Documentation

- [QUICK_START.md](./QUICK_START.md) - Quick start guide with examples
- [STATS_API.md](./STATS_API.md) - Detailed API documentation
- [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md) - Implementation details

## Testing

Run the test suite:
```bash
node test-stats.js
```

## Environment Variables

Create a `.env` file in the `src` directory:
```
STELLAR_NETWORK=testnet
STELLAR_SECRET=your_secret_key
PORT=3000
DB_PATH=./data/donations.json
```

## Project Structure

```
src/
├── config/
│   └── stellar.js              # Configuration
├── routes/
│   ├── app.js                  # Express app
│   ├── donation.js             # Donation endpoints
│   ├── stats.js                # Stats endpoints
│   ├── models/
│   │   ├── transaction.js      # Transaction model
│   │   └── user.js             # User model
│   └── services/
│       └── StatsService.js     # Stats aggregation logic
└── scripts/
    └── initDB.js               # Database initialization

data/
├── donations.json              # Donation transactions
└── users.json                  # User records
```

## Sample Data

The database includes 14 sample donations across 2 weeks:
- **Week 1**: 7 transactions, 550 total volume
- **Week 2**: 6 transactions, 615 total volume
- **Recipients**: Red Cross (415), UNICEF (380), WHO (370)

## License

MIT
