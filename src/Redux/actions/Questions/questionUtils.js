const redmineConfig = (getState) => {

    const token = getState().auth.token;

    const config = {
      headers: {
        "Content-type": "application/json",
        "X-Redmine-API-Key": "8c9aee949ccd13618540b5b3829e182181dd408e",
      },
    };
  
    if (token) {
      config.headers["auth-token"] = token;
    }
  
    return config;
  };

export default redmineConfig;