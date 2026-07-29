// - Create a Concrete Class PlaywrightConnection that inherits MySqlConnection, implementing
// methods

import { MySqlConnection } from "./MySqlConnection";

class PlaywrightConnection extends MySqlConnection {
    connect(): void {
        console.log("Connected to MySQL database using Playwright.");
    }
    disconnect(): void {
        console.log("Disconnected from MySQL database.");
    }
    execteUpdate(query: string): void {
        console.log(`Executing update query: ${query}`);
    }

}

const playwrightConnection = new PlaywrightConnection();
playwrightConnection.connect();
playwrightConnection.disconnect();
playwrightConnection.execteUpdate("SELECT * FROM emp");
playwrightConnection.executeQuery("UPDATE emp SET salary = 50000");