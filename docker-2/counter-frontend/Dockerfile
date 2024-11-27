FROM node:22

WORKDIR /

RUN git clone https://git.devops-teta.ru/materials/counter-frontend.git
WORKDIR /counter-frontend

ENV NODE_ENV="production"
ENV NEXT_TELEMETRY_DISABLED="1"

RUN npm i
RUN npm run build

FROM node:22

WORKDIR /app
COPY --from=0 /counter-frontend/.next/standalone /app
COPY --from=0 /counter-frontend/.next/static /app/.next/static
COPY --from=0 /counter-frontend/public /counter-frontend/public

ENV PORT="3000"

EXPOSE ${PORT} 
CMD [ "node", "/app/server.js" ]

