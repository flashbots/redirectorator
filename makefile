HOST ?= test

dev:
	npx wrangler dev --port 8787 --host $(HOST) --var DEBUG:true
