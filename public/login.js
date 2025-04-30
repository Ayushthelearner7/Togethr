const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (res.ok) {
    alert("Login successful!");
    // Redirect to dashboard (coming next)
    window.location.href = "dashboard.html";
  } else {
    alert("Login failed: " + data.message);
  }
});
if (res.ok) {
    localStorage.setItem("user", JSON.stringify(data.user)); // 🔥 store user in browser
    alert("Login successful!");
    window.location.href = "dashboard.html";
  }
  