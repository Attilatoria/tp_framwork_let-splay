import axios from 'axios';

const url = 'https://api.joeleprof.com/lets-play';

export async function login(email, password) {
  const body = {
    email: email,
    password: password,
  };

  try {
    const { data } = await axios.post(`${url}/auth/login`, body);
    console.log(data);
    sessionStorage.setItem('token', data.token);
    sessionStorage.setItem('isAdmin', data.isAdmin);
    return data.isAdmin;
  } catch (error) {
    return null;
  }
}


export async function register(username, email, password) {
  const body = {
    username: username,
    email: email,
    password: password,
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.post(`${url}/auth/register`, body, config);
    const data = response.data;
    console.log(data);

    if (data.success) {
      sessionStorage.setItem('token', data.token);
      sessionStorage.setItem('isAdmin', data.isAdmin);
      return true;
    } else {
      console.error("Erreur lors de l'inscription :", data.message);
      return false;
    }
  } catch (error) {
    console.error("bad informations provided :", error);
    return false;
  }
}
