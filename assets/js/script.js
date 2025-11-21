
fetch("menu.html")
.then(response => response.text())
.then(data => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("hidden");
  sidebar.innerHTML = data;
  
  const toggles = document.querySelectorAll(".toggle");
  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const nested = toggle.nextElementSibling;
      if (!nested) return;
      nested.classList.toggle("active");
      toggle.textContent = nested.classList.contains("active")
        ? toggle.textContent.replace("▸", "▾")
        : toggle.textContent.replace("▾", "▸");
    });
  });
});

// document.addEventListener("DOMContentLoaded", () => {
  // Copy button functionality
  document.querySelectorAll("#menu-toggle").forEach(toggleBtn => {
    toggleBtn.addEventListener("click", () => {
      const sidebar = document.querySelector(".sidebar");
      const isHidden = sidebar.classList.toggle("hidden");
      toggleBtn.textContent = isHidden ? "☰" : "✖";
    });
  });
  
  document.querySelectorAll(".copy-btn").forEach(button => {
    button.addEventListener("click", () => {
      const codeBlock = button.nextElementSibling.querySelector("code");
      let text = codeBlock.innerText.trim();
      navigator.clipboard.writeText(text).then(() => {
        button.textContent = "Copied!";
        setTimeout(() => (button.textContent = "Copy"), 2000);
      });
    });
  });

  // Folder tree expand/collapse
  document.querySelectorAll(".folder-tree .tree-toggle").forEach(toggle => {
    toggle.addEventListener("click", () => {
      const nested = toggle.nextElementSibling;
      if (!nested || !nested.classList.contains("nested")) return;
      nested.classList.toggle("active");
      toggle.classList.toggle("open");
    });
  });

  // Sidebar folder expand/collapse
  const toggles = document.querySelectorAll(".sidebar .toggle");
  toggles.forEach(toggle => {
    const nested = toggle.nextElementSibling;
    if (!nested) return;

    nested.style.maxHeight = "0";
    nested.style.overflow = "hidden";

    toggle.addEventListener("click", () => {
      const isExpanded = nested.classList.contains("active");
      if (isExpanded) {
        nested.style.maxHeight = "0";
        nested.classList.remove("active");
        toggle.textContent = toggle.textContent.replace("▾", "▸");
      } else {
        nested.classList.add("active");
        nested.style.maxHeight = nested.scrollHeight + "px";
        toggle.textContent = toggle.textContent.replace("▸", "▾");
      }
    });
  }); 
// });
