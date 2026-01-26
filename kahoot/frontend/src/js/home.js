fetch("http://localhost:5000/api/home")
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });