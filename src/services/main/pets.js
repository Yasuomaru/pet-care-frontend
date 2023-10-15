import { base_url } from './base';
import axios from 'axios';

const entity = 'pets';

const urlBuilder = (id) => id ? `${base_url}/${entity}/${id}` : `${base_url}/${entity}`;

const errorHandler = (error) => {
    console.error('API Error:', error);
    throw error;
};

export async function getAllPets() {
    try {
        const response = await axios.get(urlBuilder());
        console.log(response)
        return response.data;
    } catch (error) {
        errorHandler(error)
    }
}

export async function getPetById(id) {
    console.log("Getting pet by id")
    const response = await axios.get(urlBuilder(id));
    console.log(response)
    return response.data;
}

async function createPet(pet) {
    console.log("Createing pet")
    try {
        const response = await axios.post(urlBuilder(), pet);
        console.log(response)
        return response.data;
    } catch (error) {
        errorHandler(error)
    }
}

async function updatePet(pet) {
    console.log('Updating pet')
    try {
        const reponse = await axios.put(urlBuilder(pet.id), pet);
        console.log(reponse);
        return reponse.data;
    } catch (error) {
        errorHandler(error)
    }
}

export async function createOrUpdatePet(pet) {
    if (pet.id) {
        return await updatePet(pet);
    } else {
        return await createPet(pet);
    }
}

export async function deletePet(id) {
    console.log("Deleting pet")
    try {
        const response = await axios.delete(urlBuilder(id));
        console.log(response)
        return response.data;
    } catch (error) {
        errorHandler(error)
    }
}