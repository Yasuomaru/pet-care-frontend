import { base_url } from '../base_url';
import axios from 'axios';

const entity = 'pets';

export async function getAllPets() {
    return axios.get(`${base_url}/${entity}`);
}

export async function getPetById(id) {
    return await axios.get(`${base_url}/${entity}/${id}`);
}

async function createPet(pet) {
    return await axios.post(`${base_url}/${entity}`, pet);
}

async function updatePet(pet) {
    return await axios.put(`${base_url}/${entity}/${pet.id}`, pet);
}

export async function createOrUpdatePet(pet) {
    if (pet.id) {
        return await updatePet(pet);
    } else {
        return await createPet(pet);
    }
}

export async function deletePet(id) {
    return await axios.delete(`${base_url}/${entity}/${id}`);
}