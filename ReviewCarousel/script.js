const reviews = [
    {
      photo: "https://via.placeholder.com/100",
      name: "John Doe",
      job: "Software Engineer",
      review: "This is a sample review. It is concise and gives great insight!",
    },
    {
      photo: "https://via.placeholder.com/100",
      name: "Jane Smith",
      job: "Product Manager",
      review: "Amazing product, I loved the experience. Highly recommend it!",
    },
    {
      photo: "https://via.placeholder.com/100",
      name: "Alice Johnson",
      job: "Designer",
      review: "The design and quality are exceptional. Excellent service!",
    },
    {
      photo: "https://via.placeholder.com/100",
      name: "Michael Brown",
      job: "Developer",
      review: "Very user-friendly and intuitive. I will use it again for sure!",
    },
  ];
  
  let currentIndex = 0;
  
  function updateReview(index) {
    const { photo, name, job, review } = reviews[index];
    document.getElementById("photo").src = photo;
    document.getElementById("name").textContent = name;
    document.getElementById("job").textContent = job;
    document.getElementById("review").textContent = review;
  }
  
  document.getElementById("prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    updateReview(currentIndex);
  });
  
  document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    updateReview(currentIndex);
  });
  
  document.getElementById("random-btn").addEventListener("click", () => {
    currentIndex = Math.floor(Math.random() * reviews.length);
    updateReview(currentIndex);
  });
  
  // Initialize with the first review
  updateReview(currentIndex);
  