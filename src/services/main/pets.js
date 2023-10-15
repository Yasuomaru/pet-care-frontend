import { base_url } from '../base_url';
import axios from 'axios';

const entity = 'pets';

export function getAllPets() {
    return axios.get(`${base_url}/${entity}`);
}

export function getPetById(id) {
    return axios.get(`${base_url}/${entity}/${id}`);
}

function createPet(pet) {
    return axios.post(`${base_url}/${entity}`, pet);
}

function updatePet(pet) {
    return axios.put(`${base_url}/${entity}/${pet.id}`, pet);
}

export function createOrUpdatePet(pet) {
    if (pet.id) {
        return updatePet(pet);
    } else {
        return createPet(pet);
    }
}

export function deletePet(id) {
    return axios.delete(`${base_url}/${entity}/${id}`);
}