#!/bin/bash

IMAGE=playwright
TAG=v1.63.0-noble-vrt-examples

docker build -f Dockerfile -t $IMAGE:$TAG -t $IMAGE:latest .
