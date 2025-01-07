// Function to detect if the user is on a laptop
function isLaptop() {
    const userAgent = navigator.userAgent.toLowerCase();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
  
    // Check for common mobile or tablet identifiers
    const isMobileDevice = /iphone|ipad|android|mobile|tablet|ipod|blackberry|opera mini|windows phone/i.test(userAgent);
  
    // Additional condition: assume laptop if screen width is larger than 1024px (desktop-like resolution)
    const isLaptopScreen = screenWidth >= 1024 && screenHeight >= 600;
  
    return !isMobileDevice && isLaptopScreen;
  }
  
  // Function to block access and show popup
  function blockSiteOnNonLaptop() {
    if (!isLaptop()) {
      // Hide the site content
      document.body.innerHTML = "";
  
      // Create a popup message
      const popup = document.createElement("div");
      popup.style.position = "fixed";
      popup.style.top = "50%";
      popup.style.left = "50%";
      popup.style.transform = "translate(-50%, -50%)";
      popup.style.padding = "20px";
      popup.style.backgroundColor = "white";
      popup.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      popup.style.textAlign = "center";
      popup.style.fontFamily = "Arial, sans-serif";
      popup.style.zIndex = "9999";
  
      // Add the popup content
      popup.innerHTML = `
        <h2>Access Restricted</h2>
        <p>I told you to open it on a laptop.</p>
      `;
  
      // Append the popup to the body
      document.body.appendChild(popup);
    }
  }
  
  // Run the function on page load
  window.onload = blockSiteOnNonLaptop;
  

  let password = "password";
  (function passcodeprotect() {
      let passcode = prompt("Question 2");
      while (passcode !== password) {
          alert("Incorrect PassCode");
          return passcodeprotect();
      }
  }());
  alert('Love You!');
    document.getElementById("container")
        .style.display = "block";