// - Create an Abstract Class MySqlConnection that implements DatabaseConnection interface
// and adds `executeQuery()` 


import { DatabaseConnection } from "./DatabaseConnection";

export abstract class MySqlConnection implements DatabaseConnection {
    abstract connect(): void 
    abstract disconnect(): void
    abstract execteUpdate(query:string): void;
    executeQuery(query:string): void{
        console.log(`Executing query: ${query}`);
    }
}
    