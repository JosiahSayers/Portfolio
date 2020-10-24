const apiUrl = 'https://sidelog-production.herokuapp.com/logs';
const clientId = '37ddeb0e-3ec9-4fd9-ba54-662c72da4cb7';

const sendLog = (content) => {
  fetch(apiUrl, {
    method: 'POST',
    body: typeof content === 'string' ? content : JSON.stringify(content),
    headers: {
      clientId,
      'Content-Type': 'application/json'
    }
  }).then(() => { }).catch(() => { });
}



var logger = {
  projectInteraction: (projectName, viewType) => {
    sendLog({
      message: 'Project Interaction',
      level: 'info',
      json: {
        projectName,
        viewType
      }
    });
  },

  resumeView: () => {
    sendLog({
      message: 'Resume Clicked',
      level: 'info'
    });
  },

  socialInteraction: (type) => {
    sendLog({
      message: 'Social Interaction',
      level: 'info',
      json: {
        type
      }
    });
  },

  onPageLoad: () => {
    sendLog({
      message: 'Page Loaded',
      level: 'info'
    });
  }
}
