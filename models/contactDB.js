//var bcrypt = require("bcryptjs");
//const { validateSubfields } = require("sequelize-validate-subfields");

module.exports = function (sequelize, DataTypes) {
  var ContactDB = sequelize.define("ContactDB", {
    firstname: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Required",
        },
        is: {
          args: ["^[a-z]+$", "i"],
          msg: "Only letters allowed",
        },
        len: {
          args: [2, 32],
          msg: "String length is not in this range",
        },
      },
    },
    lastname: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Required",
        },
        is: {
          args: ["^[a-z]+$", "i"],
          msg: "Only letters allowed",
        },
        len: {
          args: [2, 32],
          msg: "String length is not in this range",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        args: [/.+@.+\..+/, "Please enter a valid e-mail address"],
      },
    },
    Reason: {
       type: DataTypes.STRING,
       allowNull: false
       
   }
  });

  /*User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  User.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });*/
  return ContactDB;
};
