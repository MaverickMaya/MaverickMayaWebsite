// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Simple Blog Post Filter (optional)
const searchInput = document.createElement('input');
searchInput.placeholder = 'Search blogs...';
searchInput.style.margin = '1em 0';
document.querySelector('#blogs').prepend(searchInput);

searchInput.addEventListener('input', function () {
  const query = this.value.toLowerCase();
  document.querySelectorAll('.blog-post').forEach(post => {
    const title = post.querySelector('h3').textContent.toLowerCase();
    post.style.display = title.includes(query) ? 'block' : 'none';
  });
});
