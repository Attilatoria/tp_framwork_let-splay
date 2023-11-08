import axios from 'axios';

export async function findme() {
    const token = sessionStorage.getItem('token');
    const headers = { headers: { 'Authorization': 'Bearer ' + token } }
    const { data } = await axios.get('https://api.joeleprof.com/lets-play/me', headers);

    return data.data;
}

export async function deleteMe() {
    const token = sessionStorage.getItem('token');
    const headers = { headers: { 'Authorization': 'Bearer ' + token } }
    const { data } = await axios.delete('https://api.joeleprof.com/lets-play/me', headers);

    return data.data;
}
