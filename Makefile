install: # установить зависимости
	npm ci

brain-games: # запуск игры
	node bin/brain-games.js
brain-even: # запуск игры
	node bin/brain-even.js
brain-calc: # запуск игры
	node bin/brain-calc.js
brain-gcd: # запуск игры
	node bin/brain-gcd.js
brain-progression: # запуск игры
	node bin/brain-progression.js
publish: 
	npm publish --dry-run
lint: 
	npx eslint .