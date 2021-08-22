describe('Portfolio', () => {
  before(() => {
    cy.visit('/');
  });

  it('displays the correct subtitle', () => {
    cy.contains(`I'm Josiah, and I'm a software developer. Let's get to know each other!`);
  });

  it('displays all of the page sections', () => {
    cy.contains('Projects');
    cy.contains('Skills');
    cy.contains('Contact Me');
  });

  describe('Projects', () => {
    it('Displays all of the projects', () => {
      cy.contains('Shrtlnk');
      cy.contains('Sidelog');
      cy.contains('Taco Especial');
      cy.contains('Portfolio');
    });

    describe('Shrtlnk', () => {
      beforeEach(() => cy.contains('Shrtlnk').click());

      it('displays the correct description', () => {
        cy.contains('A link shortening application with an API and developer portal');
      });

      it('displays the correct bullet points', () => {
        cy.contains('Allows users to create shortened links to any webpage');
        cy.contains('Easy to use API for developers');
        cy.contains('Developer portal where a user can create and remove applications, with each one being provided a unique API key. The developer portal also shows statistics about the links created with each application.');
        cy.contains('Chrome extension to quickly create shortened links when browsing any website');
      });

      it('displays the correct technologies', () => {
        cy.contains('.NET Core');
        cy.contains('MongoDB');
        cy.contains('MS SQL Server');
        cy.contains('Swagger');
      });
    });

    describe('Sidelog', () => {
      beforeEach(() => cy.contains('Sidelog').click());

      it('displays the correct description', () => {
        cy.contains('Easy to use and cheap to run logging solution for side projects');
      });

      it('displays the correct bullet points', () => {
        cy.contains('Fully configurable from a single JSON file');
        cy.contains(`Support for multiple application's logs on one server`);
        cy.contains('100% test coverage');
        cy.contains('Single command local setup for easy development utilizing docker-compose');
      });

      it('displays the correct technologies', () => {
        cy.contains('Node.js');
        cy.contains('Express');
        cy.contains('TypeScript');
        cy.contains('Docker');
        cy.contains('MongoDB');
        cy.contains('Jest');
        cy.contains('Angular');
      });
    });

    describe('Taco Especial', () => {
      beforeEach(() => cy.contains('Taco Especial').click());

      it('displays the correct description', () => {
        cy.contains('Service to suggest randomly customized menu items from Taco Bell');
      });

      it('displays the correct bullet points', () => {
        cy.contains('API provides up to date menu information by scraping TacoBell.com and caching the results');
        cy.contains(`Front end app allows the user to fine tune their recommendations by pulling in available customization options from the API`);
      });

      it('displays the correct technologies', () => {
        cy.contains('Svelte');
        cy.contains('Node.js');
        cy.contains('TypeScript');
        cy.contains('Express');
        cy.contains('Cheerio');
        cy.contains('Axios');
      });
    });

    describe('Portfolio', () => {
      beforeEach(() => cy.contains('Portfolio').click());

      it('displays the correct description', () => {
        cy.contains('This website! Built using Svelte and serverless functions');
      });

      it('displays the correct bullet points', () => {
        cy.contains('Contact Me API built with a Node.js serverless function utilizing the MailerSend API to send me an email of each form submission');
        cy.contains('UI built with Svelte');
        cy.contains('Utilizes SvelteKit to generate static assets which helps with page load time and allows the site to render without javascript');
      });

      it('displays the correct technologies', () => {
        cy.contains('Svelte');
        cy.contains('SvelteKit');
        cy.contains('Node.js');
        cy.contains('TypeScript');
        cy.contains('Bulma');
        cy.contains('MailerSend');
      });
    });
  });

  describe('Skills', () => {
    it('displays the correct frontend skills', () => {
      cy.contains('Frontend');
      cy.contains('JavaScript');
      cy.contains('TypeScript');
      cy.contains('Angular');
      cy.contains('Svelte');
      cy.contains('Karma/Jasmine');
    });
    
    it('displays the correct backend skills', () => {
      cy.contains('Backend');
      cy.contains('Node.js');
      cy.contains('Express.js');
      cy.contains('MongoDB');
      cy.contains('SQL');
    });
    
    it('displays the correct cloud skills', () => {
      cy.contains('Cloud');
      cy.contains('Firebase');
      cy.contains('Apigee');
      cy.contains('Google Cloud Platform');
    });
    
    it('displays the correct development tool skills', () => {
      cy.contains('Development Tools');
      cy.contains('Docker');
      cy.contains('Git');
    });
  });

  describe('Contact Me', () => {
    it('displays the correct blurb', () => {
      cy.contains(`Got a site that needs built? Want to reach out about a job opportunity? Need some help getting started in web dev? I'd love to hear from you!`);
    });

    it('displays the correct form inputs', () => {
      cy.get('label[for=name-input]').contains('Your Name');
      cy.get('label[for=email-input]').contains('Your Email');
      cy.get('label[for=message-textarea]').contains('Your Message');
      cy.get('button[type=submit]').contains('Submit');
    });

    it('displays the correct errors when the form is invalid and the user tries to submit', () => {
      cy.get('button[type=submit]').click();
      cy.contains('Please enter your name');
      cy.contains('Please enter a valid email');
      cy.get('label[for=email-input]').type('email.com');
      cy.contains('Please enter a valid email');
      cy.contains('Please enter a message');
    });

    it('submits when the form fields are valid', () => {
      cy.intercept({
        method: 'POST',
        url: '/api/contact-form'
      }, {}).as('submitForm');

      cy.get('label[for=name-input]').type('John Doe');
      cy.get('label[for=email-input]').type('email@email.com');
      cy.get('label[for=message-textarea]').type(`I can't believe how wonderful this website is!`);
      cy.get('button[type=submit]').click();
      cy.wait('@submitForm');
      cy.contains(`I'll be in touch with you shortly`);
      cy.contains('Close').click();
    });
  });

  describe('footer', () => {
    it('displays the correct copywrite', () => {
      cy.contains(`© ${new Date().getFullYear()} Josiah Sayers`);
    });

    it('displays the correct links', () => {
      cy.contains('Github');
      cy.contains('LinkedIn');
      cy.contains('Resume');
    });
  });
});
