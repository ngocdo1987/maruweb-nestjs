[Back](README.md)

#### Final Apache file (without SSL)
Open apache httpd.conf file
Enable the following Modules by removing the # at the front of the line.
 - LoadModule rewrite_module modules/mod_rewrite.so
 - LoadModule proxy_module modules/mod_proxy.so
 - LoadModule proxy_http_module modules/mod_proxy_http.so
 - LoadModule proxy_connect_module modules/mod_proxy_connect.so
```bash
<VirtualHost *:80>
	ServerName <domain_name>
	ProxyRequests On
	<Proxy>
		Order deny,allow
		Allow from all
	</Proxy>
	ProxyPass / http://127.0.0.1:<PORT>/
  ProxyPassReverse / http://127.0.0.1:<PORT>/
	Header set Access-Control-Allow-Origin "*"
</VirtualHost>
```