#!/usr/bin/bash
# CRC stands for "Create React Component"
# To use, just run CRC.sh <project_root_folder> <component_name>
# The script will automatically create the component in the following
# PATH : <root>/src/components/<component_name>/<component_name>.jsx
# with a basic skeleton in it
mkdir -p ${1}/src/components/${2} && touch ${1}/src/components/${2}/${2}.js && touch ${1}/src/components/${2}/${2}.module.scss
cat <<EOT >>./src/components/${2}/${2}.js
import React from 'react';
import ${2}Styles from  './${2}.module.scss';
const ${2} = () => {
}
export default ${2};
EOT