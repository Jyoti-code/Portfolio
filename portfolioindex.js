function submitEnquiry() {
    // Get the input values from the modal
    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var contact = document.getElementById("contactInput").value;
    var message = document.getElementById("textareaInput").value;

    // Log the values (you can replace this with your desired logic)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Contact:", contact);
    console.log("Message:", message);

    // Close the modal
    var modal = document.getElementById("enquiryModal");
    var modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.hide();
  }

// Function to handle form submission

const form = document.querySelector('.needs-validation');

  // Get the form fields
  const nameInput = form.querySelector('input[type="text"]');
  const emailInput = form.querySelector('input[type="email"]');
  const subjectInput = form.querySelector('input[type="text"]');
  const messageInput = form.querySelector('textarea');

  // Add an event listener for form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate the form fields
    if (form.checkValidity() === false) {
      event.stopPropagation();
      form.classList.add('was-validated');
      return;
    }
    submitForm();
  });

  function submitForm() {
    const formData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      subject: subjectInput.value.trim(),
      message: messageInput.value.trim()
    };
    console.log(formData);
    form.reset();
    form.classList.remove('was-validated');
  }

  function submitEnquiry() {

    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
    var contact = document.getElementById('contactInput').value;
    var message = document.getElementById('textareaInput').value;
  
    if (name === '' || email === '' || contact === '' || message === '') {
      alert('Please fill in all the required fields.');
      return;
    }
  
    alert('Form submitted successfully!');
  }

  