(() => {
    //varaiable stach first
    const courseInfo = document.querySelector('.profPanelText').querySelectorAll('p');

    //write function in the middle
    function setcourseInfo(data){
        courseInfo[0].textContent = data.coursename;
        courseInfo[0].innerHTML += ` - <span class="text-primary">${data.coursecode}</span>`;

        // add prof name
        courseInfo[1].textContent = ` Professor: ${data.profname}`;

        //add prof image
        document.querySelectorAll('.profileimg'[1].src = 'images/${data.profimage})';
        

        // add time
         data.classtime.forEach(time => {
             let newTime = `<li><span class="fa fa-clock-o">${time}</span>`;
             courseInfo[1].parentElement.querySelector('ul').innerHTML += newTime;
         });
    }
    // call the courseinfo function
    setcourseInfo(classData);
})();