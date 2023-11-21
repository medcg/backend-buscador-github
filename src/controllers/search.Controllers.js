import Search from '../models/Search.js';

export const createSearch = async (req, res) => {
  try {
    const newSearch = await Search.create(req.body);
    res.status(201).json(newSearch);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la búsqueda' });
  }
};

export const getSearches = async (req, res) => {
  try {
    const searches = await Search.find();
    res.status(200).json(searches);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las búsquedas' });
  }
};

export const getSearchById = async (req, res) => {
  try {
    const search = await Search.findById(req.params.id);
    if (!search) {
      return res.status(404).json({ error: 'Búsqueda no encontrada' });
    }
    res.status(200).json(search);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la búsqueda' });
  }
};

export const updateSearch = async (req, res) => {
  try {
    const updatedSearch = await Search.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedSearch) {
      return res.status(404).json({ error: 'Búsqueda no encontrada' });
    }
    res.status(200).json(updatedSearch);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la búsqueda' });
  }
};

export const deleteSearch = async (req, res) => {
  try {
    const deletedSearch = await Search.findByIdAndRemove(req.params.id);
    if (!deletedSearch) {
      return res.status(404).json({ error: 'Búsqueda no encontrada' });
    }
    res.status(200).json({ message: 'Búsqueda eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la búsqueda' });
  }
};

