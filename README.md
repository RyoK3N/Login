# Synexian Login

This project demonstrates a basic Google OAuth login flow built with **FastAPI** and a small TypeScript frontend.

## Local development

1. Install Python dependencies:

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r backend/requirements.txt
```

2. Install Node dependencies and build the frontend assets:

```bash
cd frontend
npm install
npm run build
cd ..
```

3. Provide your Google OAuth credentials and session secret:

```bash
export GOOGLE_CLIENT_ID="<web-client-id>"
export GOOGLE_CLIENT_SECRET="<web-client-secret>"
export GOOGLE_PROJECT_ID="<project-id>"
export GOOGLE_PROJECT_NUMBER="<project-number>"
export SESSION_SECRET_KEY="a-very-secret-key"
```

4. Start the server:

```bash
uvicorn backend.server:app --host 0.0.0.0 --port 8000
```

Visit `http://localhost:8000` to see the login page.

## Running with Docker

A Dockerfile is provided so the entire application can be built and run in a single container. The image builds the frontend and installs the Python server in one step.

```bash
docker build -t synexian-login .
```

Run the container with your OAuth configuration:

```bash
docker run -p 8000:8000 \
  -e GOOGLE_CLIENT_ID=<web-client-id> \
  -e GOOGLE_CLIENT_SECRET=<web-client-secret> \
  -e GOOGLE_PROJECT_ID=<project-id> \
  -e GOOGLE_PROJECT_NUMBER=<project-number> \
  -e SESSION_SECRET_KEY=a-very-secret-key \
  synexian-login
```

The application will then be available on `http://localhost:8000`.
