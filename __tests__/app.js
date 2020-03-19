'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const fs = require('fs');

describe('generator-npm-package-boilerplate:app', () => {
	let dir;
	beforeAll(() => {
		return helpers
			.run(path.join(__dirname, '../generators/app'))
			.withPrompts({
				name: 'test-package',
				// eslint-disable-next-line camelcase
				github_username: 'vdtn359',
			})
			.then(destinationDir => {
				dir = destinationDir;
			});
	});

	it('creates package.json', () => {
		assert.noFile(['package.json.tpl']);
		assert.file(['package.json']);
		const packageJsonContent = JSON.parse(
			fs.readFileSync(path.resolve(dir, 'package.json'), {
				encoding: 'utf-8',
			})
		);
		expect(packageJsonContent.name).toEqual('test-package');
	});

	it('updates .releaserc', () => {
		assert.noFile(['.releaserc.tpl']);
		assert.file(['.releaserc']);
		const releaserc = JSON.parse(
			fs.readFileSync(path.resolve(dir, '.releaserc'), {
				encoding: 'utf-8',
			})
		);
		expect(releaserc.repositoryUrl).toEqual(
			'git@github.com:vdtn359/test-package.git'
		);
	});

	it('create .gitignore', () => {
		assert.noFile(['.gitignore.tpl']);
		assert.file(['.gitignore']);
	});
});
