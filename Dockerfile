ARG NODE_VERSION=20.6.1
FROM node:${NODE_VERSION}-alpine as base

# Work directory
WORKDIR /usr/src/app/

# Port of container
EXPOSE 8888

# stage dev
FROM base as dev 
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    yarn
# Copy files
COPY . .
# check health of container
# HEALTHCHECK --interval=30s --timeout=30s --retries=3 CMD [ "executable" ]
CMD ["yarn", "run", "dev:local"]


# stage dev
FROM base as prod 
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    yarn
# Copy files
COPY . .
# check health of container
# HEALTHCHECK --interval=30s --timeout=30s --retries=3 CMD [ "executable" ]
CMD ["yarn", "run", "build"]






