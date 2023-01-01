docker rmi -f $(docker images | grep environmentconverter | awk '{split($0,a); print a[3];}';)
rm -rf dist
npm run-script build
docker build . --no-cache -t environmentconverter --platform linux/arm64

docker tag environmentconverter davutozcan/environmentconverter:2
docker push davutozcan/environmentconverter:2

#docker run -it -p 88:80 environmentconverter