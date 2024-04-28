window.onload = function () {
  displayRecords();
};

function markAttendance() {
  const studentId = document.getElementById("studentId").value;
  if (studentId) {
    const currentDate = new Date().toLocaleString();
    const attendanceRecord = { studentId, time: currentDate };

    let records = JSON.parse(localStorage.getItem("attendanceRecords")) || [];
    records.push(attendanceRecord);
    localStorage.setItem("attendanceRecords", JSON.stringify(records));

    document.getElementById("studentId").value = "";
    addRecordToList(attendanceRecord);
  } else {
    alert("Please enter a Student ID");
  }
}

function displayRecords() {
  const records = JSON.parse(localStorage.getItem("attendanceRecords")) || [];
  records.forEach((record) => addRecordToList(record));
}

function addRecordToList(record) {
  const listElement = document.createElement("li");
  listElement.textContent = `Student ID: ${record.studentId} - Time: ${record.time}`;
  document.getElementById("attendanceRecords").appendChild(listElement);
}

function toggleListVisibility() {
  var recordsList = document.getElementById("attendanceRecords");
  if (recordsList.style.display === "none") {
    recordsList.style.display = "block";
  } else {
    recordsList.style.display = "none";
  }
}
