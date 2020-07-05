.PHONY: test clean install dist format run run-prod help

NVM_DIR = $(shell echo $$NVM_DIR)

help:
	@echo
	@echo "  test       run tests"
	@echo "  clean      remove node_modules and public dir"
	@echo "  install    install dependencies"
	@echo "  dist       build the app for production"
	@echo "  format     format the code using prettier"
	@echo "  run        run the app in development mode"
	@echo "  run-prod   run the app in development mode"
	@echo "  help       print this message"
	@echo

test:
	. ${NVM_DIR}/nvm.sh && nvm use && npm run test

clean:
	. ${NVM_DIR}/nvm.sh && nvm use && npm run clean
	rm -rf public

install: clean
	. ${NVM_DIR}/nvm.sh && nvm install
	. ${NVM_DIR}/nvm.sh && nvm use && npm ci

dist:
	. ${NVM_DIR}/nvm.sh && nvm use && npm run build

format:
	. ${NVM_DIR}/nvm.sh && nvm use && npm run format

run:
	. ${NVM_DIR}/nvm.sh && nvm use && npm start

run-prod:
	. ${NVM_DIR}/nvm.sh && nvm use && npm run start-prod
