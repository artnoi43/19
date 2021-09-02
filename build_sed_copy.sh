#!/bin/sh
target="build/index.html";
dest="/srv/http/covid-19";

yarn run build\
&& sed -i 's/Web site created using create-react-app/Global COVID-19 Tracker/' "$target"\
&& sed -i 's/React App/19.artnoi.com/' "$target"\
&& sudo rm -r "$dest"\
&& sudo cp -a build "$dest";
