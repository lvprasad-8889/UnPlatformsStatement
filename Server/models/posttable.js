module.exports = (sequelize,Sequelize)=>{
    const posttable = sequelize.define("posttable",{
        views:{
            type:Sequelize.INTEGER,
        },
        likes:{
            type:Sequelize.INTEGER,
        },
        comments:{
            type:Sequelize.JSON
        },
        shares:{
            type:Sequelize.INTEGER,
        }
    }
)
return posttable;
}