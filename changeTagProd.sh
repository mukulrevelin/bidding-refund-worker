#!/bin/bash
sed -e "s/tagVersion/$1/" jenkins-script-prod/kubectl/bidding-refund-worker-prod.yaml > jenkins-script-prod/kubectl/bidding-refund-worker-prod-app-pod.yaml
