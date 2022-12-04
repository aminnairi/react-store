# Contributing

## Requirements

- Git
- Docker
- Docker Compose

## Clone the repository

```bash
git clone https://github.com/aminnairi/react-store.git ~/react-store
cd ~/react-store
```

## Start the Docker Compose services

```bash
docker compose up --detach
```

## Install the Node dependencies

```bash
docker compose exec node npm install
```

## Build the project

```bash
docker compose exec node npm run build
```

## Stop the Docker Compose services

```bash
docker compose down --remove-orphans --volumes --timeout 0
```