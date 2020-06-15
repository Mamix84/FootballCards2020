export interface DatabaseService {
  readAll();

  read(id: string);

  create(object: any);

  update(id: string, object: any);

  delete(id: string);
}
