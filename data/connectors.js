import Sequelize from 'sequelize';

const Conn = new Sequelize(
    'gis',
    'docker',
    'docker',
    {
        dialect: 'postgres',
        host: 'localhost'
    }
)

const Country = Conn.define('test', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    geom: {
        type: Sequelize.GEOMETRY,
        allowNull: false
    },
},{
    freezeTableName: true,
    timestamps: false,

})

Conn.sync()

export default Conn;