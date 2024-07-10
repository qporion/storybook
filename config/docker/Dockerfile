# Set component images
FROM composer:2 AS composer
FROM node:21-alpine AS node
FROM php:8.3-cli-alpine

ENV npm_config_cache=/var/www/.npm
ENV HOME=/var/www

COPY --from=composer /usr/bin/composer /usr/bin/composer

RUN apk add --no-cache libstdc++ libgcc git bash

COPY --from=node /usr/local/lib/node_modules /usr/local/lib/node_modules
COPY --from=node /usr/local/include/node /usr/local/include/node
COPY --from=node /usr/local/share/man/man1/node.1 /usr/local/share/man/man1/node.1
COPY --from=node /usr/local/share/doc/node /usr/local/share/doc/node
COPY --from=node /usr/local/bin/node /usr/local/bin/node
RUN ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm

RUN curl -sS https://get.symfony.com/cli/installer | bash && mv /var/www/.symfony5/bin/symfony /usr/local/bin/symfony

WORKDIR /var/www/
CMD ["symfony", "server:start"]