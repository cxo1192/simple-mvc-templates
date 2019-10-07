// There is no reason for the name here except as an
// example of how to set something for the POST
let name = 'unknown';

const hostIndex = (req, res) => {
  res.render('index',{
    title: `${name}'s Home`,
    pageName: 'Home Page',
    userName: name,
  });
};

const hostPage1 = (req, res) => {
  res.render('page1',{
    title: 'Page 1',
  });
};

const hostPage2 = (req, res) => {
  res.render('page2');
};

const getName = (req, res) => {
  res.json({name});
};

const setName = (req, res) => {
  if(!req.body.firstname || !req.body.lastname){
    res.status(400).json({error:'firstname and lastname are required'});
  }else{
    name = `${req.body.firstname} ${req.body.lastname}`;
    res.json({name});
  }
};

const notFound = (req, res) => {
  res.status(404).render('notFound',{
    page: req.url,
  });
};

module.exports = {
  index: hostIndex,
  page1: hostPage1,
  page2: hostPage2,
  getName,
  setName,
  notFound,
};
