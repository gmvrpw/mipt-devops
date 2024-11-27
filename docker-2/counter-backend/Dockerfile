FROM sunpeek/poetry:py3.12-slim

WORKDIR /

RUN apt update -y && apt install -y git
RUN git clone https://git.devops-teta.ru/materials/counter-backend.git
WORKDIR /counter-backend

RUN poetry build

FROM python:3.12

WORKDIR /app

COPY --from=0 /counter-backend/dist/counter_backend-*.whl /app

RUN pip install /app/*

ENV PORT="8080"

EXPOSE ${PORT}
CMD python -m counter_backend
