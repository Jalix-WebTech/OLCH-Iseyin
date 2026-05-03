// Service Modal Script
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('service-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const closeBtn = document.querySelector('.close');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  // Get all service buttons
  const serviceBtns = document.querySelectorAll('.service-btn');

  // Add click event to each button
  serviceBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const title = this.getAttribute('data-title');
      const desc = this.getAttribute('data-desc');
      modalTitle.textContent = title;
      modalDesc.textContent = desc;
      modal.style.display = 'block';
    });
  });

  // Close modal when clicking close button (×)
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // Close modal when clicking close button
  modalCloseBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});