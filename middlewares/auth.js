const pool = require("../config/config.js");
const { verifyToken } = require("../utils/jwt.js");

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    if (!token) {
      res.status(401).json({ message: "Unauthenticated" });
    }

    req.user = await verifyToken(token);

    next();
  } catch (error) {
    next();
  }
};

const authorize = async (req, res, next) => {
  const { email, role } = req.user;

  try {
    const result = await pool.query(
      `
        SELECT
        *
        FROM
        users
        WHERE
        email = $1
        `,
      [email]
    );

    if (role !== "Admin" || !result?.rows[0]) {
      return res.status(403).json({ message: "Unauthorized User" });
    }
  } catch (error) {}

  next();
};

module.exports = { authenticate, authorize };
