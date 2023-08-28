#!/bin/bash

message="$1"
webhook_url="$2"

curl -X POST -H 'Content-type: application/json' --data "{\"text\":\"$message\"}" "$webhook_url"
