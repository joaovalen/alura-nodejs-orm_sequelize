npx sequelize init  /  npx sequelize init --force


MODELS E MIGRATE

model:create cria um arquivo em migrations e um eu models mas você pode criar direto ou alterar lá 

npx sequelize-cli model:create --name Users --attributes name:string,active:boolean,email:string,role:string

npx sequelize-cli model:create --name Levels --attributes description:string

npx sequelize-cli model:create --name Classrooms --attributes start_date:dateonly 

npx sequelize-cli model:create --name Registers --attributes status:string 

- npx sequelize-cli db:migrate
// roda as migrations, se baseia no sequelizemeta pra ver o que já rolou

- npx sequelize-cli db:migrate:undo
// desroda a última migration

- npx sequelize-cli db:migrate:undo:all
// desroda todas as migrations, se baseia no sequelizemeta pra ver o que já rolou

- npx sequelize db:migrate:undo --name [data-hora]-create-[nome-da-tabela].js
// desroda uma migration específica

SEED 

npx sequelize-cli seed:generate --name demo-Users

npx sequelize-cli db:seed:all

npx sequelize db:seed:undo
// desfaz o último feito

npx sequelize-cli db:seed:undo:all
//desfaz todos

npx sequelize-cli db:seed:undo --seed nome-do-arquivo
// desfaz específico
