pnpm exec tsc

echo 'Compiled Typescript....'
echo

pnpm exec babel dist/tsc --out-dir dist/babel --extensions \".js,.jsx\"

echo
echo 'Compiled Babel....'
