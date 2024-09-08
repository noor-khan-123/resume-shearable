document.getElementById('resume-form')!.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
  
    const resumeOutput = `
      <h2>${name}</h2>
      <p>Email: ${email}</p>
      <h3>Education</h3>
      <p>${education}</p>
      <h3>Work Experience</h3>
      <p>${workExperience}</p>
      <h3>Skills</h3>
      <p>${skills}</p>
      <a href="https://${username}.vercel.app/resume" target="_blank">Shareable Link</a>
      <button id="download-pdf">Download as PDF</button>
    `;
  
    document.getElementById('resume-output')!.innerHTML = resumeOutput;
  
    document.getElementById('download-pdf')!.addEventListener('click', function() {
      const element = document.createElement('a');
      const file = new Blob([resumeOutput], { type: 'application/pdf' });
      element.href = URL.createObjectURL(file);
      element.download = `${username}_resume.pdf`;
      document.body.appendChild(element);
      element.click();
    });
  });
  