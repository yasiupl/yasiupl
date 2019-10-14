deploy: install copy build 

install:
	npm ci

copy:
	mkdir -p dist/assets
	cp -r src/assets dist

serve: copy
	node_modules/.bin/webpack-dev-server

serve-all: copy
	node_modules/.bin/webpack-dev-server& node_modules/.bin/netlify-lambda serve src/lambda

serve-lambda: 
	node_modules/.bin/netlify-lambda serve src/lambda

build: copy
	node_modules/.bin/webpack
	node_modules/.bin/netlify-lambda build src/lambda