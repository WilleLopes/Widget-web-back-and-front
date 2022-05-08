"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
// origin : 'https://localhost:3000'
})); //server para dar segurança na aplicação
app.use(express_1.default.json());
app.use(routes_1.routes);
app.listen(3333, () => {
    console.log('HTTP server running!');
});
// #SOLID
// 1. Single Responsibility Principle
// 2. Open/Closed Principle
// 3. Liskov Substitution Principle
// 4. Interface Segregation Principle
// 5. Dependency Inversion Principle
//os 5 princípios da programação
// 1. Cada classe tem uma responsabilidade única;
// 2. As classes da aplicação devem ser abertas para extensão mas fechadas para modificação;
// 3. Nós devemos poder substituir uma classe pai por uma herança dela e tudo continuar funcionando;
// 4. Se uma classe pai for trocada por uma classe filha o projeto deve continuar 
//funcionando normalmente, ou seja as heranças devem ser adquiridas corretamente
// 5. A classe não deve buscar as dependências mais sim o contexto externo diz quais as 
//dependências que a classe deve usar
// GET, POST, PUT, PATCH, DELETE
// GET = Buscar informações
// POST = Cadastrar informações
// PUT = Atualizar informações de uma entidade
// PATCH = Atualizar uma informação única de uma entidade
// DELETE = Deletar uma informação
