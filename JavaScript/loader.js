document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
  
    // Function to simulate async data loading
    function loadData() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulating data loading completion
          resolve();
        }, 3000); // Adjust as needed for realistic loading time
      });
    }
  
    // Function to show loader
    function showLoader() {
      loader.style.opacity = "1"; // Fade in loader
      loader.style.display = "flex"; // Show loader
    }
  
    // Function to hide loader and show content
    function hideLoaderAndShowContent() {
      loader.style.opacity = "0"; // Fade out loader
      setTimeout(() => {
        loader.style.display = "none"; // Hide loader after fade out
        content.style.display = "block"; // Show content
      }, 500); // Delay to sync with fade out animation
    }
  
    // Function to handle loading and content display
    async function handleLoading() {
      try {
        showLoader(); // Show loader immediately
  
        // Check if it's the first visit using sessionStorage
        if (!sessionStorage.getItem("visited")) {
          // Simulate loading data
          await loadData();
  
          // Set sessionStorage to mark as visited
          sessionStorage.setItem("visited", true);
        }
  
        hideLoaderAndShowContent(); // Hide loader and show content
      } catch (error) {
        console.error("Error loading data:", error);
        // Handle error scenario, e.g., show error message or retry mechanism
      }
    }
  
    // Start loading process
    handleLoading();
  });
  