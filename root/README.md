# {%= name %}

{%= description %}

## Getting Started
Install **{%= name %}** by either running `npm install {%= name %}` in your sites working directory or add '{%= name %}' to the dependencies section of the 'package.json' file and run npm install.

### Required permissions
**{%= name %}** requires the following permissions to be granted on the server for the plugin to work correctly:
{% if (route_permission !== 'n') { %}   - route{% } %}
{% if (state_permission !== 'n') { %}   - state{% } %}
{% if (helper_permission !== 'n') { %}   - help{% } %}
{% if (events_permission !== 'n') { %}   - events{% } %}
{% if (ext_permission !== 'n') { %}   - ext{% } %}

### Available options
_(Coming soon)_