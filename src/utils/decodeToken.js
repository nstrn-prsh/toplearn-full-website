import jwt from "jsonwebtoken";

export const decodeToken = (token) => {
  return jwt.decode(token, { complete: true });
};

// tokeni ke barmigarde havie payload (data) ast
// ma bayad decodesh konim va to state zakhirash konim ta azash estefade konim
// pas json web token ro nasb mikonim