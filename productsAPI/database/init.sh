#!/bin/bash
pg_restore -Ovj 50 --username $POSTGRES_USER -d products /init.dump
