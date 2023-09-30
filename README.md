# Traefik Load Balancing Demo

Traefik is a popular reverse proxy and load balancer that is commonly used in microservices and containerized environments. This application demonstrates how to set up Traefik for load balancing various services and provides example configurations to get you started.

## Prerequisites

Before you can use this, ensure you have the following prerequisites installed:

- [Docker](https://www.docker.com/) - for containerization.
- [Docker Compose](https://docs.docker.com/compose/) - for managing multi-container applications.
- A working knowledge of Traefik's configuration concepts.

## Getting Started

Follow these steps to get started:

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/tanishqmanuja/demo.traefik-load-balancing.git
   ```

2. Change into the project directory:

   ```shell
   cd demo.traefik-load-balancing
   ```

3. Start the application using Docker Compose:

   ```shell
   docker compose up -d
   ```

4. Access your services through the Traefik reverse proxy, exposed at `http://localhost:8080`.

## Configuration

### Traefik Configuration

The Traefik configuration is defined in the `traefik.yaml` & `config.yaml` file inside `./config/traefik` directory. You can customize settings such as entry points, middleware, and providers based on your requirements. Refer to the [Traefik documentation](https://doc.traefik.io/traefik/) for detailed configuration options.

### Service Configuration

Service-specific configurations are defined in the `compose.yaml` file. Each service should have its own Docker Compose service definition and can be associated with Traefik labels for routing and load balancing. Refer to the Traefik documentation for details on configuring services with labels.

## Building

If you want to rebuild the server, use the compose command with build flag as follows:

```shell
docker compose up --build
```
