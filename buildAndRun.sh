docker rmi -f $(docker images | grep devtools | awk '{split($0,a); print a[3];}';)
rm -rf dist
npm run-script build
docker build . --no-cache -t devtools
docker run -it -p 88:80 devtools