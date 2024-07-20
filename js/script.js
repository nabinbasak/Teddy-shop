function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}






/*
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const dots = document.querySelectorAll(".dot");
  
    let currentIndex = 0;
    const totalItems = carouselItems.length;
    let itemWidth = parseFloat(carouselItems[0].clientWidth);
  console.log("itemWidth : "+itemWidth)
    // Function to move carousel to a specific index
    const moveTo = (index) => {
      if (index < 0) {
        index = totalItems - 1;
      } else if (index >= totalItems) {
        index = 0;
      }
  
      currentIndex = index;
  
      const translateX = -currentIndex * itemWidth;
      carousel.style.transform = `translateX(${translateX}px)`;
  
      // Update active dot
      updateDots();
    };
  
    // Function to update active dot
    const updateDots = () => {
      dots.forEach((dot, index) => {
        dot.classList.remove("active");
        if (index === currentIndex) {
          dot.classList.add("active");
        }
      });
    };
  
    // Event listeners for previous and next buttons
    prevBtn.addEventListener("click", () => {
      moveTo(currentIndex - 1);
    });
  
    nextBtn.addEventListener("click", () => {
      moveTo(currentIndex + 1);
    });
  
    // Event listener for dots navigation
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        moveTo(index);
      });
    });
  
    // Automatic sliding (optional)
    const autoSlide = () => {
      moveTo(currentIndex + 1);
    };
  
    // setInterval(autoSlide, 5000); // Uncomment to enable automatic sliding
  
    // Responsive behavior
    const handleResize = () => {
      itemWidth = carouselItems[0].clientWidth; // Update item width on resize
      moveTo(currentIndex); // Re-align to current index on resize
    };
  
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to handle initial screen size
  });*/

  
//   Next C

document.addEventListener("DOMContentLoaded", function () {
    var carousel = document.querySelector(".carousel");
    var carouselItems = document.querySelectorAll(".carousel-t .carousel-item");
    var prevBtn = document.querySelector(".carousel-t .prev-btn");
    var nextBtn = document.querySelector(".carousel-t .next-btn");
    var dots = document.querySelectorAll(".carousel-t .dots span");
    console.log("dots",dots)
    console.log(carouselItems)
    var currentIndex = 0;
    var totalItems = carouselItems.length;
    console.log(carouselItems[0],carouselItems[0].clientWidth)
    var itemWidth = carouselItems[0].clientWidth;
  
    // Function to move carousel to a specific index
    var moveTo = (index) => {
      if (index < 0) {
        index = totalItems - 1;
      } else if (index >= totalItems) {
        index = 0;
      }
  
      currentIndex = index;
  
      var translateX = -currentIndex * itemWidth;
      carousel.style.transform = `translateX(${translateX}px)`;
  
      // Update active dot
      updateDots();
    };
  
    // Function to update active dot
    var updateDots = () => {
      dots.forEach((dot, index) => {
        dot.classList.remove("active");
        if (index === currentIndex) {
          dot.classList.add("active");
        }
      });
    };
  
    // Event listeners for previous and next buttons
    prevBtn.addEventListener("click", () => {
      moveTo(currentIndex - 1);
    });
  
    nextBtn.addEventListener("click", () => {
      moveTo(currentIndex + 1);
    });
  
    // Event listener for dots navigation
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        moveTo(index);
      });
    });
  
    // Automatic sliding (optional)
    var autoSlide = () => {
      moveTo(currentIndex + 1);
    };
  
    // setInterval(autoSlide, 5000); // Uncomment to enable automatic sliding
  
    // Responsive behavior
    var handleResize = () => {
      itemWidth = carouselItems[0].clientWidth; // Update item width on resize
      moveTo(currentIndex); // Re-align to current index on resize
    };
  
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to handle initial screen size
  });



// 2nd


document.addEventListener("DOMContentLoaded", function () {
  var carousel = document.querySelector(".carousel-testimonials .carousel");
  var carouselItems = document.querySelectorAll(".carousel-testimonials .carousel-item");
  var prevBtn = document.querySelector(".carousel-testimonials .prev-btn");
  var nextBtn = document.querySelector(".carousel-testimonials .next-btn");
  var dots = document.querySelectorAll(".carousel-testimonials .dots span");
  console.log("dots testimonials",dots)
  var currentIndex = 0;
  var totalItems = carouselItems.length;
  console.log(carouselItems[0],carouselItems[0].clientWidth)
  var itemWidth = carouselItems[0].clientWidth;

  // Function to move carousel to a specific index
  var moveTo = (index) => {
    if (index < 0) {
      index = totalItems - 1;
    } else if (index >= totalItems) {
      index = 0;
    }

    currentIndex = index;

    var translateX = -currentIndex * itemWidth;
    carousel.style.transform = `translateX(${translateX}px)`;

    // Update active dot
    updateDots();
  };

  // Function to update active dot
  var updateDots = () => {
    dots.forEach((dot, index) => {
      dot.classList.remove("active");
      if (index === currentIndex) {
        dot.classList.add("active");
      }
    });
  };

  // Event listeners for previous and next buttons
  prevBtn.addEventListener("click", () => {
    moveTo(currentIndex - 1);
  });

  nextBtn.addEventListener("click", () => {
    moveTo(currentIndex + 1);
  });

  // Event listener for dots navigation
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      moveTo(index);
    });
  });

  // Automatic sliding (optional)
  var autoSlide = () => {
    moveTo(currentIndex + 1);
  };

  setInterval(autoSlide, 5000); // Uncomment to enable automatic sliding

  // Responsive behavior
  var handleResize = () => {
    itemWidth = carouselItems[0].clientWidth; // Update item width on resize
    moveTo(currentIndex); // Re-align to current index on resize
  };

  window.addEventListener("resize", handleResize);
  handleResize(); // Initial call to handle initial screen size
});
  