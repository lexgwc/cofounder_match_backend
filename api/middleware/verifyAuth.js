import jwt from 'jsonwebtoken';
import 'dotenv/config.js';

const SECRET = process.env.SECRET;

const verifyAuth = (req, res, next) => {
  const tokenHeader = req.headers.authorization;
  if (!tokenHeader) {
    return res.status(401).json({
      tokenError: "No token provided, please login",
    });
  }

  try {
    const token = tokenHeader.substring(7); // Assuming a "Bearer " prefix
    const decoded = jwt.verify(token, SECRET); // This decodes the token
    
    // Assuming your token payload includes a user ID field named 'id'
    // Attach the user's information to the request object
    if (decoded && decoded.id) {
      req.user = { id: decoded.id };
      next();
    } else {
      // If the token doesn't include an 'id', consider it invalid
      return res.status(498).json({
        tokenError: "Invalid token, please re-authenticate",
      });
    }
  } catch (error) {
    console.error("JWT verification error:", error.message);
    return res.status(498).json({
      tokenError: "Invalid token or expired, re-authenticate",
    });
  }
};

export default verifyAuth;
