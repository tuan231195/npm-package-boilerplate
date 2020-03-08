'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const glob = require('glob');

module.exports = class extends Generator {
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
				name: 'name',
				message: 'What is the project name?',
			},
			{
				name: 'github_username',
				message: 'What is your github username?',
			},
		];

		return this.prompt(prompts).then(props => {
			this.props = props;
		});
	}

	writing() {
		this.fs.copy(
			glob.sync(this.templatePath('**/*'), { dot: true }),
			this.destinationPath()
		);

		this.fs.copyTpl(
			this.templatePath('package.json'),
			this.destinationPath('package.json'),
			this.props
		);

		this.fs.copyTpl(
			this.templatePath('.releaserc'),
			this.destinationPath('.releaserc'),
			this.props
		);
	}

	install() {
		this.installDependencies();
	}
};
