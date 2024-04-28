FROM node:20.10

# Configuración de timezone
ENV TZ=America/Santiago
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Activación de pnpm
RUN corepack enable pnpm

# Indicación de directorio base
WORKDIR /app