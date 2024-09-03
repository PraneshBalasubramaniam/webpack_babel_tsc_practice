cd ./babel_practice
npm run build &

cd ../babel_tsc_practice
npm run build &

cd ../tsc_practice
npm run build &

cd ../webpack_babel_practice
npm run build &

cd ../webpack_babel_tsc_practice
npm run build &

cd ../webpack_practice
npm run build

wait

echo
echo 'Projects built'
