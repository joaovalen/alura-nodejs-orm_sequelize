module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Registers', [
			{
				status: "confirmado",
				student_id: 1,
				classroom_id: 1,
				createdAt: new Date(),
				updatedAt: new Date()
		},
		{
			status: "confirmado",
			student_id: 2,
			classroom_id: 1,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "confirmado",
			student_id: 3,
			classroom_id: 2,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "confirmado",
			student_id: 4,
			classroom_id: 3,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "cancelado",
			student_id: 1,
			classroom_id: 2,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "cancelado",
			student_id: 2,
			classroom_id: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		}
		], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Registers', null, {})
  }
}
