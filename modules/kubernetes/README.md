# Kubernetes Commands Reference

This README provides a reference guide for various Kubernetes commands presented on the Kubernetes module


# Docs:
Kind: https://kind.sigs.k8s.io/docs

Kubernetes: https://kubernetes.io/docs

# Commands

Create a cluster: kind create cluster
Create a cluster based on yaml: kind create cluster --config=${path}--name=${optional-name}
Info: kubectl cluster-info --context kind-${cluster-name}
View Kubernetes nodes: kubectl get nodes
View clusters with kind:  kind get clusters
Delete cluster with kind: kind delete clusters ${name}
Change cluster: kubectl config use-context ${cluster-name}
Create a pod: kubectl apply -f pod.yaml 
Transfer port: kubectl port-forward ${podname} port:port
View replicasets: kubectl get replicasets
Describe pod: kubectl describe pod ${podname}
Delete a pod: kubectl delete replicaset ${podname}
List versions: kubectl rollout history deployment ${podname}
Rollout: kubectl rollout undo deployment goserver
Rollout to specific revision: kubectl rollout undo deployment goserver --to-revision=N
List services: kubectl get services
List deployments: kubectl get deployments
Kubernet proxy: kubectl proxy --port=8080
Logs: kubectl logs ${podname}
Delete a deploy: kubectl delete deply ${deployName}