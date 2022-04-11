// first.test.js
const request = require("supertest")('https://deckofcardsapi.com/api/deck');



describe('Testing some cards', () => {
  let deck_id;
  it('should return a deck of cards', async () => {
    const response = await request.get('/new/draw/?count=2');
    // console.log(response.body);
    expect(response.statusCode).toBe(200);
    expect(response.body.cards).toHaveLength(2);
    deck_id = response.body.deck_id;
  });

  it('should return a single card', async () => {
    const response = await request.get(`/${deck_id}/draw/?count=1`);
    console.log(response.body);
    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject({ remaining: 48 });
  });


});