[Back](README.md)

#### Final Nginx file (without SSL)
```bash
server {
  server_name   <domain_name>;

  location / {
    proxy_pass             http://127.0.0.1:<PORT>;
    proxy_read_timeout     60;
    proxy_connect_timeout  60;
    proxy_redirect         off;

    # Allow the use of websockets
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```