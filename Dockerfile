FROM node:14.15.3 AS build

ENV GRAPHQL_API_SCHEMA ./schema.graphql

WORKDIR /app

COPY .babelrc ./
COPY .postcssrc.js ./
COPY codegen.yml ./
COPY next-env.d.ts ./
COPY next.config.js ./
COPY package.json ./
COPY schema.graphql ./
COPY tsconfig.json ./
COPY tailwind.config.js ./
COPY yarn.lock ./

COPY src ./src

RUN yarn install --frozen-lockfile
RUN yarn build

FROM node:14.15.3-slim

ENV PORT 3000

WORKDIR /app

COPY package.json yarn.lock ./
COPY --from=build /app/.next ./.next

RUN yarn install --frozen-lockfile --production

EXPOSE $PORT

CMD ["yarn", "start"]
