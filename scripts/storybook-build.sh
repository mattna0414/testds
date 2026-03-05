#!/usr/bin/env bash
set -euo pipefail

source "${HOME}/.nvm/nvm.sh"
nvm use 22.21.1 >/dev/null
storybook build "$@"
