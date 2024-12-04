cd ./babel_practice
pnpm run build &

cd ../babel_tsc_practice
pnpm run build &

cd ../tsc_practice
pnpm run build &

cd ../webpack_babel_practice
pnpm run build &

cd ../webpack_babel_tsc_practice
pnpm run build &

cd ../webpack_babel_tsc_practice_with_seperate_config
pnpm run build &

cd ../webpack_practice
pnpm run build

wait

echo
echo 'Projects built...'
