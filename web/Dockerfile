# Usa a imagem Node.js como base
FROM node:latest

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia os arquivos do diretório local para o diretório de trabalho no contêiner
COPY . .

# Remove a pasta node_modules se existir
RUN rm -rf node_modules

# Instala as dependências do projeto
RUN npm install

# Executa o build da aplicação Next.js
RUN npm run build

# Cria o diretório final da aplicação
RUN mkdir -p /app/.next

# Move os arquivos de build para o diretório final da aplicação
RUN mv .next/* /app/.next/

# Limpa os arquivos não utilizados
RUN rm -rf /app/.next/__tests__

# Exclui os arquivos desnecessários e reduz o tamanho da imagem
RUN rm -rf /app/.next/server /app/.next/cache

# Define o diretório de trabalho como raiz
WORKDIR /

# Remove qualquer resquício dos arquivos do projeto no diretório temporário
RUN rm -rf /app/*

# Define a variável de ambiente para o Node.js no modo de produção
ENV NODE_ENV production

# Comando para iniciar a aplicação quando o contêiner for iniciado
CMD ["npm", "start"]