
NODE_MODULES=node_modules/.bin
ESLINT=$(NODE_MODULES)/eslint
ISTANBUL=$(NODE_MODULES)/istanbul
COVERAGE_REPORT=coverage/lcov.info
COVERAGE_PCT=100
BRANCH_COVERAGE_PCT=75
MOCHA=$(NODE_MODULES)/_mocha
TESTS=$(test)

lint:
	@$(ESLINT) .

test: lint
	@$(MOCHA) $(TESTS)

cover-html: clean
	@$(ISTANBUL) cover $(MOCHA) --report html -- --reporter dot $(TESTS)

cover: clean lint
	@$(ISTANBUL) cover $(MOCHA) --report lcovonly -- --reporter dot $(TESTS)

check-coverage: cover
	@$(ISTANBUL) check-coverage \
		--statements $(COVERAGE_PCT) \
		--functions $(COVERAGE_PCT) \
		--branches $(BRANCH_COVERAGE_PCT) \
		--lines $(COVERAGE_PCT)

clean:
	@rm -rf ./coverage


.PHONY: test clean lint
