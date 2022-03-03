'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const glob = require('glob');

module.exports = class extends Generator {
	constructor(...args) {
		super(...args);
		this.env.options.nodePackageManager = 'npm';
	}

	prompting() {
		// Have Yeoman greet the user.
		this.log(
			yosay(
				`Welcome to the neat ${chalk.red(
					'npm-package-boilerplate'
				)} generator!`
			)
		);

		const prompts = [
			{
				name: 'package_name',
				message: 'What is the package name?',
			},
			{
				name: 'project_name',
				message: 'What is the github project name?',
			},
			{
				name: 'github_username',
				message: 'What is your github username?',
			},
		];

		return this.prompt(prompts).then((props) => {
			this.props = props;
		});
	}

	writing() {
		this.fs.copy(
			glob.sync(this.templatePath('**/*'), {
				dot: true,
				ignore: ['**/*.tpl'],
			}),
			this.destinationPath()
		);

		this.fs.copyTpl(
			this.templatePath('package.json'),
			this.destinationPath('package.json'),
			this.props
		);

		this.fs.copyTpl(
			this.templatePath('.releaserc.tpl'),
			this.destinationPath('.releaserc'),
			this.props
		);

		this.fs.copy(
			this.templatePath('.gitignore.tpl'),
			this.destinationPath('.gitignore'),
			this.props
		);
	}
};
