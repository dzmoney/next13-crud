migrate((db) => {
  const collection = new Collection({
    "id": "763306g8cky4ljw",
    "created": "2023-05-31 01:39:05.587Z",
    "updated": "2023-05-31 01:39:05.587Z",
    "name": "Crud",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rdmncgz8",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ld9wyb3h",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("763306g8cky4ljw");

  return dao.deleteCollection(collection);
})
