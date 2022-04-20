FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /todo_list
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 80
RUN chown -R node /todo_list
USER node
CMD ["node", "index.js"]
