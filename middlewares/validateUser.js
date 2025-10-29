module.exports = (req, res, next) => {
  const { name, email, age } = req.body;

  if (!name || !email || !age) {
    return res.status(400).json({ message: 'Please provide name, email, and age' });
  }

  if (typeof age !== 'number' || age <= 0) {
    return res.status(400).json({ message: 'Age must be a positive number' });
  }
  next();
};
