FROM node:20.14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Ejecuta ESLint
CMD ["npm", "run", "lint"]