#!/bin/bash

IMAGE=playwright
TAG=v1.62.1-noble-vrt-examples

docker build -f Dockerfile -t $IMAGE:$TAG -t $IMAGE:latest .
