var students = [];
function submit()
{
    var name1 = document.getElementById("student1").value;
    var name2 = document.getElementById("student2").value;
    var name3 = document.getElementById("student3").value;
    var name4 = document.getElementById("student4").value;
    var name5 = document.getElementById("student5").value;
    students.push(name1, name2, name3, name4, name5);
    console.log(students)
    document.getElementById("display").innerHTML = students;
    document.getElementById("submitbutton").style.display = "none";
    document.getElementById("sortbutton").style.display = "inline-block";
}
function sorting()
{
    students.sort()
    console.log(students)
    document.getElementById("display").innerHTML = students;
    document.getElementById("sortbutton").style.display = "none";
    document.getElementById("submitbutton").style.display = "inline-block";
    document.getElementById("student1").value = "";
    document.getElementById("student2").value = "";
    document.getElementById("student3").value = "";
    document.getElementById("student4").value = "";
    document.getElementById("student5").value = "";
}