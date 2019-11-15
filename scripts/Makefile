build-staging:
	docker \
		-H tcp://192.168.1.201:3875 \
		build -t fund:stg \
		-f ./Dockerfile.staging  ..
build-production:
	docker \
		-H tcp://192.168.1.201:3875 \
		build -t fund:prod \
		-f ./Dockerfile.production  ..
run-staging:
	docker \
		-H tcp://192.168.1.201:3875 \
		run -d \
		--net stg-fund_net \
		--name stg-web \
		fund:stg
run-production:
	docker \
		-H tcp://192.168.1.201:3875 \
		run -d \
		--net prod-fund_net \
		--name prod-web \
		fund:prod
stop-staging:
	docker -H tcp://192.168.1.201:3875 rm -v -f stg-web || true
stop-production:
	docker -H tcp://192.168.1.201:3875 rm -v -f prod-web || true
