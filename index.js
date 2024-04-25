const uploadForm = document.getElementById('uploadForm');
const image1Input = document.getElementById('image1');
const image2Input = document.getElementById('image2');
const image1Preview = document.getElementById('image1Preview');
const image2Preview = document.getElementById('image2Preview');
const uploadButton = document.getElementById('uploadButton');
const dropdown = document.getElementById('category')
const resultDiv = document.getElementById('result');
resultDiv.style.display = "none";

    // uploadForm.addEventListener('submit', (event) => {
function handleUpload(event) {
  // console.log("click");
  event.preventDefault(); // Prevent default form submission

  // Handle file selection and display previews (optional server-side validation)
  const file1 = image1Input.files[0];
  const file2 = image2Input.files[0];

  if (!file1 && !file2) {
    alert('Please select at least one image to upload.');
    return;
  }

  if (file1) {
    const reader1 = new FileReader();
    reader1.onload = (e) => {
      image1Preview.src = e.target.result;
      image1Preview.style.display = 'block'; // Show preview on load
    };
    reader1.readAsDataURL(file1);
  }

  if (file2) {
    const reader2 = new FileReader();
    reader2.onload = (e) => {
      image2Preview.src = e.target.result;
      image2Preview.style.display = 'block'; // Show preview on load
    };
    reader2.readAsDataURL(file2);
  }

  const form = document.getElementById('uploadForm');
  const formData = new FormData(form);

  fetch('/upload', {
    method: 'POST',
    body: formData
  })
    .then(response => {
      if (response.ok) {
        response.json()
          .then(data =>{
            console.log(data.msg);
          })
      } else {
        alert('Error uploading images.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error uploading images.');
    });
}

// function handleVerify(event){
//   const model = document.getElementById('category').value;

//   var resultText = "";

//   if(model == ""){
//     alert("Select one of the model");
//   }
//   event.preventDefault();
//   const sendBody = {
//     model : model,
//   }

//   fetch('/verify', {
//     method: 'POST',
//     body: JSON.stringify(sendBody),
//     headers: { 'Content-Type': 'application/json' }
//   })
//     .then(response =>{
//       resultDiv.innerHTML = "Checking . . ."
//       if(response.ok){
//         response.json()
//           .then(data =>{
//             console.log(data);
//             resultText = data;
//             resultDiv.innerHTML = data.msg;
//           })
//       } else {
//         alert('Something went wrong')
//       }
//     })
//     .catch(error => {
//       console.error('Error:', error);
//       alert('Error in verification');
//     });
//     resultDiv.style.display = "block";
// }

function handleVerify(event) {
  const model = document.getElementById('category').value;
  event.preventDefault();

  var resultText = "";

  if (model === "") {
    alert("Select one of the model");
  } else {
    // Set checking text before sending request
    resultDiv.innerHTML = "Checking . . .";
    resultDiv.style.display = "block"; // Ensure the div is visible

    
    const sendBody = {
      model: model,
    };

    fetch('/verify', {
      method: 'POST',
      body: JSON.stringify(sendBody),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        if (response.ok) {
          response.json()
            .then(data => {
              if(data.msg.trim().toLowerCase() == "true"){
                resultDiv.innerHTML = "CREW VERIFIED" 
              } else{
                resultDiv.innerHTML = "OOPS IMPOSTOR HERE";
              }
            })
            .catch(error => {
              console.error('Error parsing response:', error);
              resultDiv.innerHTML = 'OOPS IMPOSTOR FOUND'; 
            });
        } else {
          alert('Something went wrong');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'Error in verification'; // Update with error message
      });
  }
}

