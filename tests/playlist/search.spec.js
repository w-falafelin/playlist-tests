const { test, expect } = require('@playwright/test');
const { PlaylistPage } = require('../../pages/PlaylistPage');

test('Search filters tracks correctly', async ({ page }) => {
  const playlist = new PlaylistPage(page);

  await playlist.open();

  // Arrange
  const searchTerm = 'Summer';
  await playlist.search(searchTerm);

  // Act
  const titles = await playlist.getTrackTitles();

  // Assert
  expect(titles.length).toBeGreaterThan(0);

  titles.forEach(title => {
    expect(title.toLowerCase()).toContain(searchTerm.toLowerCase());
  });
});