const { test, expect } = require('@playwright/test');
const { PlaylistPage } = require('../../pages/PlaylistPage');

test('Verify total duration of the playlist in seconds', async ({ page }) => {
  const playlist = new PlaylistPage(page);
  await playlist.open();

  // Arrange
  await playlist.search('Summer');
  await playlist.addFirstTrack();

  await playlist.search('Autumn');
  await playlist.addFirstTrack();

  // Act
  const displayedDuration = await playlist.getDisplayedTotalDuration();

  // Assert
  expect(displayedDuration).toBeTruthy();

  const actualSeconds = parseInt(displayedDuration.replace(/[^\d]/g, ''), 10);
  expect(actualSeconds).toBe(395);
});