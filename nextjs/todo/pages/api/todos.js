import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('todo-app');
  const collection = db.collection('todos');

  switch (req.method) {
    case 'GET':
      const todos = await collection.find({}).toArray();
      res.json(todos);
      break;
    case 'POST':
      const newTodo = req.body;
      await collection.insertOne(newTodo);
      res.json(newTodo);
      break;
    case 'PUT':
      const { id, ...update } = req.body;
      await collection.updateOne({ _id: id }, { $set: update });
      res.json({ status: 'Task updated' });
      break;
    case 'DELETE':
      const { id: deleteId } = req.body;
      await collection.deleteOne({ _id: deleteId });
      res.json({ status: 'Task deleted' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
