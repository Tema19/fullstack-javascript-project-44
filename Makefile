install:
	npm ci

brain-games: # launch brain games
	node bin/brain-games.js
brain-even: # launch brain even
	node bin/brain-even.js
brain-calc: # launch brain calc
	node bin/brain-calc.js
brain-gcd: # launch brain gcd
	node bin/brain-gcd.js
brain-progression: # launch brain progressiom
	node bin/brain-progression.js
brain-prime: # launch brain prime
	node bin/brain-prime.js

publish: 
	npm publish --dry-run
lint: 
	npx eslint .
