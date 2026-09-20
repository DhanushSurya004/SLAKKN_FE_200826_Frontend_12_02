# QuizMaster

QuizMaster is a full-stack quiz game with a React frontend, a Spring Boot REST API, and MySQL persistence. A player chooses one of eight topics, answers ten randomized questions within 60 seconds, and receives a server-calculated score. Scores are saved to the MySQL-backed global and topic leaderboards.

## Technology

- Frontend: React, Vite, React Router, Axios, JavaScript, CSS
- Backend: Java 21, Spring Boot, Spring Web, Spring Data JPA, Bean Validation
- Database: MySQL 8+

## Requirements

- Node.js 20+
- Java 21+
- Maven 3.9+ (or an IDE with Maven support)
- MySQL Server 8+

## MySQL setup

Create a local MySQL account/database, or use a MySQL root account that has permission to create `quizmaster`.

```sql
CREATE DATABASE quizmaster;
CREATE USER 'quizmaster_user'@'localhost' IDENTIFIED BY 'choose_a_password';
GRANT ALL PRIVILEGES ON quizmaster.* TO 'quizmaster_user'@'localhost';
FLUSH PRIVILEGES;
```

Configure the backend with environment variables (PowerShell example):

```powershell
$env:DB_URL='jdbc:mysql://localhost:3306/quizmaster?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC'
$env:DB_USERNAME='quizmaster_user'
$env:DB_PASSWORD='choose_a_password'
```

The default development setting is `spring.jpa.hibernate.ddl-auto=update`. On first startup, eight topics and eighty factual questions are seeded automatically. Existing data is preserved.

## Run the backend

```powershell
cd backend
mvn spring-boot:run
```

The API runs at `http://localhost:8080`. Confirm it with `GET http://localhost:8080/api/health`.

## Run the frontend

Open a second terminal:

```powershell
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173` in a browser. The Vite server communicates with Spring Boot at `http://localhost:8080/api` by default. Set `VITE_API_URL` if the API runs elsewhere.

The npm scripts invoke Vite through Node directly, which avoids a Windows command-shell issue with `&` in the current folder name.

## API endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/health` | Backend health check |
| GET | `/api/topics` | List quiz topics |
| GET | `/api/quiz/questions/{topicId}` | Get ten randomized safe question DTOs |
| POST | `/api/quiz/submit` | Validate answers, calculate and save score |
| GET | `/api/leaderboard` | Global leaderboard |
| GET | `/api/leaderboard/topic/{topicId}` | Topic leaderboard |

`GET /api/quiz/questions/{topicId}` never returns a `correctAnswer`. The backend retrieves correct values from MySQL during submission and never trusts a client-supplied score.

Example submission:

```json
{
  "playerName": "John",
  "topicId": 1,
  "timeTaken": 45,
  "answers": [
    { "questionId": 1, "selectedOption": "A" }
  ]
}
```

The frontend sends all ten displayed question IDs. An unanswered timed-out item is marked internally as unanswered and scores zero.

## Structure

```text
backend/
  src/main/java/com/quizmaster/
    config/ controller/ dto/ entity/ exception/ repository/ service/
  src/main/resources/application.properties
frontend/
  src/api/ src/context/ src/pages/ src/styles.css
README.md
```

## Verification and troubleshooting

- Backend package build: `mvn clean package -DskipTests`
- Frontend production build: `npm run build`
- If the backend cannot connect, verify MySQL is running and the `DB_*` values match your local credentials.
- If port 8080 is busy, set `SERVER_PORT` before running the backend.
- If port 5173 is busy, Vite chooses another port; add that port to `WebConfig.java` CORS origins if necessary.
