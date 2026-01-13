import { test, after, describe, beforeEach } from 'node:test';
import assert from 'node:assert';
import pool from '../db/pool';
import app from '../app';
import supertest from 'supertest';
import helper from './helper';

const api = supertest(app);
const baseUrl = '/api/tasks';

beforeEach(async () => {
  await helper.resetTasks();
  for (const task of helper.defaultTasks) {
    const { title, description, userid } = task;
    await helper.addTask(title, description, userid);
  }
});

void describe('GET Requests', () => {
  void test('/api/tasks returns list of tasks', async () => {
    const response = await api
      .get(baseUrl)
      .expect(200);

    assert.ok(Array.isArray(response.body));
    assert.strictEqual(response.type, 'application/json');
    assert.strictEqual(response.body.length, helper.defaultTasks.length);
  });
  
  void test('/api/tasks/:id returns single task', async () => {
    const response = await api
      .get(`${baseUrl}/1`)
      .expect(200);
      
    assert.strictEqual(response.type, 'application/json');
  });
});

void describe('POST Requests', () => {
  void test('/api/tasks', async () => {
    const newTask = {
      title: 'groceries',
      description: 'buy milk, eggs, and almonds',
      userid: 2,
    };

    const response = await api
      .post(baseUrl)
      .send(newTask)
      .expect(201);

    console.log(response.body);
    assert.strictEqual(1, 1);
  });
});

after(async () => {
  await pool.end();
});