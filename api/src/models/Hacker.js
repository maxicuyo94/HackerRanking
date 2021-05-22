const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('hacker', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // primaryKey: true,
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    profileLink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pictureLink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    education: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    challengersSolved: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    solutionsSubmited: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    solutionsAccepted: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    overallRank: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    followers: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    following: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    noOfVotes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    timestamp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deviceType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    myRank: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    dataStructures: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    algorithms: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    cpp: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    java: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    python: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    html: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    javascript: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  });
};
