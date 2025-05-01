document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("user"));
  
    if (user) {
      document.getElementById("userGreeting").innerText = `Hi ${user.name}, glad to see you!`;
    } else {
      alert("You're not logged in");
      window.location.href = "login.html";
    }
  });
  
  function logout() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
  }
  