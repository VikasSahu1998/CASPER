const GeoJsonService = require('../services/geojsonService');

class GeoJsonController {
  static async getGeoJsonFile(req, res) {
    const { filename } = req.params;
    try {
      const encryptedGeoJsonData = await GeoJsonService.getGeoJson(filename);
      res.status(200).send(encryptedGeoJsonData);
    } catch (error) {
      res.status(404).json({ error: 'File not found or invalid' });
    }
  }
}

module.exports = GeoJsonController;
