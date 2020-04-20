FROM gitpod/workspace-mongodb

USER gitpod

# Install custom tools, runtime, etc. using apt-get
# For example, the command below would install "bastet" - a command line tetris clone:
#
RUN yarn add global prisma && apt install docker-compose
#
# More information: https://www.gitpod.io/docs/config-docker/
