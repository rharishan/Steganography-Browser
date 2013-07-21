SHELL := /bin/bash
VERSION := $(shell cat install.rdf|grep '<em:version>'|cut -d\> -f2|cut -d\< -f1)
ID := $(shell cat install.rdf|grep '<em:id>'|cut -d\> -f2|cut -d\< -f1)

make-xpi:
	zip -r ../browser-stego@stego.com.xpi * -x "browser-stego@stego.com" -x "Readme.md" -x "Makefile"

clean:
	rm -f ../browser-stego@stego.com.xpi
