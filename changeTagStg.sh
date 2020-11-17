#!/bin/bash
sed -e "s/tagVersion/$1/" jenkins-script-stage/kubectl/bidding-refund-worker-staging.yaml > jenkins-script-stage/kubectl/bidding-refund-worker-staging-app-pod.yaml
