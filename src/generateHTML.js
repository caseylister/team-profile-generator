const createHTML = function(employeeProfiles) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">

        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <nav class="navbar py-3" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Our Team</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row">
                    ${employeeProfiles}
                </div>
            </div>
        </main>
        
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
  `;

};

generateHTML = function(data) {

    profileArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        if (role === 'Manager') {
            const manager = managerCard(employee);

            profileArray.push(manager);
        }

        if (role === 'Engineer') {
            const engineer = engineerCard(employee);

            profileArray.push(engineer);
        }

        if (role === 'Intern') {
            const intern = internCard(employee);

            profileArray.push(intern);
        }
        
    }

    const employeeProfiles = profileArray.join('')

    const createTeam = createHTML(employeeProfiles); 
    return createTeam;

};

const managerCard = function(manager) {
    return `
        <div class="col-4 mt-3">
            <div class="card h-100" style="width: 18rem;">
                <div class="card-header">
                    <h3>${manager.name}</h3>
                    <h4>Manager</h4><i class="material-icons">corporate_fare</i>
                </div>
                
                <div class="card-body">
                    <p>ID #: ${manager.id}</p>
                    <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                    <p>Office: ${manager.officeNumber}</p>
                </div>
            </div>
        </div>            
    `;
}



module.exports = generateHTML;