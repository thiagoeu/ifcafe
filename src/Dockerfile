# Etapa 1: imagem base com Node
FROM node:18-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar apenas os arquivos de dependência primeiro
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Expor a porta 
EXPOSE 3000

# Comando padrão ao iniciar o container
CMD ["npm", "start"]