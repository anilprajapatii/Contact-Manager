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
  console.log("Request BODY is ", req, body);
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
  resp.status(200).json({ message: `get contact for ${req.params.id}` });
});

//@desc PUT contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, resp) => {
  resp.status(200).json({ message: `Update contacts for ${req.params.id}` });
});

//@desc Delete contact
//@route delete /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, resp) => {
  resp.status(200).json({ message: `Delete contacts for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
