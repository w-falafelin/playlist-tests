const { test, expect } = require('@playwright/test');
const { PlaylistPage } = require('../../pages/PlaylistPage');

test('Add track using "+" button', async ({ page }) => {
  const playlist = new PlaylistPage(page);
  await playlist.open();

  // Arrange
  await playlist.search('Summer');

  // Act
  await playlist.addFirstTrack();

  // Assert
  const playlistCount = await playlist.getYourPlaylistTrackCount();
  expect(playlistCount).toBeGreaterThan(0);

  const playlistTitles = await playlist.getYourPlaylistTrackTitles();
  expect(playlistTitles.length).toBeGreaterThan(0);
});