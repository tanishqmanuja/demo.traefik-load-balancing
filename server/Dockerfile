FROM oven/bun:latest as BUILDER

WORKDIR /app

COPY package.json ./
COPY bun.lockb ./

RUN bun install

COPY src ./src/

RUN bun run build

FROM oven/bun:alpine as RUNNER

WORKDIR /app

COPY --from=BUILDER /app/dist ./

EXPOSE 8080

CMD ["bun", "index.js"]
