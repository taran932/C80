name_of_student_array=[];

function submit() {
    var displaystudentarray=[];

    for(var j=1; j<4; j++){
        var name_of_student=document.getElementById("name_of_the_student_" +j).value;
        console.log(name_of_student);
        name_of_student_array.push(name_of_student);
    }
    var lengthofstudentarray=name_of_student_array.length();
    console.log(lengthofstudentarray);

    for(var k=0; k<lengthofstudentarray; k++){
        displaystudentarray.push("<h4>Name- "+name_of_student_array[k]+"</h4>");
        console.log(displaystudentarray);
    }
    console.log(displaystudentarray);
    document.getElementById("display_name_with_commas").innerHTML=displaystudentarray;
    var remove_commas=displaystudentarray.join("");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting() {
    name_of_student_array.sort();
    console.log(name_of_student_array);
    var display_student_array_sorting = [];
    var length_of_name_of_students_array = name_of_student_array.length;
    console.log(length_of_name_of_students_array);

    for (vark=0; k<length_of_name_of_students_array; k++){
        display_student_array_sorting.push("<h4>NAME - "+ name_of_student_array[k] + "</h4>");
        console.log(display_student_array_sorting);
    }

    var remove_commas = display_student_array_sorting.join("");
    console.log(remove_commas);

    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}