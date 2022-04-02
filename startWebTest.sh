cp ./src/* ./webTest/src/script/ -r
npx kill-port 3000
cd ./webTest/
npm run start