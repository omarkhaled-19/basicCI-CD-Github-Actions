#!/usr/bin/env bash

# Use the LOCALSTACK_URL if provided, otherwise default to localhost
ENDPOINT_URL=${AWS_ENDPOINT_URL:-http://localhost:4566}

aws s3 mb s3://my-test-bucket --endpoint-url=$ENDPOINT_URL