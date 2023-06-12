const validatePokemon = async (req, res, next) => {
  const { name, life, strength, defense, speed, height, weight, img, types } =
    req.body;

  if (!name || !life || !strength || !defense || !speed || !height || !weight)
    return res.status(400).json({ error: "Missing fields" });

  if (typeof name !== "string")
    return res.status(400).json({ error: "Name must be a string" });

  if (name.length > 36)
    return res.status(400).json({ error: "Name must be less than 36 chars" });

  if (typeof life !== "number")
    return res.status(400).json({ error: "Life must be a number" });

  if (life < 0 || life > 100)
    return res.status(400).json({ error: "Life must be between 0 and 100" });

  if (typeof strength !== "number")
    return res.status(400).json({ error: "Strength must be a number" });

  if (strength < 0 || strength > 100)
    return res
      .status(400)
      .json({ error: "Strength must be between 0 and 100" });

  if (typeof defense !== "number")
    return res.status(400).json({ error: "Defense must be a number" });

  if (defense < 0 || defense > 100)
    return res.status(400).json({ error: "Defense must be between 0 and 100" });

  if (typeof speed !== "number")
    return res.status(400).json({ error: "Speed must be a number" });

  if (speed < 0 || speed > 100)
    return res.status(400).json({ error: "Speed must be between 0 and 100" });

  if (typeof height !== "number")
    return res.status(400).json({ error: "Height must be a number" });

  if (height < 0 || height > 100)
    return res.status(400).json({ error: "Height must be between 0 and 100" });

  if (typeof weight !== "number")
    return res.status(400).json({ error: "Weight must be a number" });

  if (weight < 0 || weight > 100)
    return res.status(400).json({ error: "Weight must be between 0 and 100" });

  if (typeof img !== "string")
    return res.status(400).json({ error: "Img must be a string" });

  if (types.length <= 2)
    return res.status(400).json({ error: "Types must be at least 2" });

  next();
};

module.exports = validatePokemon;
