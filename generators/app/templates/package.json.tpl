{
	"name": "<%= name %>",
	"version": "0.0.0-development",
	"description": "",
	"main": "dist/index.js",
	"types": "dist/index.d.ts",
	"files": [
		"dist"
	],
	"repository": {
		"url": "git@github.com:<%= github_username %>/<%= name %>.git"
	},
	"scripts": {
		"semantic-release": "semantic-release",
		"build": "ttsc",
		"commit": "git-cz",
		"prepare": "npm run build",
		"test": "jest",
		"test:coverage": "jest --coverage",
		"lint": "eslint 'src/**/*.{ts,js}'",
		"prettier:check": "prettier --check 'src/**/*.{ts,js}'",
		"validate": "run-s test lint prettier:check",
		"ci:validate": "rm -rf node_modules && npm ci && npm run validate",
		"prepublishOnly": "npm run ci:validate && npm run build"
	},
	"license": "MIT",
	"devDependencies": {
		"@commitlint/cli": "8.3.5",
		"@commitlint/config-conventional": "8.3.4",
		"@semantic-release/changelog": "5.0.0",
		"@semantic-release/commit-analyzer": "8.0.1",
		"@semantic-release/git": "9.0.0",
		"@semantic-release/npm": "7.0.3",
		"@semantic-release/release-notes-generator": "9.0.1",
		"@types/jest": "25.1.4",
		"@typescript-eslint/eslint-plugin": "2.22.0",
		"@typescript-eslint/parser": "2.22.0",
		"commitizen": "4.0.3",
		"cz-conventional-changelog": "3.1.0",
		"eslint": "6.8.0",
		"eslint-config-prettier": "6.10.0",
		"eslint-plugin-prettier": "3.1.2",
		"husky": "4.2.3",
		"jest": "25.1.0",
		"lint-staged": "10.0.8",
		"npm-run-all": "4.1.5",
		"prettier": "1.19.1",
		"semantic-release": "17.0.4",
		"ts-jest": "25.2.1",
		"ttypescript": "1.5.10",
		"typescript-transform-paths": "1.1.14",
		"typescript": "3.8.3"
	},
	"husky": {
		"hooks": {
			"commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
			"pre-commit": "lint-staged",
			"pre-push": "npm run validate"
		}
	},
	"lint-staged": {
		"**/*.{js,ts}": [
			"prettier --write",
			"eslint --fix"
		],
		"**/*.{json,html,css,yml}": [
			"prettier --write"
		]
	},
	"config": {
		"commitizen": {
			"path": "./node_modules/cz-conventional-changelog"
		}
	}
}
