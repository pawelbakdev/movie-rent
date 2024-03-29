const { User } = require("../../../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const mongoose = require("mongoose");

describe("user.generateAuthToken", () => {
  it("should return valid JWT", () => {
    const payload = {
      _id: new mongoose.Types.ObjectId().toHexString(),
      isAdmin: true,
    };
    const user = new User(payload);

    const token = user.generateAuthToken();
    const decode = jwt.verify(token, process.env.JWT_PRIVATE_KEY);

    expect(decode).toMatchObject(payload);
  });
});
