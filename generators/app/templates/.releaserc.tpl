{
	"plugins": [
		"@semantic-release/npm",
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		"@semantic-release/changelog",
		{
			"path": "@semantic-release/git",
			"assets": [
				"package.json",
				"package-lock.json",
				"CHANGELOG.md",
				"index.js",
				"lib/**/*.js"
			],
			"message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
		}
	],
	"repositoryUrl": "git@github.com:<%= github_username %>/<%= project_name %>.git"
}
