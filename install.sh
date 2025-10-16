#!/bin/bash

###
# Install OpenCode configuration files to the user's home directory
###

echo "#####################################################################"
echo "# Installing OpenCode configuration files to $HOME/.config/opencode #"
echo "#####################################################################"

mkdir -p "$HOME"/.config/opencode/agent
mkdir -p "$HOME"/.config/opencode/command

cp .opencode/agent/*.md "$HOME"/.config/opencode/agent
cp .opencode/command/*.md "$HOME"/.config/opencode/command

cp ./*.md "$HOME"/.config/opencode
cp ./opencode.jsonc "$HOME"/.config/opencode
