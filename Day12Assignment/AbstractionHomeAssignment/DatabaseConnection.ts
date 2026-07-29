// - Create an Interface DatabaseConnection with the following abstract methods:
// - connect()
// - disconnect()
// - executeUpdate 

export interface DatabaseConnection{
     connect(): void
     disconnect(): void
     execteUpdate(query:string):void
}