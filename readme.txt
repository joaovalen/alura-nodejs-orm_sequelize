npx sequelize init  /  npx sequelize init --force


npx sequelize-cli model:create --name Users --attributes nane:string,active:boolean,email:string,role:string

npx sequelize-cli db:migrate
// roda as migrations, se baseia no sequelizemeta pra ver o que já rolou

npx sequelize-cli db:migrate:undo:all
// desroda as migrations, se baseia no sequelizemeta pra ver o que já rolou
