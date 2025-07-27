# ---------- build frontend ----------
FROM node:18 AS frontend-build
WORKDIR /app
COPY frontend ./frontend
RUN cd frontend && npm install && npm run build

# ---------- final image ----------
FROM python:3.11-slim
WORKDIR /app
COPY backend ./backend
COPY --from=frontend-build /app/frontend/dist ./frontend/dist
COPY frontend/index.html frontend/dashboard.html ./frontend/
RUN pip install --no-cache-dir -r backend/requirements.txt
EXPOSE 8000
CMD ["uvicorn", "backend.server:app", "--host", "0.0.0.0", "--port", "8000"]
