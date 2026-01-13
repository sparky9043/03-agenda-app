import { test, after, describe } from 'node:test';
import assert from 'node:assert';
import pool from '../db/pool';
import app from '../app';
import supertest from 'supertest';

const api = supertest(app);
const baseUrl = '/api/tasks';

// beforeEach()

void describe('GET Requests', () => {
  void test('/api/tasks returns list of tasks', async () => {
    const response = await api
      .get(baseUrl)
      .expect(200);

    console.log(response.body);
    
    assert.strictEqual(response.type, 'application/json');
    assert.strictEqual(1, 1);
  });
  
  void test('/api/tasks/:id returns single task', async () => {
    const response = await api
      .get(`${baseUrl}/1`)
      .expect(200);
      
      console.log(response.body);
    assert.strictEqual(response.type, 'application/json');
    assert.strictEqual(1, 1);
  });
});

after(async () => {
  await pool.end();
});