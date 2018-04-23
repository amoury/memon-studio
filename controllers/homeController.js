

exports.homePage = (req, res) => {
  res.render('index', { title: 'Studio of Memon'});
}

exports.aboutPage = (req, res) => {
  res.render('about', { title: 'About Me' });
}