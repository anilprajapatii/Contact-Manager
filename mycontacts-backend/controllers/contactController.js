const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, resp) => {
  const contacts = await Contact.find();
  resp.status(200).json(contacts);
});

//@desc Create New contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, resp) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    resp.status(400);
    throw new Error("All Fileds Are Mandotry !");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  resp.status(201).json(contact);
});

//@desc GET contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, resp) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    resp.status(404);
    throw new Error("Contact not found !");
  }
  resp.status(200).json(contact);
});

//@desc PUT contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, resp) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    resp.status(404);
    throw new Error("Contact not found !");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id, 
    req.body, 
    {new: true}
    );
    resp.status(200).json(updatedContact);
});


//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, resp) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    resp.status(404);
    throw new Error("Contact not found !");
  }
  await Contact.deleteOne({ _id: req.params.id });
  resp.status(200).json({ message: "Contact deleted successfully",contact });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
