#!/usr/bin/env bash

set -o errexit
set -o pipefail

docker run --rm --network host -v $(pwd):/work/ -v /work/node_modules -w /work/ -it playwright:v1.62.1-noble-vrt-examples "${@}"