render:
	hugo --source . --destination docs

dev:
	hugo serve --source . --buildDrafts --buildFuture

setup-cd:
	cp -f hooks/pre-commit .git/hooks
	chmod +x .git/hooks/pre-commit
