#!/bin/bash

###
# Install OpenCode configuration files to the user's home directory
###

echo "#####################################################################"
echo "# Installing OpenCode configuration files to $HOME/.config/opencode #"
echo "#####################################################################"

mkdir -p "$HOME"/.config/opencode/agent
mkdir -p "$HOME"/.config/opencode/command
mkdir -p "$HOME"/.config/opencode/mode

cp -u .opencode/agent/*.md "$HOME"/.config/opencode/agent
cp -u .opencode/command/*.md "$HOME"/.config/opencode/command
cp -u .opencode/mode/*.md "$HOME"/.config/opencode/mode

cp -u .opencode/*.md "$HOME"/.config/opencode

cp -u ./*.md "$HOME"/.config/opencode
cp ./opencode.jsonc "$HOME"/.config/opencode
