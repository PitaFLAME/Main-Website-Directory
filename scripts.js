document.addEventListener('DOMContentLoaded', function() {
    const triggers = document.querySelectorAll('.trigger-dropdown');
  
    triggers.forEach(trigger => {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
  
        const dropdown = this.nextElementSibling;
  
        const isExpanded = dropdown.style.height !== '0px';
  
        document.querySelectorAll('.dropdown-container').forEach(d => {
          d.style.height = '0px';
        });
  
        
        if (!isExpanded) {
          const scrollHeight = dropdown.scrollHeight;
          dropdown.style.height = scrollHeight + 'px';
        } else {
          dropdown.style.height = '0px';
        }
      });
    });
  });