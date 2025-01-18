export type Connection = {
  connectionString: string;
  Db: string;
  dbName: string;
};

export const connection: Connection = {
  connectionString: 'http://localhost:300',
  Db: 'pgsql',
  dbName: 'smit',
};
