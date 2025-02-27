curl -v -X OPTIONS http://localhost:8080/todos/add

curl -v http://localhost:8080/todos \
     -H "Content-Type: application/json" \
     -H "Accept: application/json" \
     -d '{"title": "YOUR_TITLE", "completed": false}'
