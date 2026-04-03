class PlaylistPage {
  constructor(page) {
    this.page = page;

    this.searchInput = page.getByRole('textbox', { name: 'Search' });
    this.trackList = page.locator('#tracklist > div > div');

    this.addTrackButtons = page.locator('#tracklist > div > div > button');
    this.yourPlaylistTracks = page.locator('#playlist > div > div');
    this.totalDuration = page.locator('#playlist-duration');
  }

  async open() {
    await this.page.goto('/');
  }

  async search(text) {
    await this.searchInput.fill(text);
  }

  async getTracksCount() {
    return await this.trackList.count();
  }

  async getTrackTitles() {
    const tracks = this.trackList;
    const titles = await tracks.allTextContents();
    return titles
      .map(title => title.trim())
      .filter(title => title.length > 0);
  }

  async addFirstTrack() {
    await this.addTrackButtons.first().click();
  }

  async getYourPlaylistTrackCount() {
    return await this.yourPlaylistTracks.count();
  }

  async getYourPlaylistTrackTitles() {
    const tracks = this.yourPlaylistTracks;
    const titles = await tracks.allTextContents();
    return titles
      .map(title => title.trim())
      .filter(title => title.length > 0);
  }

  async getDisplayedTotalDuration() {
    const text = await this.totalDuration.textContent();
    return text ? text.trim() : '';
  }
}

module.exports = { PlaylistPage };