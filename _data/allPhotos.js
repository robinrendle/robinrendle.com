const photoNav = require('./photoNav.js');

module.exports = async function() {
  const folders = await photoNav();
  const allPhotos = [];

  folders.forEach(folder => {
    folder.photos.forEach(photo => {
      allPhotos.push({
        ...photo,
        folderSlug: folder.slug,
        folderName: folder.name
      });
    });
  });

  return allPhotos;
};
