# Stage 1: Сборка Angular приложения
FROM node:20 as builder

# Установка рабочей директории
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

# Устанавливаем зависимости
RUN npm ci --quiet

# Копируем исходный код
COPY . .

# Собираем проект в режиме production
RUN npm run build -- --configuration=production

# Stage 2: Сервим статику через Nginx
FROM nginx:alpine

# Перезаписываем конфиг Nginx (необязательно, но рекомендуется)
COPY nginx.conf /etc/nginx/nginx.conf

# Копируем собранные файлы из первой стадии
COPY --from=builder /app/dist/UdvCorpSocialFrontend /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

# Запуск Nginx
CMD ["nginx", "-g", "daemon off;"]