import Repository from "../models/Repo.js";
import Axios from "axios";
import dotenv from 'dotenv'

export const createSearch = async (req, res) => {
  try {
    const apiKey = process.env.GITHUB_API_KEY;
    const { search} = req.body;
    const result = await Axios.get(`https://api.github.com/search/repositories?q=${search}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
    const data = result.data;
    const newSearch = await Repository.create({
      query: search, 
      results: data.items,
    }); 
    res.status(201).json({ message: "consulta almacenada exitosamente", data: newSearch});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la búsqueda" });
  }
};

export const getSearches = async (req, res) => {
  try {
    const searches = await Repository.find();
    res.status(200).json(searches);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las búsquedas" });
  }
};

export const getSearchById = async (req, res) => {
  try {
    const search = await Repository.findById(req.params.id);
    if (!search) {
      return res.status(404).json({ error: "Búsqueda no encontrada" });
    }
    res.status(200).json(search);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la búsqueda" });
  }
};

export const updateSearch = async (req, res) => {
  try {
    const updatedSearch = await Repository.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedSearch) {
      return res.status(404).json({ error: "Búsqueda no encontrada" });
    }
    res.status(200).json(updatedSearch);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la búsqueda" });
  }
};

export const deleteSearch = async (req, res) => {
  try {
    const deletedSearch = await Repository.findByIdAndRemove(req.params.id);
    if (!deletedSearch) {
      return res.status(404).json({ error: "Búsqueda no encontrada" });
    }
    res.status(200).json({ message: "Búsqueda eliminada exitosamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la búsqueda" });
  }
};
