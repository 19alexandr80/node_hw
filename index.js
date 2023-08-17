const cont = require("./contacts");

// const fun = async () => {
//   const data = await cont.listContacts();
//   console.log(data);
// };

// // fun();
// const getById = async () => {
//   const data = await cont.getContactById("C9sjBfCo4UJCWjzBnOtxl");
//   console.log(data);
// };
// // getById();
// const addContact = async (data) => {
//   const addCont = await cont.addContact(data);
//   console.log(addCont);
// };
// const newCon = {
//   name: "Vasja Vetrov",
//   email: "Vetrov@utquamvel.net",
//   phone: "(666) 777-5555",
// };
// // addContact(newCon);
// const deleteContact = async (id) => {
//   const deleteCont = await cont.removeContact(id);
//   console.log(deleteCont);
// };
// deleteContact("MBAs_8k2qkvf26lUpZ4ta");
// ============================================================================================

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const list = await cont.listContacts();
      console.log(list);
      // ...
      break;

    case "get":
      const userById = await cont.getContactById(id);
      console.log(userById);
      // ... id
      break;

    case "add":
      const addCont = await cont.addContact({ name, email, phone });
      console.log(addCont);
      // ... name email phone
      break;

    case "remove":
      const deleteCont = await cont.removeContact(id);
      console.log(deleteCont);
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
