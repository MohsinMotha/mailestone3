var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Type assertion
    var profilePictureInput = document.getElementById('profilePivture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone'); // Correct ID here
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var usernameElement = document.getElementById("username");
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        usernameElement;
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value; // Correct value assignment here
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username = usernameElement.value;
        var uniquePath = "resume/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        var profilePicturefile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePicturefile ? URL.createObjectURL(profilePicturefile) : "";
        // Create resume output
        var resumeOutput = "\n            <h2>Resume</h2>\n              ".concat(profilePictureURL ? " <img  src=\"".concat(profilePictureURL, " alt=\"       profile picture\" class=\"profilePicture\">") : "", "\n            <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable> ").concat(name_1, " </span> </p>\n            <p><strong>Email:</strong> <span id=\"edit-edit\" class=\"editable> ").concat(email, "\n             </span> </p>\n            <p><strong>Phone:</strong> <span id=\"edit-mobileno\" class=\"editable> ").concat(phone, "\n            </span> </p>\n  \n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n  \n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n  \n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download Your 2024 Resume';
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
        }
        else {
            console.error('The resume output element is missing.');
        }
    }
    else {
        console.error('One or more input elements are missing.');
    }
});
