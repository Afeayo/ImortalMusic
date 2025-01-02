document.addEventListener("DOMContentLoaded", () => {
  // Select all download buttons
  const downloadButtons = document.querySelectorAll(".download-btn");

  downloadButtons.forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault(); // Prevent default action to handle the message
      const songName = button.getAttribute("data-song");
      const downloadLink = button.getAttribute("data-src");

      // Find the corresponding info paragraph
      const infoParagraph = button.nextElementSibling;

      // Update the download message
      infoParagraph.textContent = `Downloading "${songName}"...`;

      // Start the download
      const anchor = document.createElement("a");
      anchor.href = downloadLink;
      anchor.download = downloadLink.split("/").pop(); // Extract filename
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    });
  });
});
