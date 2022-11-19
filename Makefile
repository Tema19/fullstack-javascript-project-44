install: # установить зависимости
	npm ci

brain-games: # запуск игры
	node bin/brain-games.js
brain-even: # запуск игры
	node bin/brain-even.js
publish: 
	npm publish --dry-run
lint: 
	npx eslint .