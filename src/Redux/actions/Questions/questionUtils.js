const redmineConfig = (getState) => {

    const token = getState().auth.token;

    const config = {
      headers: {
        "Content-type": "application/json",
        'X-Redmine-API-Key': '492bf0e5a0f16373cf6779deff49a3c6331751b1'
      },
    };
  
    if (token) {
      config.headers["auth-token"] = token;
    }
  
    return config;
  };

export default redmineConfig;