FROM gitpod/workspace-mongodb

USER gitpod

RUN sudo apt-get update && \
    sudo apt-get install -y zsh

ENV ZSH_THEME agnoster

RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh

# Install custom tools, runtime, etc. using apt-get
# For example, the command below would install "bastet" - a command line tetris clone:
#

#
# More information: https://www.gitpod.io/docs/config-docker/
