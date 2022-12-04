install:
	npm ci

brain-games: 
	node bin/brain-games.js
brain-even: #Answer "yes" if the number is even, otherwise answer "no"
	node bin/brain-even.js
brain-calc: #What is the result of the expression?
	node bin/brain-calc.js
brain-gcd: #Find the greatest common divisor of given numbers.
	node bin/brain-gcd.js
brain-progression: #What number is missing in the progression
	node bin/brain-progression.js
brain-prime: #Answer "yes" if given number is prime. Otherwise answer "no".
	node bin/brain-prime.js

publish: 
	npm publish --dry-run
lint: 
	npx eslint .