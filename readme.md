# AlgoCode Submission Service 

> **A scalable, queue-based code submission backend for coding platforms.**

---

## 🚀 Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/your-org/algocode-submission-service.git

# 2. Install dependencies
cd AlgoCode-Submission-Service
npm install

# 3. Configure environment variables
cp .env.example .env
# Edit .env with your MongoDB, Redis, and service URLs

# 4. Start the service
npm start
```

---

## 🗂️ Project Structure

<details>
<summary>Click to expand</summary>

```plaintext
src/
├── apis/
│   ├── problemAdminApi.js
│   └── updateSubmissonStatusApi.js
├── config/
│   ├── axiosInstance.js
│   ├── dbConfig.js
│   ├── redisConfig.js
│   └── serverConfig.js
├── controllers/
│   └── submissonController.js
├── errors/
│   ├── BaseError.js
│   ├── InternalServerError.js
│   └── SubmissonCreationError.js
├── jobs/
│   └── EvaluationJob.js
├── models/
│   └── submissonSchema.js
├── producers/
│   └── submissonQueueProducer.js
├── queues/
│   └── submissonQueue.js
├── repository/
│   ├── repositoryPlugin.js
│   └── submissonRepo.js
├── routes/
│   └── api/
│       ├── apiRoutes.js
│       └── v1/
│           ├── submissonRoutes.js
│           └── v1Routes.js
├── services/
│   ├── servicePlugin.js
│   └── submissonService.js
├── utils/
│   └── codeMerge.js
├── workers/
│   └── EvaluationWorker.js
├── app.js
└── index.js
```
</details>

---

## 📚 Overview

AlgoCode Submission Service is a microservice for handling code submissions in coding platforms. It supports:

- Submission creation and queuing
- Integration with problem and socket services
- Asynchronous evaluation using BullMQ and Redis
- MongoDB for persistent storage
- Fastify for high-performance HTTP APIs

---

## ⚙️ Environment Variables

| Variable                     | Description                         |
|------------------------------|-------------------------------------|
| `PORT`                       | Server port                         |
| `REDIS_HOST`                 | Redis host                          |
| `REDIS_PORT`                 | Redis port                          |
| `ATLAS_DB_URL`               | MongoDB Atlas connection string     |
| `NODE_ENV`                   | Environment (development/production)|
| `PROBLEM_ADMIN_SERVICE_URL`  | Problem admin service base URL      |
| `ALGOCODE_SOCKET_SERVICE_URL`| Socket service base URL             |

---

## 🛣️ API Endpoints

| Method | Endpoint                       | Description                |
|--------|-------------------------------|----------------------------|
| POST   | `/api/v1/submisson/`          | Create a new submission    |

---

## 📬 API Details

<details>
<summary><b>POST /api/v1/submisson/</b> - Create a new submission</summary>

### Request

**Headers:**
- `Content-Type: application/json`

**Body:**
```json
{
  "userId": "string",
  "problemId": "string",
  "code": "string",
  "language": "string"
}
```

### Response

**Success (201):**
```json
{
  "error": {},
  "data": {
    "queueResponse": {
      "_id": "6645e5c2b7e1e2c8e8b7d1a2",
      "userId": "user123",
      "problemId": "problem456",
      "code": "// merged code here",
      "language": "java",
      "status": "Pending",
      "__v": 0
    }
  },
  "success": true,
  "message": "Create Submisson Successfully"
}
```

**Failure (400/500):**
```json
{
  "error": {
    "name": "SubmissonCreationError",
    "statusCode": 400,
    "message": "Not able to create the submisson"
  },
  "data": {},
  "success": false,
  "message": "Submisson Creation Error"
}
```

</details>

---

## 🧩 How It Works

1. **Submission**: User submits code via the API.
2. **Validation & Merge**: Service fetches problem details, merges code stubs, and stores the submission in MongoDB.
3. **Queueing**: Submission is added to a BullMQ queue for evaluation.
4. **Evaluation**: Worker processes the queue, updates status, and notifies via socket service.

---

## 🛠️ Tech Stack

- **Node.js** & **Fastify**: High-performance HTTP server
- **MongoDB**: Persistent storage for submissions
- **Redis** & **BullMQ**: Job queue for async evaluation
- **Axios**: HTTP client for service-to-service calls

---

## 🧑‍💻 Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

