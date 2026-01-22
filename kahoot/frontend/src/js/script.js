fetch("http://localhost:5000/api/questions")
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });
