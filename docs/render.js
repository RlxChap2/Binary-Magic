// Function to update GitHub URLs based on the selected language
document.getElementById("language").addEventListener("change", function () {
    const language = this.value;
    const codeElement = document.getElementById("raw-code");
  
    // Update GitHub URLs
    document.getElementById(
      "github-repo"
    ).href = `https://github.com/RlxChap2/Binary-Magic`;
    document.getElementById(
      "examples"
    ).href = `https://github.com/RlxChap2/Binary-Magic/blob/main/examples/main.example.${language}`;
  
    // Update the code language class for Prism.js
    codeElement.className = `language-${language}`;
  
    // Fetch the raw code for the selected language
    fetch(
      `https://raw.githubusercontent.com/RlxChap2/Binary-Magic/main/examples/main.example.${language}`
    )
      .then((response) => response.text())
      .then((data) => {
        codeElement.textContent = data;
  
        // Apply Prism.js syntax highlighting
        Prism.highlightElement(codeElement);
      })
      .catch((error) => {
        console.error("Error fetching the code:", error);
        codeElement.textContent = "// Unable to fetch example code.";
      });
  });
  
  // Trigger the change event to set the initial state
  document.getElementById("language").dispatchEvent(new Event("change"));
  