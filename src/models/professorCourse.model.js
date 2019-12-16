import { eventsSchema } from '../config/constants';

export default (sequelize, DataTypes) => {
  const ProfessorCourse = sequelize.define('ProfessorCourse',
    {
      id: {
        field: 'id_professor_course',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      insertionUserId: {
        field: 'id_insertion_user',
        type: DataTypes.BIGINT,
        allowNull: false,
      }
    },
    {
      schema: eventsSchema,
      tableName: 'tb_professor_course'
    }
  );

  ProfessorCourse.associate = function (models) {
    /* Pertence */
    ProfessorCourse.belongsTo(models.Professor, {
      foreignKey: {
        field: 'id_professor',
        allowNull: false
      },
      as: 'professor'
    });

    ProfessorCourse.belongsTo(models.Course, {
      foreignKey: {
        field: 'id_course',
        allowNull: false
      },
      as: 'course'
    });
  }

  return ProfessorCourse;
}