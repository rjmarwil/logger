
NODE_MODULES=node_modules/.bin

JSHINT=$(NODE_MODULES)/jshint
JSCS=$(NODE_MODULES)/jscs

ISTANBUL=$(NODE_MODULES)/istanbul
COVERAGE_REPORT=coverage/lcov.info
COVERAGE_PCT=90

MOCHA=$(NODE_MODULES)/_mocha
TESTS=$(test)

check-style:
	@$(JSCS) . --reporter=node_modules/jscs-stylish/jscs-stylish.js

lint: check-style
	@$(JSHINT) . --reporter node_modules/jshint-stylish/stylish.js

test: lint
	@$(MOCHA) $(TESTS)

cover: clean-cov
	@$(ISTANBUL) cover $(MOCHA) --report html -- \
		--reporter dot $(TESTS)

test-cov: clean-cov lint
	@$(ISTANBUL) cover $(MOCHA) --report lcovonly -- \
		--reporter dot $(TESTS)

check-coverage:
	@$(ISTANBUL) check-coverage \
		--statements $(COVERAGE_PCT) \
		--functions $(COVERAGE_PCT) \
		--branches $(COVERAGE_PCT) \
		--lines $(COVERAGE_PCT)

clean-cov:
	@rm -rf ./coverage

clean: clean-cov
	@rm -rf ./node_modules


.PHONY: test
