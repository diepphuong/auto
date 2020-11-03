#!/bin/bash
if [ -z "$RUN_ENV" ]; then
	#Fail
	echo "No RUN_ENV specified!"
	exit 1
fi

sed -i 's@{{env}}@'"$RUN_ENV"'@' /usr/share/nginx/html/index.html

#Below variables are required to load the correct site catalyst library based on environment
#    adobeAnalyticsSrc=""
#
#    if [ "$RUN_ENV" = "prod" ]; then
#        adobeAnalyticsSrc+=".js"
#    else
#        adobeAnalyticsSrc+="-staging.js"
#    fi
#    echo $adobeAnalyticsSrc
#    sed -i 's@{{adobeAnalyticsSrc}}@'"$adobeAnalyticsSrc"'@' /usr/share/nginx/html/index.html

echo "$RUN_ENV exec $@"
exec "$@"
