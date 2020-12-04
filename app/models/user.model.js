module.exports = (sequelize, Sequelize) => {
    const Person = sequelize.define("persons", {
      Person_Id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      group_id:{
          type:Sequelize.INTEGER,
          
      },
      grno_EmpCode:{
        type:Sequelize.STRING
      },
      username:{
        type:Sequelize.STRING
      },
      college:{
        type:Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      Mobile:{
        type:Sequelize.INTEGER
      },
      password: {
        type: Sequelize.STRING
      }
    });
  
    return Person;
  };