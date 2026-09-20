# Run QuizMaster on Another Computer

QuizMaster can run on another Windows computer. Each computer needs its own local MySQL database and runs its own frontend and backend.

## Install first

- Java 21 or newer
- Node.js 20 or newer
- Maven 3.9 or newer
- MySQL Server 8 or newer

Copy the complete `quiz` project folder to the new computer. Do not copy `frontend/node_modules`, `frontend/dist`, `backend/build`, or `backend/target`; they are regenerated below.

## Create the database

Open PowerShell and log in to MySQL:

```powershell
& 'C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe' -u root -p
```

At the `mysql>` prompt, run:

```sql
CREATE DATABASE quizmaster;
CREATE USER 'quizmaster_user'@'localhost' IDENTIFIED BY 'ChooseYourOwnPassword';
GRANT ALL PRIVILEGES ON quizmaster.* TO 'quizmaster_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

If the database or user already exists, do not delete it. Use `ALTER USER 'quizmaster_user'@'localhost' IDENTIFIED BY 'ChooseYourOwnPassword';` to set the user password instead.

## Start the backend

In PowerShell, open the project's `backend` folder and set your own database password:

```powershell
Set-Location 'PATH\TO\quiz\backend'

Set-Item -Path 'Env:JAVA_HOME' -Value 'C:\Program Files\Java\jdk-21'
Set-Item -Path 'Env:DB_URL' -Value 'jdbc:mysql://localhost:3306/quizmaster?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC'
Set-Item -Path 'Env:DB_USERNAME' -Value 'quizmaster_user'
Set-Item -Path 'Env:DB_PASSWORD' -Value 'ChooseYourOwnPassword'

mvn spring-boot:run
```

Keep this terminal open. On its first successful run, the backend creates tables and seeds all eight topics and 80 questions. Check it at `http://localhost:8080/api/health`.

If port 8080 is occupied, add this before the Maven command:

```powershell
Set-Item -Path 'Env:SERVER_PORT' -Value '8081'
```

## Start the frontend

Open a second PowerShell window:

```powershell
Set-Location 'PATH\TO\quiz\frontend'
npm install
npm run dev
```

If the backend uses port 8081 rather than 8080, set this **before** `npm run dev`:

```powershell
Set-Item -Path 'Env:VITE_API_URL' -Value 'http://localhost:8081/api'
```

Open the exact Local address printed by Vite, normally `http://localhost:5173`.

## Notes

- The PowerShell `Env:` values only apply to that terminal window. Set them again after closing it.
- The browser, frontend, backend, and MySQL can run on the same computer with the defaults above.
- For phone or LAN access, additional firewall, Vite host, and database/network configuration is needed; do not expose MySQL directly to the network.
