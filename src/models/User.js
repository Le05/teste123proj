const { Model, DataTypes } = require('sequelize');

class User extends Model{
    static init(connection){
        super.init({
            cpf:DataTypes.STRING,
            nome:DataTypes.STRING,
            telefone:DataTypes.STRING,
            data_nascimento:DataTypes.DATEONLY,
            created_at:DataTypes.DATE,
            updated_at:DataTypes.DATE,
            deleted_at:DataTypes.DATE,
        },{
            sequelize:connection
        });
    }
}

module.exports = User;