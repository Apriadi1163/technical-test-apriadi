const express = require("express");

const router = express.Router();

const { addProvinsi, getProvinsis, getProvinsi, updateProvinsi, deleteProvinsi } = require("../controllers/provinsi")
const { addKabupaten, getKabupatens, getKabupaten, updateKabupaten, deleteKabupaten} = require("../controllers/kabupaten")
const { uploadFile } = require("../middleware/uploadFile")

router.post("/provinsi", uploadFile("image"), addProvinsi)
router.get("/provinsi", getProvinsis)
router.get("/provinsi/:id", getProvinsi)
router.patch("/provinsi/:id", uploadFile("image"), updateProvinsi)
router.delete("/provinsi/:id", deleteProvinsi)

router.post("/kabupaten", uploadFile("image"), addKabupaten)
router.get("/kabupaten", getKabupatens)
router.get("/kabupaten/:id", getKabupaten)
router.patch("/kabupaten/:id", uploadFile("image"), updateKabupaten)
router.delete("/kabupaten/:id", deleteKabupaten)

module.exports = router