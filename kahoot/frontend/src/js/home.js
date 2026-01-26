fetch("http://backend:8080/api/home")
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });