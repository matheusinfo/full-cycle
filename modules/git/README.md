# GitFlow

Install: https://github.com/petervanderdoes/gitflow-avh/wiki/Installing-on-Linux,-Unix,-etc.

# Assinaturas

Install: sudo apt install gpg
List Keys: gpg --list-secret-keys --keyid-form LONG
Create: gpg --full-generate-key
Get Public Key: gpg --armor --export (ID of Key)
Config: 
- git config --global user.signinkey (ID of Key)
- export GPG_TTY=$(tty)
- git config --global commit.gpgsign true
- git config --global tag.gpgsign true

Add another email to the key:
- gpg --edit-key (ID of Key)