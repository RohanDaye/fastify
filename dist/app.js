"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const student_routes_1 = __importDefault(require("./routes/student.routes"));
const db_1 = __importDefault(require("./utils/db"));
const app = (0, fastify_1.default)();
app.register(student_routes_1.default);
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.default.sync({ force: false });
        yield app.listen({ port: 3000 });
        console.log('Server running at http://localhost:3000');
    }
    catch (error) {
        console.error('Error starting server:', error);
        process.exit(1);
    }
});
startServer();
