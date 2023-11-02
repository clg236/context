# CONTEXT

# requirements
* you need a MongoDB database credentials

1. Create a .env file for the backend secrets and db
```bash
DB_URL=the_database_url
DB_USER=your_username
DB_PASS=your_password
DB=the_db_name
```

2. Create a .env file in ```backend`` with a variable pointing to your backend
```bash
VITE_API_URL=something_like_localhost:3000
```


1. Run the backend
```bash
cd backend
npm install
node server.js
```
2. Run the front end
```bash
cd frontend
npm install
npm run dev
```

