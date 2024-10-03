# Ansible Commands Reference

This README provides a reference guide for various Ansible commands presented on the Ansible module


# Docs:
Ansible: https://docs.ansible.com/

# Commands

ansible -i hosts all -m ping
ansible -i hosts all -m shell -a 'uptime'
ansible -i hosts all -m apt -a "update_cache=yes name=git state=present"
ansible -i hosts all -m git -a "repo=https://github.com/matheusinfo/github-beautify dest=/root/dev"
ansible -i hosts first_node -m setup 
ansible -i hosts first_node -m shell -a "ls -la" 
ansible -i hosts all -m apt -a "update_cache=yes name=nginx state=present"
ansible -i hosts all -m apt -a "update_cache=yes name=nginx state=absent"

# Steps
docker exec -it control bash
docker exec -it control bash
service ssh start
ssh-keygen
ssh-copy-id root@first_node