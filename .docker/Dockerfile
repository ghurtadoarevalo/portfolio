from node:22-alpine

WORKDIR /app

# Configuración de timezone
ENV TZ=America/Santiago
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Activación de pnpm
RUN corepack enable pnpm

COPY . .

RUN pnpm install
RUN pnpm build

EXPOSE 5173

CMD ["node", "./dist/index.html"]
