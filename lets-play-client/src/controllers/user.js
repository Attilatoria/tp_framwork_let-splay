import axios from 'axios';


const url = 'https://api.joeleprof.com/lets-play';



export async function find() {
    const token = sessionStorage.getItem('token');
    const headers = { headers: { 'Authorization': 'Bearer ' + token } };
    const { data } = await axios.get(url + '/users', headers);

    return data.data;
}


export async function findById(id) {
    const token = sessionStorage.getItem('token');
    const headers = { headers: { 'Authorization': 'Bearer ' + token } }
    const { data } = await axios.get('https://api.joeleprof.com/lets-play/users/' + id, headers);
    return data.data;
}



export async function deleteUserById(id) {
    const token = sessionStorage.getItem('token');
    const headers = { headers: { 'Authorization': 'Bearer ' + token } }
    const { data } = await axios.delete('https://api.joeleprof.com/lets-play/users/' + id, headers);

    return data;
}

export async function modifyUserById(id) {
    const token = sessionStorage.getItem('token');
    const headers = { headers: { 'Authorization': 'Bearer ' + token } }
    const { data } = await axios.put('https://api.joeleprof.com/lets-play/users/' + id, headers);

    return data;
}