#!/bin/sh 
#

# Written by: Stephen Jonker
# Written on: Sat 30 Jan 2021 
# Copyright (c) Stephen Jonker - www.stephenjonker.com 
#
# Purpose: 
# - "quick and dirty" bash script to make setup for the FCC Javascript section easier and faster
# 

TEMPLATEFILE="./template.js"

echo "Enter task string: "
read task 

# echo $task 

# convert to lower case 
task=`echo $task | tr [A-Z] [a-z]`
# echo $task 

# convert spaces to dash
# assume there will not be any leading or trailing spaces
task=`echo $task | tr ' ' '-'`
# echo $task 

# Based on task name, create a new directory if one does not exists 
#
if [ ! -d "$task" ]
then    
    echo "Directory does NOT exist, creating directory: $task "
    mkdir "$task"
    echo "Done."
else
    echo "Directory \"$task\" exists, skipping... "
fi

# Copy the template file into the directory
# 
TARGETFILE="$task/index.js"
if [ ! -f "$TARGETFILE" ]
then 
    echo "Coping $TEMPLATEFILE to $TARGETFILE "
    cp $TEMPLATEFILE $TARGETFILE
    echo "Done."
else 
    echo "Target file \"$TARGETFILE\" exists, skipping... "
fi 


# EOF 