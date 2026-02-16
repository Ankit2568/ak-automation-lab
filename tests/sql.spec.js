test('SQL error should return 500', async ({ request }) => {
  const response = await request.get('http://localhost:3000/api/sql-error');
  expect(response.status()).toBe(500); // will fail
});
