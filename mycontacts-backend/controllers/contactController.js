//@desc get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, resp) => {
  resp.status(200).json({ message: "get all contacts" });
};

//@desc Create New contact
//@route POST /api/contacts
//@access public
const createContact = (req, resp) => {
  
  const {name,email,phone} = req.body;
  if(!name||!email||!phone){
    console.log("EVERY filed is mandatory !");
  }
  else{
    console.log("the BODY ",req.body);
  }
  resp.status(201).json({ message: "Create contacts" });
};

//@desc GET contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req, resp) => {
  resp.status(200).json({ message: `get contact for ${req.params.id}` });
};

//@desc PUT contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, resp) => {
  resp.status(200).json({ message: `Update contacts for ${req.params.id}` });
};

//@desc Delete contact
//@route delete /api/contacts/:id
//@access public
const deleteContact = (req, resp) => {
  resp.status(200).json({ message: `Delete contacts for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
