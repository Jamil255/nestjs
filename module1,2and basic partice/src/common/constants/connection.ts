export const connection: Connection = {
  Connection_String: 'mongodb://localhost:27017',
  Database: 'pgsql',
  DbName: 'song',
};

export type Connection = {
  Connection_String: string;
  Database: string;
  DbName: string;
};
