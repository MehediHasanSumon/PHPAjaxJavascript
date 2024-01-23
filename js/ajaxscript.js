// Ajax call for retrieving and displaying data.
const tbody = document.getElementById("tbody");

function getData() {
  tbody.innerHTML = "";

  // Create XMLHttpRequest Object as xhr.
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "retrieve.php", true);
  xhr.responseType = "json";

  xhr.onload = () => {
    if (xhr.status === 200) {
      // Data retrieved successfully.

      // Process the response data.
      if (xhr.response == true) {
        x = xhr.response;
      } else {
        x = "";
      }

      // Iterate through the response data and update the table.
      for (i = 0; i < xhr.response.length; i++) {
        tbody.innerHTML +=
          "<tr><td>" +
          xhr.response[i].roll +
          "</td><td>" +
          xhr.response[i].name +
          "</td><td>" +
          xhr.response[i].department +
          "<td><button class='btn-edit' data-stuId='" +
          xhr.response[i].id +
          "'>Edit</button><button type='submit' class='btn-delete' data-stuId='" +
          xhr.response[i].id +
          "'>Delete</button></td></tr>";
      }
    } else {
      // Error handling if the request is not successful.
      document.getElementById("msg").innerHTML =
        "<div class='wraning'>Problem Occurred</div>";
    }

    // Attach event listeners for edit and delete actions.
    editData();
    deleteData();
  };

  // Send the GET request.
  xhr.send();
}

// Initial data retrieval on page load.
getData();

// Ajax call for inserting new data.
const addStudent = document.getElementById("submit");
addStudent.addEventListener("click", addNewStudent);

function addNewStudent(e) {
  e.preventDefault();

  // Get form data.
  const id = document.getElementById("student_id").value;
  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;
  const department = document.getElementById("department").value;

  // Create XMLHttpRequest Object as xhr.
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "insert.php", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = () => {
    if (xhr.status === 200) {
      // Handle response based on different scenarios.

      // Display warning if all fields are required.
      if (xhr.responseText == "required") {
        document.getElementById("msg").innerHTML =
          "<div class='wraning'>All fields are required</div>";
      }

      // Display success message if data is added successfully.
      if (xhr.responseText == "success") {
        document.getElementById("msg").innerHTML =
          "<div class='success'>Student information updated.</div>";
        document.getElementById("formData").reset();
        getData();
      }

      // Display warning if data addition fails.
      if (xhr.responseText == "failed") {
        document.getElementById("msg").innerHTML =
          "<div class='wraning'>Student information added failed.</div>";
      }
    } else {
      // Error handling if the request is not successful.
      document.getElementById("msg").innerHTML =
        "<div class='wraning'>Problem Occurred</div>";
    }
  };

  // Prepare and send data as JSON.
  const myData = { id: id, name: name, roll: roll, department: department };
  const sendData = JSON.stringify(myData);
  xhr.send(sendData);

  // Refresh data after insertion.
  getData();
}

// Ajax call for editing data.
function editData() {
  let getClass = document.getElementsByClassName("btn-edit");
  var id = document.getElementById("student_id");
  var name = document.getElementById("name");
  var roll = document.getElementById("roll");
  var department = document.getElementById("department");

  for (let i = 0; i < getClass.length; i++) {
    getClass[i].addEventListener("click", () => {
      getID = getClass[i].getAttribute("data-stuId");

      // Create XMLHttpRequest Object as xhr.
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "edit.php", true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.responseType = "json";

      xhr.onload = () => {
        if (xhr.status === 200) {
          // Display data for editing.

          data = xhr.response;
          id.value = data.id;
          name.value = data.name;
          roll.value = data.roll;
          department.value = data.department;
        } else {
          // Error handling if the request is not successful.
          document.getElementById("msg").innerHTML =
            "<div class='wraning'>Problem Occurred</div>";
        }
      };

      // Prepare and send data as JSON.
      const myData = { id: getID };
      const sendData = JSON.stringify(myData);
      xhr.send(sendData);
    });
  }
}

// Ajax call for deleting data.
function deleteData() {
  let getClass = document.getElementsByClassName("btn-delete");

  for (let i = 0; i < getClass.length; i++) {
    getClass[i].addEventListener("click", () => {
      getID = getClass[i].getAttribute("data-stuId");

      // Create XMLHttpRequest Object as xhr.
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "delete.php", true);
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onload = () => {
        if (xhr.status === 200) {
          // Handle response based on different scenarios.

          // Display success message if data is deleted successfully.
          if (xhr.responseText == "success") {
            document.getElementById("msg").innerHTML =
              "<div class='success'>Student information deleted.</div>";
            getData();
          }

          // Display warning if data deletion fails.
          if (xhr.responseText == "failed") {
            document.getElementById("msg").innerHTML =
              "<div class='wraning'>Student information delete failed.</div>";
          }
        } else {
          // Error handling if the request is not successful.
          document.getElementById("msg").innerHTML =
            "<div class='wraning'>Problem Occurred</div>";
        }
      };

      // Prepare and send data as JSON.
      const myData = { id: getID };
      const sendData = JSON.stringify(myData);
      xhr.send(sendData);
    });
  }
}
