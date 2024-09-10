npx tsc

echo 'Compiled Typescript....'
echo

npx babel dist/tsc --out-dir dist/babel --extensions \".js,.jsx\"

echo
echo 'Compiled Babel....'
echo

npx webpack

echo
echo 'Compiled Webpack....'
