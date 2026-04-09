const request = require('supertest');
const app = require('../backend/index');

describe('Backend API Tests', () => {
  test('GET /tasks - returns a list of tasks', async () => {
    const response = await request(app).get('/tasks');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('title');
  });

  test('POST /tasks - creates a new task', async () => {
    const newTask = { title: 'New task for testing' };
    const response = await request(app)
      .post('/tasks')
      .send(newTask);
    
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe(newTask.title);
    expect(response.body.completed).toBe(false);

    // Verify it was actually added
    const getResponse = await request(app).get('/tasks');
    const task = getResponse.body.find(t => t.id === response.body.id);
    expect(task).toBeDefined();
    expect(task.title).toBe(newTask.title);
  });

  test('POST /tasks - returns 400 if title is missing', async () => {
    const response = await request(app)
      .post('/tasks')
      .send({});
    
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Title is required');
  });
});
