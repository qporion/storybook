docker-build:
	docker build config/docker/. -t storybook

docker-up:
	docker compose run -u `id -u`:`id -g` storybook symfony server:start -d && npm run storybook