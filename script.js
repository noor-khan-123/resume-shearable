document.getElementById('resume-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    var resumeOutput = "\n      <h2>".concat(name, "</h2>\n      <p>Email: ").concat(email, "</p>\n      <h3>Education</h3>\n      <p>").concat(education, "</p>\n      <h3>Work Experience</h3>\n      <p>").concat(workExperience, "</p>\n      <h3>Skills</h3>\n      <p>").concat(skills, "</p>\n      <a href=\"https://").concat(username, ".vercel.app/resume\" target=\"_blank\">Shareable Link</a>\n      <button id=\"download-pdf\">Download as PDF</button>\n    ");
    document.getElementById('resume-output').innerHTML = resumeOutput;
    document.getElementById('download-pdf').addEventListener('click', function () {
        var element = document.createElement('a');
        var file = new Blob([resumeOutput], { type: 'application/pdf' });
        element.href = URL.createObjectURL(file);
        element.download = "".concat(username, "_resume.pdf");
        document.body.appendChild(element);
        element.click();
    });
});
